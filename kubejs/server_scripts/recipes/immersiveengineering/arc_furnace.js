ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/arc_furnace/';

    const recipes = [
        {
            results: [{ basePredicate: { tag: 'c:ingots/andesite_alloy' }, count: 1 }],
            additives: [{ tag: 'c:nuggets/iron' }],
            input: { item: 'minecraft:andesite' },
            energy: 51200,
            time: 100,
            id: `${id_prefix}andesite_alloy_from_iron`
        },
        {
            results: [{ basePredicate: { tag: 'c:ingots/andesite_alloy' }, count: 1 }],
            additives: [{ tag: 'c:nuggets/zinc' }],
            input: { item: 'minecraft:andesite' },
            energy: 51200,
            time: 100,
            id: `${id_prefix}andesite_alloy_from_zinc`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:arc_furnace';
        event.custom(recipe).id(recipe.id);
    });
});
