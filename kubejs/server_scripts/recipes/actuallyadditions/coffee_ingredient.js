ServerEvents.recipes((event) => {
    const id_prefix = 'actuallyadditions:coffee_ingredient/';
    const recipes = [
        {
            effects: [{ effect: 'ars_nouveau:mana_regen', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:sourceberry_bush' },
            max_amplifier: 4,
            id: `${id_prefix}mana_regen_from_sourceberry_bush`
        },
        {
            effects: [{ effect: 'ars_nouveau:spell_damage', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:magebloom' },
            max_amplifier: 4,
            id: `${id_prefix}spell_damage_from_magebloom`
        },
        {
            effects: [{ effect: 'ars_nouveau:recovery', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:mendosteen_pod' },
            max_amplifier: 2,
            id: `${id_prefix}recovery_from_mendosteen_pod`
        },
        {
            effects: [{ effect: 'ars_nouveau:shielding', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'ars_nouveau:bastion_pod' },
            max_amplifier: 2,
            id: `${id_prefix}shielding_from_bastion_pod`
        },
        {
            effects: [{ effect: 'minecraft:jump_boost', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'minecraft:rabbit_foot' },
            max_amplifier: 2,
            id: `${id_prefix}jump_boost_from_rabbit_foot`
        },
        {
            effects: [{ effect: 'minecraft:slow_falling', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'minecraft:phantom_membrane' },
            max_amplifier: 2,
            id: `${id_prefix}slow_falling_from_phantom_membrane`
        },
        {
            effects: [{ effect: 'minecraft:slow_falling', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'chococraft:chocobo_feather' },
            max_amplifier: 2,
            id: `${id_prefix}slow_falling_from_chocobo_feather`
        },
        {
            effects: [{ effect: 'minecraft:luck', amplifier: 0, duration: 60 * 10 }],
            ingredient: { item: 'the_bumblezone:glistering_honey_crystal' },
            max_amplifier: 1,
            id: `${id_prefix}luck_from_glistering_honey_crystal`
        },
        {
            effects: [{ effect: 'minecraft:regeneration', amplifier: 0, duration: 2 * 60 }],
            ingredient: { item: 'chococraft:gysahl_green' },
            max_amplifier: 3,
            id: `${id_prefix}regeneration_from_gysahl_green`
        }
    ];

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
