ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/ritual/';
    const sacrifice = {
        llama: { display_name: 'ritual.occultism.sacrifice.llamas', tag: 'c:llamas' },
        chicken: { display_name: 'ritual.occultism.sacrifice.chicken', tag: 'c:chickens' },
        cow: { display_name: 'ritual.occultism.sacrifice.cows', tag: 'c:cows' },
        fish: { display_name: 'ritual.occultism.sacrifice.fish', tag: 'c:fish' },
        warden: { display_name: 'ritual.occultism.sacrifice.warden', tag: 'c:wardens' },
        sheep: { display_name: 'ritual.occultism.sacrifice.sheep', tag: 'c:sheep' }
    };

    const recipes = [
        {
            result: { id: 'irons_spellbooks:eldritch_manuscript', count: 1 },
            activation_item: { item: 'ars_nouveau:blank_parchment' },
            ingredients: [
                { item: 'minecraft:conduit' },
                { item: 'minecraft:nether_star' },
                { item: 'ars_nouveau:summon_focus' },
                { item: 'minecraft:dragon_egg' },

                { item: 'deeperdarker:resonarium' },
                { tag: 'c:dusts/iesnium' },
                { item: 'deeperdarker:resonarium' },
                { tag: 'c:dusts/iesnium' },

                { tag: 'c:dusts/iesnium' },
                { item: 'deeperdarker:resonarium' },
                { tag: 'c:dusts/iesnium' },
                { item: 'deeperdarker:resonarium' }
            ],
            entity_to_sacrifice: sacrifice.warden,
            pentacle_id: 'occultism:contact_eldritch_spirit',
            ritual_dummy: { id: 'occultism:ritual_dummy/misc_eldritch_manuscript', count: 1 },
            ritual_type: 'occultism:craft',
            duration: 120,
            id: `${id_prefix}misc_eldritch_manuscript`
        },
        {
            result: { id: 'irons_spellbooks:archevoker_logbook_translated', count: 1 },
            activation_item: { item: 'irons_spellbooks:archevoker_logbook_untranslated' },
            ingredients: [
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:otherworld_essence' },
                { item: 'occultism:spirit_attuned_gem' },
                { item: 'occultism:otherworld_essence' }
            ],
            pentacle_id: 'occultism:craft_djinni',
            ritual_dummy: { id: 'occultism:ritual_dummy/craft_archevoker_logbook_translated', count: 1 },
            ritual_type: 'occultism:craft',
            duration: 90,
            id: `${id_prefix}craft_archevoker_logbook_translated`
        }
    ];

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

        if (recipe_id.includes('_random_animal_')) {
            recipe.item_to_use = { item: 'minecraft:egg' };
            recipe.id = recipe_id;
        }

        switch (recipe_id) {
            case 'occultism:ritual/misc_chalk_rainbow':
                recipe.entity_to_sacrifice = sacrifice.sheep;
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/misc_wild_trim':
                recipe.entity_to_sacrifice = sacrifice.llama;
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/possess_goat':
            case 'occultism:ritual/possess_witch':
            case 'occultism:ritual/possess_bee':
            case 'occultism:ritual/wild_breeze':
            case 'occultism:ritual/wild_weak_breeze':
            case 'occultism:ritual/wild_strong_breeze':
                recipe.entity_to_sacrifice = sacrifice.chicken;
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/possess_warden':
                recipe.entity_to_sacrifice = sacrifice.cow;
                recipe.ingredients = [
                    { item: 'minecraft:sculk' },
                    { item: 'minecraft:sculk' },
                    { item: 'minecraft:sculk' },
                    { item: 'minecraft:sculk' }
                ];
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/misc_budding_amethyst':
                delete recipe.entity_to_sacrifice;
                recipe.ingredients = [
                    { tag: 'c:dusts/amethyst' },
                    { tag: 'c:dusts/amethyst' },
                    { tag: 'c:dusts/amethyst' },
                    { tag: 'c:dusts/amethyst' }
                ];
                recipe.id = recipe_id;
                break;

            case 'occultism:ritual/repair_armors':
            case 'occultism:ritual/repair_tools':
            case 'occultism:ritual/repair_miners':
                recipe.ingredients = [
                    { item: 'occultism:otherworld_essence' },
                    { item: 'occultism:otherworld_essence' },
                    { item: 'occultism:spirit_attuned_gem' },
                    { item: 'occultism:otherworld_essence' }
                ];
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/repair_chalks':
                recipe.ingredients = [
                    { item: 'occultism:otherworld_essence' },
                    { tag: 'c:dusts/otherworld_wood' },
                    { item: 'occultism:otherworld_essence' },
                    { tag: 'c:dusts/otherstone' }
                ];
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/wild_drowned':
                recipe.entity_to_sacrifice = sacrifice.fish;
                recipe.activation_item = { tag: 'minecraft:coral_blocks' };
                recipe.ingredients = [
                    { item: 'minecraft:pufferfish' },
                    { item: 'minecraft:gravel' },
                    { item: 'minecraft:dried_kelp_block' },
                    { item: 'minecraft:gravel' }
                ];
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/possess_zombie_piglin':
                recipe.ingredients = [
                    { item: 'minecraft:gilded_blackstone' },
                    { item: 'minecraft:warped_fungus' },
                    { item: 'minecraft:quartz' },
                    { item: 'minecraft:crimson_fungus' }
                ];
                recipe.id = recipe_id;
                break;
            case 'occultism:ritual/craft_ritual_satchel_t1':
                recipe.activation_item = { item: 'occultism:book_of_binding_bound_foliot' };
                recipe.pentacle_id = 'occultism:craft_foliot';
                recipe.id = recipe_id;
                break;
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
