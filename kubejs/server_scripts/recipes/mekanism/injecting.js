ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/injecting/';

    const recipes = [];

    copper_types.forEach((type) => {
        oxides.forEach((oxide, index) => {
            if (index < oxides.length - 1) {
                recipes.push({
                    chemical_input: { chemical: 'mekanism:oxygen', amount: 1 },
                    item_input: { item: `create:${oxide}${type}`, count: 1 },
                    output: { id: `create:${oxides[index + 1]}${type}`, count: 1 },
                    per_tick_usage: true,
                    id: `${id_prefix}${oxides[index + 1]}${type}`
                });
            }
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:injecting';
        event.custom(recipe).id(recipe.id);
    });
});
