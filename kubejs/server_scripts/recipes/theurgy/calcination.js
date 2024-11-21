ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/calcination/';
    const recipes = [
        {
            ingredient: { ingredient: { tag: 'minecraft:meat' }, count: 1 },
            result: {
                type: 'theurgy:item',
                id: 'theurgy:alchemical_salt_creature',
                count: 1
            },
            time: 20,
            category: 'misc',
            id: `${id_prefix}alchemical_salt_creature_from_meat`
        },
        {
            ingredient: { ingredient: { tag: 'minecraft:fishes' }, count: 1 },
            result: {
                type: 'theurgy:item',
                id: 'theurgy:alchemical_salt_creature',
                count: 1
            },
            time: 20,
            category: 'misc',
            id: `${id_prefix}alchemical_salt_creature_from_fishes`
        }
    ];

    event.forEachRecipe({ type: 'theurgy:calcination' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        recipe.time = 20;
        recipe.id = recipe_id;
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'theurgy:calcination';
        event.custom(recipe).id(recipe.id);
    });
});
