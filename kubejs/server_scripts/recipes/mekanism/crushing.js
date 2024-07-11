ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/crushing/';

    const recipes = [
        {
            input: { count: 1, item: 'justdirethings:coal_t2' },
            output: { count: 6, id: 'minecraft:blaze_powder' },
            id: `${id_prefix}blaze_powder_from_coal_t2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
