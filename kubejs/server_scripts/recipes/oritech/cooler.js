ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/cooler/';
    const recipes = [
        {
            fluidInput: { fluid: 'pneumaticcraft:plastic', amount: 100 },
            ingredients: [],
            results: [{ id: 'pneumaticcraft:plastic', count: 2 }],
            time: 200,
            id: `${id_prefix}plastic`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:cooler';
        event.custom(recipe).id(recipe.id);
    });
});
