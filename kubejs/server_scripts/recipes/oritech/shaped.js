ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/shaped/';

    const recipes = [
        {
            output: 'oritech:tech_door',
            pattern: ['AA', 'BB', 'AA'],
            key: {
                A: Ingredient.of(['#c:ingots/steel', '#c:ingots/biosteel']),
                B: '#c:plates/plastic'
            },
            id: `${id_prefix}tech_door`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
