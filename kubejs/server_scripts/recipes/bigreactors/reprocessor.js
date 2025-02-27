ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:bigreactors/reprocessor/';

    const recipes = [
        {
            result: { id: 'bigreactors:ludicrite_ingot', count: 1 },
            fluid: { id: 'bigreactors:cyanite', amount: 1000 },
            waste: {
                ingredient: bigReactorsIngredient(AlmostUnified.getTagTargetItem(`c:ingots/plutonium`).getId()),
                count: 2
            },
            id: `${id_prefix}ludicrite_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'bigreactors:reprocessor';
        event.custom(recipe).id(recipe.id);
    });
});
