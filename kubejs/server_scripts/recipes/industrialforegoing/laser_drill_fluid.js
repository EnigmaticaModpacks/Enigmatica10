ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/laser_drill_fluid/';

    const recipes = [
        {
            catalyst: { item: 'industrialforegoing:red_laser_lens' },
            entity: 'minecraft:villager',
            output: { fluid: 'evilcraft:blood', amount: 100 },
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
        },
        {
            catalyst: { item: 'industrialforegoing:black_laser_lens' },
            output: { fluid: 'pneumaticcraft:oil', amount: 100 },
            rarity: [
                {
                    dimension_filter: { blacklist: [], whitelist: ['minecraft:overworld'] },
                    biome_filter: {
                        blacklist: [],
                        whitelist: ['c:is_deep_ocean', 'c:is_desert', 'c:is_jungle']
                    },
                    depth_max: 256,
                    depth_min: -64,
                    weight: 8
                }
            ],
            id: `${id_prefix}oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        if (!recipe.entity) {
            recipe.entity = 'minecraft:empty';
        }
        event.custom(recipe).id(recipe.id);
    });
});
