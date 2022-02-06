import { Chunk } from "./Chunk";
import { Region } from "./Region";
import path from "path";
import { Dimensions } from "../Enums";
import { NBT_Tag_Byte, NBT_Tag_Compound, NBT_Tag_List, NBT_Tag_Long_Array, NBT_Tag_String } from "../NBT";
import { compressXYZ, compressXZ } from "../Util";
import { Block } from "./Block";

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
        this.regions[region_xz] = new Region(path.resolve('.',this.world_name),this.dim,region_xz);
    }

    private loadRegion(region_x: number, region_z: number) {
        const compresed_region_xz = compressXZ(region_x,region_z);
        return this.loadRegion_xz(compresed_region_xz);
    }

    public async loadChunk(chunk_x: number, chunk_z: number) {
        const compressed_xz = compressXZ(chunk_x,chunk_z);
        if(this.chunks[compressed_xz]) {
            return this.chunks[compressed_xz];
        }
        const region_coords = Region.chunkCoordsToRegion(chunk_x,chunk_z);
        const compresed_region_xz = compressXZ(region_coords[0], region_coords[1]);
        if(!this.regions[compresed_region_xz]) {
            this.loadRegion_xz(compresed_region_xz);
        }
        const region = this.regions[compresed_region_xz];
        const chunk_nbt = await region.readChunk(chunk_x,chunk_z);
        let chunk;
        if(chunk_nbt) {
            chunk = Chunk.fromNBT(chunk_nbt);
        } else {
            chunk = this.generateChunk(chunk_x, chunk_z);
        }
        this.chunks[compressed_xz] = chunk;
        return chunk;
    }

    private isChunkLoadedXZ(chunk_xz: string) {
        return !!this.chunks[chunk_xz];
    }

    public isChunkLoaded(chunk_x: number, chunk_z: number) {
        const chunk_xz = compressXZ(chunk_x, chunk_z);
        return this.isChunkLoadedXZ(chunk_xz);
    }

    public async getChunkAt(chunk_x: number, chunk_z: number) {
        const chunk_xz = compressXZ(chunk_x, chunk_z);
        if(!this.isChunkLoadedXZ(chunk_xz)) {
            return this.loadChunk(chunk_x,chunk_z);
        }
        return this.chunks[chunk_xz];
    }
}