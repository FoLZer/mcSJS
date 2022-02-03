import { CommandParsers } from "./Enums";

export type CommandNode = {
    flags: number,
    children: number[],
    redirect_node?: number,
    name?: string,
    parser?: CommandParsers,
    properties?: number,
    suggestions_type?: string
}

const commands: CommandNode[] = [
    {
        flags: 0x00,
        children: [1]
    },
    {
        flags: 0x01 & 0x04,
        children: [],
        name: "help"
    }
];

export default commands;