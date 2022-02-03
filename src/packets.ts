import BufferAccess from "./buffer/BufferAccess";
import UUID from "uuid-1345";
import { NBT_Tag, NBT_Tag_Compound } from "./NBT";
import { CommandNode } from "./commands_graph";

class Packet {}

export class ClientPacket extends Packet {
    private id: number;

    constructor(id: number) {
        super();
        this.id = id;
    }
    
    public getId() {
        return this.id;
    }
}

export class ServerPacket extends Packet {
    private id: number;

    constructor(id: number) {
        super();
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public Serealize(): Buffer {
        return Buffer.allocUnsafe(0);
    }
}

const packets = {
    Client: {
        Handshake: {
            0: class Handshake extends ClientPacket {
                protocol_version: number;
                server_address: string;
                server_port: number;
                next_state: 1 | 2;

                constructor(buf: Buffer) {
                    super(0);
                    const bufAcc = new BufferAccess(buf);
                    this.protocol_version = bufAcc.readVarInt();
                    this.server_address = bufAcc.readString();
                    this.server_port = bufAcc.readUint16();
                    this.next_state = bufAcc.readVarInt() as (1 | 2);
                }
            }
        },
        Status: {
            0: class Request extends ClientPacket {
                constructor(buf: Buffer) {
                    super(0);
                }
            },
            1: class Ping extends ClientPacket {
                payload: bigint;
                constructor(buf: Buffer) {
                    super(1);
                    const bufAcc = new BufferAccess(buf);
                    this.payload = bufAcc.readInt64();
                }
            }
        },
        Login: {
            0: class LoginStart extends ClientPacket {
                name: string;

                constructor(buf: Buffer) {
                    super(0);
                    const bufAcc = new BufferAccess(buf);
                    this.name = bufAcc.readString();
                }
            },
            1: class EncryptionResponse extends ClientPacket {
                shared_secret_length: number;
                shared_secret: Buffer;
                verify_token_length: number;
                verify_token: Buffer;

                constructor(buf: Buffer) {
                    super(1);
                    const bufAcc = new BufferAccess(buf);
                    this.shared_secret_length = bufAcc.readVarInt();
                    this.shared_secret = bufAcc.readBuf(this.shared_secret_length)
                    this.verify_token_length = bufAcc.readVarInt();
                    this.verify_token = bufAcc.readBuf(this.verify_token_length);
                }
            },
            2: class LoginPluginResponse extends ClientPacket {
                message_id: number;
                successful: boolean;
                data?: number[];
                
                constructor(buf: Buffer) {
                    super(2);
                    const bufAcc = new BufferAccess(buf);
                    this.message_id = bufAcc.readVarInt();
                    this.successful = bufAcc.readBoolean();
                    const a = BufferAccess.getVarIntLength(this.message_id)+1;
                    if(buf.byteLength > a) {
                        this.data = bufAcc.readBytes(buf.byteLength-a);
                    }
                }
            }
        }
    },
    Server: {
        Status: {
            0: class Response extends ServerPacket {
                payload = {
                    version: {
                        name: "1.18.1",
                        protocol: 757
                    },
                    players: {
                        max: 100,
                        online: 101,
                        sample: [
                            {
                                "name": "thinkofdeath",
                                "id": "4566e69f-c907-48ee-8d71-d7ba5aa00d20"
                            }
                        ]
                    },
                    description: {
                        text: "Hello world"
                    }
                }

                constructor() {
                    super(0);
                }

                public Serealize(): Buffer {
                    const payload_json = JSON.stringify(this.payload);
                    const buf = Buffer.allocUnsafe(BufferAccess.getVarIntLength(Buffer.byteLength(payload_json))+Buffer.byteLength(payload_json));
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeString(payload_json);
                    return buf;
                }
            },
            1: class Pong extends ServerPacket {
                payload: bigint;

                constructor(payload: bigint) {
                    super(1);
                    this.payload = payload;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(8);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeInt64(this.payload);
                    return buf;
                }
            }
        },
        Login: {
            0: class Disconnect extends ServerPacket {
                reason: string;

                constructor(reason: string) {
                    super(0);
                    this.reason = reason;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(BufferAccess.getVarIntLength(Buffer.byteLength(this.reason))+Buffer.byteLength(this.reason));
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeString(this.reason);
                    return buf;
                }
            },
            1: class EncryptionRequest extends ServerPacket {
                server_id: string;
                public_key: Buffer;
                verify_token: Buffer;

                constructor(server_id: string, public_key: Buffer, verify_token: Buffer) {
                    super(1);
                    this.server_id = server_id;
                    this.public_key = public_key;
                    this.verify_token = verify_token;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(BufferAccess.getVarIntLength(Buffer.byteLength(this.server_id))+Buffer.byteLength(this.server_id)+BufferAccess.getVarIntLength(this.public_key.byteLength)+this.public_key.byteLength+BufferAccess.getVarIntLength(this.verify_token.byteLength)+this.verify_token.byteLength);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeString(this.server_id);
                    bufAcc.writeVarInt(this.public_key.byteLength);
                    bufAcc.writeBuf(this.public_key);
                    bufAcc.writeVarInt(this.verify_token.byteLength);
                    bufAcc.writeBuf(this.verify_token);
                    return buf;
                }
            },
            2: class LoginSuccess extends ServerPacket {
                uuid: string;
                username: string;

                constructor(uuid: string, username: string) {
                    super(2);
                    this.uuid = uuid;
                    this.username = username;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(16+BufferAccess.getVarIntLength(Buffer.byteLength(this.username))+Buffer.byteLength(this.username));
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeBuf(UUID.parse(this.uuid));
                    bufAcc.writeString(this.username);
                    return buf;
                }
            }
        },
        Play: {
            14: class ServerDifficulty extends ServerPacket {
                difficulty: number;
                difficulty_locked: boolean;

                constructor(difficulty: number, difficulty_locked: boolean) {
                    super(14);
                    this.difficulty = difficulty;
                    this.difficulty_locked = difficulty_locked;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(1+1);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeUint8(this.difficulty);
                    bufAcc.writeBoolean(this.difficulty_locked);
                    return buf;
                }
            },
            18: class DeclareCommands extends ServerPacket {
                nodes: CommandNode[]
                root_index: number

                constructor(nodes: CommandNode[], root_index: number) {
                    super(18);
                    this.nodes = nodes;
                    this.root_index = root_index;
                }

                public Serealize(): Buffer {
                    let s = BufferAccess.getVarIntLength(this.nodes.length);
                    for(const node of this.nodes) {
                        s += 1;
                        s += BufferAccess.getVarIntLength(node.children.length);
                        for(const ch of node.children) {
                            s += BufferAccess.getVarIntLength(ch);
                        }
                        if((node.flags & 0x08) && node.redirect_node) {
                            s += BufferAccess.getVarIntLength(node.redirect_node);
                        }
                        if((((node.flags & 0x03) & 0x01) || ((node.flags & 0x03) & 0x02)) && node.name) {
                            s += BufferAccess.getVarIntLength(Buffer.byteLength(node.name));
                            s += Buffer.byteLength(node.name);
                        }
                        if(((node.flags & 0x03) & 0x02) && node.parser) {
                            s += BufferAccess.getVarIntLength(Buffer.byteLength(node.parser));
                            s += Buffer.byteLength(node.parser);
                        }
                        if(((node.flags & 0x03) & 0x02) && node.properties) {
                            //TODO: properties
                        }
                        if(((node.flags & 0x03) & 0x10) && node.suggestions_type) {
                            s += BufferAccess.getVarIntLength(Buffer.byteLength(node.suggestions_type));
                            s += Buffer.byteLength(node.suggestions_type);
                        }
                    }
                    s += BufferAccess.getVarIntLength(this.root_index);
                    const buf = Buffer.allocUnsafe(s);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeVarInt(this.nodes.length);
                    for(const node of this.nodes) {
                        bufAcc.writeInt8(node.flags);
                        bufAcc.writeVarInt(node.children.length);
                        for(const ch of node.children) {
                            bufAcc.writeVarInt(ch);
                        }
                        if((node.flags & 0x08) && node.redirect_node) {
                            bufAcc.writeVarInt(node.redirect_node);
                        }
                        if((((node.flags & 0x03) & 0x01) || ((node.flags & 0x03) & 0x02)) && node.name) {
                            bufAcc.writeString(node.name);
                        }
                        if(((node.flags & 0x03) & 0x02) && node.parser) {
                            bufAcc.writeString(node.parser);
                        }
                        if(((node.flags & 0x03) & 0x02) && node.properties) {
                            //TODO: properties
                        }
                        if(((node.flags & 0x03) & 0x10) && node.suggestions_type) {
                            bufAcc.writeString(node.suggestions_type);
                        }
                    }
                    bufAcc.writeVarInt(this.root_index);
                    return buf;
                }
            },
            24: class PluginMessage extends ServerPacket {
                channel: string;
                data: number[];

                constructor(channel: string, data: number[]) {
                    super(24);
                    this.channel = channel;
                    this.data = data;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(BufferAccess.getVarIntLength(Buffer.byteLength(this.channel))+Buffer.byteLength(this.channel)+this.data.length);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeString(this.channel);
                    bufAcc.writeBytes(this.data);
                    return buf;
                }
            },
            27: class EntityStatus extends ServerPacket {
                entity_id: number;
                entity_status: number;

                constructor(entity_id: number, entity_status: number) {
                    super(27);
                    this.entity_id = entity_id;
                    this.entity_status = entity_status;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(4+1);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeInt32(this.entity_id);
                    bufAcc.writeInt8(this.entity_status);
                    return buf;
                }
            },
            34: class ChunkDataAndUpdateLight extends ServerPacket {
                chunk_x: number;
                chunk_z: number;
                heightmaps: NBT_Tag_Compound;
                data: number[];
                block_entity_ar: {
                    xz: number;
                    y: number;
                    type: number;
                    data: NBT_Tag;
                }[];
                trust_edges: boolean;
                sky_light_mask: bigint[];
                block_light_mask: bigint[];
                empty_sky_light_mask: bigint[];
                empty_block_light_mask: bigint[];
                sky_light_arrays: number[][];
                block_light_arrays: number[][];

                constructor(chunk_x: number,chunk_z: number,heightmaps: NBT_Tag_Compound,data: number[],block_entity_ar: {
                    xz: number;
                    y: number;
                    type: number;
                    data: NBT_Tag;
                }[],trust_edges: boolean,sky_light_mask: bigint[],block_light_mask: bigint[],empty_sky_light_mask: bigint[],empty_block_light_mask: bigint[],sky_light_arrays: number[][],block_light_arrays: number[][]) {
                    super(34);
                    this.chunk_x = chunk_x;
                    this.chunk_z = chunk_z;
                    this.heightmaps = heightmaps;
                    this.data = data;
                    this.block_entity_ar = block_entity_ar;
                    this.trust_edges = trust_edges;
                    this.sky_light_mask = sky_light_mask;
                    this.block_light_mask = block_light_mask;
                    this.empty_sky_light_mask = empty_sky_light_mask;
                    this.empty_block_light_mask = empty_block_light_mask;
                    this.sky_light_arrays = sky_light_arrays;
                    this.block_light_arrays = block_light_arrays;
                }

                public Serealize(): Buffer {
                    const heightmap_buf = this.heightmaps.toBuffer();
                    let size = 4+4+heightmap_buf.byteLength+BufferAccess.getVarIntLength(this.data.length)+this.data.length+BufferAccess.getVarIntLength(this.block_entity_ar.length);
                    for(const block_entity of this.block_entity_ar) {
                        size += 1+2+BufferAccess.getVarIntLength(block_entity.type)+block_entity.data.toBuffer().byteLength;
                    }
                    size += 1+BufferAccess.getVarIntLength(this.sky_light_mask.length)+this.sky_light_mask.length*8;
                    size += BufferAccess.getVarIntLength(this.block_light_mask.length)+this.block_light_mask.length*8;
                    size += BufferAccess.getVarIntLength(this.empty_sky_light_mask.length)+this.empty_sky_light_mask.length*8;
                    size += BufferAccess.getVarIntLength(this.empty_block_light_mask.length)+this.empty_block_light_mask.length*8;
                    size += BufferAccess.getVarIntLength(this.sky_light_arrays.length);
                    for(const sky_light_array of this.sky_light_arrays) {
                        size += BufferAccess.getVarIntLength(sky_light_array.length);
                        size += sky_light_array.length; //always should be 2048
                    }
                    size += BufferAccess.getVarIntLength(this.block_light_arrays.length);
                    for(const block_light_array of this.block_light_arrays) {
                        size += BufferAccess.getVarIntLength(block_light_array.length);
                        size += block_light_array.length; //always should be 2048
                    }
                    const buf = Buffer.allocUnsafe(size);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeInt32(this.chunk_x);
                    bufAcc.writeInt32(this.chunk_z);
                    bufAcc.writeBuf(heightmap_buf);
                    bufAcc.writeVarInt(this.block_entity_ar.length);
                    for(const block_entity of this.block_entity_ar) {
                        bufAcc.writeInt8(block_entity.xz);
                        bufAcc.writeInt16(block_entity.y);
                        bufAcc.writeVarInt(block_entity.type);
                        bufAcc.writeBuf(block_entity.data.toBuffer());
                    }
                    bufAcc.writeBoolean(this.trust_edges);
                    bufAcc.writeVarInt(this.sky_light_mask.length);
                    for(let i=0;i<this.sky_light_mask.length;i++) {
                        bufAcc.writeInt64(this.sky_light_mask[i]);
                    }
                    bufAcc.writeVarInt(this.block_light_mask.length);
                    for(let i=0;i<this.block_light_mask.length;i++) {
                        bufAcc.writeInt64(this.block_light_mask[i]);
                    }
                    bufAcc.writeVarInt(this.empty_sky_light_mask.length);
                    for(let i=0;i<this.empty_sky_light_mask.length;i++) {
                        bufAcc.writeInt64(this.empty_sky_light_mask[i]);
                    }
                    bufAcc.writeVarInt(this.empty_block_light_mask.length);
                    for(let i=0;i<this.empty_block_light_mask.length;i++) {
                        bufAcc.writeInt64(this.empty_block_light_mask[i]);
                    }
                    bufAcc.writeVarInt(this.sky_light_arrays.length);
                    for(const sky_light_array of this.sky_light_arrays) {
                        bufAcc.writeVarInt(sky_light_array.length);
                        bufAcc.writeBytes(sky_light_array);
                    }
                    bufAcc.writeVarInt(this.block_light_arrays.length);
                    for(const block_light_array of this.block_light_arrays) {
                        bufAcc.writeVarInt(block_light_array.length);
                        bufAcc.writeBytes(block_light_array);
                    }
                    return buf;
                }
            },
            38: class JoinGame extends ServerPacket {
                entity_id: number;
                is_hardcore: boolean;
                gamemode: number;
                previous_gamemode: number;
                dimension_names: string[];
                dimension_codec: NBT_Tag_Compound;
                dimension: NBT_Tag_Compound;
                dimension_name: string;
                hashed_seed: bigint;
                max_players: number;
                view_distance: number;
                simulation_distance: number;
                reduced_debug_info: boolean;
                enable_respawn_screen: boolean;
                is_debug: boolean;
                is_flat: boolean;

                constructor(entity_id: number, is_hardcore: boolean, gamemode: number, previous_gamemode: number, dimension_names: string[], dimension_codec: NBT_Tag_Compound, dimension: NBT_Tag_Compound, dimension_name: string, hashed_seed: bigint, max_players: number, view_distance: number, simulation_distance: number, reduced_debug_info: boolean, enable_respawn_screen: boolean, is_debug: boolean, is_flat: boolean) {
                    super(38);
                    this.entity_id = entity_id;
                    this.is_hardcore = is_hardcore;
                    this.gamemode = gamemode;
                    this.previous_gamemode = previous_gamemode;
                    this.dimension_names = dimension_names;
                    this.dimension_codec = dimension_codec;
                    this.dimension = dimension;
                    this.dimension_name = dimension_name;
                    this.hashed_seed = hashed_seed;
                    this.max_players = max_players;
                    this.view_distance = view_distance;
                    this.simulation_distance = simulation_distance;
                    this.reduced_debug_info = reduced_debug_info;
                    this.enable_respawn_screen = enable_respawn_screen;
                    this.is_debug = is_debug;
                    this.is_flat = is_flat;
                }

                public Serealize(): Buffer {
                    const dim_c_buf = this.dimension_codec.toBuffer();
                    const dim_buf = this.dimension.toBuffer();
                    let size = 4+1+1+1+BufferAccess.getVarIntLength(this.dimension_names.length)+dim_c_buf.byteLength+dim_buf.byteLength+BufferAccess.getVarIntLength(Buffer.byteLength(this.dimension_name))+Buffer.byteLength(this.dimension_name)+8+BufferAccess.getVarIntLength(this.max_players)+BufferAccess.getVarIntLength(this.view_distance)+BufferAccess.getVarIntLength(this.simulation_distance)+1+1+1+1;
                    for(const id of this.dimension_names) {
                        size += BufferAccess.getVarIntLength(Buffer.byteLength(id))+Buffer.byteLength(id);
                    }
                    const buf = Buffer.allocUnsafe(size);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeInt32(this.entity_id);
                    bufAcc.writeBoolean(this.is_hardcore);
                    bufAcc.writeUint8(this.gamemode);
                    bufAcc.writeInt8(this.previous_gamemode);
                    bufAcc.writeVarInt(this.dimension_names.length);
                    for(const id of this.dimension_names) {
                        bufAcc.writeString(id);
                    }
                    bufAcc.writeBuf(dim_c_buf);
                    bufAcc.writeBuf(dim_buf);
                    bufAcc.writeString(this.dimension_name);
                    bufAcc.writeInt64(this.hashed_seed);
                    bufAcc.writeVarInt(this.max_players);
                    bufAcc.writeVarInt(this.view_distance);
                    bufAcc.writeVarInt(this.simulation_distance);
                    bufAcc.writeBoolean(this.reduced_debug_info);
                    bufAcc.writeBoolean(this.enable_respawn_screen);
                    bufAcc.writeBoolean(this.is_debug);
                    bufAcc.writeBoolean(this.is_flat);
                    return buf;
                }
            },
            50: class PlayerAbilities extends ServerPacket {
                flags: number;
                flying_speed: number;
                fov_modif: number;

                constructor(invulnerable: boolean, flying: boolean, allow_flying: boolean, creative_mode: boolean, flying_speed: number, fov_modif: number) {
                    super(50);
                    this.flags = Number(invulnerable);
                    this.flags |= Number(flying) << 1;
                    this.flags |= Number(allow_flying) << 2;
                    this.flags |= Number(creative_mode) << 3;
                    this.flying_speed = flying_speed;
                    this.fov_modif = fov_modif;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(1+4+4);
                    buf.writeUInt8(this.flags, 0);
                    buf.writeFloatBE(this.flying_speed, 1);
                    buf.writeFloatBE(this.fov_modif, 5);
                    return buf;
                }
            },
            54: class PlayerInfo extends ServerPacket {
                action: number;
                players: any[];

                constructor(action: number, players: any[]) {
                    super(54);
                    this.action = action;
                    this.players = players;
                }

                public Serealize(): Buffer {
                    let s = BufferAccess.getVarIntLength(this.action);
                    s += BufferAccess.getVarIntLength(this.players.length);
                    for(const player of this.players) {
                        s += 16;
                        switch(this.action) {
                            case 0: {
                                s += BufferAccess.getVarIntLength(Buffer.byteLength(player.name))
                                s += Buffer.byteLength(player.name);
                                s += BufferAccess.getVarIntLength(player.properties.length);
                                for(const property of player.properties) {
                                    s += BufferAccess.getVarIntLength(Buffer.byteLength(property.name))
                                    s += Buffer.byteLength(property.name);
                                    s += BufferAccess.getVarIntLength(Buffer.byteLength(property.value))
                                    s += Buffer.byteLength(property.value);
                                    s += 1;
                                    if(property.is_signed) {
                                        s += BufferAccess.getVarIntLength(Buffer.byteLength(property.signature))
                                        s += Buffer.byteLength(property.signature);
                                    }
                                }
                                s += BufferAccess.getVarIntLength(player.gamemode);
                                s += BufferAccess.getVarIntLength(player.ping);
                                s += 1;
                                if(player.has_display_name) {
                                    s += BufferAccess.getVarIntLength(Buffer.byteLength(player.display_name))
                                    s += Buffer.byteLength(player.display_name);
                                }
                                break;
                            }
                            case 1: {
                                s += BufferAccess.getVarIntLength(player.gamemode);
                                break;
                            }
                            case 2: {
                                s += BufferAccess.getVarIntLength(player.ping);
                                break;
                            }
                            case 3: {
                                s += 1;
                                if(player.has_display_name) {
                                    s += BufferAccess.getVarIntLength(Buffer.byteLength(player.display_name));
                                    s += Buffer.byteLength(player.display_name);
                                }
                                break;
                            }
                            case 4: {
                                break;
                            }
                            default: {
                                throw new Error("Unknown action");
                            }
                        }
                    }
                    const buf = Buffer.allocUnsafe(s);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeVarInt(this.action);
                    bufAcc.writeVarInt(this.players.length);
                    for(const player of this.players) {
                        bufAcc.writeBuf(UUID.parse(player.uuid));
                        switch(this.action) {
                            case 0: {
                                bufAcc.writeString(player.name);
                                bufAcc.writeVarInt(player.properties.length);
                                for(const property of player.properties) {
                                    bufAcc.writeString(property.name);
                                    bufAcc.writeString(property.value);
                                    bufAcc.writeBoolean(property.is_signed);
                                    if(property.is_signed) {
                                        bufAcc.writeString(property.signature);
                                    }
                                }
                                bufAcc.writeVarInt(player.gamemode);
                                bufAcc.writeVarInt(player.ping);
                                bufAcc.writeBoolean(player.has_display_name);
                                if(player.has_display_name) {
                                    bufAcc.writeString(player.display_name);
                                }
                                break;
                            }
                            case 1: {
                                bufAcc.writeVarInt(player.gamemode);
                                break;
                            }
                            case 2: {
                                bufAcc.writeVarInt(player.ping);
                                break;
                            }
                            case 3: {
                                bufAcc.writeBoolean(player.has_display_name);
                                if(player.has_display_name) {
                                    bufAcc.writeString(player.display_name);
                                }
                                break;
                            }
                            case 4: {
                                break;
                            }
                        }
                    }
                    return buf;
                }
            },
            56: class PlayerPositionAndLook extends ServerPacket {
                x: number;
                y: number;
                z: number;
                yaw: number;
                pitch: number;
                flags: number;
                teleport_id: number;
                dismount_vehicle: boolean;

                constructor(x: number,y: number,z: number,yaw: number,pitch: number,rel_flags: number,teleport_id: number,dismount_vehicle: boolean) {
                    super(56);
                    this.x = x;
                    this.y = y;
                    this.z = z;
                    this.yaw = yaw;
                    this.pitch = pitch;
                    this.flags = rel_flags;
                    this.teleport_id = teleport_id;
                    this.dismount_vehicle = dismount_vehicle;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(8+8+8+4+4+1+BufferAccess.getVarIntLength(this.teleport_id)+1);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeDouble(this.x);
                    bufAcc.writeDouble(this.y);
                    bufAcc.writeDouble(this.z);
                    bufAcc.writeFloat(this.yaw);
                    bufAcc.writeFloat(this.pitch);
                    bufAcc.writeInt8(this.flags);
                    bufAcc.writeVarInt(this.teleport_id);
                    bufAcc.writeBoolean(this.dismount_vehicle);
                    return buf;
                }
            },
            57: class UnlockRecipes extends ServerPacket {
                action: number;
                crafting_recipe_book_open: boolean;
                crafting_recipe_book_filter_active: boolean;
                smelting_recipe_book_open: boolean;
                smelting_recipe_book_filter_active: boolean;
                blast_furnace_recipe_book_open: boolean;
                blast_furnace_recipe_book_filter_active: boolean;
                smoker_recipe_book_open: boolean;
                smoker_recipe_book_filter_active: boolean;
                recipe_ids_1: string[];
                recipe_ids_2?: string[];

                constructor(action: number,crafting_recipe_book_open: boolean,crafting_recipe_book_filter_active: boolean,smelting_recipe_book_open: boolean,smelting_recipe_book_filter_active: boolean,blast_furnace_recipe_book_open: boolean,blast_furnace_recipe_book_filter_active: boolean,smoker_recipe_book_open: boolean,smoker_recipe_book_filter_active: boolean,recipe_ids_1: string[],recipe_ids_2?: string[]) {
                    super(57);
                    this.action = action;
                    this.crafting_recipe_book_open = crafting_recipe_book_open;
                    this.crafting_recipe_book_filter_active = crafting_recipe_book_filter_active;
                    this.smelting_recipe_book_open = smelting_recipe_book_open;
                    this.smelting_recipe_book_filter_active = smelting_recipe_book_filter_active;
                    this.blast_furnace_recipe_book_open = blast_furnace_recipe_book_open;
                    this.blast_furnace_recipe_book_filter_active = blast_furnace_recipe_book_filter_active;
                    this.smoker_recipe_book_open = smoker_recipe_book_open;
                    this.smoker_recipe_book_filter_active = smelting_recipe_book_filter_active;
                    this.recipe_ids_1 = recipe_ids_1;
                    this.recipe_ids_2 = recipe_ids_2;
                }

                public Serealize(): Buffer {
                    let s = BufferAccess.getVarIntLength(this.action)+1+1+1+1+1+1+1+1+BufferAccess.getVarIntLength(this.recipe_ids_1.length);
                    for(const id of this.recipe_ids_1) {
                        s += BufferAccess.getVarIntLength(Buffer.byteLength(id));
                        s += Buffer.byteLength(id);
                    }
                    if(this.action == 0) {
                        if(!this.recipe_ids_2) {
                            throw new Error("recipe_ids_2 is undefined!");
                        }
                        s += BufferAccess.getVarIntLength(this.recipe_ids_2.length);
                        for(const id of this.recipe_ids_2) {
                            s += BufferAccess.getVarIntLength(Buffer.byteLength(id));
                            s += Buffer.byteLength(id);
                        }
                    }
                    const buf = Buffer.allocUnsafe(s);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeVarInt(this.action);
                    bufAcc.writeBoolean(this.crafting_recipe_book_open);
                    bufAcc.writeBoolean(this.crafting_recipe_book_filter_active);
                    bufAcc.writeBoolean(this.smelting_recipe_book_open);
                    bufAcc.writeBoolean(this.smelting_recipe_book_filter_active);
                    bufAcc.writeBoolean(this.blast_furnace_recipe_book_open);
                    bufAcc.writeBoolean(this.blast_furnace_recipe_book_filter_active);
                    bufAcc.writeBoolean(this.smoker_recipe_book_open);
                    bufAcc.writeBoolean(this.smoker_recipe_book_filter_active);
                    bufAcc.writeVarInt(this.recipe_ids_1.length);
                    for(const id of this.recipe_ids_1) {
                        bufAcc.writeString(id);
                    }
                    if(this.action == 0) {
                        bufAcc.writeVarInt((this.recipe_ids_2 as string[]).length);
                        for(const id of (this.recipe_ids_2 as string[])) {
                            bufAcc.writeString(id);
                        }
                    }
                    return buf;
                }
            },
            72: class HeldItemChange extends ServerPacket {
                slot: number;

                constructor(slot: number) {
                    super(72);
                    this.slot = slot;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(1);
                    buf.writeUInt8(this.slot, 0);
                    return buf;
                }
            },
            73: class UpdateViewPosition extends ServerPacket {
                chunk_x: number;
                chunk_z: number;

                constructor(chunk_x: number, chunk_z: number) {
                    super(73);
                    this.chunk_x = chunk_x;
                    this.chunk_z = chunk_z;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(BufferAccess.getVarIntLength(this.chunk_x)+BufferAccess.getVarIntLength(this.chunk_z));
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeVarInt(this.chunk_x);
                    bufAcc.writeVarInt(this.chunk_z);
                    return buf;
                }
            },
            102: class DeclareRecipes extends ServerPacket {
                recipes: {
                    type: string,
                    recipe_id: string,
                    data?: any
                }[];

                constructor(recipes: {type: string,recipe_id: string,data?: any}[]) {
                    super(102);
                    this.recipes = recipes;
                }

                public Serealize(): Buffer {
                    const buf = Buffer.allocUnsafe(BufferAccess.getVarIntLength(this.recipes.length));
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeVarInt(this.recipes.length);
                    for(const recipe of this.recipes) {
                        bufAcc.writeString(recipe.type);
                        bufAcc.writeString(recipe.recipe_id);
                        //TODO: data
                    }
                    return buf;
                }
            },
            103: class Tags extends ServerPacket {
                tags: {
                    tag_type: string,
                    tag_ar: {
                        tag_name: string,
                        entries: number[]
                    }[]
                }[]

                constructor(tags: {
                    tag_type: string,
                    tag_ar: {
                        tag_name: string,
                        entries: number[]
                    }[]
                }[]) {
                    super(103);
                    this.tags = tags;
                }

                public Serealize(): Buffer {
                    let s = BufferAccess.getVarIntLength(this.tags.length);
                    for(const tag of this.tags) {
                        s += BufferAccess.getVarIntLength(Buffer.byteLength(tag.tag_type));
                        s += Buffer.byteLength(tag.tag_type);
                        s += BufferAccess.getVarIntLength(tag.tag_ar.length);
                        for(const tag1 of tag.tag_ar) {
                            s += BufferAccess.getVarIntLength(Buffer.byteLength(tag1.tag_name));
                            s += Buffer.byteLength(tag1.tag_name);
                            s += BufferAccess.getVarIntLength(tag1.entries.length)
                            for(const entry of tag1.entries) {
                                s += BufferAccess.getVarIntLength(entry);
                            }
                        }
                    }
                    const buf = Buffer.allocUnsafe(s);
                    const bufAcc = new BufferAccess(buf);
                    bufAcc.writeVarInt(this.tags.length);
                    for(const tag of this.tags) {
                        bufAcc.writeString(tag.tag_type);
                        bufAcc.writeVarInt(tag.tag_ar.length);
                        for(const tag1 of tag.tag_ar) {
                            bufAcc.writeString(tag1.tag_name);
                            bufAcc.writeVarInt(tag1.entries.length);
                            for(const entry of tag1.entries) {
                                bufAcc.writeVarInt(entry);
                            }
                        }
                    }
                    return buf;
                }
            }
        }
    }
}

export {packets};