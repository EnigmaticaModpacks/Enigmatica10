ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const recipes = [];

    event.forEachRecipe({ type: 'occultism:ritual' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe.spirit_max_age) {
            if (recipe_id.includes('_trader')) {
                // Remove decay from Traders
                delete recipe.spirit_max_age;
            } else {
                // Reduce delay for all other spirits (weather/daytime rituals)
                recipe.spirit_max_age = 10;
            }
            recipe.id = recipe_id;
            recipes.push(recipe);
        }

        if (recipe_id.includes('ritual/craft_wild_trim')) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.llamas',
                tag: 'c:llamas'
            };
            recipe.id = recipe_id;
            recipes.push(recipe);
        }

        if (recipe_id.includes('ritual/possess_warden')) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.bats',
                tag: 'c:bats'
            };
            recipe.id = recipe_id;
            recipes.push(recipe);
        }

        if (recipe_id.includes('ritual/possess_witch') || recipe_id.includes('ritual/possess_bee')) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.flying_passive',
                tag: 'occultism:flying_passive'
            };
            recipe.id = recipe_id;
            recipes.push(recipe);
        }

        if (recipe_id.includes('ritual/possess_goat')) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.chicken',
                tag: 'c:chickens'
            };
            recipe.id = recipe_id;
            recipes.push(recipe);
        }

        if (recipe_id.includes('ritual/craft_budding_amethyst')) {
            delete recipe.entity_to_sacrifice;
            recipe.ingredients = [
                { tag: 'c:dusts/amethyst' },
                { tag: 'c:dusts/amethyst' },
                { tag: 'c:dusts/amethyst' },
                { tag: 'c:dusts/amethyst' }
            ];
            recipe.id = recipe_id;
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
