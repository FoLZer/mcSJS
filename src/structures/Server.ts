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

        this._server = net.createServer(this.onConnection);

        this._server.listen(port, () => {
            console.log("Server started on port", port);
        });
    }

    private onConnection(socket: net.Socket) {
        if(!socket.remoteAddress) {
            return;
        }
        if(this.players[socket.remoteAddress]) {
            socket.end();
            socket.destroy();
            return;
        }
        const connection = new Connection(socket);
        const player = new Player(connection);
        this.players[socket.remoteAddress] = player;

        connection.once("login_done", () => {
            connection.sendJoinGame();
            connection.sendServerBrand();
            connection.sendDifficulty();
            connection.sendPlayerAbilities();
            connection.sendChangeSlot();
            connection.sendPlayerPosAndLook();
            connection.sendPlayerInfo();
            connection.sendPlayerInfo();
            connection.updateViewPosition();
            connection.sendChunkDataAndLight();
        });
    }
}