ServerEvents.recipes((event) => {
    const id_prefix = 'actuallyadditions:coffee_ingredient/';
    const recipes = [];

    event.forEachRecipe({ type: 'actuallyadditions:coffee_ingredient' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe.effects) {
            recipe.effects[0].duration = recipe.effects[0].effect == 'minecraft:regeneration' ? 2 * 60 : 10 * 60;
            recipe.id = recipe_id;
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:coffee_ingredient';
        event.custom(recipe).id(recipe.id);
    });
});
