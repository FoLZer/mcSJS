import { Dimensions } from "./Enums";
import { Server } from "./structures/Server";
import { World } from "./structures/World";

const port = 25565;

new Server(port);

const w = new World("world", Dimensions.Overworld);
w.loadChunk(0,0); //TEST