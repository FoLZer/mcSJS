import Connection from "../connection";

export class Player {
    connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
}