ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shaped/';

    const recipes = [
        {
            output: Item.of('minecraft:red_dye', 2),
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
