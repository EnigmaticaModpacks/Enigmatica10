ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/fuel_generator/';
    const recipes = [];

    const fuels = [
        { fluid: 'modern_industrialization:boosted_diesel', fe_per_mb: 800 },
        { fluid: 'modern_industrialization:diesel', fe_per_mb: 400 },
        { fluid: 'modern_industrialization:biodiesel', fe_per_mb: 400 },
        { fluid: 'modern_industrialization:heavy_fuel', fe_per_mb: 600 },
        { fluid: 'modern_industrialization:light_fuel', fe_per_mb: 720 },
        { fluid: 'modern_industrialization:creosote', fe_per_mb: 160 },
        { fluid: 'modern_industrialization:naphtha', fe_per_mb: 80 },
        { fluid: 'modern_industrialization:raw_biodiesel', fe_per_mb: 50 },
        { fluid: 'modern_industrialization:synthetic_oil', fe_per_mb: 16 },
        { fluid: 'modern_industrialization:crude_oil', fe_per_mb: 16 },

        { fluid: 'justdirethings:refined_t4_fluid_source', fe_per_mb: 4000 },
        { fluid: 'justdirethings:refined_t3_fluid_source', fe_per_mb: 1300 },
        { fluid: 'justdirethings:refined_t2_fluid_source', fe_per_mb: 450 },

        { fluid: 'pneumaticcraft:lpg', fe_per_mb: 720 },
        { fluid: 'pneumaticcraft:gasoline', fe_per_mb: 600 },
        { fluid: 'pneumaticcraft:kerosene', fe_per_mb: 440 },
        { fluid: 'pneumaticcraft:biodiesel', fe_per_mb: 400 },
        { fluid: 'pneumaticcraft:diesel', fe_per_mb: 400 },
        { fluid: 'pneumaticcraft:oil', fe_per_mb: 16 },

        { fluid: 'actuallyadditions:canola_oil', fe_per_mb: 80 },
        { fluid: 'actuallyadditions:refined_canola_oil', fe_per_mb: 192 },
        { fluid: 'actuallyadditions:crystallized_oil', fe_per_mb: 560 },
        { fluid: 'actuallyadditions:empowered_oil', fe_per_mb: 960 },

        { fluid: 'oritech:still_oil', fe_per_mb: 16 },
        { fluid: 'oritech:still_fuel', fe_per_mb: 1300 }
    ];

    fuels.forEach((fuel) => {
        recipes.push({
            fluidInputAmount: 8100, // Uses 100mb increments
            fluidInputVariant: fuel.fluid,
            fluidOutputAmount: 0,
            fluidOutputVariant: 'minecraft:empty',
            ingredients: [],
            results: [],
            time: Math.floor(fuel.fe_per_mb / 2.56), // Very nearly equates to fe/mb value
            id: `${id_prefix}${fuel.fluid.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:fuel_generator';
        event.custom(recipe).id(recipe.id);
    });
});
