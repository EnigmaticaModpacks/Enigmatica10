ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/miner/';

    const recipes = [
        // Ore Miners
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/dark_gem',
                count: 1,
                weight: 187
            },
            id: `${id_prefix}dark_gem`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/black_quartz',
                count: 1,
                weight: 560
            },
            id: `${id_prefix}black_quartz`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/fluorite',
                count: 1,
                weight: 560
            },
            id: `${id_prefix}fluorite`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/replica',
                count: 1,
                weight: 50
            },
            id: `${id_prefix}replica`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/blazing_quartz',
                count: 1,
                weight: 50
            },
            id: `${id_prefix}blazing_quartz`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/cthonic_gold',
                count: 1,
                weight: 50
            },
            id: `${id_prefix}cthonic_gold`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/brilliance',
                count: 1,
                weight: 50
            },
            id: `${id_prefix}brilliance`
        },
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/soulstone',
                count: 1,
                weight: 150
            },
            id: `${id_prefix}soulstone`
        },

        // Eldritch Miner
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/quartz',
                count: 3,
                weight: 90
            },
            id: 'occultism:miner/eldritch/quartz'
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'minecraft:glowstone',
                count: 3,
                weight: 90
            },
            id: 'occultism:miner/eldritch/glowstone_dust'
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/amethyst',
                count: 3,
                weight: 90
            },
            id: 'occultism:miner/eldritch/amethyst'
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/fluorite',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}fluorite_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/dark',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}dark_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:dusts/dark_gem',
                count: 9,
                weight: 90
            },
            id: `${id_prefix}dark_gem_dust`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'minecraft:clay', count: 3 },
                weight: 90
            },
            id: `${id_prefix}clay`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'minecraft:gilded_blackstone', count: 3 },
                weight: 90
            },
            id: `${id_prefix}gilded_blackstone`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'minecraft:magma_block', count: 3 },
                weight: 90
            },
            id: `${id_prefix}magma_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'minecraft:crying_obsidian', count: 3 },
                weight: 90
            },
            id: `${id_prefix}crying_obsidian`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'minecraft:obsidian', count: 3 },
                weight: 90
            },
            id: `${id_prefix}obsidian`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_item',
                stack: { id: 'minecraft:gravel', count: 3 },
                weight: 90
            },
            id: `${id_prefix}gravel`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:raw_materials/mithril',
                count: 9,
                weight: 90
            },
            id: `${id_prefix}mithril_raw`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/raw_replica',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}replica_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/blazing_quartz',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}blazing_quartz_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/cthonic_gold',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}cthonic_gold_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/brilliance',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}brilliance_block`
        },
        {
            ingredient: { tag: 'occultism:miners/eldritch' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:storage_blocks/raw_soulstone',
                count: 1,
                weight: 90
            },
            id: `${id_prefix}raw_soulstone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        event.custom(recipe).id(recipe.id);
    });
});
