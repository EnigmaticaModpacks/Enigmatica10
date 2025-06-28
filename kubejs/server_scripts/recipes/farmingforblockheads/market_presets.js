ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            name: 'spirit_attuned_gem',
            enabled: true,
            payment: {
                ingredient: {
                    item: 'occultism:spirit_attuned_gem'
                },
                count: 1
            }
        },
        {
            name: 'gold_nugget',
            enabled: true,
            payment: {
                ingredient: {
                    item: 'minecraft:gold_nugget'
                },
                count: 1
            }
        },
        {
            name: 'source_gem',
            enabled: true,
            payment: {
                ingredient: {
                    item: 'ars_nouveau:source_gem'
                },
                count: 1
            }
        },
        {
            name: 'refined_soulstone',
            enabled: true,
            payment: {
                ingredient: {
                    item: 'malum:refined_soulstone'
                },
                count: 1
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:market_presets/${recipe.name}`, recipe);
    });
});
