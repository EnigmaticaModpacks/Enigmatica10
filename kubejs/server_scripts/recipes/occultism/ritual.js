ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const recipes = [];

    event.forEachRecipe({ type: 'occultism:ritual' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        // Override default craft time for all recipes
        recipe.duration = 20;
        recipe.id = recipe_id;
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
