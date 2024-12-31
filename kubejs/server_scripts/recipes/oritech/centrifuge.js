ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge/';
    const recipes = [
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ tag: 'c:dusts/charcoal' }],
            time: 100,
            id: `${id_prefix}carbon_fibre_strands_from_charcoal`
        },
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ tag: 'c:dusts/lignite_coal' }],
            time: 100,
            id: `${id_prefix}carbon_fibre_strands_from_lignite_coal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge';

        if (!recipe.fluidInputVariant) {
            recipe.fluidInputVariant = 'minecraft:empty';
            recipe.fluidInputAmount = 0;
        }
        if (!recipe.fluidOutputVariant) {
            recipe.fluidOutputVariant = 'minecraft:empty';
            recipe.fluidOutputAmount = 0;
        }

        event.custom(recipe).id(recipe.id);
    });
});
