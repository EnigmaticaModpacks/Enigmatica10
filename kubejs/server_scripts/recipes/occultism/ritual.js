ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const default_duration = 30;
    const recipes = [];

    event.forEachRecipe({ type: 'occultism:ritual' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe.spirit_max_age) {
            if (recipe_id.includes('_trader')) {
                // Remove decay from Traders
                delete recipe.entity_to_summon_settings.spirit_max_age;
            } else {
                // Reduce delay for all other spirits (weather/daytime rituals)
                recipe.entity_to_summon_settings.spirit_max_age = 10;
            }
        }

        // Override default craft time for all recipes
        // if (recipe.ritual_requirement_settings.duration) {
        //     recipe.ritual_requirement_settings.duration = recipe.ritual_requirement_settings.duration / 10;
        // } else {
        //     recipe.ritual_requirement_settings.duration = default_duration / 10;
        // }

        recipe.id = recipe_id;
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
