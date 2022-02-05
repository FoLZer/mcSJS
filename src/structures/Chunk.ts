import BufferAccess from "../buffer/BufferAccess";
import { NBT_Tag_Compound, NBT_Tag_Long_Array } from "../NBT";
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
            for(let i1 = 0;i1<0xFFF;i1++) {
                const block = this.blocks[((i > 0 ? 0 : 1) << 16) | (((i > 0 ? 1 : -1)*i) << 12) | i1];
                data.push(block.getNumId());
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
}