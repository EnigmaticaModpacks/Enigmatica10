ServerEvents.compostableRecipes((event) => {
    const recipes = [
        {
            input: 'minecraft:egg',
            chance: 0.35
        },
        {
            input: '#c:foods/raw_meat',
            chance: 0.65
        },
        {
            input: '#c:foods/safe_raw_fish',
            chance: 0.45
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.input, recipe.chance);
    });
});
