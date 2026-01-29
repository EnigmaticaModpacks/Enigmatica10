ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/oil_drilling_rig/';

    const recipes = [
        {
            item_inputs: [{ item: 'modern_industrialization:aluminum_drill', amount: 1, probability: 0.04 }],
            fluid_outputs: [{ fluid: 'pneumaticcraft:oil', amount: 500 }],
            duration: 200,
            eu: 8,
            id: `modern_industrialization:oil/crude_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:oil_drilling_rig';
        event.custom(recipe).id(recipe.id);
    });
});
