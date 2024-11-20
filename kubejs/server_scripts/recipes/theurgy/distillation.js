ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/distillation/';
    const recipes = [];

    event.forEachRecipe({ type: 'theurgy:distillation' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        recipe.time = 20;
        recipe.id = recipe_id;
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
