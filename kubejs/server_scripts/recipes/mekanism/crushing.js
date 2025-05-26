ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/crushing/';

    const recipes = [
        // {
        //     type: 'mekanism:crushing',
        //     input: { count: 1, item: 'minecraft:waxed_chiseled_copper' },
        //     output: { count: 1, id: 'minecraft:chiseled_copper' }
        // }
    ];

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                input: { item: `create:waxed_${oxide}${type}`, count: 1 },
                output: { id: `create:${oxide}${type}`, count: 1 },
                id: `${id_prefix}${oxide}${type}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
