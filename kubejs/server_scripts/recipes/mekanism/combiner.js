ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/combining/';

    const recipes = [];

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                main_input: { item: `create:${oxide}${type}`, count: 1 },
                extra_input: { count: 1, item: 'minecraft:honeycomb' },
                output: { id: `create:waxed_${oxide}${type}`, count: 1 },
                id: `${id_prefix}${oxide}${type}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:combining';
        event.custom(recipe).id(recipe.id);
    });
});
