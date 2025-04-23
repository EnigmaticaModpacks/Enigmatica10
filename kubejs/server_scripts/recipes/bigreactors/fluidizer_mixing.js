ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:bigreactors/fluidizersolidmixing/';

    const recipes = [
        {
            ingredient1: {
                ingredient: bigReactorsIngredient('bigreactors:anglesite_crystal'),
                count: 1
            },
            ingredient2: {
                ingredient: bigReactorsIngredient('minecraft:ender_pearl'),
                count: 4
            },
            result: { id: 'bigreactors:tangerium', amount: 500 },
            id: `bigreactors:fluidizer/solidmixing/tangerium_1`
        },
        {
            ingredient1: {
                ingredient: bigReactorsIngredient('minecraft:ender_pearl'),
                count: 4
            },
            ingredient2: {
                ingredient: bigReactorsIngredient('bigreactors:anglesite_crystal'),
                count: 1
            },
            result: { id: 'bigreactors:tangerium', amount: 500 },
            id: `bigreactors:fluidizer/solidmixing/tangerium_2`
        },
        {
            ingredient1: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/uranium`).getId()),
                count: 2
            },
            ingredient2: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/plutonium`).getId()),
                count: 1
            },
            result: { id: 'bigreactors:verderium', amount: 2000 },
            id: `bigreactors:fluidizer/solidmixing/veridium_1`
        },
        {
            ingredient1: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/plutonium`).getId()),
                count: 1
            },
            ingredient2: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/uranium`).getId()),
                count: 2
            },

            result: { id: 'bigreactors:verderium', amount: 2000 },
            id: `bigreactors:fluidizer/solidmixing/veridium_2`
        },
        {
            ingredient1: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:storage_blocks/uranium`).getId()),
                count: 2
            },
            ingredient2: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:storage_blocks/plutonium`).getId()),
                count: 1
            },
            result: { id: 'bigreactors:verderium', amount: 18000 },
            id: `bigreactors:fluidizer/solidmixing/veridium9_1`
        },
        {
            ingredient1: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:storage_blocks/plutonium`).getId()),
                count: 1
            },
            ingredient2: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:storage_blocks/uranium`).getId()),
                count: 2
            },
            result: { id: 'bigreactors:verderium', amount: 18000 },
            id: `bigreactors:fluidizer/solidmixing/veridium9_2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'bigreactors:fluidizersolidmixing';
        event.custom(recipe).id(recipe.id);
    });
});
