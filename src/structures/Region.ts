import { decompressXZ, Dimensions } from "./World";
import path from "path";
import fs from "fs";

export class Region {
    region_file_path: string;

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
    }

    public static chunkCoordsToRegion(chunk_x: number, chunk_z: number) {
        const region_x = Math.floor(chunk_x / 32);
        const region_z = Math.floor(chunk_z / 32);
        return [region_x, region_z];
    }

    private chunkCoordsToRegLoc(chunk_x: number, chunk_z: number) {
        const offset = 4 * ((chunk_x & 31) + (chunk_z & 31) * 32);
        return offset;
    }

    private locOffsetToTimestampOffset(offset: number) {
        return offset + 4096;
    }

    private chunkCoordsToTimestampOffset(chunk_x: number, chunk_z: number) {
        return this.locOffsetToTimestampOffset(this.chunkCoordsToRegLoc(chunk_x,chunk_z));
    }

    private async readChunk(chunk_x: number, chunk_z: number) {
        const fd = await fs.promises.open(this.region_file_path, 'r');
        const regLoc = this.chunkCoordsToRegLoc(chunk_x, chunk_z);
        const locBuf = (await fd.read(Buffer.allocUnsafe(5),1,4,regLoc)).buffer;
        locBuf[0] = 0x00;
        const chunk_offset = locBuf.readInt32BE(0);
        const sector_count = locBuf.readInt8(4);
    }
}