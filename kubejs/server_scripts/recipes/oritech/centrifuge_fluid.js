ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [];

    let oil_types = [
        'modern_industrialization:crude_oil',
        'modern_industrialization:synthetic_oil',
        'modern_industrialization:shale_oil',
        'pneumaticcraft:oil'
    ];

    oil_types.forEach((oil) => {
        recipes.push(
            {
                results: [{ count: 1, id: 'oritech:polymer_resin' }],
                ingredients: [{ tag: 'minecraft:sand' }],
                fluidInputVariant: oil,
                fluidInputAmount: 8100,
                fluidOutputVariant: 'minecraft:empty',
                fluidOutputAmount: 0,
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
        event.custom(recipe).id(recipe.id);
    });
});
