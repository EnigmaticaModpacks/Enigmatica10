ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/distillery/';

    const recipes = [
        {
            fluid_inputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 80 }],
            fluid_outputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 80 }],
            eu: 1,
            duration: 30,
            id: `${id_prefix}refined_canola_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:distillery';
        event.custom(recipe).id(recipe.id);
    });
});
