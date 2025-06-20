ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/purifying/';

    const recipes = [];

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push(
            {
                chemical_input: { chemical: 'mekanism:oxygen', amount: 1 },
                item_input: { tag: `c:ores/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:clumps/${material}`).getId(), count: 3 },
                per_tick_usage: true,
                id: `${id_prefix}clump_from_${material}_ore`
            },
            {
                chemical_input: { chemical: 'mekanism:oxygen', amount: 2 },
                item_input: { tag: `c:storage_blocks/raw_${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:clumps/${material}`).getId(), count: 18 },
                per_tick_usage: true,
                id: `${id_prefix}clump_from_raw_${material}_block`
            },
            {
                chemical_input: { chemical: 'mekanism:oxygen', amount: 1 },
                item_input: { tag: `c:raw_materials/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:clumps/${material}`).getId(), count: 2 },
                per_tick_usage: true,
                id: `${id_prefix}clump_from_raw_${material}_ore`
            },
            {
                chemical_input: { chemical: 'mekanism:oxygen', amount: 1 },
                item_input: { tag: `c:shards/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:clumps/${material}`).getId(), count: 1 },
                per_tick_usage: true,
                id: `${id_prefix}clump_from_${material}_shard`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:purifying';
        event.custom(recipe).id(recipe.id);
    });
});
