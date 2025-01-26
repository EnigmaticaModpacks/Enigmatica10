ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/shaped/';

    const recipes = [
        {
            output: 'occultism:magic_lamp_empty',
            pattern: [' A ', 'ABA', ' AA'],
            key: {
                A: '#c:ingots/silver',
                B: '#c:ingots/iesnium'
            },
            id: `occultism:crafting/magic_lamp_empty`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
