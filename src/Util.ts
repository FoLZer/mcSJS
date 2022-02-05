export function compressXYZ(x: number,y: number,z: number) {
    y = (Number(y < 0) << 8) | ((y < 0 ? -y : y) & 0xFF);
    x = x & 0xF;
    z = z & 0xF;
    return y << 8 | z << 4 | x;
}

export function decompressXYZ(xyz: number) {
    const x = xyz & 0xF;
    const z = (xyz >> 4) & 0xF;
    const y = ((xyz >> 16) > 0 ? -1 : 1) * ((xyz >> 8) & 0xFF);
    return [x,y,z];
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