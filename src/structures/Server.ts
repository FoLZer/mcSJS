import { World } from "./World";
import net from "net";
import Connection from "../connection";
import { Player } from "./Player";
import { Difficulty, Dimensions } from "../Enums";

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
            connection.sendJoinGame();
            connection.sendServerBrand();
            connection.sendDifficulty(this.difficulty);
            connection.sendPlayerAbilities();
            connection.sendChangeSlotSelection(0);
            connection.sendPlayerPosAndLook();
            connection.addPlayerToTab(player);
            connection.addPlayerToTab(player);
            connection.updateViewPosition();
            for(let x=-2;x<=2;x++) {
                for(let z=-2;z<=2;z++) {
                    connection.sendChunkDataAndLight(await this.worlds[0].getChunkAt(x,z));
                }
            }
            connection.sendPlayerPosAndLook();
        });
    }
}