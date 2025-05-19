ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/bottling/';

    const recipes = [];

    copper_types.forEach((type) => {
        oxides.forEach((oxide, index) => {
            if (index < oxides.length - 1) {
                recipes.push({
                    fluid: { tag: 'c:redstone_acid', amount: 125 },
                    input: { item: `create:${oxide}${type}` },
                    results: [{ item: `create:${oxides[index + 1]}${type}` }],
                    id: `${id_prefix}${oxides[index + 1]}${type}`
                });
            }
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:bottling_machine';
        event.custom(recipe).id(recipe.id);
    });
});
