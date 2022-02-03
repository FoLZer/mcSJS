import net from "net";
import crypto from "crypto";
import https from "https";
import { v3 as v3uuid } from "uuid";
import BufferAccess from "./buffer/BufferAccess";
import { packets, ClientPacket, ServerPacket } from "./packets";
import { NBT_Tag_Byte, NBT_Tag_Compound, NBT_Tag_Double, NBT_Tag_Float, NBT_Tag_Int, NBT_Tag_List, NBT_Tag_Long, NBT_Tag_String, NBT_Tag_types } from "./NBT";
import commands from "./commands_graph";
import tags from "./tags";

const key_pair = crypto.generateKeyPairSync("rsa" as any, {
    modulusLength: 1024,
    publicKeyEncoding: {
        type: "spki",
        format: "der"
    }
});


enum ConnectionState {
    Handshake,
    Status,
    Login,
    Play
}

function mcHexDigest(str: string) {
    let hash = Buffer.from(crypto.createHash('sha1').update(str).digest());
    // check for negative hashes
    let negative = hash.readInt8(0) < 0;
    if (negative) performTwosCompliment(hash);
    let digest = hash.toString('hex');
    // trim leading zeroes
    digest = digest.replace(/^0+/g, '');
    if (negative) digest = '-' + digest;
    return digest;
}
  
function performTwosCompliment(buffer: Buffer) {
    let carry = true;
    let i, newByte, value;
    for (i = buffer.length - 1; i >= 0; --i) {
        value = buffer.readUInt8(i);
        newByte = ~value & 0xff;
        if (carry) {
            carry = newByte === 0xff;
            buffer.writeUInt8(newByte + 1, i);
        } else {
            buffer.writeUInt8(newByte, i);
        }
    }
}

const dimension_codec = new NBT_Tag_Compound("", [
    new NBT_Tag_Compound("minecraft:dimension_type", [
        new NBT_Tag_String("type", "minecraft:dimension_type"),
        new NBT_Tag_List("value", NBT_Tag_types.TAG_Compound, [
            new NBT_Tag_Compound("", [
                new NBT_Tag_String("name", "minecraft:overworld"),
                new NBT_Tag_Int("id", 0),
                new NBT_Tag_Compound("element", [
                    new NBT_Tag_Byte("piglin_safe", 0),
                    new NBT_Tag_Byte("natural", 1),
                    new NBT_Tag_Float("ambient_light", 0),
                    new NBT_Tag_String("infiniburn", "minecraft:infiniburn_overworld"),
                    new NBT_Tag_Byte("respawn_anchor_works", 0),
                    new NBT_Tag_Byte("has_skylight", 1),
                    new NBT_Tag_Byte("bed_works", 1),
                    new NBT_Tag_String("effects", "minecraft:overworld"),
                    new NBT_Tag_Byte("has_raids", 1),
                    new NBT_Tag_Int("min_y", 0),
                    new NBT_Tag_Int("height", 256),
                    new NBT_Tag_Int("logical_height", 256),
                    new NBT_Tag_Double("coordinate_scale", 1),
                    new NBT_Tag_Byte("ultrawarm", 0),
                    new NBT_Tag_Byte("has_ceiling", 0)
                ])
            ]),
            new NBT_Tag_Compound("", [
                new NBT_Tag_String("name", "minecraft:overworld_caves"),
                new NBT_Tag_Int("id", 1),
                new NBT_Tag_Compound("element", [
                    new NBT_Tag_Byte("piglin_safe", 0),
                    new NBT_Tag_Byte("natural", 1),
                    new NBT_Tag_Float("ambient_light", 0),
                    new NBT_Tag_String("infiniburn", "minecraft:infiniburn_overworld"),
                    new NBT_Tag_Byte("respawn_anchor_works", 0),
                    new NBT_Tag_Byte("has_skylight", 1),
                    new NBT_Tag_Byte("bed_works", 1),
                    new NBT_Tag_String("effects", "minecraft:overworld"),
                    new NBT_Tag_Byte("has_raids", 1),
                    new NBT_Tag_Int("min_y", 0),
                    new NBT_Tag_Int("height", 256),
                    new NBT_Tag_Int("logical_height", 256),
                    new NBT_Tag_Double("coordinate_scale", 1),
                    new NBT_Tag_Byte("ultrawarm", 0),
                    new NBT_Tag_Byte("has_ceiling", 1)
                ])
            ]),
            new NBT_Tag_Compound("", [
                new NBT_Tag_String("name", "minecraft:the_nether"),
                new NBT_Tag_Int("id", 2),
                new NBT_Tag_Compound("element", [
                    new NBT_Tag_Byte("piglin_safe", 1),
                    new NBT_Tag_Byte("natural", 0),
                    new NBT_Tag_Float("ambient_light", 0.1),
                    new NBT_Tag_String("infiniburn", "minecraft:infiniburn_nether"),
                    new NBT_Tag_Byte("respawn_anchor_works", 1),
                    new NBT_Tag_Byte("has_skylight", 0),
                    new NBT_Tag_Byte("bed_works", 0),
                    new NBT_Tag_String("effects", "minecraft:the_nether"),
                    new NBT_Tag_Long("fixed_time", 18000n),
                    new NBT_Tag_Byte("has_raids", 0),
                    new NBT_Tag_Int("min_y", 0),
                    new NBT_Tag_Int("height", 256),
                    new NBT_Tag_Int("logical_height", 128),
                    new NBT_Tag_Double("coordinate_scale", 8),
                    new NBT_Tag_Byte("ultrawarm", 1),
                    new NBT_Tag_Byte("has_ceiling", 1)
                ])
            ]),
            new NBT_Tag_Compound("", [
                new NBT_Tag_String("name", "minecraft:overworld"),
                new NBT_Tag_Int("id", 3),
                new NBT_Tag_Compound("element", [
                    new NBT_Tag_Byte("piglin_safe", 0),
                    new NBT_Tag_Byte("natural", 0),
                    new NBT_Tag_Float("ambient_light", 0),
                    new NBT_Tag_String("infiniburn", "minecraft:infiniburn_end"),
                    new NBT_Tag_Byte("respawn_anchor_works", 0),
                    new NBT_Tag_Byte("has_skylight", 0),
                    new NBT_Tag_Byte("bed_works", 0),
                    new NBT_Tag_String("effects", "minecraft:the_end"),
                    new NBT_Tag_Long("fixed_time", 6000n),
                    new NBT_Tag_Byte("has_raids", 1),
                    new NBT_Tag_Int("min_y", 0),
                    new NBT_Tag_Int("height", 256),
                    new NBT_Tag_Int("logical_height", 256),
                    new NBT_Tag_Double("coordinate_scale", 1),
                    new NBT_Tag_Byte("ultrawarm", 0),
                    new NBT_Tag_Byte("has_ceiling", 0)
                ])
            ])
        ])
    ]),
    new NBT_Tag_Compound("minecraft:worldgen/biome", [
        new NBT_Tag_String("type", "minecraft:worldgen/biome"),
        new NBT_Tag_List("value", NBT_Tag_types.TAG_Compound, [
            new NBT_Tag_Compound("", [
                new NBT_Tag_String("name", "minecraft:overworld"),
                new NBT_Tag_Int("id", 0),
                new NBT_Tag_Compound("element", [
                    new NBT_Tag_String("precipitation", "rain"),
                    new NBT_Tag_Compound("effects", [
                        new NBT_Tag_Int("sky_color", 8103167),
                        new NBT_Tag_Int("water_fog_color", 329011),
                        new NBT_Tag_Int("fog_color", 12638463),
                        new NBT_Tag_Int("water_color", 4159204),
                        new NBT_Tag_Compound("mood_sound", [
                            new NBT_Tag_Int("tick_delay", 6000),
                            new NBT_Tag_Double("offset", 2),
                            new NBT_Tag_String("sound", "minecraft:ambient.cave"),
                            new NBT_Tag_Int("block_search_extent", 8)
                        ])
                    ]),
                    new NBT_Tag_Float("depth", -1),
                    new NBT_Tag_Float("temperature", 0.5),
                    new NBT_Tag_Float("scale", 0.1),
                    new NBT_Tag_Float("downfall", 0.5),
                    new NBT_Tag_String("category", "ocean")
                ])
            ])
        ])
    ])
])

export default class Connection {
    socket: net.Socket;
    state;
    username?: string;
    loginResp?: {
        id: string,
        name: string,
        properties: {
            name: string,
            value: string,
            signature: string
        }[]
    }

    constructor(socket: net.Socket) {
        this.socket = socket;
        this.state = ConnectionState.Handshake;

        this.initiateConnection();
    }

    private initiateConnection() {
        let buf = Buffer.alloc(2097151);
        let offset = 0;
        let cur_packet_length = -1;

        const readPacket = (buf: Buffer): ClientPacket => {
            console.log("read_packet", buf);
            const bufAcc = new BufferAccess(buf);
            bufAcc.readVarInt(); //length
            const c_l = bufAcc.getPos();
            const id = bufAcc.readVarInt();
            const rawdata = buf.slice(bufAcc.getPos(), cur_packet_length-c_l+bufAcc.getPos());
            //@ts-ignore
            return new packets["Client"][ConnectionState[this.state]][id](rawdata);
        }

        const readAvailablePackets = (data: Buffer) => {
            if(cur_packet_length > 0) {
                if(offset + data.byteLength >= cur_packet_length) {
                    const copied = data.copy(buf, offset, 0, cur_packet_length - offset);
                    const packet = readPacket(buf);
                    this.onPacket(packet);
                    cur_packet_length = -1;
                    offset = 0;
                    readAvailablePackets(data.slice(copied));
                } else {
                    offset += data.copy(buf, offset);
                }
            } else {
                if(data.byteLength == 1 && data[0] == 0) {
                    return;
                }
                let copied = data.copy(buf, offset, 0, Math.min(data.byteLength, 3 - offset));
                offset += copied;
                if(offset >= 3 || (offset == 2 && buf.readUInt8() == 1)) {
                    const bufAcc = new BufferAccess(buf);
                    cur_packet_length = bufAcc.readVarInt();
                    if(data.byteLength - bufAcc.getPos() >= cur_packet_length) {
                        data.copy(buf, offset, copied, cur_packet_length + copied - 2);
                        const packet = readPacket(buf);
                        this.onPacket(packet);
                        const next_data = data.slice(cur_packet_length + copied - 2)
                        cur_packet_length = -1;
                        offset = 0;
                        readAvailablePackets(next_data);
                    } else {
                        offset += data.copy(buf, offset, copied);
                    }
                }
            }
        }

        this.socket.on("data", (data) => {
            readAvailablePackets(data);
        });
    }

    private sendPacket(packet: ServerPacket) {
        const data = packet.Serealize();
        const id_length = BufferAccess.getVarIntLength(packet.getId());
        const length_size = BufferAccess.getVarIntLength(data.byteLength+id_length);
        const buf = Buffer.alloc(length_size+id_length+data.byteLength);
        const bufAcc = new BufferAccess(buf);
        bufAcc.writeVarInt(data.byteLength+id_length);
        bufAcc.writeVarInt(packet.getId());
        bufAcc.writeBuf(data);
        if(this.socket.writable) {
            console.log("write_packet", buf);
            this.socket.write(buf);
        }
    }

    private onPacket(packet: ClientPacket) {
        switch(this.state) {
            case ConnectionState.Handshake: {
                switch(packet.getId()) {
                    case 0: {
                        const next_state = (packet as any).next_state as number;
                        if(next_state != 1 && next_state != 2) {
                            this.socket.end();
                            this.socket.destroy();
                            return;
                        }
                        this.state = ConnectionState[ConnectionState[next_state] as unknown as ConnectionState] as unknown as ConnectionState;
                        break;
                    }
                }
                break;
            }
            case ConnectionState.Status: {
                switch(packet.getId()) {
                    case 0: {
                        this.sendPacket(new packets.Server.Status[0]());
                        break;
                    }
                    case 1: {
                        this.sendPacket(new packets.Server.Status[1]((packet as any).payload));
                        this.socket.end();
                        this.socket.destroy();
                        break;
                    }
                }
                break;
            }
            case ConnectionState.Login: {
                switch(packet.getId()) {
                    case 0: {
                        this.username = (packet as any).name;
                        if(!this.username) {
                            throw new Error("No username was found during login start!");
                        }
                        this.sendPacket(new packets.Server.Login[2](v3uuid(this.username, "d8238f96-d2e9-472e-bfca-78f34fa44e9f"), this.username))
                        this.sendPacket(new packets.Server.Play[38](0,false,0,-1,["minecraft:overworld"],dimension_codec,(((dimension_codec.payload[0] as NBT_Tag_Compound).payload[1] as NBT_Tag_List).payload[0] as NBT_Tag_Compound).payload[2] as NBT_Tag_Compound,"minecraft:overworld",0n,100,3,3,false,true,false,false));
                        this.sendPacket(new packets.Server.Play[24]("minecraft:brand",Buffer.from("mcSJS") as any));
                        this.sendPacket(new packets.Server.Play[14](0,true));
                        this.sendPacket(new packets.Server.Play[50](false, false, false, false, 0.05, 0.1));
                        //skip packet 0x05, huh?
                        this.sendPacket(new packets.Server.Play[72](0));
                        //this.sendPacket(new packets.Server.Play[102]([]));
                        //this.sendPacket(new packets.Server.Play[103](tags));
                        //this.sendPacket(new packets.Server.Play[27](0,24));
                        //this.sendPacket(new packets.Server.Play[18](commands,0));
                        //this.sendPacket(new packets.Server.Play[57](0,false,false,false,false,false,false,false,false,[],[]));
                        this.sendPacket(new packets.Server.Play[56](0,1,0,0,0,0,0,true));
                        this.sendPacket(new packets.Server.Play[54](0,[
                            {
                                uuid: "",
                                name: "",
                                properties: [],
                                gamemode: 0,
                                ping: -1,
                                has_display_name: false
                            }
                        ]));
                        this.sendPacket(new packets.Server.Play[54](0,[
                            {
                                uuid: "",
                                name: "",
                                properties: [],
                                gamemode: 0,
                                ping: -1,
                                has_display_name: false
                            }
                        ]));
                        this.sendPacket(new packets.Server.Play[73](0,0));
                        break;
                        const verify_token = Buffer.alloc(4);
                        verify_token.writeUInt32LE(Math.random() * 4294967295);
                        this.sendPacket(new packets.Server.Login[1]("", key_pair.publicKey as unknown as Buffer, verify_token));
                        break;
                    }
                    case 1: {
                        if(!this.username) {
                            throw new Error("No username was found during login encryption!");
                        }
                        const verify_token = crypto.privateDecrypt(key_pair.privateKey,(packet as any).verify_token);
                        const shared_secret = crypto.privateDecrypt(key_pair.privateKey,(packet as any).shared_secret);
                        const hash = mcHexDigest(this.username);
                        https.get(`https://sessionserver.mojang.com/session/minecraft/hasJoined?username=${this.username}&serverId=${hash}&ip=${this.socket.localAddress}`, (res) => {
                            let b = "";
                            res.on("data", (chunk) => {
                                b += chunk;
                            });
                            res.on("end", () => {
                                this.loginResp = JSON.parse(b);
                                this.sendPacket(new packets.Server.Login[2](this.loginResp?.id as string,this.loginResp?.name as string));
                                this.state = ConnectionState.Play;
                            });
                        });
                        break;
                    }
                }
                break;
            }
        }
    }
}