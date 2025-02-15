ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/augment/';

    const recipes = [];

    event.forEachRecipe({ type: 'oritech:augment' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let containers = ['applyCost', 'researchCost'];

        containers.forEach((container) => {
            recipe[container].forEach((input) => {
                if (input.ingredient.tag && AlmostUnified.getTagTargetItem(input.ingredient.tag) != null) {
                    input.ingredient = { item: AlmostUnified.getTagTargetItem(input.ingredient.tag).getId() };
                    recipe.id = recipe_id;
                }
            });
        });

        if (recipe.id) {
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:augment';
        event.custom(recipe).id(recipe.id);
    });
});
