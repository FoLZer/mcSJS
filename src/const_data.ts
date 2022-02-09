import { CommandParsers } from "./Enums";

export const dimension_codec_snbt = `
{
    "minecraft:dimension_type": {
        type: "minecraft:dimension_type",
        value: [
            {
                name: "minecraft:overworld",
                id: 0,
                element: {
                    piglin_safe: 0b,
                    natural: 1b,
                    ambient_light: 0.0f,
                    infiniburn: "minecraft:infiniburn_overworld",
                    respawn_anchor_works: 0b,
                    has_skylight: 1b,
                    bed_works: 1b,
                    effects: "minecraft:overworld",
                    has_raids: 1b,
                    min_y: 0,
                    height: 256,
                    logical_height: 256,
                    coordinate_scale: 1.0d,
                    ultrawarm: 0b,
                    has_ceiling: 0b
                }
            },
            {
                name: "minecraft:overworld_caves",
                id: 1,
                element: {
                    piglin_safe: 0b,
                    natural: 1b,
                    ambient_light: 0.0f,
                    infiniburn: "minecraft:infiniburn_overworld",
                    respawn_anchor_works: 0b,
                    has_skylight: 1b,
                    bed_works: 1b,
                    effects: "minecraft:overworld",
                    has_raids: 1b,
                    min_y: 0,
                    height: 256,
                    logical_height: 256,
                    coordinate_scale: 1.0d,
                    ultrawarm: 0b,
                    has_ceiling: 1b
                }
            },
            {
                name: "minecraft:the_nether",
                id: 2,
                element: {
                    piglin_safe: 1b,
                    natural: 0b,
                    ambient_light: 0.1f,
                    infiniburn: "minecraft:infiniburn_nether",
                    respawn_anchor_works: 1b,
                    has_skylight: 0b,
                    bed_works: 0b,
                    effects: "minecraft:the_nether",
                    fixed_time: 18000L,
                    has_raids: 0b,
                    min_y: 0,
                    height: 256,
                    logical_height: 128,
                    coordinate_scale: 8.0d,
                    ultrawarm: 1b,
                    has_ceiling: 1b
                }
            },
            {
                name: "minecraft:the_end",
                id: 3,
                element: {
                    piglin_safe: 0b,
                    natural: 0b,
                    ambient_light: 0.0f,
                    infiniburn: "minecraft:infiniburn_end",
                    respawn_anchor_works: 0b,
                    has_skylight: 0b,
                    bed_works: 0b,
                    effects: "minecraft:the_end",
                    fixed_time: 6000L,
                    has_raids: 1b,
                    min_y: 0,
                    height: 256,
                    logical_height: 256,
                    coordinate_scale: 1.0d,
                    ultrawarm: 0b,
                    has_ceiling: 0b
                }
            }
        ]
    },
    "minecraft:worldgen/biome": {
        type: "minecraft:worldgen/biome",
        value: [
            {
                name: "minecraft:ocean",
                id: 0,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.0f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:plains",
                id: 1,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7907327,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.125f,
                    temperature: 0.8f,
                    scale: 0.05f,
                    downfall: 0.4f,
                    category: "plains"
                }
            },
            {
                name: "minecraft:desert",
                id: 2,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.125f,
                    temperature: 2.0f,
                    scale: 0.05f,
                    downfall: 0.0f,
                    category: "desert"
                }
            },
            {
                name: "minecraft:mountains",
                id: 3,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233727,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.0f,
                    temperature: 0.2f,
                    scale: 0.5f,
                    downfall: 0.3f,
                    category: "extreme_hills"
                }
            },
            {
                name: "minecraft:forest",
                id: 4,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7972607,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.7f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:taiga",
                id: 5,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233983,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.25f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:swamp",
                id: 6,
                element: {
                    precipitation: "rain",
                    effects: {
                        grass_color_modifier: "swamp",
                        sky_color: 7907327,
                        foliage_color: 6975545,
                        water_fog_color: 2302743,
                        fog_color: 12638463,
                        water_color: 6388580,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -0.2f,
                    temperature: 0.8f,
                    scale: 0.1f,
                    downfall: 0.9f,
                    category: "swamp"
                }
            },
            {
                name: "minecraft:river",
                id: 7,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -0.5f,
                    temperature: 0.5f,
                    scale: 0.0f,
                    downfall: 0.5f,
                    category: "river"
                }
            },
            {
                name: "minecraft:nether_wastes",
                id: 8,
                element: {
                    precipitation: "none",
                    effects: {
                        music: {
                            replace_current_music: 0b,
                            max_delay: 24000,
                            sound: "minecraft:music.nether.nether_wastes",
                            min_delay: 12000
                        },
                        sky_color: 7254527,
                        ambient_sound: "minecraft:ambient.nether_wastes.loop",
                        additions_sound: {
                            sound: "minecraft:ambient.nether_wastes.additions",
                            tick_chance: 0.0111d
                        },
                        water_fog_color: 329011,
                        fog_color: 3344392,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.nether_wastes.mood",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "nether"
                }
            },
            {
                name: "minecraft:the_end",
                id: 9,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 0,
                        water_fog_color: 329011,
                        fog_color: 10518688,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.5f,
                    scale: 0.2f,
                    downfall: 0.5f,
                    category: "the_end"
                }
            },
            {
                name: "minecraft:frozen_ocean",
                id: 10,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8364543,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 3750089,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.0f,
                    temperature: 0.0f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean",
                    temperature_modifier: "frozen"
                }
            },
            {
                name: "minecraft:frozen_river",
                id: 11,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8364543,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 3750089,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -0.5f,
                    temperature: 0.0f,
                    scale: 0.0f,
                    downfall: 0.5f,
                    category: "river"
                }
            },
            {
                name: "minecraft:snowy_tundra",
                id: 12,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8364543,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.125f,
                    temperature: 0.0f,
                    scale: 0.05f,
                    downfall: 0.5f,
                    category: "icy"
                }
            },
            {
                name: "minecraft:snowy_mountains",
                id: 13,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8364543,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.0f,
                    scale: 0.3f,
                    downfall: 0.5f,
                    category: "icy"
                }
            },
            {
                name: "minecraft:mushroom_fields",
                id: 14,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.9f,
                    scale: 0.3f,
                    downfall: 1.0f,
                    category: "mushroom"
                }
            },
            {
                name: "minecraft:mushroom_field_shore",
                id: 15,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.0f,
                    temperature: 0.9f,
                    scale: 0.025f,
                    downfall: 1.0f,
                    category: "mushroom"
                }
            },
            {
                name: "minecraft:beach",
                id: 16,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7907327,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.0f,
                    temperature: 0.8f,
                    scale: 0.025f,
                    downfall: 0.4f,
                    category: "beach"
                }
            },
            {
                name: "minecraft:desert_hills",
                id: 17,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 2.0f,
                    scale: 0.3f,
                    downfall: 0.0f,
                    category: "desert"
                }
            },
            {
                name: "minecraft:wooded_hills",
                id: 18,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7972607,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.7f,
                    scale: 0.3f,
                    downfall: 0.8f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:taiga_hills",
                id: 19,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233983,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.25f,
                    scale: 0.3f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:mountain_edge",
                id: 20,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233727,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.8f,
                    temperature: 0.2f,
                    scale: 0.3f,
                    downfall: 0.3f,
                    category: "extreme_hills"
                }
            },
            {
                name: "minecraft:jungle",
                id: 21,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.95f,
                    scale: 0.2f,
                    downfall: 0.9f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:jungle_hills",
                id: 22,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.95f,
                    scale: 0.3f,
                    downfall: 0.9f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:jungle_edge",
                id: 23,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.95f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:deep_ocean",
                id: 24,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.8f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:stone_shore",
                id: 25,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233727,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.2f,
                    scale: 0.8f,
                    downfall: 0.3f,
                    category: "none"
                }
            },
            {
                name: "minecraft:snowy_beach",
                id: 26,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8364543,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4020182,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.0f,
                    temperature: 0.05f,
                    scale: 0.025f,
                    downfall: 0.3f,
                    category: "beach"
                }
            },
            {
                name: "minecraft:birch_forest",
                id: 27,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8037887,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.6f,
                    scale: 0.2f,
                    downfall: 0.6f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:birch_forest_hills",
                id: 28,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8037887,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.6f,
                    scale: 0.3f,
                    downfall: 0.6f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:dark_forest",
                id: 29,
                element: {
                    precipitation: "rain",
                    effects: {
                        grass_color_modifier: "dark_forest",
                        sky_color: 7972607,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.7f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:snowy_taiga",
                id: 30,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8625919,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4020182,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: -0.5f,
                    scale: 0.2f,
                    downfall: 0.4f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:snowy_taiga_hills",
                id: 31,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8625919,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4020182,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: -0.5f,
                    scale: 0.3f,
                    downfall: 0.4f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:giant_tree_taiga",
                id: 32,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8168447,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.3f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:giant_tree_taiga_hills",
                id: 33,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8168447,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.3f,
                    scale: 0.3f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:wooded_mountains",
                id: 34,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233727,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.0f,
                    temperature: 0.2f,
                    scale: 0.5f,
                    downfall: 0.3f,
                    category: "extreme_hills"
                }
            },
            {
                name: "minecraft:savanna",
                id: 35,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7711487,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.125f,
                    temperature: 1.2f,
                    scale: 0.05f,
                    downfall: 0.0f,
                    category: "savanna"
                }
            },
            {
                name: "minecraft:savanna_plateau",
                id: 36,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7776511,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.5f,
                    temperature: 1.0f,
                    scale: 0.025f,
                    downfall: 0.0f,
                    category: "savanna"
                }
            },
            {
                name: "minecraft:badlands",
                id: 37,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        grass_color: 9470285,
                        foliage_color: 10387789,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "mesa"
                }
            },
            {
                name: "minecraft:wooded_badlands_plateau",
                id: 38,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        grass_color: 9470285,
                        foliage_color: 10387789,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.5f,
                    temperature: 2.0f,
                    scale: 0.025f,
                    downfall: 0.0f,
                    category: "mesa"
                }
            },
            {
                name: "minecraft:badlands_plateau",
                id: 39,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        grass_color: 9470285,
                        foliage_color: 10387789,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.5f,
                    temperature: 2.0f,
                    scale: 0.025f,
                    downfall: 0.0f,
                    category: "mesa"
                }
            },
            {
                name: "minecraft:small_end_islands",
                id: 40,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 0,
                        water_fog_color: 329011,
                        fog_color: 10518688,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.5f,
                    scale: 0.2f,
                    downfall: 0.5f,
                    category: "the_end"
                }
            },
            {
                name: "minecraft:end_midlands",
                id: 41,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 0,
                        water_fog_color: 329011,
                        fog_color: 10518688,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.5f,
                    scale: 0.2f,
                    downfall: 0.5f,
                    category: "the_end"
                }
            },
            {
                name: "minecraft:end_highlands",
                id: 42,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 0,
                        water_fog_color: 329011,
                        fog_color: 10518688,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.5f,
                    scale: 0.2f,
                    downfall: 0.5f,
                    category: "the_end"
                }
            },
            {
                name: "minecraft:end_barrens",
                id: 43,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 0,
                        water_fog_color: 329011,
                        fog_color: 10518688,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.5f,
                    scale: 0.2f,
                    downfall: 0.5f,
                    category: "the_end"
                }
            },
            {
                name: "minecraft:warm_ocean",
                id: 44,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 270131,
                        fog_color: 12638463,
                        water_color: 4445678,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.0f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:lukewarm_ocean",
                id: 45,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 267827,
                        fog_color: 12638463,
                        water_color: 4566514,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.0f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:cold_ocean",
                id: 46,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4020182,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.0f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:deep_warm_ocean",
                id: 47,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 270131,
                        fog_color: 12638463,
                        water_color: 4445678,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.8f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:deep_lukewarm_ocean",
                id: 48,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 267827,
                        fog_color: 12638463,
                        water_color: 4566514,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.8f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:deep_cold_ocean",
                id: 49,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4020182,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.8f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean"
                }
            },
            {
                name: "minecraft:deep_frozen_ocean",
                id: 50,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 3750089,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -1.8f,
                    temperature: 0.5f,
                    scale: 0.1f,
                    downfall: 0.5f,
                    category: "ocean",
                    temperature_modifier: "frozen"
                }
            },
            {
                name: "minecraft:the_void",
                id: 127,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 8103167,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.5f,
                    scale: 0.2f,
                    downfall: 0.5f,
                    category: "none"
                }
            },
            {
                name: "minecraft:sunflower_plains",
                id: 129,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7907327,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.125f,
                    temperature: 0.8f,
                    scale: 0.05f,
                    downfall: 0.4f,
                    category: "plains"
                }
            },
            {
                name: "minecraft:desert_lakes",
                id: 130,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.225f,
                    temperature: 2.0f,
                    scale: 0.25f,
                    downfall: 0.0f,
                    category: "desert"
                }
            },
            {
                name: "minecraft:gravelly_mountains",
                id: 131,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233727,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.0f,
                    temperature: 0.2f,
                    scale: 0.5f,
                    downfall: 0.3f,
                    category: "extreme_hills"
                }
            },
            {
                name: "minecraft:flower_forest",
                id: 132,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7972607,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.7f,
                    scale: 0.4f,
                    downfall: 0.8f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:taiga_mountains",
                id: 133,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233983,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.3f,
                    temperature: 0.25f,
                    scale: 0.4f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:swamp_hills",
                id: 134,
                element: {
                    precipitation: "rain",
                    effects: {
                        grass_color_modifier: "swamp",
                        sky_color: 7907327,
                        foliage_color: 6975545,
                        water_fog_color: 2302743,
                        fog_color: 12638463,
                        water_color: 6388580,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: -0.1f,
                    temperature: 0.8f,
                    scale: 0.3f,
                    downfall: 0.9f,
                    category: "swamp"
                }
            },
            {
                name: "minecraft:ice_spikes",
                id: 140,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8364543,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.425f,
                    temperature: 0.0f,
                    scale: 0.45000002f,
                    downfall: 0.5f,
                    category: "icy"
                }
            },
            {
                name: "minecraft:modified_jungle",
                id: 149,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.95f,
                    scale: 0.4f,
                    downfall: 0.9f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:modified_jungle_edge",
                id: 151,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.95f,
                    scale: 0.4f,
                    downfall: 0.8f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:tall_birch_forest",
                id: 155,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8037887,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.6f,
                    scale: 0.4f,
                    downfall: 0.6f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:tall_birch_hills",
                id: 156,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8037887,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.55f,
                    temperature: 0.6f,
                    scale: 0.5f,
                    downfall: 0.6f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:dark_forest_hills",
                id: 157,
                element: {
                    precipitation: "rain",
                    effects: {
                        grass_color_modifier: "dark_forest",
                        sky_color: 7972607,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.7f,
                    scale: 0.4f,
                    downfall: 0.8f,
                    category: "forest"
                }
            },
            {
                name: "minecraft:snowy_taiga_mountains",
                id: 158,
                element: {
                    precipitation: "snow",
                    effects: {
                        sky_color: 8625919,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4020182,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.3f,
                    temperature: -0.5f,
                    scale: 0.4f,
                    downfall: 0.4f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:giant_spruce_taiga",
                id: 160,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233983,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.25f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:giant_spruce_taiga_hills",
                id: 161,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233983,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.2f,
                    temperature: 0.25f,
                    scale: 0.2f,
                    downfall: 0.8f,
                    category: "taiga"
                }
            },
            {
                name: "minecraft:modified_gravelly_mountains",
                id: 162,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 8233727,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.0f,
                    temperature: 0.2f,
                    scale: 0.5f,
                    downfall: 0.3f,
                    category: "extreme_hills"
                }
            },
            {
                name: "minecraft:shattered_savanna",
                id: 163,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7776767,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.3625f,
                    temperature: 1.1f,
                    scale: 1.225f,
                    downfall: 0.0f,
                    category: "savanna"
                }
            },
            {
                name: "minecraft:shattered_savanna_plateau",
                id: 164,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7776511,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 1.05f,
                    temperature: 1.0f,
                    scale: 1.2125001f,
                    downfall: 0.0f,
                    category: "savanna"
                }
            },
            {
                name: "minecraft:eroded_badlands",
                id: 165,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        grass_color: 9470285,
                        foliage_color: 10387789,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "mesa"
                }
            },
            {
                name: "minecraft:modified_wooded_badlands_plateau",
                id: 166,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        grass_color: 9470285,
                        foliage_color: 10387789,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 2.0f,
                    scale: 0.3f,
                    downfall: 0.0f,
                    category: "mesa"
                }
            },
            {
                name: "minecraft:modified_badlands_plateau",
                id: 167,
                element: {
                    precipitation: "none",
                    effects: {
                        sky_color: 7254527,
                        grass_color: 9470285,
                        foliage_color: 10387789,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 2.0f,
                    scale: 0.3f,
                    downfall: 0.0f,
                    category: "mesa"
                }
            },
            {
                name: "minecraft:bamboo_jungle",
                id: 168,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 0.95f,
                    scale: 0.2f,
                    downfall: 0.9f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:bamboo_jungle_hills",
                id: 169,
                element: {
                    precipitation: "rain",
                    effects: {
                        sky_color: 7842047,
                        water_fog_color: 329011,
                        fog_color: 12638463,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.cave",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.45f,
                    temperature: 0.95f,
                    scale: 0.3f,
                    downfall: 0.9f,
                    category: "jungle"
                }
            },
            {
                name: "minecraft:soul_sand_valley",
                id: 170,
                element: {
                    precipitation: "none",
                    effects: {
                        music: {
                            replace_current_music: 0b,
                            max_delay: 24000,
                            sound: "minecraft:music.nether.soul_sand_valley",
                            min_delay: 12000
                        },
                        sky_color: 7254527,
                        ambient_sound: "minecraft:ambient.soul_sand_valley.loop",
                        additions_sound: {
                            sound: "minecraft:ambient.soul_sand_valley.additions",
                            tick_chance: 0.0111d
                        },
                        particle: {
                            probability: 0.00625f,
                            options: {
                                type: "minecraft:ash"
                            }
                        },
                        water_fog_color: 329011,
                        fog_color: 1787717,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.soul_sand_valley.mood",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "nether"
                }
            },
            {
                name: "minecraft:crimson_forest",
                id: 171,
                element: {
                    precipitation: "none",
                    effects: {
                        music: {
                            replace_current_music: 0b,
                            max_delay: 24000,
                            sound: "minecraft:music.nether.crimson_forest",
                            min_delay: 12000
                        },
                        sky_color: 7254527,
                        ambient_sound: "minecraft:ambient.crimson_forest.loop",
                        additions_sound: {
                            sound: "minecraft:ambient.crimson_forest.additions",
                            tick_chance: 0.0111d
                        },
                        particle: {
                            probability: 0.025f,
                            options: {
                                type: "minecraft:crimson_spore"
                            }
                        },
                        water_fog_color: 329011,
                        fog_color: 3343107,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.crimson_forest.mood",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "nether"
                }
            },
            {
                name: "minecraft:warped_forest",
                id: 172,
                element: {
                    precipitation: "none",
                    effects: {
                        music: {
                            replace_current_music: 0b,
                            max_delay: 24000,
                            sound: "minecraft:music.nether.warped_forest",
                            min_delay: 12000
                        },
                        sky_color: 7254527,
                        ambient_sound: "minecraft:ambient.warped_forest.loop",
                        additions_sound: {
                            sound: "minecraft:ambient.warped_forest.additions",
                            tick_chance: 0.0111d
                        },
                        particle: {
                            probability: 0.01428f,
                            options: {
                                type: "minecraft:warped_spore"
                            }
                        },
                        water_fog_color: 329011,
                        fog_color: 1705242,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.warped_forest.mood",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "nether"
                }
            },
            {
                name: "minecraft:basalt_deltas",
                id: 173,
                element: {
                    precipitation: "none",
                    effects: {
                        music: {
                            replace_current_music: 0b,
                            max_delay: 24000,
                            sound: "minecraft:music.nether.basalt_deltas",
                            min_delay: 12000
                        },
                        sky_color: 7254527,
                        ambient_sound: "minecraft:ambient.basalt_deltas.loop",
                        additions_sound: {
                            sound: "minecraft:ambient.basalt_deltas.additions",
                            tick_chance: 0.0111d
                        },
                        particle: {
                            probability: 0.118093334f,
                            options: {
                                type: "minecraft:white_ash"
                            }
                        },
                        water_fog_color: 4341314,
                        fog_color: 6840176,
                        water_color: 4159204,
                        mood_sound: {
                            tick_delay: 6000,
                            offset: 2.0d,
                            sound: "minecraft:ambient.basalt_deltas.mood",
                            block_search_extent: 8
                        }
                    },
                    depth: 0.1f,
                    temperature: 2.0f,
                    scale: 0.2f,
                    downfall: 0.0f,
                    category: "nether"
                }
            }
        ]
    }
}
`

export const tags = [
	{
		"tag_type": "minecraft:entity_type",
		"tag_ar": [
			{
				"tag_name": "minecraft:freeze_hurts_extra_types",
				"entries": [
					88,
					6,
					48
				]
			},
			{
				"tag_name": "minecraft:axolotl_always_hostiles",
				"entries": [
					17,
					35,
					18
				]
			},
			{
				"tag_name": "minecraft:freeze_immune_entity_types",
				"entries": [
					87,
					68,
					82,
					102
				]
			},
			{
				"tag_name": "minecraft:impact_projectiles",
				"entries": [
					2,
					84,
					83,
					43,
					81,
					89,
					93,
					16,
					104
				]
			},
			{
				"tag_name": "minecraft:beehive_inhabitors",
				"entries": [
					5
				]
			},
			{
				"tag_name": "minecraft:skeletons",
				"entries": [
					78,
					87,
					103
				]
			},
			{
				"tag_name": "minecraft:raiders",
				"entries": [
					23,
					67,
					72,
					99,
					39,
					101
				]
			},
			{
				"tag_name": "minecraft:powder_snow_walkable_mobs",
				"entries": [
					71,
					22,
					77,
					29
				]
			},
			{
				"tag_name": "minecraft:axolotl_hunt_targets",
				"entries": [
					95,
					70,
					73,
					11,
					86,
					33
				]
			},
			{
				"tag_name": "minecraft:arrows",
				"entries": [
					2,
					84
				]
			}
		]
	},
	{
		"tag_type": "minecraft:game_event",
		"tag_ar": [
			{
				"tag_name": "minecraft:vibrations",
				"entries": [
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					12,
					13,
					14,
					15,
					16,
					17,
					18,
					19,
					20,
					21,
					22,
					23,
					24,
					25,
					26,
					27,
					28,
					29,
					30,
					31,
					32,
					33,
					34,
					35,
					36,
					37,
					38,
					39,
					40,
					41,
					42,
					43,
					44
				]
			},
			{
				"tag_name": "minecraft:ignore_vibrations_sneaking",
				"entries": [
					27,
					35,
					42,
					43
				]
			}
		]
	},
	{
		"tag_type": "minecraft:block",
		"tag_ar": [
			{
				"tag_name": "minecraft:soul_fire_base_blocks",
				"entries": [
					202,
					203
				]
			},
			{
				"tag_name": "minecraft:campfires",
				"entries": [
					694,
					695
				]
			},
			{
				"tag_name": "minecraft:infiniburn_nether",
				"entries": [
					201,
					517
				]
			},
			{
				"tag_name": "minecraft:wooden_slabs",
				"entries": [
					466,
					467,
					468,
					469,
					470,
					471,
					720,
					721
				]
			},
			{
				"tag_name": "minecraft:occludes_vibration_signals",
				"entries": [
					108,
					109,
					110,
					111,
					112,
					113,
					114,
					115,
					116,
					117,
					118,
					119,
					120,
					121,
					122,
					123
				]
			},
			{
				"tag_name": "minecraft:coal_ores",
				"entries": [
					35,
					36
				]
			},
			{
				"tag_name": "minecraft:small_flowers",
				"entries": [
					125,
					126,
					127,
					128,
					129,
					130,
					131,
					132,
					133,
					134,
					135,
					137,
					136
				]
			},
			{
				"tag_name": "minecraft:replaceable_plants",
				"entries": [
					101,
					102,
					103,
					257,
					258,
					424,
					425,
					426,
					427,
					428,
					429,
					869
				]
			},
			{
				"tag_name": "minecraft:azalea_root_replaceable",
				"entries": [
					1,
					2,
					4,
					6,
					817,
					871,
					860,
					859,
					9,
					8,
					11,
					10,
					262,
					870,
					865,
					196,
					30,
					28,
					421,
					356,
					357,
					358,
					359,
					360,
					361,
					362,
					363,
					364,
					365,
					366,
					367,
					368,
					369,
					370,
					371,
					29
				]
			},
			{
				"tag_name": "minecraft:wooden_trapdoors",
				"entries": [
					234,
					232,
					235,
					233,
					230,
					231,
					726,
					727
				]
			},
			{
				"tag_name": "minecraft:wolves_spawnable_on",
				"entries": [
					8,
					192,
					194
				]
			},
			{
				"tag_name": "minecraft:foxes_spawnable_on",
				"entries": [
					8,
					192,
					194,
					11,
					10
				]
			},
			{
				"tag_name": "minecraft:wool",
				"entries": [
					108,
					109,
					110,
					111,
					112,
					113,
					114,
					115,
					116,
					117,
					118,
					119,
					120,
					121,
					122,
					123
				]
			},
			{
				"tag_name": "minecraft:stairs",
				"entries": [
					152,
					287,
					288,
					289,
					388,
					389,
					730,
					731,
					171,
					280,
					266,
					261,
					260,
					509,
					353,
					465,
					398,
					397,
					399,
					641,
					642,
					643,
					644,
					645,
					646,
					647,
					648,
					649,
					650,
					651,
					652,
					653,
					654,
					758,
					766,
					769,
					873,
					877,
					881,
					885,
					832,
					833,
					834,
					835,
					849,
					850,
					851,
					848
				]
			},
			{
				"tag_name": "minecraft:logs",
				"entries": [
					43,
					55,
					48,
					61,
					38,
					50,
					49,
					56,
					42,
					54,
					47,
					60,
					40,
					52,
					45,
					58,
					41,
					53,
					46,
					59,
					39,
					51,
					44,
					57,
					706,
					707,
					708,
					709,
					697,
					698,
					699,
					700
				]
			},
			{
				"tag_name": "minecraft:beehives",
				"entries": [
					744,
					745
				]
			},
			{
				"tag_name": "minecraft:ice",
				"entries": [
					193,
					423,
					633,
					516
				]
			},
			{
				"tag_name": "minecraft:azalea_grows_on",
				"entries": [
					9,
					8,
					11,
					10,
					262,
					870,
					865,
					28,
					29,
					421,
					356,
					357,
					358,
					359,
					360,
					361,
					362,
					363,
					364,
					365,
					366,
					367,
					368,
					369,
					370,
					371,
					194,
					820
				]
			},
			{
				"tag_name": "minecraft:dragon_immune",
				"entries": [
					391,
					25,
					274,
					275,
					513,
					290,
					514,
					515,
					740,
					741,
					124,
					146,
					750,
					276,
					249,
					751
				]
			},
			{
				"tag_name": "minecraft:crops",
				"entries": [
					511,
					319,
					320,
					159,
					256,
					255
				]
			},
			{
				"tag_name": "minecraft:features_cannot_replace",
				"entries": [
					25,
					151,
					153,
					275
				]
			},
			{
				"tag_name": "minecraft:valid_spawn",
				"entries": [
					8,
					11
				]
			},
			{
				"tag_name": "minecraft:mushroom_grow_block",
				"entries": [
					262,
					11,
					710,
					701
				]
			},
			{
				"tag_name": "minecraft:wooden_doors",
				"entries": [
					168,
					499,
					500,
					501,
					502,
					503,
					734,
					735
				]
			},
			{
				"tag_name": "minecraft:crystal_sound_blocks",
				"entries": [
					811,
					812
				]
			},
			{
				"tag_name": "minecraft:warped_stems",
				"entries": [
					697,
					698,
					699,
					700
				]
			},
			{
				"tag_name": "minecraft:standing_signs",
				"entries": [
					162,
					163,
					164,
					165,
					166,
					167,
					736,
					737
				]
			},
			{
				"tag_name": "minecraft:infiniburn_end",
				"entries": [
					201,
					517,
					25
				]
			},
			{
				"tag_name": "minecraft:emerald_ores",
				"entries": [
					281,
					282
				]
			},
			{
				"tag_name": "minecraft:crimson_stems",
				"entries": [
					706,
					707,
					708,
					709
				]
			},
			{
				"tag_name": "minecraft:needs_stone_tool",
				"entries": [
					141,
					893,
					33,
					34,
					75,
					73,
					74,
					825,
					894,
					826,
					827,
					839,
					835,
					831,
					823,
					837,
					833,
					829,
					822,
					836,
					832,
					828,
					824,
					838,
					834,
					830,
					840,
					855,
					851,
					847,
					841,
					853,
					849,
					845,
					842,
					854,
					850,
					846,
					843,
					852,
					848,
					844,
					856
				]
			},
			{
				"tag_name": "minecraft:lava_pool_stone_cannot_replace",
				"entries": [
					25,
					151,
					153,
					275,
					65,
					62,
					63,
					67,
					66,
					64,
					68,
					69,
					43,
					55,
					48,
					61,
					38,
					50,
					49,
					56,
					42,
					54,
					47,
					60,
					40,
					52,
					45,
					58,
					41,
					53,
					46,
					59,
					39,
					51,
					44,
					57,
					706,
					707,
					708,
					709,
					697,
					698,
					699,
					700
				]
			},
			{
				"tag_name": "minecraft:inside_step_sound_blocks",
				"entries": [
					192,
					820
				]
			},
			{
				"tag_name": "minecraft:prevent_mob_spawning_inside",
				"entries": [
					170,
					97,
					98,
					354
				]
			},
			{
				"tag_name": "minecraft:terracotta",
				"entries": [
					421,
					356,
					357,
					358,
					359,
					360,
					361,
					362,
					363,
					364,
					365,
					366,
					367,
					368,
					369,
					370,
					371
				]
			},
			{
				"tag_name": "minecraft:wart_blocks",
				"entries": [
					518,
					703
				]
			},
			{
				"tag_name": "minecraft:climbable",
				"entries": [
					169,
					257,
					680,
					713,
					714,
					715,
					716,
					859,
					860
				]
			},
			{
				"tag_name": "minecraft:dark_oak_logs",
				"entries": [
					43,
					55,
					48,
					61
				]
			},
			{
				"tag_name": "minecraft:parrots_spawnable_on",
				"entries": [
					8,
					0,
					65,
					62,
					63,
					67,
					66,
					64,
					68,
					69,
					43,
					55,
					48,
					61,
					38,
					50,
					49,
					56,
					42,
					54,
					47,
					60,
					40,
					52,
					45,
					58,
					41,
					53,
					46,
					59,
					39,
					51,
					44,
					57,
					706,
					707,
					708,
					709,
					697,
					698,
					699,
					700
				]
			},
			{
				"tag_name": "minecraft:coral_plants",
				"entries": [
					607,
					608,
					609,
					610,
					611
				]
			},
			{
				"tag_name": "minecraft:non_flammable_wood",
				"entries": [
					697,
					698,
					699,
					700,
					706,
					707,
					708,
					709,
					718,
					719,
					720,
					721,
					722,
					723,
					724,
					725,
					726,
					727,
					728,
					729,
					730,
					731,
					732,
					733,
					734,
					735,
					736,
					737,
					738,
					739
				]
			},
			{
				"tag_name": "minecraft:goats_spawnable_on",
				"entries": [
					1,
					192,
					820,
					194,
					423,
					30
				]
			},
			{
				"tag_name": "minecraft:beacon_base_blocks",
				"entries": [
					748,
					286,
					157,
					140,
					141
				]
			},
			{
				"tag_name": "minecraft:shulker_boxes",
				"entries": [
					523,
					539,
					535,
					536,
					533,
					531,
					537,
					527,
					532,
					529,
					526,
					525,
					530,
					534,
					538,
					524,
					528
				]
			},
			{
				"tag_name": "minecraft:anvil",
				"entries": [
					339,
					340,
					341
				]
			},
			{
				"tag_name": "minecraft:birch_logs",
				"entries": [
					40,
					52,
					45,
					58
				]
			},
			{
				"tag_name": "minecraft:moss_replaceable",
				"entries": [
					1,
					2,
					4,
					6,
					817,
					871,
					860,
					859,
					9,
					8,
					11,
					10,
					262,
					870,
					865
				]
			},
			{
				"tag_name": "minecraft:lapis_ores",
				"entries": [
					73,
					74
				]
			},
			{
				"tag_name": "minecraft:wall_corals",
				"entries": [
					627,
					628,
					629,
					630,
					631
				]
			},
			{
				"tag_name": "minecraft:lush_ground_replaceable",
				"entries": [
					1,
					2,
					4,
					6,
					817,
					871,
					860,
					859,
					9,
					8,
					11,
					10,
					262,
					870,
					865,
					196,
					30,
					28
				]
			},
			{
				"tag_name": "minecraft:fences",
				"entries": [
					199,
					497,
					498,
					494,
					495,
					496,
					724,
					725,
					265
				]
			},
			{
				"tag_name": "minecraft:saplings",
				"entries": [
					19,
					20,
					21,
					22,
					23,
					24,
					862,
					863
				]
			},
			{
				"tag_name": "minecraft:mineable/pickaxe",
				"entries": [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					12,
					31,
					32,
					33,
					34,
					35,
					36,
					37,
					73,
					74,
					75,
					76,
					77,
					78,
					79,
					140,
					141,
					142,
					145,
					146,
					151,
					155,
					156,
					157,
					161,
					171,
					179,
					180,
					187,
					188,
					201,
					204,
					205,
					236,
					237,
					238,
					239,
					249,
					250,
					260,
					261,
					264,
					265,
					266,
					268,
					269,
					276,
					280,
					281,
					282,
					283,
					286,
					343,
					344,
					347,
					348,
					349,
					350,
					351,
					352,
					353,
					355,
					356,
					357,
					358,
					359,
					360,
					361,
					362,
					363,
					364,
					365,
					366,
					367,
					368,
					369,
					370,
					371,
					393,
					394,
					395,
					396,
					397,
					398,
					399,
					400,
					401,
					402,
					421,
					422,
					462,
					463,
					464,
					465,
					472,
					473,
					474,
					475,
					476,
					477,
					478,
					479,
					480,
					481,
					482,
					483,
					484,
					485,
					486,
					487,
					488,
					507,
					508,
					509,
					510,
					517,
					519,
					520,
					522,
					540,
					541,
					542,
					543,
					544,
					545,
					546,
					547,
					548,
					549,
					550,
					551,
					552,
					553,
					554,
					555,
					556,
					557,
					558,
					559,
					560,
					561,
					562,
					563,
					564,
					565,
					566,
					567,
					568,
					569,
					570,
					571,
					592,
					593,
					594,
					595,
					596,
					597,
					598,
					599,
					600,
					601,
					602,
					603,
					604,
					605,
					606,
					612,
					613,
					614,
					615,
					616,
					622,
					623,
					624,
					625,
					626,
					641,
					642,
					643,
					644,
					645,
					646,
					647,
					648,
					649,
					650,
					651,
					652,
					653,
					654,
					655,
					656,
					657,
					658,
					659,
					660,
					661,
					662,
					663,
					664,
					665,
					666,
					667,
					683,
					684,
					687,
					690,
					691,
					692,
					693,
					701,
					710,
					748,
					749,
					750,
					751,
					756,
					757,
					758,
					760,
					761,
					762,
					763,
					764,
					765,
					766,
					768,
					769,
					770,
					771,
					774,
					775,
					776,
					817,
					818,
					822,
					823,
					824,
					825,
					826,
					827,
					828,
					829,
					830,
					831,
					832,
					833,
					834,
					835,
					836,
					837,
					838,
					839,
					840,
					841,
					842,
					843,
					844,
					845,
					846,
					847,
					848,
					849,
					850,
					851,
					852,
					853,
					854,
					855,
					856,
					857,
					858,
					871,
					872,
					873,
					874,
					876,
					877,
					878,
					880,
					881,
					882,
					884,
					885,
					886,
					888,
					889,
					890,
					892,
					893,
					894,
					895,
					193,
					423,
					633,
					191,
					106,
					99,
					107,
					813,
					816,
					815,
					814,
					811,
					812,
					241,
					245,
					244,
					891,
					240,
					243,
					242,
					292,
					293,
					668,
					669,
					670,
					671,
					672,
					673,
					674,
					675,
					676,
					677,
					678,
					679,
					759,
					767,
					773,
					875,
					879,
					883,
					887,
					523,
					539,
					535,
					536,
					533,
					531,
					537,
					527,
					532,
					529,
					526,
					525,
					530,
					534,
					538,
					524,
					528,
					339,
					340,
					341,
					270,
					271,
					272,
					273,
					170,
					97,
					98,
					354,
					634
				]
			},
			{
				"tag_name": "minecraft:beds",
				"entries": [
					95,
					96,
					92,
					93,
					90,
					88,
					94,
					84,
					89,
					86,
					83,
					82,
					87,
					91,
					81,
					85
				]
			},
			{
				"tag_name": "minecraft:iron_ores",
				"entries": [
					33,
					34
				]
			},
			{
				"tag_name": "minecraft:oak_logs",
				"entries": [
					38,
					50,
					49,
					56
				]
			},
			{
				"tag_name": "minecraft:unstable_bottom_center",
				"entries": [
					492,
					490,
					493,
					491,
					259,
					489,
					728,
					729
				]
			},
			{
				"tag_name": "minecraft:doors",
				"entries": [
					168,
					499,
					500,
					501,
					502,
					503,
					734,
					735,
					180
				]
			},
			{
				"tag_name": "minecraft:enderman_holdable",
				"entries": [
					125,
					126,
					127,
					128,
					129,
					130,
					131,
					132,
					133,
					134,
					135,
					137,
					136,
					9,
					8,
					11,
					10,
					262,
					870,
					865,
					28,
					29,
					30,
					138,
					139,
					143,
					195,
					196,
					200,
					210,
					252,
					711,
					710,
					717,
					702,
					701,
					704
				]
			},
			{
				"tag_name": "minecraft:banners",
				"entries": [
					430,
					431,
					432,
					433,
					434,
					435,
					436,
					437,
					438,
					439,
					440,
					441,
					442,
					443,
					444,
					445,
					446,
					447,
					448,
					449,
					450,
					451,
					452,
					453,
					454,
					455,
					456,
					457,
					458,
					459,
					460,
					461
				]
			},
			{
				"tag_name": "minecraft:infiniburn_overworld",
				"entries": [
					201,
					517
				]
			},
			{
				"tag_name": "minecraft:flower_pots",
				"entries": [
					294,
					303,
					304,
					305,
					306,
					307,
					308,
					309,
					310,
					311,
					302,
					295,
					296,
					297,
					298,
					299,
					300,
					315,
					316,
					317,
					301,
					318,
					312,
					313,
					314,
					637,
					752,
					753,
					754,
					755,
					896,
					897
				]
			},
			{
				"tag_name": "minecraft:wooden_fences",
				"entries": [
					199,
					497,
					498,
					494,
					495,
					496,
					724,
					725
				]
			},
			{
				"tag_name": "minecraft:piglin_repellents",
				"entries": [
					150,
					206,
					693,
					207,
					695
				]
			},
			{
				"tag_name": "minecraft:wall_post_override",
				"entries": [
					147,
					206,
					189,
					285,
					162,
					163,
					164,
					165,
					166,
					167,
					736,
					737,
					172,
					173,
					174,
					175,
					176,
					177,
					738,
					739,
					430,
					431,
					432,
					433,
					434,
					435,
					436,
					437,
					438,
					439,
					440,
					441,
					442,
					443,
					444,
					445,
					446,
					447,
					448,
					449,
					450,
					451,
					452,
					453,
					454,
					455,
					456,
					457,
					458,
					459,
					460,
					461,
					343,
					344,
					181,
					182,
					183,
					184,
					185,
					186,
					722,
					723,
					179,
					771
				]
			},
			{
				"tag_name": "minecraft:mooshrooms_spawnable_on",
				"entries": [
					262
				]
			},
			{
				"tag_name": "minecraft:portals",
				"entries": [
					209,
					274,
					513
				]
			},
			{
				"tag_name": "minecraft:bamboo_plantable_on",
				"entries": [
					28,
					29,
					9,
					8,
					11,
					10,
					262,
					870,
					865,
					636,
					635,
					30
				]
			},
			{
				"tag_name": "minecraft:cauldrons",
				"entries": [
					270,
					271,
					272,
					273
				]
			},
			{
				"tag_name": "minecraft:big_dripleaf_placeable",
				"entries": [
					196,
					865,
					9,
					8,
					11,
					10,
					262,
					870,
					160
				]
			},
			{
				"tag_name": "minecraft:pressure_plates",
				"entries": [
					343,
					344,
					181,
					182,
					183,
					184,
					185,
					186,
					722,
					723,
					179,
					771
				]
			},
			{
				"tag_name": "minecraft:polar_bears_spawnable_on_in_frozen_ocean",
				"entries": [
					193
				]
			},
			{
				"tag_name": "minecraft:jungle_logs",
				"entries": [
					41,
					53,
					46,
					59
				]
			},
			{
				"tag_name": "minecraft:wooden_stairs",
				"entries": [
					152,
					287,
					288,
					289,
					388,
					389,
					730,
					731
				]
			},
			{
				"tag_name": "minecraft:spruce_logs",
				"entries": [
					39,
					51,
					44,
					57
				]
			},
			{
				"tag_name": "minecraft:signs",
				"entries": [
					162,
					163,
					164,
					165,
					166,
					167,
					736,
					737,
					172,
					173,
					174,
					175,
					176,
					177,
					738,
					739
				]
			},
			{
				"tag_name": "minecraft:base_stone_overworld",
				"entries": [
					1,
					2,
					4,
					6,
					817,
					871
				]
			},
			{
				"tag_name": "minecraft:carpets",
				"entries": [
					405,
					406,
					407,
					408,
					409,
					410,
					411,
					412,
					413,
					414,
					415,
					416,
					417,
					418,
					419,
					420
				]
			},
			{
				"tag_name": "minecraft:wooden_buttons",
				"entries": [
					321,
					322,
					323,
					324,
					325,
					326,
					732,
					733
				]
			},
			{
				"tag_name": "minecraft:axolotls_spawnable_on",
				"entries": [
					196
				]
			},
			{
				"tag_name": "minecraft:wither_summon_base_blocks",
				"entries": [
					202,
					203
				]
			},
			{
				"tag_name": "minecraft:dripstone_replaceable_blocks",
				"entries": [
					1,
					2,
					4,
					6,
					817,
					871,
					9
				]
			},
			{
				"tag_name": "minecraft:stone_bricks",
				"entries": [
					236,
					237,
					238,
					239
				]
			},
			{
				"tag_name": "minecraft:hoglin_repellents",
				"entries": [
					702,
					753,
					209,
					751
				]
			},
			{
				"tag_name": "minecraft:fire",
				"entries": [
					149,
					150
				]
			},
			{
				"tag_name": "minecraft:mineable/axe",
				"entries": [
					80,
					254,
					253,
					862,
					636,
					682,
					744,
					745,
					511,
					867,
					866,
					144,
					246,
					138,
					694,
					319,
					685,
					210,
					860,
					859,
					153,
					506,
					505,
					279,
					742,
					158,
					711,
					346,
					103,
					102,
					686,
					258,
					101,
					869,
					211,
					198,
					169,
					429,
					688,
					263,
					681,
					256,
					252,
					248,
					267,
					320,
					255,
					200,
					247,
					139,
					680,
					868,
					689,
					695,
					861,
					197,
					696,
					428,
					342,
					716,
					715,
					257,
					702,
					714,
					713,
					159,
					430,
					431,
					432,
					433,
					434,
					435,
					436,
					437,
					438,
					439,
					440,
					441,
					442,
					443,
					444,
					445,
					446,
					447,
					448,
					449,
					450,
					451,
					452,
					453,
					454,
					455,
					456,
					457,
					458,
					459,
					460,
					461,
					492,
					490,
					493,
					491,
					259,
					489,
					728,
					729,
					43,
					55,
					48,
					61,
					38,
					50,
					49,
					56,
					42,
					54,
					47,
					60,
					40,
					52,
					45,
					58,
					41,
					53,
					46,
					59,
					39,
					51,
					44,
					57,
					706,
					707,
					708,
					709,
					697,
					698,
					699,
					700,
					13,
					14,
					15,
					16,
					17,
					18,
					718,
					719,
					19,
					20,
					21,
					22,
					23,
					24,
					863,
					162,
					163,
					164,
					165,
					166,
					167,
					736,
					737,
					172,
					173,
					174,
					175,
					176,
					177,
					738,
					739,
					321,
					322,
					323,
					324,
					325,
					326,
					732,
					733,
					168,
					499,
					500,
					501,
					502,
					503,
					734,
					735,
					199,
					497,
					498,
					494,
					495,
					496,
					724,
					725,
					181,
					182,
					183,
					184,
					185,
					186,
					722,
					723,
					466,
					467,
					468,
					469,
					470,
					471,
					720,
					721,
					152,
					287,
					288,
					289,
					388,
					389,
					730,
					731,
					234,
					232,
					235,
					233,
					230,
					231,
					726,
					727
				]
			},
			{
				"tag_name": "minecraft:needs_diamond_tool",
				"entries": [
					146,
					750,
					748,
					751,
					749
				]
			},
			{
				"tag_name": "minecraft:base_stone_nether",
				"entries": [
					201,
					204,
					757
				]
			},
			{
				"tag_name": "minecraft:wall_signs",
				"entries": [
					172,
					173,
					174,
					175,
					176,
					177,
					738,
					739
				]
			},
			{
				"tag_name": "minecraft:slabs",
				"entries": [
					466,
					467,
					468,
					469,
					470,
					471,
					720,
					721,
					472,
					473,
					479,
					474,
					484,
					481,
					482,
					478,
					477,
					480,
					476,
					400,
					401,
					402,
					655,
					656,
					657,
					658,
					659,
					660,
					661,
					662,
					663,
					664,
					665,
					666,
					667,
					475,
					483,
					760,
					765,
					770,
					874,
					878,
					882,
					886,
					853,
					854,
					855,
					836,
					837,
					838,
					839,
					852
				]
			},
			{
				"tag_name": "minecraft:animals_spawnable_on",
				"entries": [
					8
				]
			},
			{
				"tag_name": "minecraft:guarded_by_piglins",
				"entries": [
					140,
					682,
					153,
					283,
					768,
					342,
					895,
					523,
					539,
					535,
					536,
					533,
					531,
					537,
					527,
					532,
					529,
					526,
					525,
					530,
					534,
					538,
					524,
					528,
					31,
					37,
					32
				]
			},
			{
				"tag_name": "minecraft:mineable/shovel",
				"entries": [
					196,
					9,
					10,
					11,
					160,
					8,
					30,
					262,
					28,
					29,
					194,
					192,
					202,
					512,
					572,
					573,
					574,
					575,
					576,
					577,
					578,
					579,
					580,
					581,
					582,
					583,
					584,
					585,
					586,
					587,
					203,
					870
				]
			},
			{
				"tag_name": "minecraft:stone_ore_replaceables",
				"entries": [
					1,
					2,
					4,
					6
				]
			},
			{
				"tag_name": "minecraft:trapdoors",
				"entries": [
					234,
					232,
					235,
					233,
					230,
					231,
					726,
					727,
					393
				]
			},
			{
				"tag_name": "minecraft:redstone_ores",
				"entries": [
					187,
					188
				]
			},
			{
				"tag_name": "minecraft:flowers",
				"entries": [
					125,
					126,
					127,
					128,
					129,
					130,
					131,
					132,
					133,
					134,
					135,
					137,
					136,
					424,
					425,
					427,
					426,
					69,
					863
				]
			},
			{
				"tag_name": "minecraft:corals",
				"entries": [
					607,
					608,
					609,
					610,
					611,
					617,
					618,
					619,
					620,
					621
				]
			},
			{
				"tag_name": "minecraft:buttons",
				"entries": [
					321,
					322,
					323,
					324,
					325,
					326,
					732,
					733,
					191,
					772
				]
			},
			{
				"tag_name": "minecraft:rabbits_spawnable_on",
				"entries": [
					8,
					192,
					194,
					28
				]
			},
			{
				"tag_name": "minecraft:planks",
				"entries": [
					13,
					14,
					15,
					16,
					17,
					18,
					718,
					719
				]
			},
			{
				"tag_name": "minecraft:soul_speed_blocks",
				"entries": [
					202,
					203
				]
			},
			{
				"tag_name": "minecraft:rails",
				"entries": [
					170,
					97,
					98,
					354
				]
			},
			{
				"tag_name": "minecraft:diamond_ores",
				"entries": [
					155,
					156
				]
			},
			{
				"tag_name": "minecraft:geode_invalid_blocks",
				"entries": [
					25,
					26,
					27,
					193,
					423,
					633
				]
			},
			{
				"tag_name": "minecraft:leaves",
				"entries": [
					65,
					62,
					63,
					67,
					66,
					64,
					68,
					69
				]
			},
			{
				"tag_name": "minecraft:deepslate_ore_replaceables",
				"entries": [
					871,
					817
				]
			},
			{
				"tag_name": "minecraft:walls",
				"entries": [
					292,
					293,
					668,
					669,
					670,
					671,
					672,
					673,
					674,
					675,
					676,
					677,
					678,
					679,
					759,
					767,
					773,
					875,
					879,
					883,
					887
				]
			},
			{
				"tag_name": "minecraft:cave_vines",
				"entries": [
					860,
					859
				]
			},
			{
				"tag_name": "minecraft:coral_blocks",
				"entries": [
					597,
					598,
					599,
					600,
					601
				]
			},
			{
				"tag_name": "minecraft:strider_warm_blocks",
				"entries": [
					27
				]
			},
			{
				"tag_name": "minecraft:fence_gates",
				"entries": [
					492,
					490,
					493,
					491,
					259,
					489,
					728,
					729
				]
			},
			{
				"tag_name": "minecraft:bee_growables",
				"entries": [
					511,
					319,
					320,
					159,
					256,
					255,
					696,
					859,
					860
				]
			},
			{
				"tag_name": "minecraft:wooden_pressure_plates",
				"entries": [
					181,
					182,
					183,
					184,
					185,
					186,
					722,
					723
				]
			},
			{
				"tag_name": "minecraft:wither_immune",
				"entries": [
					391,
					25,
					274,
					275,
					513,
					290,
					514,
					515,
					740,
					741,
					124
				]
			},
			{
				"tag_name": "minecraft:acacia_logs",
				"entries": [
					42,
					54,
					47,
					60
				]
			},
			{
				"tag_name": "minecraft:candles",
				"entries": [
					777,
					778,
					779,
					780,
					781,
					782,
					783,
					784,
					785,
					786,
					787,
					788,
					789,
					790,
					791,
					792,
					793
				]
			},
			{
				"tag_name": "minecraft:tall_flowers",
				"entries": [
					424,
					425,
					427,
					426
				]
			},
			{
				"tag_name": "minecraft:underwater_bonemeals",
				"entries": [
					104,
					607,
					608,
					609,
					610,
					611,
					617,
					618,
					619,
					620,
					621,
					627,
					628,
					629,
					630,
					631
				]
			},
			{
				"tag_name": "minecraft:stone_pressure_plates",
				"entries": [
					179,
					771
				]
			},
			{
				"tag_name": "minecraft:impermeable",
				"entries": [
					72,
					214,
					215,
					216,
					217,
					218,
					219,
					220,
					221,
					222,
					223,
					224,
					225,
					226,
					227,
					228,
					229,
					819
				]
			},
			{
				"tag_name": "minecraft:sand",
				"entries": [
					28,
					29
				]
			},
			{
				"tag_name": "minecraft:snow",
				"entries": [
					192,
					194,
					820
				]
			},
			{
				"tag_name": "minecraft:nylium",
				"entries": [
					710,
					701
				]
			},
			{
				"tag_name": "minecraft:copper_ores",
				"entries": [
					826,
					827
				]
			},
			{
				"tag_name": "minecraft:gold_ores",
				"entries": [
					31,
					37,
					32
				]
			},
			{
				"tag_name": "minecraft:small_dripleaf_placeable",
				"entries": [
					196,
					865
				]
			},
			{
				"tag_name": "minecraft:logs_that_burn",
				"entries": [
					43,
					55,
					48,
					61,
					38,
					50,
					49,
					56,
					42,
					54,
					47,
					60,
					40,
					52,
					45,
					58,
					41,
					53,
					46,
					59,
					39,
					51,
					44,
					57
				]
			},
			{
				"tag_name": "minecraft:mineable/hoe",
				"entries": [
					518,
					703,
					404,
					590,
					743,
					712,
					70,
					71,
					65,
					62,
					63,
					67,
					66,
					64,
					68,
					69,
					821,
					865,
					864
				]
			},
			{
				"tag_name": "minecraft:dirt",
				"entries": [
					9,
					8,
					11,
					10,
					262,
					870,
					865
				]
			},
			{
				"tag_name": "minecraft:candle_cakes",
				"entries": [
					794,
					795,
					796,
					797,
					798,
					799,
					800,
					801,
					802,
					803,
					804,
					805,
					806,
					807,
					808,
					809,
					810
				]
			},
			{
				"tag_name": "minecraft:needs_iron_tool",
				"entries": [
					157,
					155,
					156,
					281,
					282,
					286,
					140,
					895,
					31,
					32,
					187,
					188
				]
			}
		]
	},
	{
		"tag_type": "minecraft:item",
		"tag_ar": [
			{
				"tag_name": "minecraft:soul_fire_base_blocks",
				"entries": [
					269,
					270
				]
			},
			{
				"tag_name": "minecraft:banners",
				"entries": [
					982,
					983,
					984,
					985,
					986,
					987,
					988,
					989,
					990,
					991,
					992,
					993,
					994,
					995,
					996,
					997
				]
			},
			{
				"tag_name": "minecraft:stone_crafting_materials",
				"entries": [
					21,
					1066,
					9
				]
			},
			{
				"tag_name": "minecraft:wooden_fences",
				"entries": [
					257,
					261,
					262,
					258,
					259,
					260,
					263,
					264
				]
			},
			{
				"tag_name": "minecraft:piglin_repellents",
				"entries": [
					274,
					1053,
					1057
				]
			},
			{
				"tag_name": "minecraft:beacon_payment_items",
				"entries": [
					697,
					687,
					686,
					696,
					692
				]
			},
			{
				"tag_name": "minecraft:wooden_slabs",
				"entries": [
					204,
					205,
					206,
					207,
					208,
					209,
					210,
					211
				]
			},
			{
				"tag_name": "minecraft:occludes_vibration_signals",
				"entries": [
					157,
					158,
					159,
					160,
					161,
					162,
					163,
					164,
					165,
					166,
					167,
					168,
					169,
					170,
					171,
					172
				]
			},
			{
				"tag_name": "minecraft:coal_ores",
				"entries": [
					40,
					41
				]
			},
			{
				"tag_name": "minecraft:small_flowers",
				"entries": [
					173,
					174,
					175,
					176,
					177,
					178,
					179,
					180,
					181,
					182,
					183,
					184,
					185
				]
			},
			{
				"tag_name": "minecraft:wooden_trapdoors",
				"entries": [
					645,
					643,
					646,
					644,
					641,
					642,
					647,
					648
				]
			},
			{
				"tag_name": "minecraft:jungle_logs",
				"entries": [
					104,
					128,
					112,
					120
				]
			},
			{
				"tag_name": "minecraft:lectern_books",
				"entries": [
					943,
					942
				]
			},
			{
				"tag_name": "minecraft:wooden_stairs",
				"entries": [
					244,
					318,
					319,
					320,
					391,
					392,
					321,
					322
				]
			},
			{
				"tag_name": "minecraft:spruce_logs",
				"entries": [
					102,
					126,
					110,
					118
				]
			},
			{
				"tag_name": "minecraft:signs",
				"entries": [
					768,
					769,
					770,
					772,
					771,
					773,
					774,
					775
				]
			},
			{
				"tag_name": "minecraft:axolotl_tempt_items",
				"entries": [
					786
				]
			},
			{
				"tag_name": "minecraft:carpets",
				"entries": [
					373,
					374,
					375,
					376,
					377,
					378,
					379,
					380,
					381,
					382,
					383,
					384,
					385,
					386,
					387,
					388
				]
			},
			{
				"tag_name": "minecraft:wool",
				"entries": [
					157,
					158,
					159,
					160,
					161,
					162,
					163,
					164,
					165,
					166,
					167,
					168,
					169,
					170,
					171,
					172
				]
			},
			{
				"tag_name": "minecraft:wooden_buttons",
				"entries": [
					611,
					612,
					613,
					614,
					615,
					616,
					617,
					618
				]
			},
			{
				"tag_name": "minecraft:stairs",
				"entries": [
					244,
					318,
					319,
					320,
					391,
					392,
					321,
					322,
					250,
					315,
					309,
					302,
					301,
					242,
					353,
					442,
					436,
					435,
					437,
					549,
					550,
					551,
					552,
					553,
					554,
					555,
					556,
					557,
					558,
					559,
					560,
					561,
					562,
					1068,
					1076,
					1072,
					563,
					564,
					566,
					565,
					80,
					79,
					78,
					77,
					95,
					94,
					93,
					96
				]
			},
			{
				"tag_name": "minecraft:fishes",
				"entries": [
					801,
					805,
					802,
					806,
					804,
					803
				]
			},
			{
				"tag_name": "minecraft:logs",
				"entries": [
					106,
					130,
					114,
					122,
					101,
					125,
					109,
					117,
					105,
					129,
					113,
					121,
					103,
					127,
					111,
					119,
					104,
					128,
					112,
					120,
					102,
					126,
					110,
					118,
					107,
					115,
					131,
					123,
					108,
					116,
					132,
					124
				]
			},
			{
				"tag_name": "minecraft:stone_bricks",
				"entries": [
					283,
					284,
					285,
					286
				]
			},
			{
				"tag_name": "minecraft:creeper_drop_music_discs",
				"entries": [
					1015,
					1016,
					1017,
					1018,
					1019,
					1020,
					1021,
					1022,
					1023,
					1024,
					1025,
					1026
				]
			},
			{
				"tag_name": "minecraft:arrows",
				"entries": [
					683,
					1007,
					1006
				]
			},
			{
				"tag_name": "minecraft:slabs",
				"entries": [
					204,
					205,
					206,
					207,
					208,
					209,
					210,
					211,
					212,
					213,
					219,
					214,
					224,
					221,
					222,
					218,
					217,
					220,
					216,
					225,
					226,
					227,
					567,
					568,
					569,
					570,
					571,
					572,
					573,
					574,
					575,
					576,
					577,
					578,
					579,
					215,
					223,
					1067,
					1075,
					1071,
					580,
					581,
					583,
					582,
					99,
					98,
					97,
					84,
					83,
					82,
					81,
					100
				]
			},
			{
				"tag_name": "minecraft:wooden_doors",
				"entries": [
					632,
					633,
					634,
					635,
					636,
					637,
					638,
					639
				]
			},
			{
				"tag_name": "minecraft:warped_stems",
				"entries": [
					108,
					116,
					132,
					124
				]
			},
			{
				"tag_name": "minecraft:emerald_ores",
				"entries": [
					50,
					51
				]
			},
			{
				"tag_name": "minecraft:trapdoors",
				"entries": [
					645,
					643,
					646,
					644,
					641,
					642,
					647,
					648,
					640
				]
			},
			{
				"tag_name": "minecraft:redstone_ores",
				"entries": [
					48,
					49
				]
			},
			{
				"tag_name": "minecraft:crimson_stems",
				"entries": [
					107,
					115,
					131,
					123
				]
			},
			{
				"tag_name": "minecraft:ignored_by_piglin_babies",
				"entries": [
					781
				]
			},
			{
				"tag_name": "minecraft:flowers",
				"entries": [
					173,
					174,
					175,
					176,
					177,
					178,
					179,
					180,
					181,
					182,
					183,
					184,
					185,
					394,
					395,
					397,
					396,
					140,
					153
				]
			},
			{
				"tag_name": "minecraft:buttons",
				"entries": [
					611,
					612,
					613,
					614,
					615,
					616,
					617,
					618,
					609,
					610
				]
			},
			{
				"tag_name": "minecraft:stone_tool_materials",
				"entries": [
					21,
					1066,
					9
				]
			},
			{
				"tag_name": "minecraft:terracotta",
				"entries": [
					389,
					354,
					355,
					356,
					357,
					358,
					359,
					360,
					361,
					362,
					363,
					364,
					365,
					366,
					367,
					368,
					369
				]
			},
			{
				"tag_name": "minecraft:planks",
				"entries": [
					22,
					23,
					24,
					25,
					26,
					27,
					28,
					29
				]
			},
			{
				"tag_name": "minecraft:fox_food",
				"entries": [
					1054,
					1055
				]
			},
			{
				"tag_name": "minecraft:boats",
				"entries": [
					670,
					671,
					672,
					673,
					674,
					675
				]
			},
			{
				"tag_name": "minecraft:dark_oak_logs",
				"entries": [
					106,
					130,
					114,
					122
				]
			},
			{
				"tag_name": "minecraft:rails",
				"entries": [
					659,
					657,
					658,
					660
				]
			},
			{
				"tag_name": "minecraft:diamond_ores",
				"entries": [
					54,
					55
				]
			},
			{
				"tag_name": "minecraft:non_flammable_wood",
				"entries": [
					108,
					116,
					132,
					124,
					107,
					115,
					131,
					123,
					28,
					29,
					210,
					211,
					629,
					630,
					263,
					264,
					647,
					648,
					655,
					656,
					321,
					322,
					617,
					618,
					638,
					639,
					774,
					775
				]
			},
			{
				"tag_name": "minecraft:leaves",
				"entries": [
					136,
					133,
					134,
					138,
					137,
					135,
					139,
					140
				]
			},
			{
				"tag_name": "minecraft:walls",
				"entries": [
					325,
					326,
					327,
					328,
					329,
					330,
					331,
					332,
					333,
					334,
					335,
					336,
					337,
					338,
					339,
					341,
					340,
					342,
					343,
					345,
					344
				]
			},
			{
				"tag_name": "minecraft:coals",
				"entries": [
					684,
					685
				]
			},
			{
				"tag_name": "minecraft:piglin_food",
				"entries": [
					763,
					764
				]
			},
			{
				"tag_name": "minecraft:wooden_pressure_plates",
				"entries": [
					623,
					624,
					625,
					626,
					627,
					628,
					629,
					630
				]
			},
			{
				"tag_name": "minecraft:acacia_logs",
				"entries": [
					105,
					129,
					113,
					121
				]
			},
			{
				"tag_name": "minecraft:piglin_loved",
				"entries": [
					46,
					56,
					47,
					67,
					1069,
					621,
					696,
					1051,
					798,
					952,
					872,
					766,
					767,
					754,
					755,
					756,
					757,
					974,
					709,
					711,
					710,
					712,
					713,
					695,
					62
				]
			},
			{
				"tag_name": "minecraft:music_discs",
				"entries": [
					1015,
					1016,
					1017,
					1018,
					1019,
					1020,
					1021,
					1022,
					1023,
					1024,
					1025,
					1026,
					1028,
					1027
				]
			},
			{
				"tag_name": "minecraft:candles",
				"entries": [
					1079,
					1080,
					1081,
					1082,
					1083,
					1084,
					1085,
					1086,
					1087,
					1088,
					1089,
					1090,
					1091,
					1092,
					1093,
					1094,
					1095
				]
			},
			{
				"tag_name": "minecraft:anvil",
				"entries": [
					346,
					347,
					348
				]
			},
			{
				"tag_name": "minecraft:birch_logs",
				"entries": [
					103,
					127,
					111,
					119
				]
			},
			{
				"tag_name": "minecraft:tall_flowers",
				"entries": [
					394,
					395,
					397,
					396
				]
			},
			{
				"tag_name": "minecraft:lapis_ores",
				"entries": [
					52,
					53
				]
			},
			{
				"tag_name": "minecraft:sand",
				"entries": [
					37,
					38
				]
			},
			{
				"tag_name": "minecraft:copper_ores",
				"entries": [
					44,
					45
				]
			},
			{
				"tag_name": "minecraft:gold_ores",
				"entries": [
					46,
					56,
					47
				]
			},
			{
				"tag_name": "minecraft:freeze_immune_wearables",
				"entries": [
					741,
					740,
					739,
					738,
					976
				]
			},
			{
				"tag_name": "minecraft:logs_that_burn",
				"entries": [
					106,
					130,
					114,
					122,
					101,
					125,
					109,
					117,
					105,
					129,
					113,
					121,
					103,
					127,
					111,
					119,
					104,
					128,
					112,
					120,
					102,
					126,
					110,
					118
				]
			},
			{
				"tag_name": "minecraft:fences",
				"entries": [
					257,
					261,
					262,
					258,
					259,
					260,
					263,
					264,
					308
				]
			},
			{
				"tag_name": "minecraft:saplings",
				"entries": [
					30,
					31,
					32,
					33,
					34,
					35,
					152,
					153
				]
			},
			{
				"tag_name": "minecraft:dirt",
				"entries": [
					15,
					14,
					17,
					16,
					303,
					18,
					199
				]
			},
			{
				"tag_name": "minecraft:beds",
				"entries": [
					844,
					845,
					841,
					842,
					839,
					837,
					843,
					833,
					838,
					835,
					832,
					831,
					836,
					840,
					830,
					834
				]
			},
			{
				"tag_name": "minecraft:iron_ores",
				"entries": [
					42,
					43
				]
			},
			{
				"tag_name": "minecraft:oak_logs",
				"entries": [
					101,
					125,
					109,
					117
				]
			},
			{
				"tag_name": "minecraft:doors",
				"entries": [
					632,
					633,
					634,
					635,
					636,
					637,
					638,
					639,
					631
				]
			},
			{
				"tag_name": "minecraft:cluster_max_harvestables",
				"entries": [
					721,
					711,
					716,
					726,
					706,
					701
				]
			}
		]
	},
	{
		"tag_type": "minecraft:fluid",
		"tag_ar": [
			{
				"tag_name": "minecraft:lava",
				"entries": [
					4,
					3
				]
			},
			{
				"tag_name": "minecraft:water",
				"entries": [
					2,
					1
				]
			}
		]
	}
];

export const commands = [
	{
		"flags": 0,
		"children": [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		]
	},
	{
		"flags": 1,
		"children": [
			10
		],
		"name": "me"
	},
	{
		"flags": 5,
		"children": [
			11
		],
		"name": "help"
	},
	{
		"flags": 5,
		"children": [
			12
		],
		"name": "list"
	},
	{
		"flags": 1,
		"children": [
			13
		],
		"name": "msg"
	},
	{
		"flags": 9,
		"children": [],
		"redirect_node": 4,
		"name": "tell"
	},
	{
		"flags": 9,
		"children": [],
		"redirect_node": 4,
		"name": "w"
	},
	{
		"flags": 1,
		"children": [
			14
		],
		"name": "teammsg"
	},
	{
		"flags": 9,
		"children": [],
		"redirect_node": 7,
		"name": "tm"
	},
	{
		"flags": 1,
		"children": [
			15
		],
		"name": "trigger"
	},
	{
		"flags": 6,
		"children": [],
		"name": "action",
		"parser": "brigadier:string",
		"properties": 2
	},
	{
		"flags": 6,
		"children": [],
		"name": "command",
		"parser": "brigadier:string",
		"properties": 2
	},
	{
		"flags": 5,
		"children": [],
		"name": "uuids"
	},
	{
		"flags": 2,
		"children": [
			16
		],
		"name": "targets",
		"parser": "minecraft:entity",
		"properties": 2
	},
	{
		"flags": 6,
		"children": [],
		"name": "message",
		"parser": "minecraft:message"
	},
	{
		"flags": 22,
		"children": [
			17,
			18
		],
		"name": "objective",
		"parser": "minecraft:objective",
		"suggestions_type": "minecraft:ask_server"
	},
	{
		"flags": 6,
		"children": [],
		"name": "message",
		"parser": "minecraft:message"
	},
	{
		"flags": 1,
		"children": [
			19
		],
		"name": "add"
	},
	{
		"flags": 1,
		"children": [
			19
		],
		"name": "set"
	},
	{
		"flags": 6,
		"children": [],
		"name": "value",
		"parser": "brigadier:integer",
		"properties": {
			"min": -2147483648,
			"max": 2147483647
		}
	}
] as CommandNode[];

export type CommandNode = {
    flags: number,
    children: number[],
    redirect_node?: number,
    name?: string,
    parser?: CommandParsers,
    properties?: any,
    suggestions_type?: string
}