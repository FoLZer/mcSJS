import { NBT_Tag_Compound, NBT_Tag_Long_Array } from "../NBT";
import { Block } from "./Block";

function compressXYZ(x: number,y: number,z: number) {
    y = y & 0b11111111;
    x = x & 0b1111;
    z = z & 0b1111;
    return y << 8 | z << 4 | x;
}

function decompressXYZ(xyz: number) {
    const x = xyz & 0b1111;
    const z = (xyz >> 4) & 0b1111
    const y = (xyz >> 8) & 0b11111111;
    return [x,y,z];
}

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