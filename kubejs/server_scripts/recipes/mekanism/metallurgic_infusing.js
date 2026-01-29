ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/metallurgic_infusing/';

    const recipes = [
        {
            output: { id: 'minecraft:rotten_flesh', count: 1 },
            item_input: { tag: 'c:foods/raw_meat', count: 1 },
            chemical_input: { amount: 10, tag: 'mekanism:bio' },
            per_tick_usage: false,
            id: `${id_prefix}rotten_flesh`
        },
        {
            output: { id: 'minecraft:golden_carrot', count: 1 },
            item_input: { item: 'minecraft:carrot', count: 1 },
            chemical_input: { amount: 10, tag: 'mekanism:gold' },
            per_tick_usage: false,
            id: `${id_prefix}golden_carrot`
        },
        {
            output: { id: 'minecraft:glistering_melon_slice', count: 1 },
            item_input: { item: 'minecraft:melon_slice', count: 1 },
            chemical_input: { amount: 10, tag: 'mekanism:gold' },
            per_tick_usage: false,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            output: { id: 'minecraft:golden_apple', count: 1 },
            item_input: { item: 'minecraft:apple', count: 1 },
            chemical_input: { amount: 80, tag: 'mekanism:gold' },
            per_tick_usage: false,
            id: `${id_prefix}golden_apple`
        },
        {
            output: { id: 'create:rose_quartz', count: 1 },
            item_input: { tag: 'c:gems/quartz', count: 1 },
            chemical_input: { amount: 80, tag: 'mekanism:redstone' },
            per_tick_usage: false,
            id: `${id_prefix}rose_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
