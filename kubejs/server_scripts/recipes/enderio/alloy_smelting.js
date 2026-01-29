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
        },
        {
            inputs: [
                { tag: 'c:ingots/sky', count: 2 },
                { item: 'minecraft:netherite_scrap', count: 1 },
                { tag: 'c:ingots/tainted_gold', count: 2 }
            ],
            output: { id: 'naturesaura:depth_ingot', count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}depth_ingot`
        },
        {
            inputs: [
                { tag: 'c:dusts/redstone', count: 1 },
                { tag: 'c:ingots/copper', count: 1 }
            ],
            output: { id: 'mekanism:alloy_infused', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}alloy_infused`
        },
        {
            inputs: [
                { tag: 'mekanism:enriched/redstone', count: 1 },
                { tag: 'c:ingots/copper', count: 8 }
            ],
            output: { id: 'mekanism:alloy_infused', count: 8 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}alloy_infused_from_enriched`
        },
        {
            inputs: [
                { tag: 'c:dusts/diamond', count: 2 },
                { tag: 'c:alloys/advanced', count: 1 }
            ],
            output: { id: 'mekanism:alloy_reinforced', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}alloy_reinforced`
        },
        {
            inputs: [
                { tag: 'mekanism:enriched/diamond', count: 1 },
                { tag: 'c:alloys/advanced', count: 4 }
            ],
            output: { id: 'mekanism:alloy_reinforced', count: 4 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}alloy_reinforced_from_enriched`
        },
        {
            inputs: [
                { tag: 'c:dusts/refined_obsidian', count: 4 },
                { tag: 'c:alloys/elite', count: 1 }
            ],
            output: { id: 'mekanism:alloy_atomic', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}alloy_atomic`
        },
        {
            inputs: [
                { tag: 'mekanism:enriched/obsidian', count: 1 },
                { tag: 'c:alloys/elite', count: 2 }
            ],
            output: { id: 'mekanism:alloy_atomic', count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}alloy_atomic_from_enriched`
        },
        {
            inputs: [
                { tag: 'c:dusts/diamond', count: 1 },
                { tag: 'c:dusts/obsidian', count: 1 }
            ],
            output: { id: 'mekanism:dust_refined_obsidian', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}dust_refined_obsidian`
        },
        {
            inputs: [
                { tag: 'mekanism:enriched/diamond', count: 1 },
                { tag: 'c:dusts/obsidian', count: 8 }
            ],
            output: { id: 'mekanism:dust_refined_obsidian', count: 8 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}dust_refined_obsidian_from_enriched`
        },
        {
            inputs: [
                { tag: 'c:ingots/gold', count: 2 },
                { item: 'minecraft:netherite_scrap', count: 2 }
            ],
            output: { id: 'minecraft:netherite_ingot', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}netherite_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/zinc', count: 1 },
                { tag: 'c:ingots/copper', count: 1 }
            ],
            output: { id: AlmostUnified.getTagTargetItem(`c:ingots/brass`).getId(), count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}brass_ingot`
        },
        {
            inputs: [
                { tag: 'c:nuggets/zinc', count: 1 },
                { item: 'minecraft:andesite', count: 1 }
            ],
            output: { id: 'create:andesite_alloy', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}andesite_alloy_from_zinc`
        },
        {
            inputs: [
                { tag: 'c:nuggets/iron', count: 1 },
                { item: 'minecraft:andesite', count: 1 }
            ],
            output: { id: 'create:andesite_alloy', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}andesite_alloy_from_iron`
        },
        {
            inputs: [
                { tag: 'c:dusts/redstone', count: 4 },
                { tag: 'c:gems/quartz', count: 1 }
            ],
            output: { id: 'create:rose_quartz', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}rose_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:alloy_smelting';
        event.custom(recipe).id(recipe.id);
    });
});
