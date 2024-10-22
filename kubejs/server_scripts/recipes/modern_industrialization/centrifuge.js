ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/centrifuge/';

    const recipes = [
        {
            item_inputs: [{ item: 'actuallyadditions:canola', amount: 1 }],
            fluid_outputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 80 }],
            eu: 32,
            duration: 30,
            id: `${id_prefix}canola_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
