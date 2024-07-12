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
                count: 3
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:market_presets/${recipe.name}`, recipe);
    });
});
