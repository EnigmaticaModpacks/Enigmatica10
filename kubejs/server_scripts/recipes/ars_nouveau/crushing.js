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
        },
        {
            input: { tag: `c:gems/lignite_coal` },
            output: [
                {
                    stack: { id: 'modern_industrialization:lignite_coal_dust', count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}lignite_coal_dust`
        },
        {
            input: { item: 'minecraft:glow_berries' },
            output: [
                {
                    stack: { id: 'minecraft:yellow_dye', count: 2 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}yellow_dye_from_glow_berries`
        },
        {
            input: { item: 'minecraft:ender_pearl' },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:dusts/ender_pearl`).getId(), count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}ender_pearl_dust`
        },
        {
            input: { item: 'ae2:sky_stone_block' },
            output: [
                {
                    stack: { id: 'ae2:sky_dust', count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}sky_dust`
        },
        {
            input: { tag: 'c:obsidians' },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:dusts/obsidian`).getId(), count: 4 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}obsidian`
        },
        {
            input: { item: 'advanced_ae:shattered_singularity' },
            output: [
                {
                    stack: { id: 'advanced_ae:quantum_infused_dust', count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}quantum_infused_dust`
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

    materials = ['coal', 'charcoal', 'diamond', 'emerald', 'lapis', 'fluorite', 'quartz'];
    materials.forEach((material) => {
        recipes.push({
            input: { tag: `c:gems/${material}` },
            output: [
                {
                    stack: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 1 },
                    chance: 1.0,
                    maxRange: 1
                }
            ],
            id: `${id_prefix}${material}_dust`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);
    });
});
