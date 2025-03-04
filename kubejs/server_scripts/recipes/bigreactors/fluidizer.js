ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:bigreactors/fluidizersolid/';

    const recipes = [
        {
            ingredient: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/plutonium`).getId()),
                count: 1
            },
            result: { id: 'bigreactors:blutonium', amount: 1000 },
            id: `${id_prefix}blutonium_from_ingot`
        },
        {
            ingredient: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:storage_blocks/plutonium`).getId()),
                count: 1
            },
            result: { id: 'bigreactors:blutonium', amount: 9000 },
            id: `${id_prefix}blutonium_from_block`
        },
        {
            ingredient: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/uranium`).getId()),
                count: 1
            },
            result: { id: 'bigreactors:yellorium', amount: 1000 },
            id: `${id_prefix}yellorium_from_ingot`
        },
        {
            ingredient: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:storage_blocks/uranium`).getId()),
                count: 1
            },
            result: { id: 'bigreactors:yellorium', amount: 9000 },
            id: `${id_prefix}yellorium_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'bigreactors:fluidizersolid';
        event.custom(recipe).id(recipe.id);
    });
});
