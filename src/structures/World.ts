import { Chunk } from "./Chunk";

export enum Dimensions {
    Overworld = "minecraft:overworld",
    Nether = "minecraft:the_nether",
    The_End = "minecraft:the_end"
}

export function compressXZ(x: number, z: number) {
    x = x & 4294967295; //int32
    z = z & 4294967295;
    return x+":"+z;
}

export function decompressXZ(xz: string) {
    const arr = xz.split(":");
    if(arr.length != 2) {
        throw new Error("XZ is in incorrect encoding!");
    }
    return arr.map((v) => Number(v));
}

class World {
    private chunks: {[chunk_xz: string]: Chunk};

    constructor() {
        this.chunks = {};
    }

    public isChunkLoaded(chunk_x: number, chunk_z: number) {
        const chunk_xz = compressXZ(chunk_x, chunk_z);
        return !!this.chunks[chunk_xz];
    }

    public getChunkAt(chunk_x: number, chunk_z: number) {
        const chunk_xz = compressXZ(chunk_x, chunk_z);
        return this.chunks[chunk_xz];
    }
}