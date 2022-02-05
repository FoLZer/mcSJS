import { NBT_Tag_type } from "./Enums";

export class NBT_Tag {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public toBuffer() {
        return Buffer.alloc(0);
    }

    public getByteSize() {
        return 0;
    }
}

export class NBT_Tag_Byte extends NBT_Tag {
    private payload: number;
    constructor(name: string, payload: number) {
        super(name);
        this.payload = payload;
    }

    public get() {
        return this.payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(1, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeInt8(this.payload, 1+2+Buffer.byteLength(this.getName()));
        return buf;
    }

    public getByteSize(): number {
        return 1;
    }
}

export class NBT_Tag_Short extends NBT_Tag {
    private payload: number;
    constructor(name: string, payload: number) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(2, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeInt16BE(this.payload, 1+2+Buffer.byteLength(this.getName()));
        return buf;
    }

    public getByteSize(): number {
        return 2;
    }
}

export class NBT_Tag_Int extends NBT_Tag {
    private payload: number;
    constructor(name: string, payload: number) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(3, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeInt32BE(this.payload, 1+2+Buffer.byteLength(this.getName()));
        return buf;
    }

    public getByteSize(): number {
        return 4;
    }
}

export class NBT_Tag_Long extends NBT_Tag {
    private payload: bigint;
    constructor(name: string, payload: bigint) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(4, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeBigInt64BE(this.payload, 1+2+Buffer.byteLength(this.getName()));
        return buf;
    }

    public getByteSize(): number {
        return 8;
    }
}

export class NBT_Tag_Float extends NBT_Tag {
    private payload: number;
    constructor(name: string, payload: number) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(5, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeFloatBE(this.payload, 1+2+Buffer.byteLength(this.getName()));
        return buf;
    }

    public getByteSize(): number {
        return 4;
    }
}

export class NBT_Tag_Double extends NBT_Tag {
    private payload: number;
    constructor(name: string, payload: number) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(6, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeDoubleBE(this.payload, 1+2+Buffer.byteLength(this.getName()));
        return buf;
    }

    public getByteSize(): number {
        return 8;
    }
}

export class NBT_Tag_Byte_Array extends NBT_Tag {
    private payload: number[];
    constructor(name: string, payload: number[]) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(7, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeInt32BE(this.payload.length, 1+2+Buffer.byteLength(this.getName()));
        Buffer.from(this.payload).copy(buf, 1+2+Buffer.byteLength(this.getName())+4);
        return buf;
    }

    public getByteSize(): number {
        return 4+this.payload.length;
    }
}

export class NBT_Tag_String extends NBT_Tag {
    private payload: string;
    constructor(name: string, payload: string) {
        super(name);
        this.payload = payload;
    }

    public get() {
        return this.payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(8, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeUInt16BE(Buffer.byteLength(this.payload), 1+2+Buffer.byteLength(this.getName()));
        Buffer.from(this.payload).copy(buf, 1+2+Buffer.byteLength(this.getName())+2);
        return buf;
    }

    public getByteSize(): number {
        return 2+Buffer.byteLength(this.payload);
    }
}

export class NBT_Tag_List extends NBT_Tag {
    private type_id: NBT_Tag_type;
    private payload: NBT_Tag[];
    constructor(name: string, type_id: NBT_Tag_type, payload: NBT_Tag[]) {
        super(name);
        this.payload = payload;
        this.type_id = type_id;
    }

    public get(i: number) {
        return this.payload[i];
    }

    public getArray() {
        return this.payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(9, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeUInt8(this.type_id, 1+2+Buffer.byteLength(this.getName()));
        buf.writeInt32BE(this.payload.length, 1+2+Buffer.byteLength(this.getName())+1);
        let s = 0;
        for(const tag of this.payload) {
            const b = tag.toBuffer();
            const n_l = b.readInt16BE(1);
            b.copy(buf, 1+2+Buffer.byteLength(this.getName())+1+4+s, 1+2+n_l);
            s += tag.getByteSize();
        }
        return buf;
    }

    public getByteSize(): number {
        let payload_size = 0;
        for(const tag of this.payload) {
            payload_size += tag.getByteSize();
        }
        return 1+4+payload_size;
    }
}

export class NBT_Tag_Compound extends NBT_Tag {
    private payload: {[tag_name: string]: NBT_Tag};
    constructor(name: string, payload: NBT_Tag[]) {
        super(name);
        this.payload = {};
        for(const tag of payload) {
            this.payload[tag.getName()] = tag;
        }
    }

    getTagByName(name: string) {
        return this.payload[name];
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(10, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        let s = 0;
        for(const tag of Object.values(this.payload)) {
            const b = tag.toBuffer();
            const n_l = b.readInt16BE(1);
            b.copy(buf, 1+2+Buffer.byteLength(this.getName())+s);
            s += 1+2+n_l+tag.getByteSize();
        }
        buf.writeUInt8(NBT_Tag_type.TAG_End, 1+2+Buffer.byteLength(this.getName())+s);
        return buf;
    }

    public getByteSize(): number {
        let payload_size = 0;
        for(const tag of Object.values(this.payload)) {
            payload_size += 1+2+Buffer.byteLength(tag.getName())+tag.getByteSize();
        }
        return payload_size+1;
    }
}

export class NBT_Tag_Int_Array extends NBT_Tag {
    private payload: number[];
    constructor(name: string, payload: number[]) {
        super(name);
        this.payload = payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(11, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeInt32BE(this.payload.length, 1+2+Buffer.byteLength(this.getName()));
        for(let i=0;i<this.payload.length;i++) {
            buf.writeInt32BE(this.payload[i], 1+2+Buffer.byteLength(this.getName())+4+i*4);
        }
        return buf;
    }

    public getByteSize(): number {
        return 4+this.payload.length*4;
    }
}

export class NBT_Tag_Long_Array extends NBT_Tag {
    private payload: bigint[];
    constructor(name: string, payload: bigint[]) {
        super(name);
        this.payload = payload;
    }

    public get() {
        return this.payload;
    }

    public toBuffer(): Buffer {
        const buf = Buffer.alloc(1+2+Buffer.byteLength(this.getName())+this.getByteSize());
        buf.writeUInt8(12, 0);
        buf.writeInt16BE(Buffer.byteLength(this.getName()), 1);
        Buffer.from(this.getName()).copy(buf, 3);
        buf.writeInt32BE(this.payload.length, 1+2+Buffer.byteLength(this.getName()));
        for(let i=0;i<this.payload.length;i++) {
            buf.writeBigInt64BE(this.payload[i], 1+2+Buffer.byteLength(this.getName())+4+i*8);
        }
        return buf;
    }

    public getByteSize(): number {
        return 4+this.payload.length*8;
    }
}

function getPayloadSize(data: Buffer) {
    const id = data.readUInt8(0);
    const name_length = data.readUInt16BE(1);
    switch(id) {
        case NBT_Tag_type.TAG_Byte: {
            return 1;
        }
        case NBT_Tag_type.TAG_Short: {
            return 2;
        }
        case NBT_Tag_type.TAG_Int: {
            return 4;
        }
        case NBT_Tag_type.TAG_Long: {
            return 8;
        }
        case NBT_Tag_type.TAG_Float: {
            return 4;
        }
        case NBT_Tag_type.TAG_Double: {
            return 8;
        }
        case NBT_Tag_type.TAG_Byte_Array: {
            const array_size = data.readInt32BE(1+2+name_length);
            return 4+array_size;
        }
        case NBT_Tag_type.TAG_String: {
            const string_length = data.readUInt16BE(1+2+name_length);
            return 2+string_length;
        }
        case NBT_Tag_type.TAG_List: {
            const type_id = data.readUInt8(1+2+name_length);
            const list_size = data.readInt32BE(1+2+name_length+1);
            if(type_id == NBT_Tag_type.TAG_End) {
                return 5;
            }
            let result = 0;
            for(let i=0;i<list_size;i++) {
                const b = Buffer.alloc(1+2+(data.byteLength-1-2-name_length-1-4-result));
                b.writeUInt8(type_id);
                b.writeInt16BE(0, 1);
                data.copy(b, 3, 1+2+name_length+1+4+result);
                result += getPayloadSize(b);
            }
            return 5+result;
        }
        case NBT_Tag_type.TAG_Compound: {
            let r = 0;
            while(true) {
                const tag_id = data.readUInt8(1+2+name_length+r);
                if(tag_id == NBT_Tag_type.TAG_End) {
                    return r+1;
                }
                const name_length_1 = data.readUInt16BE(1+2+name_length+1+r);
                r += getPayloadSize(data.slice(1+2+name_length+r))+1+2+name_length_1;
            }
        }
        case NBT_Tag_type.TAG_Int_Array: {
            const array_size = data.readInt32BE(1+2+name_length);
            return 4+array_size*4;
        }
        case NBT_Tag_type.TAG_Long_Array: {
            const array_size = data.readInt32BE(1+2+name_length);
            return 4+array_size*8;
        }
        default: {
            throw new Error("Unknown nbt id!");
        }
    }
}

export function parseTag(data: Buffer): NBT_Tag {
    const id = data.readUInt8(0);
    const name_length = data.readUInt16BE(1);
    let name = "";
    for(let i = 0; i < name_length; i++) {
        name += String.fromCharCode(data.readUInt8(3+i));
    }
    switch(id) {
        case NBT_Tag_type.TAG_Byte: {
            const payload = data.readInt8(1+2+name_length);
            return new NBT_Tag_Byte(name, payload);
        }
        case NBT_Tag_type.TAG_Short: {
            const payload = data.readInt16BE(1+2+name_length);
            return new NBT_Tag_Short(name, payload);
        }
        case NBT_Tag_type.TAG_Int: {
            const payload = data.readInt32BE(1+2+name_length);
            return new NBT_Tag_Int(name, payload);
        }
        case NBT_Tag_type.TAG_Long: {
            const payload = data.readBigInt64BE(1+2+name_length);
            return new NBT_Tag_Long(name, payload);
        }
        case NBT_Tag_type.TAG_Float: {
            const payload = data.readFloatBE(1+2+name_length);
            return new NBT_Tag_Float(name, payload);
        }
        case NBT_Tag_type.TAG_Double: {
            const payload = data.readDoubleBE(1+2+name_length);
            return new NBT_Tag_Double(name, payload);
        }
        case NBT_Tag_type.TAG_Byte_Array: {
            const array_size = data.readInt32BE(1+2+name_length);
            const array = [];
            for(let i=0;i<array_size;i++) {
                array.push(data.readUInt8(1+2+name_length+4+i));
            }
            return new NBT_Tag_Byte_Array(name, array);
        }
        case NBT_Tag_type.TAG_String: {
            const string_length = data.readUInt16BE(1+2+name_length);
            const string = data.slice(1+2+name_length+2, 1+2+name_length+2+string_length).toString("utf-8");
            return new NBT_Tag_String(name, string);
        }
        case NBT_Tag_type.TAG_List: {
            const type_id = data.readUInt8(1+2+name_length);
            const list_size = data.readInt32BE(1+2+name_length+1);
            const payload: NBT_Tag[] = [];
            if(type_id == NBT_Tag_type.TAG_End) {
                return new NBT_Tag_List(name, type_id, payload);
            }
            let s = 0;
            for(let i=0;i<list_size;i++) {
                const b = Buffer.alloc(1+2+(data.byteLength-1-2-name_length-1-4-s));
                b.writeUInt8(type_id);
                b.writeInt16BE(0, 1);
                data.copy(b, 3, 1+2+name_length+1+4+s);
                payload.push(parseTag(b));
                s += getPayloadSize(b);
            }
            return new NBT_Tag_List(name, type_id, payload);
        }
        case NBT_Tag_type.TAG_Compound: {
            const payload = [];
            let r = 0;
            while(true) {
                const tag_id = data.readUInt8(1+2+name_length+r);
                if(tag_id == NBT_Tag_type.TAG_End) {
                    return new NBT_Tag_Compound(name, payload);
                }
                payload.push(parseTag(data.slice(1+2+name_length+r)));
                const name_length_1 = data.readUInt16BE(1+2+name_length+1+r);
                r += getPayloadSize(data.slice(1+2+name_length+r))+1+2+name_length_1;
            }
        }
        case NBT_Tag_type.TAG_Int_Array: {
            const array_size = data.readInt32BE(1+2+name_length);
            const array = [];
            for(let i=0;i<array_size;i++) {
                array.push(data.readInt32BE(1+2+name_length+4+i*4));
            }
            return new NBT_Tag_Int_Array(name, array);
        }
        case NBT_Tag_type.TAG_Long_Array: {
            const array_size = data.readInt32BE(1+2+name_length);
            const array = [];
            for(let i=0;i<array_size;i++) {
                array.push(data.readBigInt64BE(1+2+name_length+4+i*8));
            }
            return new NBT_Tag_Long_Array(name, array);
        }
        default: {
            throw new Error("Unknown nbt id!");
        }
    }
}