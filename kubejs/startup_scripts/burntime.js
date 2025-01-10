ItemEvents.modification((event) => {
    // https://kubejs.com/wiki/tutorials/item-modification

    const recipes = [{ input: 'occultism:tallow', burnTime: 300 }];

    recipes.forEach((recipe) => {
        event.modify(recipe.input, (item) => {
            item.burnTime = recipe.burnTime;
        });
    });
});
