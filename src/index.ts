import { Server } from "./structures/Server";

const port = 25565;

process.on("uncaughtException", (error, origin) => {
    console.log(error, origin);
});
process.on("unhandledRejection", (reason, promise) => {
    console.log(reason, promise);
});

new Server(port);