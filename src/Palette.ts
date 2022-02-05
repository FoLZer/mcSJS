import BufferAccess from "./buffer/BufferAccess";

export class SingleValuedPalette {
    data: number;

    constructor(data: number) {
        this.data = data;
    }

    public Serealize() {
        const buf = Buffer.alloc(1+BufferAccess.getVarIntLength(this.data));
        const bufAcc = new BufferAccess(buf);
        bufAcc.writeUint8(0);
        bufAcc.writeVarInt(this.data);
        bufAcc.writeVarInt(0);
        return buf;
    }
}

export class IndirectPalette {
    data: bigint[];
    palette: number[];

    constructor(data: bigint[], palette: number[]) {
        this.data = data;
        this.palette = palette;
    }

    static fromData(data: number[]) {
        const palette_mapping = [];
        const palette = [];
        const data_1 = [];
        let i = 0;
        for(const id of data) {
            if(!palette_mapping[id]) {
                palette_mapping[id] = i;
                palette[i] = id;
                i++;
            }
            data_1.push(palette_mapping[id]);
        }
        const data_compressed = [];
        const bits_per_id = Math.ceil(Math.log2(palette.length));
        const v_mask = (1 << bits_per_id) - 1;
        let long = 0n;
        let shift = 0;
        for(const id of data_1) {
            const available_bits = 64 - shift;
            if(available_bits < bits_per_id) {
                const mask = (1 << available_bits) - 1;
                long = (long << BigInt(shift)) | BigInt((id >> (bits_per_id - available_bits)) & mask);
                data_compressed.push(long);
                long = 0n;
                shift = bits_per_id-available_bits;
                const mask_1 = (1 << shift) - 1;
                long = long | BigInt(id & mask_1);
            } else {
                long = (long << BigInt(shift)) | BigInt(id & v_mask);
                shift += bits_per_id;
            }
        }
        //pad last long
        long = long << BigInt(64 - shift);
        data_compressed.push(long);
        return new IndirectPalette(data_compressed, palette);
    }

    public Serealize() {
        let size = 1;
        size += BufferAccess.getVarIntLength(this.palette.length);
        for(const n of this.palette) {
            size += BufferAccess.getVarIntLength(n);
        }
        size += BufferAccess.getVarIntLength(this.data.length);
        size += 8 * this.data.length;
        const buf = Buffer.alloc(size);
        const bufAcc = new BufferAccess(buf);
        bufAcc.writeUint8(Math.ceil(Math.log2(this.palette.length)));
        bufAcc.writeVarInt(this.palette.length);
        for(const n of this.palette) {
            bufAcc.writeVarInt(n);
        }
        bufAcc.writeVarInt(this.data.length);
        for(const n of this.data) {
            bufAcc.writeInt64(n);
        }
        return buf;
    }
}