ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:handcrafted/shaped/';

    const recipes = [
        {
            output: '3x handcrafted:terracotta_thin_pot',
            pattern: ['A ', 'AA', 'AA'],
            key: {
                A: 'minecraft:terracotta'
            },
            id: 'handcrafted:terracotta_thin_pot'
        }
    ];

    event.forEachRecipe({ mod: 'handcrafted', id: /_sheet$/ }, (r) => {
        // Convert Sheets to Shaped recipe to resolve recipe conflict with Comforts
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let output = Item.of(recipe.result.id, recipe.result.count);
        let input = recipe.ingredients[0].item;
        recipes.push({
            output: output,
            pattern: ['AAA'],
            key: {
                A: input
            },
            id: recipe_id
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
