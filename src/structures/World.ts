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
            return;
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
            chunk = new Chunk();
            for(const sections of (chunk_nbt.getTagByName("sections") as NBT_Tag_List).getArray() as NBT_Tag_Compound[]) {
                const y = (sections.getTagByName("Y") as NBT_Tag_Byte).get();
                const block_states = (sections.getTagByName("block_states") as NBT_Tag_Compound);
                const palette = (block_states.getTagByName("palette") as NBT_Tag_List).getArray() as NBT_Tag_Compound[];
                let data;
                if(palette.length > 1) {
                    data = (block_states.getTagByName("data") as NBT_Tag_Long_Array).get();
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
                                const block_obj = {name: (block_nbt.getTagByName("Name") as NBT_Tag_String).get(),properties: (block_nbt.getTagByName("Properties") as NBT_Tag_Compound)};
                                const block = new Block(block_obj.name);
                                chunk.setBlock(block_x,block_y,block_z, block);
                            }
                        }
                    }
                }
            }
            this.chunks[compressed_xz] = chunk;
            return chunk;
        }
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