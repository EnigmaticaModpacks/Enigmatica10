ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/enriching/';

    const recipes = [
        {
            input: { count: 4, tag: 'c:dusts/blaze' },
            output: { count: 1, id: 'minecraft:blaze_rod' },
            id: `${id_prefix}blaze_rod`
        },
        {
            input: { count: 1, tag: 'c:ingots/uraninite' },
            output: { count: 1, id: AlmostUnified.getTagTargetItem('c:ingots/uranium').getId() },
            id: `${id_prefix}uraninite_to_uranium_ingot`
        },
        {
            input: { count: 1, tag: 'c:ores/black_quartz' },
            output: { count: 2, id: 'actuallyadditions:black_quartz' },
            id: `${id_prefix}black_quartz`
        },
        {
            input: { count: 1, item: 'create:rose_quartz' },
            output: { count: 1, id: 'create:polished_rose_quartz' },
            id: `${id_prefix}polished_rose_quartz`
        }
    ];

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push(
            {
                input: { tag: `c:dirty_dusts/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 1 },
                id: `${id_prefix}dust_from_dirty_${material}_dust`
            },
            {
                input: { tag: `c:ores/${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 2 },
                id: `${id_prefix}dust_from_${material}_ore`
            },
            {
                input: { tag: `c:storage_blocks/raw_${material}`, count: 1 },
                output: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 12 },
                id: `${id_prefix}dust_from_raw_${material}_block`
            },
            {
                input: { tag: `c:raw_materials/${material}`, count: 3 },
                output: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 4 },
                id: `${id_prefix}dust_from_raw_${material}_ore`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        event.custom(recipe).id(recipe.id);
    });
});
