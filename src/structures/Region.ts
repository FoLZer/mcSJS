import { decompressXZ, Dimensions } from "./World";
import path from "path";
import fs from "fs";
import { promisify } from "util";
import zlib from "zlib";
import { NBT_Tag, parseTag } from "../NBT";
const gunzip = promisify(zlib.gunzip);
const zlib_unzip = promisify(zlib.unzip);

export class Region {
    private fd?: fs.promises.FileHandle;
    private in_use: number;
    private region_file_path: string;

    constructor(world_path: string, dimension: Dimensions, region_xz: string) {
        const [region_x,region_z] = decompressXZ(region_xz);
        switch(dimension) {
            case Dimensions.Overworld: {
                this.region_file_path = path.resolve(world_path,"region",`r${region_x}.${region_z}.mca`);
                break;
            }
            case Dimensions.Nether: {
                this.region_file_path = path.resolve(world_path,"DIM-1","region",`r${region_x}.${region_z}.mca`);
                break;
            }
            case Dimensions.The_End: {
                this.region_file_path = path.resolve(world_path,"DIM1","region",`r${region_x}.${region_z}.mca`);
                break;
            }
        }
        this.in_use = 0;
    }

    public static chunkCoordsToRegion(chunk_x: number, chunk_z: number) {
        const region_x = Math.floor(chunk_x / 32);
        const region_z = Math.floor(chunk_z / 32);
        return [region_x, region_z];
    }

    private chunkCoordsToRegLoc(chunk_x: number, chunk_z: number) {
        const offset = 4 * ((chunk_x % 32) + (chunk_z % 32) * 32);
        return offset;
    }

    private locOffsetToTimestampOffset(offset: number) {
        return offset + 4096;
    }

    private chunkCoordsToTimestampOffset(chunk_x: number, chunk_z: number) {
        return this.locOffsetToTimestampOffset(this.chunkCoordsToRegLoc(chunk_x,chunk_z));
    }

    public async readChunk(chunk_x: number, chunk_z: number) {
        return new Promise(async (resolve) => {
            this.in_use++;
            if(!this.fd) {
                this.fd = await fs.promises.open(this.region_file_path, 'r+');
            }
            const regLoc = this.chunkCoordsToRegLoc(chunk_x, chunk_z);
            const locBuf = (await this.fd.read(Buffer.allocUnsafe(4),0,4,regLoc)).buffer;
            const composed = locBuf.readInt32BE(0);
            const chunk_offset = (composed >> 8) & 0xFFF;
            const sector_count = composed & 0xF;
            if(chunk_offset == 0 && sector_count == 0) {
                resolve(null);
                return;
            }
            const chunk_sector_byte_offset = chunk_offset * 4096;
            const header_composed = (await this.fd.read(Buffer.allocUnsafe(5),0,5,chunk_sector_byte_offset)).buffer;
            const chunk_length = header_composed.readInt32BE(0);
            const compression = header_composed.readUInt8(4);
            const chunk_compressed = (await this.fd.read(Buffer.allocUnsafe(chunk_length),0,chunk_length,chunk_sector_byte_offset+5)).buffer;
            let chunk_raw;
            switch(compression) {
                case 0: {
                    chunk_raw = chunk_compressed;
                    break;
                }
                case 1: {
                    chunk_raw = await gunzip(chunk_compressed);
                    break;
                }
                case 2: {
                    chunk_raw = await zlib_unzip(chunk_compressed);
                    break;
                }
                default: {
                    throw new Error("Unknown compression used!");
                }
            }
            const chunk_nbt = parseTag(chunk_raw);
            console.log(chunk_nbt);
            resolve(chunk_nbt);
            this.in_use--;
            if(this.in_use <= 0) {
                this.fd.close();
            }
        }) as Promise<NBT_Tag | null>;
    }
}