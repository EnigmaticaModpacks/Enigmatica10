ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/distillery/';

    const recipes = [
        {
            fluid_inputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 80 }],
            fluid_outputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 80 }],
            duration: 30,
            eu: 1,
            id: `${id_prefix}refined_canola_oil`
        }
    ];

    oil_types.forEach((oil) => {
        recipes.push(
            {
                fluid_inputs: [{ fluid: oil, amount: 1000 }],
                fluid_outputs: [{ fluid: 'modern_industrialization:sulfuric_heavy_fuel', amount: 200 }],
                duration: 200,
                eu: 12,
                id: `${id_prefix}sulfuric_heavy_fuel_from_${oil.replace(':', '_')}`
            },
            {
                fluid_inputs: [{ fluid: oil, amount: 1000 }],
                fluid_outputs: [{ fluid: 'modern_industrialization:sulfuric_naphtha', amount: 300 }],
                duration: 200,
                eu: 12,
                id: `${id_prefix}sulfuric_naphtha_fuel_from_${oil.replace(':', '_')}`
            },
            {
                fluid_inputs: [{ fluid: oil, amount: 1000 }],
                fluid_outputs: [{ fluid: 'modern_industrialization:sulfuric_light_fuel', amount: 500 }],
                duration: 200,
                eu: 12,
                id: `${id_prefix}sulfuric_light_fuel_fuel_from_${oil.replace(':', '_')}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:distillery';
        event.custom(recipe).id(recipe.id);
    });
});
