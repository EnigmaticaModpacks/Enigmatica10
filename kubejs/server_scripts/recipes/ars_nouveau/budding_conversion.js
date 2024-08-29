ServerEvents.recipes((event) => {
    // Note: These require a re-start to take effect
    const id_prefix = 'enigmatica:ars_nouveau/budding_conversion/';

    const recipes = [
        {
            input: 'ae2:quartz_block',
            result: 'ae2:flawed_budding_quartz',
            id: `${id_prefix}flawed_budding_quartz`
        },
        {
            input: 'justdirethings:time_crystal_block',
            result: 'justdirethings:time_crystal_budding_block',
            id: `${id_prefix}time_crystal_budding_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:budding_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
