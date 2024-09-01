ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/miner/';

    const recipes = [
        {
            ingredient: { tag: 'occultism:miners/ores' },
            result: {
                type: 'occultism:weighted_tag',
                tag: 'c:ores/dark_gem',
                count: 1,
                weight: 187
            },
            id: `${id_prefix}dark_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        event.custom(recipe).id(recipe.id);
    });
});
