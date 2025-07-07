ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/shaped/';

    const recipes = [
        {
            output: 'farmersdelight:canvas',
            pattern: ['AA', 'AA'],
            key: {
                A: 'immersiveengineering:hemp_fiber'
            },
            id: `${id_prefix}canvas_from_hemp`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
