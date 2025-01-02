ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/cooler/';
    const recipes = [
        {
            fluidInputVariant: 'oritech:still_steam',
            fluidInputAmount: 81000,
            ingredients: [],
            results: [{ id: 'minecraft:snow_block', count: 3 }],
            time: 200,
            id: `${id_prefix}snow_block`
        },
        {
            fluidInputVariant: 'pneumaticcraft:plastic',
            fluidInputAmount: 81000,
            ingredients: [],
            results: [{ id: 'pneumaticcraft:plastic', count: 2 }],
            time: 200,
            id: `${id_prefix}plastic`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:cooler';

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
