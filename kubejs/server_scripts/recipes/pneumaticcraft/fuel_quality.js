ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/fuel_quality/';

    const recipes = [
        {
            fluid: { tag: 'c:fuels/eclipse_ember' },
            air_per_mb: 10000,
            burn_rate: 1.5,
            id: `${id_prefix}eclipse_ember`
        },
        {
            fluid: { tag: 'c:fuels/voidflame' },
            air_per_mb: 3250,
            burn_rate: 1.0,
            id: `${id_prefix}voidflame`
        },
        {
            fluid: { tag: 'c:fuels/blaze_ember' },
            air_per_mb: 1125,
            burn_rate: 0.8,
            id: `${id_prefix}blaze_ember`
        },
        {
            fluid: { tag: 'c:fuels/canola_oil' },
            air_per_mb: 200,
            burn_rate: 0.25,
            id: `${id_prefix}canola_oil`
        },
        {
            fluid: { tag: 'c:fuels/refined_canola_oil' },
            air_per_mb: 1000,
            burn_rate: 0.8,
            id: `${id_prefix}refined_canola_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fuel_quality';
        recipe.air_per_bucket = recipe.air_per_mb * 1000;
        event.custom(recipe).id(recipe.id);
    });
});
