ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/laser_drill_ore/';

    const recipes = [
        {
            catalyst: { item: 'industrialforegoing:purple_laser_lens' },
            output: { item: 'evilcraft:dark_ore' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 16,
                    depth_min: 5,
                    weight: 4
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}dark_ore`
        },
        {
            catalyst: { item: 'industrialforegoing:pink_laser_lens' },
            output: { item: 'theurgy:sal_ammoniac_ore' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 132,
                    depth_min: 5,
                    weight: 10
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 4
                }
            ],
            id: `${id_prefix}sal_ammoniac_ore`
        },
        {
            catalyst: { item: 'industrialforegoing:lime_laser_lens' },
            output: { tag: 'c:raw_materials/uraninite' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 29,
                    depth_min: 5,
                    weight: 5
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}uraninite`
        },
        {
            catalyst: { item: 'industrialforegoing:white_laser_lens' },
            output: { item: 'modern_industrialization:quartz_ore' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end', 'minecraft:the_nether'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 117,
                    depth_min: 7,
                    weight: 12
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end', 'minecraft:the_nether'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}quartz_ore`
        },
        {
            catalyst: { item: 'industrialforegoing:cyan_laser_lens' },
            output: { tag: 'c:ores/benitoite' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_nether'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 68,
                    depth_min: 16,
                    weight: 3
                },
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_nether'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}benitoite`
        },
        {
            catalyst: { item: 'industrialforegoing:orange_laser_lens' },
            output: { tag: 'c:ores/anglesite' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_end'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 68,
                    depth_min: 16,
                    weight: 3
                },
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_end'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}anglesite`
        },
        {
            catalyst: { item: 'industrialforegoing:orange_laser_lens' },
            output: { tag: 'c:ores/bauxite' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 84,
                    depth_min: 68,
                    weight: 5
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}bauxite`
        },
        {
            catalyst: { item: 'industrialforegoing:magenta_laser_lens' },
            output: { tag: 'c:raw_materials/titanium' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 84,
                    depth_min: 68,
                    weight: 5
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}titanium`
        },
        {
            catalyst: { item: 'industrialforegoing:gray_laser_lens' },
            output: { tag: 'c:raw_materials/antimony' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 40,
                    depth_min: 10,
                    weight: 5
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}antimony`
        },
        {
            catalyst: { item: 'industrialforegoing:gray_laser_lens' },
            output: { tag: 'c:raw_materials/zinc' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 70,
                    depth_min: 30,
                    weight: 5
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}zinc`
        },
        {
            catalyst: { item: 'industrialforegoing:black_laser_lens' },
            output: { tag: 'c:ores/black_quartz' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 117,
                    depth_min: 7,
                    weight: 12
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}black_quartz`
        },
        {
            catalyst: { item: 'industrialforegoing:cyan_laser_lens' },
            output: { tag: 'c:raw_materials/mithril' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 16,
                    depth_min: 8,
                    weight: 12
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}mithril`
        },
        {
            catalyst: { item: 'industrialforegoing:green_laser_lens' },
            output: { tag: 'c:raw_materials/replica' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 10,
                    depth_min: 0,
                    weight: 4
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}replica`
        },
        {
            catalyst: { item: 'industrialforegoing:white_laser_lens' },
            output: { item: 'rftoolsbase:dimensionalshard_overworld' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:overworld'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 20,
                    depth_min: 1,
                    weight: 1
                }
            ],
            id: `${id_prefix}dimensionalshard_overworld`
        },
        {
            catalyst: { item: 'industrialforegoing:white_laser_lens' },
            output: { item: 'rftoolsbase:dimensionalshard_nether' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_nether'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 20,
                    depth_min: 1,
                    weight: 4
                }
            ],
            id: `${id_prefix}dimensionalshard_nether`
        },
        {
            catalyst: { item: 'industrialforegoing:white_laser_lens' },
            output: { item: 'rftoolsbase:dimensionalshard_end' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_end'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 16
                }
            ],
            id: `${id_prefix}dimensionalshard_end`
        },
        {
            catalyst: { item: 'industrialforegoing:purple_laser_lens' },
            output: { item: 'malum:soulstone_ore' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end', 'minecraft:the_nether'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 32,
                    depth_min: 16,
                    weight: 3
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end', 'minecraft:the_nether'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}soulstone_ore`
        },
        {
            catalyst: { item: 'industrialforegoing:yellow_laser_lens' },
            output: { item: 'malum:cthonic_gold_ore' },
            rarity: [
                {
                    dimension_filter: { blacklist: ['minecraft:the_end', 'minecraft:the_nether'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 16,
                    depth_min: 5,
                    weight: 2
                },
                {
                    dimension_filter: { blacklist: ['minecraft:the_end', 'minecraft:the_nether'], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}cthonic_gold_ore`
        },
        {
            catalyst: { item: 'industrialforegoing:orange_laser_lens' },
            output: { item: 'malum:blazing_quartz_ore' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_nether'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 48,
                    depth_min: 32,
                    weight: 3
                },
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:the_nether'] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 255,
                    depth_min: 0,
                    weight: 1
                }
            ],
            id: `${id_prefix}blazing_quartz_ore`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_ore';
        event.custom(recipe).id(recipe.id);
    });
});
