MoreJS.registerPotionBrewing((event) => {
    // Documentation: https://github.com/AlmostReliable/morejs/wiki/Potion-Brewing

    const recipes = [
        {
            reagent: 'ars_nouveau:fire_essence',
            input: 'minecraft:awkward',
            output: 'minecraft:fire_resistance'
        },
        {
            reagent: 'minecraft:honeycomb',
            input: 'minecraft:awkward',
            output: 'minecraft:healing'
        },
        {
            reagent: 'ars_nouveau:water_essence',
            input: 'minecraft:awkward',
            output: 'minecraft:water_breathing'
        },
        {
            reagent: 'ars_nouveau:air_essence',
            input: 'minecraft:awkward',
            output: 'minecraft:invisibility'
        },
        {
            reagent: 'chococraft:gysahl_green',
            input: 'minecraft:awkward',
            output: 'minecraft:regeneration'
        },
        {
            reagent: 'ars_nouveau:manipulation_essence',
            input: 'minecraft:awkward',
            output: 'minecraft:strength'
        },
        {
            reagent: 'chococraft:chocobo_feather',
            input: 'minecraft:awkward',
            output: 'minecraft:slow_falling'
        },
        {
            reagent: 'chococraft:gold_gysahl',
            input: 'minecraft:slow_falling',
            output: 'apothic_attributes:flying'
        },
        {
            reagent: 'ae2:sky_dust',
            input: 'apothic_attributes:long_flying',
            output: 'apothic_attributes:extra_long_flying'
        },
        {
            reagent: 'ars_nouveau:earth_essence',
            input: 'minecraft:awkward',
            output: 'kubejs:resistance'
        },
        {
            reagent: 'minecraft:redstone',
            input: 'kubejs:resistance',
            output: 'kubejs:long_resistance'
        },
        {
            reagent: 'minecraft:glowstone_dust',
            input: 'kubejs:resistance',
            output: 'kubejs:strong_resistance'
        }
    ];

    let greater_potions = [
        { output: 'kubejs:greater_strength', input: 'minecraft:strong_strength' },
        { output: 'kubejs:greater_regeneration', input: 'minecraft:strong_regeneration' },
        { output: 'kubejs:greater_mana_regen', input: 'ars_nouveau:mana_regen_potion_strong' },
        { output: 'kubejs:greater_spell_damage', input: 'ars_nouveau:spell_damage_potion_strong' },
        { output: 'kubejs:greater_shielding', input: 'ars_nouveau:shielding_potion_strong' },
        { output: 'kubejs:greater_recovery', input: 'ars_nouveau:recovery_potion_strong' },
        { output: 'kubejs:greater_resistance', input: 'kubejs:strong_resistance' },
        { output: 'kubejs:greater_instant_damage', input: 'minecraft:strong_harming' }
    ];

    greater_potions.forEach((potion) => {
        recipes.push({
            reagent: 'ae2:sky_dust',
            input: potion.input,
            output: potion.output
        });
    });

    recipes.forEach((recipe) => {
        // console.log(
        //     `Registering recipe for ${recipe.output}. Reagent: ${recipe.reagent}, Input Potion: ${recipe.input}`
        // );
        event.addPotionBrewing(recipe.reagent, recipe.input, recipe.output);
    });
});

// Potion Types

/*
'ars_nouveau:shielding_potion_strong'
'ars_nouveau:shielding_potion_long'
'ars_nouveau:shielding_potion'

'ars_nouveau:freezing_potion_strong'
'ars_nouveau:freezing_potion_long'
'ars_nouveau:freezing_potion'

'ars_nouveau:blasting_potion_strong'
'ars_nouveau:blasting_potion_long'
'ars_nouveau:blasting_potion'

'ars_nouveau:recovery_potion_strong'
'ars_nouveau:recovery_potion_long'
'ars_nouveau:recovery_potion'

'ars_nouveau:spell_damage_potion_strong'
'ars_nouveau:spell_damage_potion_long'
'ars_nouveau:spell_damage_potion'

'ars_nouveau:mana_regen_potion_strong'
'ars_nouveau:mana_regen_potion_long'
'ars_nouveau:mana_regen_potion'

'minecraft:long_slow_falling'
'minecraft:slow_falling'

'minecraft:luck'

'minecraft:long_weakness'
'minecraft:weakness'

'minecraft:strong_strength'
'minecraft:long_strength'
'minecraft:strength'

'minecraft:strong_regeneration'
'minecraft:long_regeneration'
'minecraft:regeneration'

'minecraft:strong_poison'
'minecraft:long_poison'
'minecraft:poison'

'minecraft:strong_harming'
'minecraft:harming'

'minecraft:strong_healing'
'minecraft:healing'

'minecraft:long_water_breathing'
'minecraft:water_breathing'

'minecraft:strong_turtle_master'
'minecraft:long_turtle_master'
'minecraft:turtle_master'

'minecraft:strong_slowness'
'minecraft:long_slowness'
'minecraft:slowness'

'minecraft:strong_swiftness'
'minecraft:long_swiftness'
'minecraft:swiftness'

'minecraft:long_fire_resistance'
'minecraft:fire_resistance'

'minecraft:strong_leaping'
'minecraft:long_leaping'
'minecraft:leaping'

'minecraft:long_invisibility'
'minecraft:invisibility'

'minecraft:long_night_vision'
'minecraft:night_vision'
*/
