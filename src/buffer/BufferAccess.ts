export default class BufferAccess {
    private _buf;
    private _pos;

    constructor(buf: Buffer, from?: number) {
        this._buf = buf;
        this._pos = from || 0;
    }

    public readUint8() {
        const data = this._buf.readUInt8(this._pos);
        this._pos += 1;
        return data;
    }

    public writeUint8(data: number) {
        this._buf.writeUInt8(data, this._pos);
        this._pos += 1;
    }

    public readInt8() {
        const data = this._buf.readInt8(this._pos);
        this._pos += 1;
        return data;
    }

    public writeInt8(data: number) {
        this._buf.writeInt8(data, this._pos);
        this._pos += 1;
    }

    public readUint16() {
        const data = this._buf.readUInt16LE(this._pos);
        this._pos += 2;
        return data;
    }

    public writeUint16(data: number) {
        this._buf.writeUInt16LE(data, this._pos);
        this._pos += 2;
    }

    public readInt16() {
        const data = this._buf.readInt16LE(this._pos);
        this._pos += 2;
        return data;
    }

    public writeInt16(data: number) {
        this._buf.writeInt16LE(data, this._pos);
        this._pos += 2;
    }

    public readUint32() {
        const data = this._buf.readUInt32LE(this._pos);
        this._pos += 4;
        return data;
    }

    public writeUint32(data: number) {
        this._buf.writeUInt32LE(data, this._pos);
        this._pos += 4;
    }

    public readInt32() {
        const data = this._buf.readInt32LE(this._pos);
        this._pos += 4;
        return data;
    }

    public writeInt32(data: number) {
        this._buf.writeInt32LE(data, this._pos);
        this._pos += 4;
    }

    public readUint64() {
        const data = this._buf.readBigUInt64LE(this._pos);
        this._pos += 8;
        return data;
    }

    public readInt64() {
        const data = this._buf.readBigInt64LE(this._pos);
        this._pos += 8;
        return data;
    }

    public writeInt64(data: bigint) {
        this._buf.writeBigInt64LE(data, this._pos);
        this._pos += 8;
    }

    public readString() {
        const length = this.readVarInt();
        let value = "";
        const bytes = this.readBytes(length);
        for(const byte of bytes) {
            value += String.fromCharCode(byte);
        }
        return value;
    }
    
    public writeString(data: string) {
        this.writeVarInt(Buffer.byteLength(data));
        this.writeBuf(Buffer.from(data, "utf-8"));
    }

    public readFloat() {
        const data = this._buf.readFloatLE(this._pos);
        this._pos += 4;
        return data;
    }

    public readDouble() {
        const data = this._buf.readDoubleLE(this._pos);
        this._pos += 8;
        return data;
    }

    public readBoolean() {
        return !!this.readUint8();
    }

    public writeBoolean(data: boolean) {
        this.writeUint8(Number(data));
    }

    public readBytes(length: number) {
        let arr = [];
        for(let i=0;i<length;i++) {
            arr[i] = this.readUint8();
        }
        return arr;
    }

    public writeBytes(arr: number[]) {
        for(let i=0;i<arr.length;i++) {
            this.writeUint8(arr[i]);
        }
    }

    public readInt32Array() {
        const length = this.readInt16();
        const arr = [];
        for(let i=0;i<length;i++) {
            arr[i] = this.readInt32();
        }
        return arr;
    }

    public writeInt32Array(arr: number[]) {
        this.writeInt16(arr.length);
        for(let i=0;i<length;i++) {
            this.writeInt32(arr[i]);
        }
    }

    public readInt32DoublePair() {
        const length = this.readInt32();
        const map = new Map<number, number>();
        for(let i=0;i<length;i++) {
            this.readUint8();
            const key = this.readInt32();
            this.readUint8();
            const value = this.readInt32();
            map.set(key, value);
        }
        return map;
    }

    public readDateTime() {
        const ticks = this.readUint64();
        let date = new Date(Number((ticks - 621355968000000000n) / 10000n));
        return date;
    }

    public writeBuf(buf: Buffer) {
        buf.copy(this._buf, this._pos);
        this._pos += buf.byteLength;
    }

    public getPos() {
        return this._pos;
    }

    public resetPos() {
        this._pos = 0;
    }

    public getBuf() {
        return this._buf;
    }

    public readVarInt() {
        let value = 0;
        let length = 0;
        let currentByte;

        while(true) {
            currentByte = this.readUint8();
            value |= (currentByte & 0x7F) << (length * 7);

            length += 1;
            if(length > 5) {
                throw new Error("VarInt is too big");
            }

            if((currentByte & 0x80) != 0x80) {
                break;
            }
        }
        return value;
    }

    public readVarLong() {
        let value = 0n;
        let length = 0;
        let currentByte;

        while(true) {
            currentByte = this.readUint8();
            value |= BigInt(currentByte & 0x7F) << BigInt(length * 7);

            length += 1;
            if(length > 10) {
                throw new Error("VarInt is too big");
            }

            if((currentByte & 0x80) != 0x80) {
                break;
            }
        }
        return value;
    }

    public writeVarInt(value: number) {
        while(true) {
            if((value & ~0x7F) == 0) {
                this.writeUint8(value);
                return;
            }

            this.writeUint8((value & 0x7F) | 0x80);
            value >>>= 7;
        }
    }

    public writeVarLong(value: number) {
        while(true) {
            if((value & ~0x7F) == 0) {
                this.writeUint8(Number(value));
                return;
            }

            this.writeUint8((value & 0x7F) | 0x80);
            value >>>= 7;
        }
    }

    public static getVarIntLength(value: number) {
        let length = 0;
        while(true) {
            if((value & ~0x7F) == 0) {
                length++;
                return length;
            }
            length++;
            value >>>= 7;
        }
    }

    public readBuf(length: number) {
        const buf = this._buf.slice(this._pos, this._pos+length);
        this._pos += length;
        return buf;
    }
}