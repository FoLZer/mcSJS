import BufferAccess from "../buffer/BufferAccess";
import { NBT_Tag_Byte, NBT_Tag_Compound, NBT_Tag_List, NBT_Tag_Long_Array, NBT_Tag_String } from "../NBT";
import { IndirectPalette, SingleValuedPalette } from "../Palette";
import { compressXYZ } from "../Util";
import { Block } from "./Block";

export class Chunk {
    heightmap: NBT_Tag_Compound;
    blocks: Block[];
    
    constructor() {
        const superflat_h = new Array(36).fill(BigInt("0100804020100804"));
        superflat_h.push(BigInt("0000000020100804"));
        this.heightmap = new NBT_Tag_Compound("",[
            new NBT_Tag_Long_Array("MOTION_BLOCKING", superflat_h),
            new NBT_Tag_Long_Array("WORLD_SURFACE", superflat_h)
        ]);
        this.blocks = [];
    }

    setBlock(x: number, y: number, z: number, block: Block) {
        this.blocks[compressXYZ(x,y,z)] = block;
    }

    getHeightmap() {
        return this.heightmap;
    }

    getChunkData() {
        const section_bufs = [];
        for(let i = -64; i < 256; i += 16) {
            const data = [];
            for(let y=0;y<16;y++) {
                for(let z=0;z<16;z++) {
                    for(let x=0;x<16;x++) {
                        const block = this.blocks[compressXYZ(x,i+y,z)];
                        if(!block) {
                            data.push(1);
                        } else {
                            data.push(block.getNumId());
                        }
                    }
                }
            }
            const block_states = IndirectPalette.fromData(data);
            //const section_index = i / 16;
            const block_states_buf = block_states.Serealize();
            const biomes_buf = new SingleValuedPalette(0).Serealize();
            const buf = Buffer.alloc(2+block_states_buf.byteLength+biomes_buf.byteLength);
            const bufAcc = new BufferAccess(buf);
            bufAcc.writeInt16(10);
            bufAcc.writeBuf(block_states_buf);
            bufAcc.writeBuf(biomes_buf);
            section_bufs.push(buf);
        }
        let size = 0;
        for(const buf of section_bufs) {
            size += buf.byteLength;
        }
        const buf = Buffer.allocUnsafe(size);
        const bufAcc = new BufferAccess(buf);
        for(const buf1 of section_bufs) {
            bufAcc.writeBuf(buf1);
        }
        return buf;
    }

    static fromNBT(chunk_nbt: NBT_Tag_Compound) {
        const chunk = new Chunk();
        for(const sections of (chunk_nbt.getTagByName("sections") as NBT_Tag_List).get() as NBT_Tag_Compound[]) {
            const y = (sections.getTagByName("Y") as NBT_Tag_Byte).get();
            const block_states = (sections.getTagByName("block_states") as NBT_Tag_Compound);
            const palette = (block_states.getTagByName("palette") as NBT_Tag_List).get() as NBT_Tag_Compound[];
            if(palette.length > 1) {
                const data = (block_states.getTagByName("data") as NBT_Tag_Long_Array).get();
                const bits_per_id = Math.ceil(Math.log2(palette.length));
                for(let rel_y = 0; rel_y < 16; rel_y++) {
                    for(let block_z = 0; block_z < 16; block_z++) {
                        for(let block_x = 0; block_x < 16; block_x++) {
                            const i = rel_y << 8 | block_z << 4 | block_x;
                            const long_s = Math.floor((i*bits_per_id) / 64);
                            let shift = (i*bits_per_id) % 64;
                            let palette_id_raw = data[long_s] >> BigInt(shift);
                            if(shift + bits_per_id > 64) {
                                const left_to_read = bits_per_id - (64 - shift);
                                palette_id_raw <<= BigInt(left_to_read);
                                palette_id_raw |= data[long_s+1] >> BigInt(64 - left_to_read);
                            }
                            const conf_bits = BigInt((1 << (bits_per_id)) - 1);
                            const palette_id = Number(palette_id_raw & conf_bits);
                            const block_nbt = palette[palette_id];
                            const block_y = y * 16 + rel_y;
                            if(!block_nbt) {
                                continue;
                            }
                            const name = block_nbt.getTagByName("Name") as NBT_Tag_String;
                            const properties = block_nbt.getTagByName("Properties") as NBT_Tag_Compound;
                            const block_obj = {name: name.get(),properties: properties ? properties.get() : null};
                            const block = new Block(block_obj.name, block_obj.properties);
                            chunk.setBlock(block_x,block_y,block_z, block);
                        }
                    }
                }
            }
        }
        return chunk;
    }
}