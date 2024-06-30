ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmingforblockheads/market/';
    const recipes = [
        {
            category: 'farmingforblockheads:saplings',
            preset: 'occultism:market_trades',
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
            id: `${id_prefix}gysahl_green_seeds`
        },
        {
            category: 'farmingforblockheads:seeds',
            result: { count: 1, item: 'jags:grass_seed' },
            id: `${id_prefix}grass_seed`
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
        }
    ];

    event.forEachRecipe({ type: 'farmingforblockheads:market' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (farmingforblockheads_preset_whitelist.includes(recipe.preset)) {
            recipe.preset = 'enigmatica:market_trades';
            recipe.id = `${id_prefix}${recipe_id.split('market/').pop()}`;
            recipes.push(recipe);
        }
        event.remove({ id: recipe_id });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmingforblockheads:market';
        if (!recipe.preset) recipe.preset = 'enigmatica:market_trades';
        event.custom(recipe).id(recipe.id);
    });
});
