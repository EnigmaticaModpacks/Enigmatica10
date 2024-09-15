ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/blast_furnace/';

    const recipes = [
        {
            item_inputs: [{ tag: 'c:ingots/uraninite', amount: 1 }],
            item_outputs: [{ item: AlmostUnified.getTagTargetItem('c:ingots/uranium').getId(), amount: 1 }],
            duration: 200,
            eu: 128,
            id: `${id_prefix}ingot_uranium`
        },
        {
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 10000 }],
            fluid_outputs: [{ fluid: 'mekanism:brine', amount: 1000 }],
            duration: 600,
            eu: 4,
            id: `${id_prefix}brine`
        },
        {
            fluid_inputs: [{ fluid: 'mekanism:brine', amount: 1000 }],
            fluid_outputs: [{ fluid: 'mekanism:lithium', amount: 100 }],
            duration: 600,
            eu: 4,
            id: `${id_prefix}lithium`
        },
        {
            fluid_inputs: [{ fluid: 'mekanism:lithium', amount: 100 }],
            item_outputs: [{ amount: 1, item: 'mekanism:dust_lithium' }],
            duration: 600,
            eu: 4,
            id: `${id_prefix}dust_lithium`
        },
        {
            item_inputs: [{ item: 'modern_industrialization:sodium_dust', amount: 1 }],
            fluid_outputs: [{ fluid: 'mekanism:sodium', amount: 3 }],
            duration: 100,
            eu: 4,
            id: `${id_prefix}molten_sodium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:blast_furnace';
        event.custom(recipe).id(recipe.id);
    });
});
