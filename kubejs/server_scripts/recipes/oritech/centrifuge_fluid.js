ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [];

    ae_washables.forEach((washable) => {
        recipes.push({
            ingredients: [{ tag: `ae2:${washable}_cable` }],
            fluidInputVariant: 'minecraft:water',
            fluidInputAmount: 810,
            results: [{ id: `ae2:fluix_${washable}_cable` }],
            time: 5,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    oil_types.forEach((oil) => {
        recipes.push(
            {
                results: [{ count: 1, id: 'oritech:polymer_resin' }],
                ingredients: [{ tag: 'minecraft:sand' }],
                fluidInputVariant: oil,
                fluidInputAmount: 8100,
                time: 150,
                id: `${id_prefix}polymer_resin_from_${oil.replace(':', '_')}`
            },
            {
                results: [],
                ingredients: [{ item: 'oritech:fluxite' }],
                fluidInputVariant: oil,
                fluidInputAmount: 81000,
                fluidOutputVariant: 'oritech:still_fuel',
                fluidOutputAmount: 81000,

                time: 300,
                id: `${id_prefix}still_fuel_from_${oil.replace(':', '_')}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';

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
