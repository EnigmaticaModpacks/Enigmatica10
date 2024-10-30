ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/crush/';

    const recipes = [
        {
            input: { tag: `c:gems/certus_quartz` },
            output: [
                {
                    stack: { id: 'ae2:certus_quartz_dust', count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}certus_quartz_dust`
        },
        {
            input: { tag: `c:gems/fluix` },
            output: [
                {
                    stack: { id: 'ae2:fluix_dust', count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}fluix_dust`
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
        { primary: 'nickel', secondary: 'iron' },
        { primary: 'tin', secondary: 'iron' },
        { primary: 'uranium', secondary: 'lead' }
    ];
    materials.forEach((material) => {
        recipes.push(
            {
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
            },
            {
                input: { tag: `c:ingots/${material.primary}` },
                output: [
                    {
                        stack: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
                        chance: 1.0,
                        maxRange: 1
                    }
                ],
                id: `${id_prefix}${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);
    });
});
