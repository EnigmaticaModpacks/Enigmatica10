ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/foundry/';
    const recipes = [
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/electrum`).getId(), count: 2 }],
            ingredients: [{ tag: 'c:ingots/gold' }, { tag: 'c:ingots/silver' }],
            time: 200,
            id: `${id_prefix}electrum`
        },
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(), count: 1 }],
            ingredients: [{ tag: 'c:ingots/iron' }, { tag: 'c:gems/coal' }],
            time: 300,
            id: `${id_prefix}steel_from_coal`
        },
        {
            results: [{ id: 'create:andesite_alloy', count: 1 }],
            ingredients: [{ item: 'minecraft:andesite' }, { tag: 'c:nuggets/iron' }],
            time: 80,
            id: `${id_prefix}andesite_alloy_from_iron`
        },
        {
            results: [{ id: 'create:andesite_alloy', count: 1 }],
            ingredients: [{ item: 'minecraft:andesite' }, { tag: 'c:nuggets/zinc' }],
            time: 80,
            id: `${id_prefix}andesite_alloy_from_zinc`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:foundry';
        event.custom(recipe).id(recipe.id);
    });
});
