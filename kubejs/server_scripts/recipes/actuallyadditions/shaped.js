ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shaped/';

    const recipes = [
        {
            output: '2x actuallyadditions:rice_dough',
            pattern: ['AA', 'A '],
            key: {
                A: '#c:crops/rice'
            },
            id: `actuallyadditions:rice_dough`
        },
        {
            output: '3x minecraft:paper',
            pattern: ['A  ', ' A ', '  A'],
            key: {
                A: '#c:crops/rice'
            },
            id: `actuallyadditions:rice_paper`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
