import BufferAccess from "./buffer/BufferAccess";
import UUID from "uuid-1345";
import { NBT_Tag_Compound } from "./NBT";

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
            }
        }
    }
}

export {packets};