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
        },
        {
            inputs: [
                { tag: 'c:ingots/tin', count: 1 },
                { tag: 'c:ingots/copper', count: 3 }
            ],
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/bronze').getId(), count: 4 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}bronze_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/gold', count: 1 },
                { tag: 'c:ingots/silver', count: 1 }
            ],
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/electrum').getId(), count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}electrum_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/iron', count: 2 },
                { tag: 'c:ingots/nickel', count: 1 }
            ],
            output: { id: AlmostUnified.getTagTargetItem('c:ingots/invar').getId(), count: 3 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}invar_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/copper', count: 1 },
                { tag: 'c:ingots/nickel', count: 1 }
            ],
            output: { id: 'modern_industrialization:cupronickel_ingot', count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}cupronickel_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/lead', count: 1 },
                { tag: 'c:ingots/antimony', count: 1 }
            ],
            output: { id: 'modern_industrialization:battery_alloy_ingot', count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}battery_alloy_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:alloy_smelting';
        event.custom(recipe).id(recipe.id);
    });
});
