import { Chunk } from "./Chunk";

function compressXZ(chunk_x: number, chunk_z: number) {
    chunk_x = chunk_x & 4294967295; //int32
    chunk_z = chunk_z & 4294967295;
    return chunk_x+":"+chunk_z;
}

function decompressXZ(chunk_xz: string) {
    const arr = chunk_xz.split(":");
    if(arr.length < 2) {
        throw new Error("chunk_XZ is in incorrect encoding!");
    }
    arr.length = 2;
    return arr;
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