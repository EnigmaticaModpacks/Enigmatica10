ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/macerator/';

    const recipes = [
        {
            item_inputs: { item: 'justdirethings:coal_t2', amount: 1 },
            item_outputs: { item: 'minecraft:blaze_powder', amount: 6 },
            eu: 2,
            duration: 100,
            id: `${id_prefix}blaze_powder_from_coal_t2`
        },
        {
            item_inputs: { tag: 'c:pellets/plutonium', amount: 1 },
            item_outputs: { item: 'modern_industrialization:plutonium_dust', amount: 1 },
            eu: 2,
            duration: 800,
            id: `${id_prefix}plutonium_dust`
        },
        {
            item_inputs: { item: 'minecraft:glow_berries', amount: 1 },
            item_outputs: { item: 'minecraft:yellow_dye', amount: 2 },
            eu: 2,
            duration: 100,
            id: `${id_prefix}yellow_dye_from_glow_berries`
        },
        {
            item_inputs: { item: 'advanced_ae:shattered_singularity', amount: 1 },
            item_outputs: { item: 'advanced_ae:quantum_infused_dust', amount: 1 },
            eu: 2,
            duration: 100,
            id: `${id_prefix}quantum_infused_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:macerator';
        event.custom(recipe).id(recipe.id);
    });
});
