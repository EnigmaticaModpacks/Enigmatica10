ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/fuel_generator/';
    const recipes = [];

    const fuels = [
        { fluid: '#c:fuels/eclipse_ember', fe_per_mb: 4000 },
        { fluid: '#c:fuels/voidflame', fe_per_mb: 1300 },
        { fluid: '#c:fuels/turbo_fuel', fe_per_mb: 1300 },
        { fluid: '#c:fuels/high_power_biodiesel', fe_per_mb: 1300 },
        { fluid: '#c:fuels/empowered_oil', fe_per_mb: 960 },
        { fluid: '#c:fuels/boosted_diesel', fe_per_mb: 800 },
        { fluid: '#c:fuels/lpg', fe_per_mb: 720 },
        { fluid: '#c:light_fuel', fe_per_mb: 720 },
        { fluid: '#c:fuels/gasoline', fe_per_mb: 600 },
        { fluid: '#c:heavy_fuel', fe_per_mb: 600 },
        { fluid: '#c:fuels/crystallized_oil', fe_per_mb: 560 },
        { fluid: '#c:fuels/blaze_ember', fe_per_mb: 450 },
        { fluid: '#c:fuels/kerosene', fe_per_mb: 440 },
        { fluid: '#c:fuels/diesel', fe_per_mb: 400 },
        { fluid: '#c:fuels/biodiesel', fe_per_mb: 400 },
        { fluid: '#c:fuels/refined_canola_oil', fe_per_mb: 192 },
        { fluid: '#c:fuels/canola_oil', fe_per_mb: 80 },
        { fluid: '#c:fuels/ethanol', fe_per_mb: 50 },
        { fluid: '#c:raw_biodiesel', fe_per_mb: 50 },
        { fluid: '#c:fuels/crude_oil', fe_per_mb: 16 },
        { fluid: '#c:fuels/creosote', fe_per_mb: 160 }
    ];

    fuels.forEach((fuel) => {
        recipes.push({
            fluidInput: { fluid: fuel.fluid, amount: 100 },
            fluidOutputs: [],
            ingredients: [],
            results: [],
            time: Math.floor(fuel.fe_per_mb / 2.56), // Very nearly equates to fe/mb value
            id: `${id_prefix}${fuel.fluid.replace(':', '_').replace('#', '')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:fuel_generator';
        event.custom(recipe).id(recipe.id);
    });
});
