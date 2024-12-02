ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/foundry/';
    const recipes = [
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/electrum`).getId(), count: 2 }],
            ingredients: [{ tag: 'c:ingots/gold' }, { tag: 'c:ingots/silver' }],
            fluidInputAmount: 0,
            fluidInputVariant: 'minecraft:empty',
            fluidOutputAmount: 0,
            fluidOutputVariant: 'minecraft:empty',
            time: 300,
            id: 'oritech:foundry/alloy/electrum'
        },
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/electrum`).getId(), count: 2 }],
            ingredients: [{ tag: 'c:ingots/silver' }, { tag: 'c:ingots/gold' }],
            fluidInputAmount: 0,
            fluidInputVariant: 'minecraft:empty',
            fluidOutputAmount: 0,
            fluidOutputVariant: 'minecraft:empty',
            time: 300,
            id: 'oritech:foundry/alloy/inverse/electrum'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:foundry';
        event.custom(recipe).id(recipe.id);
    });
});
