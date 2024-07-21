ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/crushing/';

    const recipes = [
        {
            ingredient: { item: 'justdirethings:coal_t2' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:tag',
                tag: 'c:dusts/blaze',
                count: 6
            },
            id: `${id_prefix}blaze_powder_from_coal_t2`
        },
        {
            ingredient: { tag: 'c:rods/blaze' },
            ignore_crushing_multiplier: true,

            result: {
                type: 'occultism:tag',
                tag: 'c:dusts/blaze',
                count: 4
            },
            id: `occultism:crushing/blaze_powder_from_rod`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
