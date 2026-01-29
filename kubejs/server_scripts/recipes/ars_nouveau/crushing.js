ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/crush/';

    const recipes = [
        {
            input: { item: 'minecraft:ink_sac' },
            output: [
                {
                    stack: { id: 'minecraft:black_dye', count: 2 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}black_dye`
        },
        {
            input: { tag: 'c:ores/netherite_scrap' },
            output: [
                {
                    stack: { id: 'minecraft:netherite_scrap', count: 2 },
                    chance: 1.0,
                    maxRange: 1
                },
                {
                    stack: { id: 'minecraft:netherite_scrap', count: 1 },
                    chance: 0.1,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: { tag: 'c:ices/ice' },
            output: [
                {
                    stack: { id: 'minecraft:snow_block', count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}snow_block`
        }
    ];

    let materials = [
        { primary: 'iron', secondary: 'nickel' },
        { primary: 'copper', secondary: 'gold' },
        { primary: 'gold', secondary: 'copper' },
        { primary: 'osmium', secondary: 'silver' },
        { primary: 'iesnium', secondary: 'silver' },
        { primary: 'iridium', secondary: 'osmium' },
        { primary: 'lead', secondary: 'silver' },
        { primary: 'silver', secondary: 'lead' },
        { primary: 'nickel', secondary: 'platinum' },
        { primary: 'tin', secondary: 'iron' },
        { primary: 'uranium', secondary: 'lead' },
        { primary: 'platinum', secondary: 'iridium' },
        { primary: 'aluminum', secondary: 'aluminum' },
        { primary: 'zinc', secondary: 'silver' }
    ];
    materials.forEach((material) => {
        recipes.push({
            input: { tag: `c:raw_materials/${material.primary}` },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 2 },
                    chance: 1.0,
                    maxRange: 1
                },
                {
                    stack: {
                        id: AlmostUnified.getTagTargetItem(`c:dusts/${material.secondary}`).getId(),
                        count: 1
                    },
                    chance: 0.15,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}raw_${material.primary}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);
    });
});
