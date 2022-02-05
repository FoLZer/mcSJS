import { NBT_Tag_Compound, NBT_Tag_Long_Array } from "../NBT";
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
        const buf = Buffer.alloc(2)
        let num_non_air = 0;
        for(const block of this.blocks) {
            if(block.getNumId() != 0) {
                num_non_air++;
            }
        } //TODO: change to better counter

    }
}