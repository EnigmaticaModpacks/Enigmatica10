ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmingforblockheads/market/';
    const recipes = [
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:spirit_attuned_gem',
            result: { count: 1, item: 'occultism:otherworld_sapling' },
            id: `${id_prefix}otherworld_sapling`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'occultism:datura_seeds' },
            id: `${id_prefix}datura_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'chococraft:gysahl_green_seeds' },
            id: `${id_prefix}gyshal_green_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'minecraft:cocoa_beans' },
            id: `${id_prefix}cocoa_beans`
        },
        {
            category: 'farmingforblockheads:saplings',
            result: { count: 1, item: 'arts_and_crafts:cork_sapling' },
            id: `${id_prefix}cork_sapling`
        },
        {
            category: 'farmingforblockheads:saplings',
            result: { count: 1, item: 'minecraft:mangrove_propagule' },
            id: `${id_prefix}mangrove_propagule`
        },
        {
            category: 'farmingforblockheads:other',
            result: { count: 4, item: 'farmingforblockheads:green_fertilizer' },
            id: `${id_prefix}green_fertilizer`
        },
        {
            category: 'farmingforblockheads:other',
            result: { count: 4, item: 'farmingforblockheads:red_fertilizer' },
            id: `${id_prefix}red_fertilizer`
        },
        {
            category: 'farmingforblockheads:other',
            result: { count: 4, item: 'farmingforblockheads:yellow_fertilizer' },
            id: `${id_prefix}yellow_fertilizer`
        },
        {
            category: 'farmingforblockheads:other',
            result: { count: 12, item: 'minecraft:bone_meal' },
            id: `${id_prefix}bone_meal`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:blue_archwood_sapling' },
            id: `${id_prefix}blue_archwood_sapling`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:red_archwood_sapling' },
            id: `${id_prefix}red_archwood_sapling`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:purple_archwood_sapling' },
            id: `${id_prefix}purple_archwood_sapling`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:green_archwood_sapling' },
            id: `${id_prefix}green_archwood_sapling`
        },
        {
            category: 'farmingforblockheads:other',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:mendosteen_pod' },
            id: `${id_prefix}mendosteen_pod`
        },
        {
            category: 'farmingforblockheads:other',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:bastion_pod' },
            id: `${id_prefix}bastion_pod`
        },
        {
            category: 'farmingforblockheads:other',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:frostaya_pod' },
            id: `${id_prefix}frostaya_pod`
        },
        {
            category: 'farmingforblockheads:other',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_nouveau:bombegranate_pod' },
            id: `${id_prefix}bombegranate_pod`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_elemental:yellow_archwood_sapling' },
            id: `${id_prefix}yellow_archwood_sapling`
        },
        {
            category: 'farmingforblockheads:other',
            preset: 'enigmatica:source_gem',
            result: { count: 1, item: 'ars_elemental:flashpine_pod' },
            id: `${id_prefix}flashpine_pod`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'actuallyadditions:rice_seeds' },
            id: `${id_prefix}actuallyadditions_rice_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'actuallyadditions:canola_seeds' },
            id: `${id_prefix}actuallyadditions_canola_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'actuallyadditions:flax_seeds' },
            id: `${id_prefix}actuallyadditions_flax_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'actuallyadditions:coffee_beans' },
            id: `${id_prefix}actuallyadditions_coffee_beans`
        },
        {
            category: 'farmingforblockheads:saplings',
            result: { count: 1, item: 'sushigocrafting:avocado_sapling' },
            id: `${id_prefix}avocado_sapling`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'sushigocrafting:sesame_seeds' },
            id: `${id_prefix}sesame_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'sushigocrafting:rice_seeds' },
            id: `${id_prefix}sushigocrafting_rice_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'sushigocrafting:cucumber_seeds' },
            id: `${id_prefix}cucumber_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'sushigocrafting:soy_seeds' },
            id: `${id_prefix}soy_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'sushigocrafting:wasabi_seeds' },
            id: `${id_prefix}wasabi_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'farmersdelight:rice' },
            id: `${id_prefix}farmersdelight_rice`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'farmersdelight:tomato_seeds' },
            id: `${id_prefix}farmersdelight_tomato_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'farmersdelight:cabbage_seeds' },
            id: `${id_prefix}farmersdelight_cabbage_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'farmersdelight:onion' },
            id: `${id_prefix}farmersdelight_onion`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'supplementaries:flax_seeds' },
            id: `${id_prefix}supplementaries_flax_seeds`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:refined_soulstone',
            result: { count: 1, item: 'malum:runewood_sapling' },
            id: `${id_prefix}runewood_sapling`
        },
        {
            category: 'farmingforblockheads:saplings',
            preset: 'enigmatica:refined_soulstone',
            result: { count: 1, item: 'malum:azure_runewood_sapling' },
            id: `${id_prefix}azure_runewood_sapling`
        }
    ];

    event.forEachRecipe({ type: 'farmingforblockheads:market' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (farmingforblockheads_preset_whitelist.includes(recipe.preset)) {
            recipe.preset = 'enigmatica:gold_nugget';
            recipe.id = `${id_prefix}${recipe_id.split('market/').pop()}`;
            recipes.push(recipe);
        }
        event.remove({ id: recipe_id });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmingforblockheads:market';
        if (!recipe.preset) recipe.preset = 'enigmatica:gold_nugget';
        event.custom(recipe).id(recipe.id);
    });
});
