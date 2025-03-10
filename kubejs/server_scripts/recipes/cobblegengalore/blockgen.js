ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:cobblegengalore/blockgen/';

    const recipes = [
        {
            result: { id: 'ae2:sky_stone_block', count: 1 },
            left: { id: 'ars_nouveau:sky_block', consume: false },
            right: { id: 'ars_nouveau:sky_block', consume: false },
            bottom: 'ars_nouveau:sky_block',
            id: `${id_prefix}sky_stone_block`
        },
        {
            result: { id: 'minecraft:ice', count: 1 },
            left: { id: 'minecraft:water', consume: false },
            right: { id: 'minecraft:water', consume: false },
            bottom: 'minecraft:blue_ice',
            id: `${id_prefix}ice`
        },
        {
            result: { id: 'minecraft:obsidian', count: 1 },
            left: { id: 'minecraft:water', consume: false },
            right: { id: 'minecraft:lava', consume: false },
            bottom: 'minecraft:obsidian',
            id: `${id_prefix}obsidian`
        },
        {
            result: { id: 'minecraft:basalt', count: 1 },
            left: { id: 'minecraft:blue_ice', consume: false },
            right: { id: 'minecraft:lava', consume: false },
            bottom: 'minecraft:soul_soil',
            id: `${id_prefix}basalt`
        },
        {
            result: { id: 'aether:icestone', count: 1 },
            left: { id: 'minecraft:blue_ice', consume: false },
            right: { id: 'minecraft:lava', consume: false },
            bottom: 'aether:aerogel',
            id: `${id_prefix}icestone`
        }
    ];

    Object.keys(stoneworks).forEach((type) => {
        stoneworks[type].forEach((block) => {
            recipes.push({
                result: { id: block, count: 1 },
                left: { id: 'minecraft:water', consume: false },
                right: { id: 'minecraft:lava', consume: false },
                bottom: block,
                id: `${id_prefix}${block.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'cobblegengalore:blockgen';
        recipe.consumeLeft = recipe.left.consume;
        recipe.left.Name = recipe.left.id;
        recipe.consumeRight = recipe.right.consume;
        recipe.right.Name = recipe.right.id;
        recipe.modifier = { Name: recipe.bottom };
        event.custom(recipe).id(recipe.id);
    });
});
