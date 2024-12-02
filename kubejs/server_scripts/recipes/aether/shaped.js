ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/shaped/';

    const recipes = [
        {
            output: `aether:iron_ring`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:nuggets/iron',
                B: 'aether:ambrosium_shard'
            },
            id: `aether:iron_ring`
        },
        {
            output: `aether:golden_ring`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:nuggets/gold',
                B: 'aether:ambrosium_shard'
            },
            id: `aether:golden_ring`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
