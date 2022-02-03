import net from "net";
import Connection from "./connection";
import { Server } from "./structures/Server";

const port = 25565;

const server = new Server(port);