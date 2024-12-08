ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/crushing/';

    const recipes = [
        {
            ingredient: { tag: 'c:ores/uraninite' },
            ignore_crushing_multiplier: false,
            result: {
                type: 'occultism:item',
                id: 'powah:uraninite_raw',
                count: 4
            },
            id: `${id_prefix}uraninite_raw`
        },
        {
            ingredient: { tag: 'c:ores/black_quartz' },
            ignore_crushing_multiplier: false,
            result: {
                type: 'occultism:item',
                id: 'actuallyadditions:black_quartz',
                count: 2
            },
            id: `${id_prefix}black_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
