import { World } from "./World";
import net from "net";
import Connection from "../connection";
import { Player } from "./Player";
import { Difficulty, Dimensions, Entity_status } from "../Enums";

export class Server {
    _server: net.Server;
    worlds: World[];
    players: {[remoteAddress: string]: Player};
    difficulty: Difficulty;

    constructor(port: number) {
        this.worlds = [
            new World("world", Dimensions.Overworld),
            new World("world", Dimensions.Nether),
            new World("world", Dimensions.The_End)
        ];
        this.players = {};

        this.difficulty = Difficulty.Peaceful;

        this._server = net.createServer((socket: net.Socket) => {this.onConnection(socket)});

        this._server.listen(port, () => {
            console.log("Server started on port", port);
        });
    }

    private onConnection(socket: net.Socket) {
        if(!socket.remoteAddress) {
            return;
        }
        const connection_id = Object.keys(this.players).length;
        const connection = new Connection(socket, connection_id);
        const player = new Player(connection);
        this.players[socket.remoteAddress] = player;

        connection.once("disconnect", async () => {
            delete this.players[connection.getId()];
        })

        connection.once("login_done", async () => {
            await connection.sendJoinGame();
            //await connection.sendServerBrand();
            //await connection.sendDifficulty(this.difficulty);
            
            //await connection.sendPlayerAbilities();
            //await connection.sendChangeSlotSelection(0);
            //await connection.sendRecipies();
            //await connection.sendTags();
            await connection.sendEntityStatus(0,Entity_status.op_permission_level_0);
            await connection.sendPlayerPosAndLook();
            await connection.addPlayerToTab(player);
            await connection.addPlayerToTab(player);
            await connection.updateViewPosition();
            await connection.sendInitInventory();
            await connection.sendSpawnPosition();
            for(let x=-2;x<=2;x++) {
                for(let z=-2;z<=2;z++) {
                    await connection.sendChunkDataAndLight(await this.worlds[0].getChunkAt(x,z));
                }
            }
            await connection.sendPlayerPosAndLook();
        });
    }
}