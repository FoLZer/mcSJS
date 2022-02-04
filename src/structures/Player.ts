import Connection from "../connection";
import { Gamemode } from "../Enums";

export class Player {
    private name!: string;
    private uuid!: string;
    private gamemode!: Gamemode;
    private display_name?: string;
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
        this.connection.once("login_done", (name, uuid) => {
            this.name = name;
            this.uuid = uuid;
        });
    }

    public getUUID() {
        return this.uuid;
    }

    public getName() {
        return this.name;
    }

    public getGamemode() {
        return this.gamemode;
    }

    public getDisplayName() {
        return this.display_name;
    }
}