ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shaped/';

    const recipes = [
        {
            output: '2x modern_industrialization:gold_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/gold',
                B: '#c:ingots/gold',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}gold_gear`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
