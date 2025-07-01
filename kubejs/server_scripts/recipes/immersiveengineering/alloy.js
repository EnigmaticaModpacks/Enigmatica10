ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/alloy/';

    const recipes = [
        {
            input0: { tag: 'c:nuggets/iron' },
            input1: { item: 'minecraft:andesite' },
            result: { basePredicate: { tag: 'c:ingots/andesite_alloy' }, count: 1 },
            id: `${id_prefix}andesite_alloy_from_iron`
        },
        {
            input0: { tag: 'c:nuggets/zinc' },
            input1: { item: 'minecraft:andesite' },
            result: { basePredicate: { tag: 'c:ingots/andesite_alloy' }, count: 1 },
            id: `${id_prefix}andesite_alloy_from_zinc`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
