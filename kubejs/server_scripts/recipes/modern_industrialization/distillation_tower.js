ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/distillation_tower/';

    const recipes = [];

    oil_types.forEach((oil) => {
        recipes.push({
            fluid_inputs: [{ fluid: oil, amount: 1000 }],
            fluid_outputs: [
                { fluid: 'modern_industrialization:sulfuric_light_fuel', amount: 500 },
                { fluid: 'modern_industrialization:sulfuric_heavy_fuel', amount: 200 },
                { fluid: 'modern_industrialization:sulfuric_naphtha', amount: 300 }
            ],
            duration: 200,
            eu: 36,
            id: `${id_prefix}full_oil_distillation_from_${oil.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:distillation_tower';
        event.custom(recipe).id(recipe.id);
    });
});
