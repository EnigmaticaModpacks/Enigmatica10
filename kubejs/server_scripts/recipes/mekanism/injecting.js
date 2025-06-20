ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/injecting/';

    const recipes = [];

    copper_types.forEach((type) => {
        oxides.forEach((oxide, index) => {
            if (index < oxides.length - 1) {
                recipes.push({
                    chemical_input: { chemical: 'mekanism:oxygen', amount: 1 },
                    item_input: { item: `create:${oxide}${type}`, count: 1 },
                    output: { id: `create:${oxides[index + 1]}${type}`, count: 1 },
                    per_tick_usage: true,
                    id: `${id_prefix}${oxides[index + 1]}${type}`
                });
            }
        });
    });

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push(
            {
                chemical_input: { chemical: 'mekanism:hydrogen_chloride', amount: 1 },
                item_input: { tag: `c:raw_materials/${material}`, count: 3 },
                output: { id: AlmostUnified.getTagTargetItem(`c:shards/${material}`).getId(), count: 8 },
                per_tick_usage: true,
                id: `${id_prefix}shard_from_raw_${material}_ore`
            },
            {
                chemical_input: { chemical: 'mekanism:hydrogen_chloride', amount: 2 },
                item_input: { tag: `c:storage_blocks/raw_${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:shards/${material}`).getId(), count: 24 },
                per_tick_usage: true,
                id: `${id_prefix}shard_from_raw_${material}_block`
            },
            {
                chemical_input: { chemical: 'mekanism:hydrogen_chloride', amount: 1 },
                item_input: { tag: `c:ores/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:shards/${material}`).getId(), count: 4 },
                per_tick_usage: true,
                id: `${id_prefix}shard_from_${material}_ore`
            },
            {
                chemical_input: { chemical: 'mekanism:hydrogen_chloride', amount: 1 },
                item_input: { tag: `c:crystals/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:shards/${material}`).getId(), count: 1 },
                per_tick_usage: true,
                id: `${id_prefix}shard_from_${material}_crystal`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:injecting';
        event.custom(recipe).id(recipe.id);
    });
});
