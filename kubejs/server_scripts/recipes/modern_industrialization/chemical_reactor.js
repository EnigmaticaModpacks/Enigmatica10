ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/chemical_reactor/';

    const recipes = [
        {
            item_inputs: [{ tag: 'c:foods/raw_meat', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:hydrochloric_acid', amount: 10 }],
            item_outputs: { item: 'minecraft:rotten_flesh', amount: 1 },
            eu: 4,
            duration: 100,
            id: `${id_prefix}rotten_flesh`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:chemical_reactor';
        event.custom(recipe).id(recipe.id);
    });
});
