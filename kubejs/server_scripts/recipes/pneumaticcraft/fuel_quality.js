ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/fuel_quality/';

    const recipes = [
        {
            type: 'pneumaticcraft:fuel_quality',
            air_per_mb: 10000,
            burn_rate: 1.5,
            fluid: { tag: 'c:fuels/eclipse_ember' },
            id: `${id_prefix}eclipse_ember`
        },
        {
            type: 'pneumaticcraft:fuel_quality',
            air_per_mb: 3250,
            burn_rate: 1.0,
            fluid: { tag: 'c:fuels/voidflame' },
            id: `${id_prefix}voidflame`
        },
        {
            type: 'pneumaticcraft:fuel_quality',
            air_per_mb: 1125,
            burn_rate: 0.8,
            fluid: { tag: 'c:fuels/blaze_ember' },
            id: `${id_prefix}blaze_ember`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fuel_quality';
        recipe.air_per_bucket = recipe.air_per_mb * 1000;
        event.custom(recipe).id(recipe.id);
    });
});
