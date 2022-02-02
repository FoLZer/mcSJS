import net from "net";
import Connection from "./connection";

const port = 25565;

let server: net.Server;

async function onConnect(socket: net.Socket) {
    const connection = new Connection(socket);
}

server = net.createServer(onConnect);

server.listen(port, () => {
    console.log("Server started on port", port);
});