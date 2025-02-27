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
                recipe.result = Item.of(`occultism:chalk_rainbow[unbreakable={}]`).toJson();
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
