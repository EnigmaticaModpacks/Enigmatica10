ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/alloy_smelting/';

    const recipes = [
        {
            inputs: [
                { tag: 'c:ingots/iron', count: 1 },
                { item: 'minecraft:coal', count: 2 }
            ],
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/steel').getId(), count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}steel_ingot_from_coal`
        },
        {
            inputs: [
                { tag: 'c:ingots/iron', count: 1 },
                { tag: 'c:dusts/coal', count: 1 }
            ],
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/steel').getId(), count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}steel_ingot_from_coal_dust`
        },
        {
            inputs: [
                { tag: 'c:ingots/steel', count: 1 },
                { tag: 'c:obsidians', count: 1 }
            ],
            output: { id: 'enderio:dark_steel_ingot', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}darksteel_ingot_from_steel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:alloy_smelting';
        event.custom(recipe).id(recipe.id);
    });
});
