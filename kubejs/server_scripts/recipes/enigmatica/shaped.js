ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shaped/';

    const recipes = [
        {
            output: '2x minecraft:red_dye',
            pattern: ['A ', ' A'],
            key: {
                A: 'productivetrees:haematoxylin'
            },
            id: `${id_prefix}red_dye_from_haematoxylin`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
