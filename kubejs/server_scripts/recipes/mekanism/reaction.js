ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/reaction/';

    const recipes = [
        // {
        //     type: 'mekanism:reaction',
        //     chemical_input: { amount: 1000, chemical: 'mekanism:oxygen' },
        //     chemical_output: { amount: 1000, id: 'mekanism:hydrogen' },
        //     duration: 900,
        //     fluid_input: { amount: 1000, tag: 'minecraft:water' },
        //     item_input: {
        //         type: 'neoforge:compound',
        //         children: [{ tag: 'c:storage_blocks/coal' }, { tag: 'c:storage_blocks/charcoal' }],
        //         count: 1
        //     },
        //     item_output: { count: 9, id: 'mekanism:dust_sulfur' },
        //     id: `${id_prefix}netherite_upgrade_smithing_template`
        // }
    ];

    event.forEachRecipe({ type: 'mekanism:reaction' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();
        if (recipe.item_output && recipe.item_output.id == 'mekanism:dust_sulfur') {
            recipe.item_output.id = 'modern_industrialization:sulfur_dust';
            recipe.id = recipe_id;
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:reaction';
        event.custom(recipe).id(recipe.id);
    });
});
