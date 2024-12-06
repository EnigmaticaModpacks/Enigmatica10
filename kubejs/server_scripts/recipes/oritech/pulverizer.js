ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/pulverizer/';
    const recipes = [
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:raw_materials/platinum`).getId(), count: 2 }],
            ingredients: [{ tag: 'c:ores/platinum' }],
            time: 600,
            id: `${id_prefix}ore_platinum`
        },
        {
            results: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/platinum`).getId(), count: 1 },
                { id: AlmostUnified.getTagTargetItem(`c:tiny_dusts/platinum`).getId(), count: 3 }
            ],
            ingredients: [{ tag: 'c:raw_materials/platinum' }],
            time: 750,
            id: `${id_prefix}raw_platinum`
        },
        {
            results: [{ id: 'minecraft:blaze_powder', count: 6 }],
            ingredients: [{ item: 'justdirethings:coal_t2' }],
            time: 300,
            id: `${id_prefix}blaze_powder`
        },
        {
            results: [{ id: 'powah:uraninite_raw', count: 4 }],
            ingredients: [{ tag: 'c:ores/uraninite' }],
            time: 300,
            id: `${id_prefix}uraninite_raw`
        },
        {
            results: [{ id: 'actuallyadditions:black_quartz', count: 2 }],
            ingredients: [{ tag: 'c:ores/black_quartz' }],
            time: 300,
            id: `${id_prefix}black_quartz`
        },
        {
            results: [{ id: 'ae2:certus_quartz_dust', count: 1 }],
            ingredients: [{ tag: 'c:gems/certus_quartz' }],
            time: 300,
            id: `${id_prefix}certus_quartz_dust`
        },
        {
            results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/emerald`).getId(), count: 1 }],
            ingredients: [{ tag: 'c:gems/emerald' }],
            time: 300,
            id: `${id_prefix}emerald_dust`
        },
        {
            results: [{ id: 'minecraft:glowstone_dust', count: 1 }],
            ingredients: [{ item: 'minecraft:glow_berries' }],
            time: 300,
            id: `${id_prefix}glowstone_dust`
        },
        {
            results: [{ id: 'ae2:sky_dust', count: 1 }],
            ingredients: [{ item: 'ae2:sky_stone_block' }],
            time: 300,
            id: `${id_prefix}sky_dust`
        },
        {
            results: [{ id: 'advanced_ae:quantum_infused_dust', count: 1 }],
            ingredients: [{ item: 'advanced_ae:shattered_singularity' }],
            time: 300,
            id: `${id_prefix}quantum_infused_dust`
        },
        {
            results: [{ id: 'modern_industrialization:lignite_coal_dust', count: 1 }],
            ingredients: [{ tag: 'c:gems/lignite_coal' }],
            time: 300,
            id: `${id_prefix}lignite_coal_dust`
        },
        {
            results: [{ id: 'minecraft:prismarine_shard', count: 4 }],
            ingredients: [{ item: 'minecraft:prismarine' }],
            time: 200,
            id: `${id_prefix}prismarine_from_block`
        },
        {
            results: [{ id: 'minecraft:prismarine_shard', count: 9 }],
            ingredients: [{ item: 'minecraft:prismarine_bricks' }],
            time: 200,
            id: `${id_prefix}prismarine_from_bricks`
        },
        {
            results: [
                { id: 'minecraft:prismarine_shard', count: 8 },
                { id: 'minecraft:black_dye', count: 1 }
            ],
            ingredients: [{ item: 'minecraft:dark_prismarine' }],
            time: 200,
            id: `${id_prefix}prismarine_from_dark_prismarine`
        },
        {
            results: [
                { id: 'minecraft:prismarine_shard', count: 4 },
                { id: 'minecraft:prismarine_crystals', count: 5 }
            ],
            ingredients: [{ item: 'minecraft:sea_lantern' }],
            time: 200,
            id: `${id_prefix}prismarine_from_sea_lantern`
        },
        {
            results: [{ id: 'minecraft:sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/blocks' }],
            time: 300,
            id: `oritech:pulverizer/dust/sand_from_sandstone`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            results: [{ id: `minecraft:${color}_dye`, count: 3 }],
            ingredients: [{ tag: `c:raw_materials/dyes/${color}` }],
            time: 300,
            id: `${id_prefix}${color}_dye`
        });
    });

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
        { primary: 'uranium', secondary: 'lead' }
    ];
    materials.forEach((material) => {
        recipes.push(
            {
                results: [
                    { id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(), count: 2 }
                ],
                ingredients: [{ tag: `c:ores/${material.primary}` }],
                time: 400,
                id: `${id_prefix}ore_${material.primary}`
            },
            {
                results: [
                    { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
                    { id: AlmostUnified.getTagTargetItem(`c:tiny_dusts/${material.primary}`).getId(), count: 3 }
                ],
                ingredients: [{ tag: `c:raw_materials/${material.primary}` }],
                time: 800,
                id: `${id_prefix}raw_${material.primary}`
            },
            {
                results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 }],
                ingredients: [{ tag: `c:ingots/${material.primary}` }],
                time: 200,
                id: `${id_prefix}${material.primary}`
            }
        );
    });

    materials = ['charcoal', 'diamond', 'emerald', 'lapis', 'fluorite'];
    materials.forEach((material) => {
        recipes.push({
            results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 1 }],
            ingredients: [{ tag: `c:gems/${material}` }],
            time: 300,
            id: `${id_prefix}${material}_dust`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:pulverizer';

        if (!recipe.fluidInputVariant) {
            recipe.fluidInputVariant = 'minecraft:empty';
            recipe.fluidInputAmount = 0;
        }
        if (!recipe.fluidOutputVariant) {
            recipe.fluidOutputVariant = 'minecraft:empty';
            recipe.fluidOutputAmount = 0;
        }

        event.custom(recipe).id(recipe.id);
    });
});
