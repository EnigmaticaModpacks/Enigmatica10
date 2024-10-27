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
                recipe.id = recipe_id;
            } else {
                // Reduce delay for all other spirits (weather/daytime rituals)
                recipe.spirit_max_age = 10;
                recipe.id = recipe_id;
            }
        }

        if (recipe_id.includes('ritual/craft_wild_trim')) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.llamas',
                tag: 'c:llamas'
            };
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/possess_warden')) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.bats',
                tag: 'c:bats'
            };
            recipe.ingredients = [
                { item: 'minecraft:sculk' },
                { item: 'minecraft:sculk' },
                { item: 'minecraft:sculk' },
                { item: 'minecraft:sculk' },
                { item: 'minecraft:sculk' },
                { item: 'minecraft:sculk' }
            ];
            recipe.id = recipe_id;
        } else if (
            recipe_id.includes('ritual/possess_goat') ||
            recipe_id.includes('ritual/possess_witch') ||
            recipe_id.includes('ritual/possess_bee')
        ) {
            recipe.entity_to_sacrifice = {
                display_name: 'ritual.occultism.sacrifice.chicken',
                tag: 'c:chickens'
            };
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/craft_budding_amethyst')) {
            delete recipe.entity_to_sacrifice;
            recipe.ingredients = [
                { tag: 'c:dusts/amethyst' },
                { tag: 'c:dusts/amethyst' },
                { tag: 'c:dusts/amethyst' },
                { tag: 'c:dusts/amethyst' }
            ];
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/repair_miners')) {
            recipe.ingredients = [
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:spirit_attuned_gem' },
                { item: 'occultism:spirit_attuned_gem' },
                { item: 'occultism:spirit_attuned_gem' },
                { item: 'occultism:spirit_attuned_gem' }
            ];
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/repair_armors') || recipe_id.includes('ritual/repair_tools')) {
            recipe.ingredients = [
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:spirit_attuned_gem' },
                { item: 'occultism:otherworld_essence' }
            ];
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/repair_chalks')) {
            recipe.ingredients = [
                { item: 'occultism:otherworld_essence' },
                { tag: 'c:dusts/otherworld_wood' },
                { item: 'occultism:otherworld_essence' },
                { tag: 'c:dusts/otherstone' }
            ];
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/craft_gray_paste')) {
            recipe.ingredients = [
                { tag: 'c:gunpowders' },
                { item: 'minecraft:clay_ball' },
                { item: 'minecraft:phantom_membrane' },
                { item: 'minecraft:clay_ball' }
            ];
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/wild_drowned')) {
            recipe.entity_to_sacrifice = { display_name: 'ritual.occultism.sacrifice.fish', tag: 'c:fish' };
            recipe.activation_item = { tag: 'minecraft:coral_blocks' };
            recipe.ingredients = [
                { item: 'minecraft:pufferfish' },
                { item: 'minecraft:gravel' },
                { item: 'minecraft:dried_kelp_block' },
                { item: 'minecraft:gravel' }
            ];
            recipe.id = recipe_id;
        } else if (recipe_id.includes('ritual/possess_zombie_piglin')) {
            recipe.ingredients = [
                { item: 'minecraft:gilded_blackstone' },
                { item: 'minecraft:warped_fungus' },
                { item: 'minecraft:quartz' },
                { item: 'minecraft:crimson_fungus' }
            ];
            recipe.id = recipe_id;
        }

        if (recipe.id) {
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
