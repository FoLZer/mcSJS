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