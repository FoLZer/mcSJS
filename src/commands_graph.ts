enum Node_types {
    root,
    literal,
    argument
}

enum CommandParsers {
    bool = "brigadier:bool",
    double = "brigadier:double",
    float = "brigadier:float",
    integer = "brigadier:integer",
    long = "brigadier:long",
    string = "brigadier:string",
    entity = "minecraft:entity",
    game_profile = "minecraft:game_profile",
    block_pos = "minecraft:block_pos",
    column_pos = "minecraft:column_pos",
    vec3 = "minecraft:vec3",
    vec2 = "minecraft:vec2",
    block_state = "minecraft:block_state",
    block_predicate = "minecraft:block_predicate",
    color = "minecraft:color",
    component = "minecraft:component",
    message = "minecraft:message",
    nbt = "minecraft:nbt",
    nbt_path = "minecraft:nbt_path",
    objective = "minecraft:objective",
    objective_criteria = "minecraft:objective_criteria",
    operation = "minecraft:operation",
    particle = "minecraft:particle",
    rotation = "minecraft:rotation",
    angle = "minecraft:angle",
    scoreboard_slot = "minecraft:scoreboard_slot",
    score_holder = "minecraft:score_holder",
    swizzle = "minecraft:swizzle",
    team = "minecraft:team",
    item_slot = "minecraft:item_slot",
    resource_location = "minecraft:resource_location",
    mob_effect = "minecraft:mob_effect",
    function = "minecraft:function",
    entity_anchor = "minecraft:entity_anchor",
    range = "minecraft:range",
    int_range = "minecraft:int_range",
    float_range = "minecraft:float_range",
    item_enchantment = "minecraft:item_enchantment",
    entity_summon = "minecraft:entity_summon",
    dimension = "minecraft:dimension",
    uuid = "minecraft:uuid",
    nbt_tag = "minecraft:nbt_tag",
    nbt_compound_tag = "minecraft:nbt_compound_tag",
    time = "minecraft:time"
}

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