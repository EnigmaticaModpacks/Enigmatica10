ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/sawing/';

    const recipes = [
        {
            input: { tag: 'ae2:metal_ingots', count: 1 },
            main_output: { id: 'ae2:cable_anchor', count: 8 },
            id: `${id_prefix}cable_anchor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:sawing';
        event.custom(recipe).id(recipe.id);
    });
});
