ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/generator_fuel/';

    const recipes = [
        {
            fluidTag: 'c:diesel',
            burnTime: 250,
            id: `${id_prefix}diesel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:generator_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
