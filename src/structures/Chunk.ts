import BufferAccess from "../buffer/BufferAccess";
import { NBT_Tag_Compound, NBT_Tag_Long_Array } from "../NBT";
import { IndirectPalette } from "../Palette";
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
        const buf = Buffer.alloc(2);
        const bufAcc = new BufferAccess(buf);
        for(let i = -64; i < 256; i += 16) {
            let cur_id = 0;
            const palette_mapping = [];
            const uncompressed_data = [];
            for(let i1 = 0;i1<0xFFF;i1++) {
                const block = this.blocks[((i > 0 ? 0 : 1) << 16) | (((i > 0 ? 1 : -1)*i) << 12) | i1];
                if(palette_mapping[block.getNumId()]) {
                    uncompressed_data[i1] = palette_mapping[block.getNumId()];
                } else {
                    palette_mapping[block.getNumId()] = cur_id;
                    uncompressed_data[i1] = cur_id;
                    cur_id++;
                }
            }
            const palette = [];
            for(const id in palette_mapping) {
                palette[palette.length] = id;
            }
            const data = [];
            const block_states = new IndirectPalette([],[]);
            const section_index = i / 16;
            bufAcc.writeInt16(10);
            
        }
        return buf;
    }
}