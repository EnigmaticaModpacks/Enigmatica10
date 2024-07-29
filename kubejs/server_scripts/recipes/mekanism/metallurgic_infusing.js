ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/metallurgic_infusing/';

    const recipes = [
        {
            output: { id: 'minecraft:rotten_flesh', count: 1 },
            item_input: { tag: 'c:foods/raw_meat', count: 1 },
            chemical_input: { amount: 10, tag: 'mekanism:bio' },
            id: `${id_prefix}rotten_flesh`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
