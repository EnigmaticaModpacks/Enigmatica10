ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/shaped/';

    const recipes = [
        {
            output: '2x industrialforegoing:diamond_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/dark_steel',
                B: '#c:gems/diamond',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}diamond_gear`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
