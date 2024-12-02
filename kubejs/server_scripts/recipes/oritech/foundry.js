ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/foundry/';
    const recipes = [
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/electrum`).getId(), count: 2 }],
            ingredients: [{ tag: 'c:ingots/gold' }, { tag: 'c:ingots/silver' }],
            time: 300,
            id: 'oritech:foundry/alloy/electrum'
        },
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/electrum`).getId(), count: 2 }],
            ingredients: [{ tag: 'c:ingots/silver' }, { tag: 'c:ingots/gold' }],
            time: 300,
            id: 'oritech:foundry/alloy/inverse/electrum'
        },
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(), count: 1 }],
            ingredients: [{ tag: 'c:ingots/iron' }, { tag: 'c:gems/coal' }],
            time: 400,
            id: `${id_prefix}steel_from_coal`
        },
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(), count: 1 }],
            ingredients: [{ tag: 'c:gems/coal' }, { tag: 'c:ingots/iron' }],
            time: 400,
            id: `${id_prefix}steel_from_coal_inverse`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:foundry';

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
