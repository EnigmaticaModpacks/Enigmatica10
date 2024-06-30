ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmingforblockheads/market/';
    const recipes = [
        {
            category: 'farmingforblockheads:saplings',
            preset: 'occultism:market_trades',
            result: { count: 1, item: 'occultism:otherworld_sapling' },
            id: `${id_prefix}otherworld_sapling`
        }
    ];

    event.forEachRecipe({ type: 'farmingforblockheads:market' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (!farmingforblockheads_preset_whitelist.includes(recipe.preset)) {
            event.remove({ id: recipe_id });
        } else {
            recipe.preset = 'enigmatica:market_trades';
            recipe.id = `${id_prefix}${recipe_id.split('market/').pop()}`;
            event.remove({ id: recipe_id });
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmingforblockheads:market';
        if (!recipe.preset) recipe.preset = 'enigmatica:market_trades';
        event.custom(recipe).id(recipe.id);
    });
});
