ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/laser_drill_fluid/';

    const recipes = [
        {
            catalyst: { item: 'industrialforegoing:red_laser_lens' },
            entity: 'minecraft:villager',
            output: { amount: 100, id: 'evilcraft:blood' },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: [] },
                    biome_filter: { blacklist: [], whitelist: [] },
                    depth_max: 256,
                    depth_min: -64,
                    weight: 8
                }
            ],
            id: `${id_prefix}blood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
