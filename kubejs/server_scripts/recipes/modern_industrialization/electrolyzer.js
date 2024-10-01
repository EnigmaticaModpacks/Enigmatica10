ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/electrolyzer/';

    const recipes = [
        {
            fluid_inputs: [{ fluid: 'mekanism:brine', amount: 30 }],
            item_outputs: [{ item: 'modern_industrialization:sodium_dust', amount: 1 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:chlorine', amount: 125 }],
            eu: 8,
            duration: 400,
            id: `${id_prefix}brine_electrolysis`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:electrolyzer';
        event.custom(recipe).id(recipe.id);
    });
});