ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/sag_milling/';

    const recipes = [
        {
            input: { tag: 'c:ores/netherite_scrap' },
            outputs: [
                { item: { id: 'minecraft:netherite_scrap', count: 1 } },
                { item: { id: 'minecraft:netherite_scrap', count: 1 }, chance: 0.75 }
            ],
            energy: 2400,
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: { tag: 'c:ores/black_quartz' },
            outputs: [
                { item: { id: 'actuallyadditions:black_quartz', count: 2 } },
                { item: { id: 'actuallyadditions:black_quartz', count: 1 }, chance: 0.25 },
                { item: { id: `minecraft:cobblestone`, count: 1 }, chance: 0.15 }
            ],
            energy: 2400,
            id: `${id_prefix}black_quartz`
        },
        {
            input: { tag: 'minecraft:smelts_to_glass' },
            outputs: [
                { item: { id: 'ae2:silicon', count: 1 } },
                { item: { id: 'ae2:silicon', count: 1 }, chance: 0.15 }
            ],
            energy: 2400,
            id: `enderio:sag_milling/sand`
        },
        {
            input: { item: 'create:rose_quartz' },
            outputs: [
                { item: { id: 'create:polished_rose_quartz', count: 1 } },
                { item: { id: 'create:polished_rose_quartz', count: 1 }, chance: 0.15 }
            ],
            energy: 2400,
            id: `${id_prefix}polished_rose_quartz`
        }
    ];

    let materials = [
        { primary: 'osmium', secondary: 'silver' },
        { primary: 'iesnium', secondary: 'silver' },
        { primary: 'iridium', secondary: 'osmium' },
        { primary: 'lead', secondary: 'silver' },
        { primary: 'silver', secondary: 'lead' },
        { primary: 'nickel', secondary: 'iron' },
        { primary: 'uranium', secondary: 'lead' },
        { primary: 'aluminum', secondary: 'aluminum' }
    ];
    materials.forEach((material) => {
        recipes.push(
            {
                input: { tag: `c:ores/${material.primary}` },
                outputs: [
                    {
                        item: {
                            id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(),
                            count: 1
                        }
                    },
                    {
                        item: {
                            id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(),
                            count: 1
                        },
                        chance: 0.33
                    },
                    { item: { id: `minecraft:cobblestone`, count: 1 }, chance: 0.15 }
                ],
                energy: 2400,
                id: `${id_prefix}${material.primary}_ore`
            },
            {
                input: { tag: `c:raw_materials/${material.primary}` },
                outputs: [
                    { item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 } },
                    {
                        item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
                        chance: 0.25
                    },
                    {
                        item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.secondary}`).getId(), count: 1 },
                        chance: 0.05
                    }
                ],
                energy: 2400,
                id: `${id_prefix}raw_${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:sag_milling';
        event.custom(recipe).id(recipe.id);
    });
});
