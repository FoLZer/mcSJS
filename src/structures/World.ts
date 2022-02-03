import { Chunk } from "./Chunk";
import { Region } from "./Region";
import path from "path";
import { Dimensions } from "../Enums";

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

export class World {
    private world_name: string;
    private dim: Dimensions;
    private chunks: {[chunk_xz: string]: Chunk};
    private regions: {[region_xz: string]: Region};

    constructor(world_name: string, dim: Dimensions) {
        this.world_name = world_name;
        this.dim = dim;
        this.chunks = {};
        this.regions = {};
    }

    private generateChunk(chunk_x: number, chunk_z: number) {
        return new Chunk();
    }

    private loadRegion_xz(region_xz: string) {
        if(this.regions[region_xz]) {
            return;
        }
        this.regions[region_xz] = new Region(path.resolve("..",this.world_name),this.dim,region_xz);
    }

    private loadRegion(region_x: number, region_z: number) {
        const compresed_region_xz = compressXZ(region_x,region_z);
        return this.loadRegion_xz(compresed_region_xz);
    }

    private async loadChunk(chunk_x: number, chunk_z: number) {
        const compressed_xz = compressXZ(chunk_x,chunk_z);
        if(this.chunks[compressed_xz]) {
            return;
        }
        const region_coords = Region.chunkCoordsToRegion(chunk_x,chunk_z);
        const compresed_region_xz = compressXZ(region_coords[0], region_coords[1]);
        if(!this.regions[compresed_region_xz]) {
            this.loadRegion_xz(compresed_region_xz);
        }
        const region = this.regions[compresed_region_xz];
        const chunk = await region.readChunk(chunk_x,chunk_z);
        if(!chunk) {
            this.chunks[compressed_xz] = this.generateChunk(chunk_x, chunk_z);
        }
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