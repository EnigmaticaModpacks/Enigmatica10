ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/dissolution/';

    const recipes = [];

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push(
            {
                chemical_input: { chemical: 'mekanism:sulfuric_acid', amount: 1 },
                item_input: { tag: `c:ores/${material}`, count: 1 },
                output: { id: `emendatusenigmatica:dirty_${material}_slurry`, amount: 1000 },
                per_tick_usage: true,
                id: `${id_prefix}dirty_slurry_from_${material}_ore`
            },
            {
                chemical_input: { chemical: 'mekanism:sulfuric_acid', amount: 2 },
                item_input: { count: 1, tag: `c:storage_blocks/raw_${material}` },
                output: { id: `emendatusenigmatica:dirty_${material}_slurry`, amount: 6000 },
                per_tick_usage: true,
                id: `${id_prefix}dirty_slurry_from_raw_${material}_block`
            },
            {
                chemical_input: { chemical: 'mekanism:sulfuric_acid', amount: 1 },
                item_input: { tag: `c:raw_materials/${material}`, count: 3 },
                output: { id: `emendatusenigmatica:dirty_${material}_slurry`, amount: 2000 },
                per_tick_usage: true,
                id: `${id_prefix}dirty_slurry_from_raw_${material}_ore`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:dissolution';
        event.custom(recipe).id(recipe.id);
    });
});
