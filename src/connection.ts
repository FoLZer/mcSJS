import net from "net";
import crypto from "crypto";
import UUID from "uuid-1345"
import BufferAccess from "./buffer/BufferAccess";
import { packets, ClientPacket, ServerPacket } from "./packets";
import { NBT_Tag_Byte, NBT_Tag_Compound, NBT_Tag_Double, NBT_Tag_Float, NBT_Tag_Int, NBT_Tag_List, NBT_Tag_Long, NBT_Tag_Long_Array, NBT_Tag_String } from "./NBT";
import EventEmitter from "events";
import { ConnectionState, Difficulty, Entity_status, NBT_Tag_type } from "./Enums";
import { Player } from "./structures/Player";
import { Chunk } from "./structures/Chunk";
import { commands, tags } from "./const_data";

const key_pair = crypto.generateKeyPairSync("rsa" as any, {
    modulusLength: 1024,
    publicKeyEncoding: {
        type: "spki",
        format: "der"
    }
});

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
        new NBT_Tag_List("value", NBT_Tag_type.TAG_Compound, [
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
        new NBT_Tag_List("value", NBT_Tag_type.TAG_Compound, [
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

class ExternalResolvePromise {
    public resolve!: (value: any) => void;
    public reject!: (reason?: any) => void;
    public promise: Promise<any>;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}

export default class Connection extends EventEmitter {
    private socket: net.Socket;
    private state;
    username?: string;
    loginResp?: {
        id: string,
        name: string,
        properties: {
            name: string,
            value: string,
            signature: string
        }[]
    };
    connection_id: number;
    private buffer: Buffer;
    private current_packet_length = -1;
    private reading_queue: ExternalResolvePromise[] = [];

    constructor(socket: net.Socket, connection_id: number) {
        super();
        this.socket = socket;
        this.state = ConnectionState.Handshake;
        this.connection_id = connection_id;
        this.buffer = Buffer.allocUnsafe(0);

        this.socket.on("data", (data) => {
            this.buffer = Buffer.concat([this.buffer,data]);
            this.tryReadingPackets();
        })
        this.socket.on("close", () => this.disconnect())

        //this.initiateConnection();
    }

    public getId() {
        return this.connection_id;
    }

    private disconnect() {
        this.socket.end();
        this.socket.destroy();
        this.emit("disconnect");
        for(const event_names of this.eventNames()) {
            this.removeAllListeners(event_names);
        }
    }

    private readPacket(buf: Buffer): ClientPacket {
        console.log("read_packet", buf);
        const bufAcc = new BufferAccess(buf);
        const id = bufAcc.readVarInt();
        const rawdata = buf.slice(bufAcc.getPos());
        //@ts-ignore
        return new packets["Client"][ConnectionState[this.state]][id](rawdata);
    }

    private async tryReadingPackets() {
        let promise;
        if(this.reading_queue.length == 0) {
            promise = new ExternalResolvePromise();
            this.reading_queue.push(promise);
        } else {
            const prev_promise = this.reading_queue[this.reading_queue.length-1];
            promise = new ExternalResolvePromise();
            this.reading_queue.push(promise);
            await prev_promise.promise;
        }
        if(this.current_packet_length < 0) {
            try {
                const bufAcc = new BufferAccess(this.buffer);
                this.current_packet_length = bufAcc.readVarInt();
            } catch(e) {
                promise.resolve(null);
                return;
            }
        }
        if(this.buffer.byteLength >= this.current_packet_length) {
            const s = BufferAccess.getVarIntLength(this.current_packet_length);
            const buf = this.buffer.slice(s,s+this.current_packet_length);
            const packet = this.readPacket(buf);
            this.onPacket(packet);
            this.buffer = this.buffer.slice(s+this.current_packet_length);
            this.current_packet_length = -1;
            if(this.buffer.byteLength > this.current_packet_length) {
                this.tryReadingPackets();
            }
        }
        
        promise.resolve(null);
    }

    private sendPacket(packet: ServerPacket) {
        if(this.socket.destroyed) {
            return;
        }
        const data = packet.Serealize();
        const id_length = BufferAccess.getVarIntLength(packet.getId());
        const length_size = BufferAccess.getVarIntLength(data.byteLength+id_length);
        const buf = Buffer.alloc(length_size+id_length+data.byteLength);
        const bufAcc = new BufferAccess(buf);
        bufAcc.writeVarInt(data.byteLength+id_length);
        bufAcc.writeVarInt(packet.getId());
        bufAcc.writeBuf(data);
        return new Promise((resolve) => {
            console.log("write_packet", buf);
            this.socket.write(buf, () => {resolve(null)});
        });
    }

    private async onPacket(packet: ClientPacket) {
        switch(this.state) {
            case ConnectionState.Handshake: {
                switch(packet.getId()) {
                    case 0: {
                        const next_state = (packet as any).next_state as number;
                        if(next_state != 1 && next_state != 2) {
                            this.disconnect();
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
                        await this.sendPacket(new packets.Server.Status[0]());
                        break;
                    }
                    case 1: {
                        await this.sendPacket(new packets.Server.Status[1]((packet as any).payload));
                        this.disconnect();
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
                        const uuid = UUID.v3({"name": this.username, "namespace": "d8238f96-d2e9-472e-bfca-78f34fa44e9f"})
                        await this.sendPacket(new packets.Server.Login[2](uuid, this.username));
                        this.emit("login_done", this.username, uuid);
                        break;
                        /*
                        const verify_token = Buffer.alloc(4);
                        verify_token.writeUInt32LE(Math.random() * 4294967295);
                        this.sendPacket(new packets.Server.Login[1]("", key_pair.publicKey as unknown as Buffer, verify_token));
                        */
                        break;
                    }
                    case 1: {
                        /*
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
                        */
                        break;
                    }
                }
                break;
            }
        }
    }

    public async sendJoinGame() {
        return this.sendPacket(new packets.Server.Play[38](
            0,false,0,-1,["minecraft:overworld"],dimension_codec,
            (((
                dimension_codec.getTagByName("minecraft:dimension_type") as NBT_Tag_Compound)
            .getTagByName("value") as NBT_Tag_List)
            .getI(0) as NBT_Tag_Compound)
            .getTagByName("element") as NBT_Tag_Compound,
            "minecraft:overworld",0n,100,3,3,false,true,false,false
        ));
    }

    public async sendServerBrand() {
        return this.sendPacket(new packets.Server.Play[24]("minecraft:brand",Buffer.from("mcSJS") as any));
    }

    public async sendDifficulty(difficulty: Difficulty) {
        return this.sendPacket(new packets.Server.Play[14](difficulty,true));
    }

    public async sendPlayerAbilities() {
        return this.sendPacket(new packets.Server.Play[50](false, false, false, false, 0.05, 0.1));
    }

    public async sendChangeSlotSelection(slot: number) {
        if(slot < 0 || slot > 8) {
            throw new Error("Slot is out of range");
        }
        slot = Math.round(slot);
        return this.sendPacket(new packets.Server.Play[72](slot));
    }

    public async sendPlayerPosAndLook() {
        return this.sendPacket(new packets.Server.Play[56](0,80,0,0,0,0,1,false));
    }

    public async addPlayerToTab(player: Player) {
        return this.sendPacket(new packets.Server.Play[54](0,[
            {
                uuid: player.getUUID(),
                name: player.getName(),
                properties: [],
                gamemode: player.getGamemode(),
                ping: -1,
                has_display_name: !!player.getDisplayName(),
                display_name: player.getDisplayName()
            }
        ]));
    }

    public async removePlayerFromTab(player: Player) {
        return this.sendPacket(new packets.Server.Play[54](4,[
            {
                uuid: player.getUUID(),
            }
        ]));
    }

    public async updateViewPosition() {
        return this.sendPacket(new packets.Server.Play[73](0,0));
    }

    public async sendChunkDataAndLight(chunk: Chunk) {
        return this.sendPacket(new packets.Server.Play[34](
            0,0,
            chunk.getHeightmap(),
            chunk.getChunkData(),[],true,[],[],[],[],[],[]
        ));
    }

    public async sendSpawnPosition() {
        return this.sendPacket(new packets.Server.Play[75](0,80,0,0));
    }

    public async sendRecipies() {
        return this.sendPacket(new packets.Server.Play[102]([]));
    }

    public async sendTags() {
        return this.sendPacket(new packets.Server.Play[103](tags));
    }

    public async sendEntityStatus(entity_id: number, entity_status: Entity_status) {
        return this.sendPacket(new packets.Server.Play[27](entity_id,entity_status))
    }

    public async sendInitInventory() {
        return this.sendPacket(new packets.Server.Play[20](0,0,new Array(46).fill({present: false}),{present: false}))
    }

    public async sendCommands() {
        return this.sendPacket(new packets.Server.Play[18](commands, 0));
    }

    public async sendUnlockRecipies() {
        return this.sendPacket(new packets.Server.Play[57](0,false,false,false,false,false,false,false,false,[],[]));
    }

    public async sendUpdateTime() {
        return this.sendPacket(new packets.Server.Play[89](0n,0n));
    }

    public async sendWorldBorderCenter() {
        return this.sendPacket(new packets.Server.Play[66](0,0));
    }
}