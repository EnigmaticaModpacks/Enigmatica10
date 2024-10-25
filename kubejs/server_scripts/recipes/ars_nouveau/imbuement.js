ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/imbuement/';

    const recipes = [
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:air_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:feather' },
                { item: 'ars_nouveau:wilden_wing' },
                { tag: 'minecraft:arrows' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}air_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:earth_essence', count: 4 },
            pedestalItems: [{ tag: 'c:ingots/iron' }, { tag: 'c:seeds' }, { tag: 'minecraft:dirt' }],
            source: 2000 * 3,
            id: `${id_prefix}earth_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:fire_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:flint_and_steel' },
                { item: 'minecraft:torch' },
                { item: 'minecraft:gunpowder' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}fire_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:water_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:water_bucket' },
                { item: 'minecraft:snow_block' },
                { item: 'minecraft:kelp' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}water_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:manipulation_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:stone_button' },
                { item: 'minecraft:redstone' },
                { item: 'minecraft:clock' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}manipulation_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:abjuration_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:fermented_spider_eye' },
                { item: 'minecraft:sugar' },
                { item: 'minecraft:milk_bucket' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}abjuration_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_nouveau:conjuration_essence', count: 4 },
            pedestalItems: [
                { item: 'ars_nouveau:wilden_horn' },
                { item: 'ars_nouveau:starbuncle_shards' },
                { item: 'minecraft:book' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}conjuration_essence`
        },
        {
            input: { tag: 'c:storage_blocks/source' },
            output: { id: 'ars_elemental:anima_essence', count: 4 },
            pedestalItems: [
                { item: 'minecraft:wither_skeleton_skull' },
                { item: 'minecraft:bone_meal' },
                { item: 'minecraft:golden_apple' }
            ],
            source: 2000 * 3,
            id: `${id_prefix}anima_essence`
        },
        {
            input: { tag: 'c:storage_blocks/amethyst' },
            output: { id: 'ars_nouveau:source_gem_block', count: 1 },
            pedestalItems: [],
            source: 500 * 3,
            id: `ars_nouveau:amethyst_block`
        },
        {
            input: { item: 'minecraft:calcite' },
            output: { id: 'minecraft:nautilus_shell', count: 1 },
            pedestalItems: [{ tag: 'c:essences/manipulation' }, { item: 'minecraft:seagrass' }],
            source: 500,
            id: `${id_prefix}nautilus_shell`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
