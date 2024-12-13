ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/grinder/';
    const recipes = [
        {
            results: [
                { id: AlmostUnified.getTagTargetItem(`c:raw_materials/platinum`).getId(), count: 2 },
                { id: 'oritech:fluxite', count: 1 }
            ],
            ingredients: [{ tag: 'c:ores/platinum' }],
            time: 120,
            id: `${id_prefix}ore_platinum`
        },
        {
            results: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/platinum`).getId(), count: 2 },
                { id: AlmostUnified.getTagTargetItem(`c:tiny_dusts/platinum`).getId(), count: 6 },
                { id: 'oritech:fluxite', count: 1 }
            ],
            ingredients: [{ tag: 'c:raw_materials/platinum' }],
            time: 120,
            id: `${id_prefix}raw_platinum`
        },
        {
            results: [{ id: 'powah:uraninite_raw', count: 6 }],
            ingredients: [{ tag: 'c:ores/uraninite' }],
            time: 120,
            id: `${id_prefix}uraninite_raw`
        },
        {
            results: [{ id: 'actuallyadditions:black_quartz', count: 4 }],
            ingredients: [{ tag: 'c:ores/black_quartz' }],
            time: 120,
            id: `${id_prefix}black_quartz`
        },
        {
            results: [{ id: 'oritech:biomass', count: 1 }],
            ingredients: [{ tag: 'oritech:biomass' }],
            time: 120,
            id: `${id_prefix}biomass_from_plants`
        },
        {
            results: [{ id: 'oritech:biomass', count: 16 }],
            ingredients: [{ tag: 'c:storage_blocks/wheat' }],
            time: 120,
            id: `${id_prefix}biomass_from_wheat`
        },
        {
            results: [{ id: 'oritech:biomass', count: 16 }],
            ingredients: [{ item: 'oritech:packed_wheat' }],
            time: 120,
            id: `${id_prefix}biomass_from_packed_wheat`
        },
        {
            results: [{ id: 'minecraft:sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/uncolored_blocks' }],
            time: 120,
            id: `${id_prefix}sand_from_sandstone`
        },
        {
            results: [{ id: 'minecraft:red_sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/red_blocks' }],
            time: 120,
            id: `${id_prefix}red_sand_from_red_sandstone`
        },
        {
            results: [{ id: 'minecraft:sand', count: 1 }],
            ingredients: [{ tag: 'c:gravels' }],
            time: 120,
            id: `${id_prefix}sand_from_gravel`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            results: [
                { id: `minecraft:${color}_dye`, count: 3 },
                { id: `minecraft:${color}_dye`, count: 2 }
            ],
            ingredients: [{ tag: `c:raw_materials/dyes/${color}` }],
            time: 180,
            id: `${id_prefix}${color}_dye`
        });
    });

    let materials = [
        { primary: 'iron', secondary: 'nickel' },
        { primary: 'copper', secondary: 'gold' },
        { primary: 'gold', secondary: 'copper' },
        { primary: 'osmium', secondary: 'silver' },
        { primary: 'iesnium', secondary: 'silver' },
        { primary: 'iridium', secondary: 'platinum' },
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
                    { id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(), count: 2 },
                    { id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.secondary}`).getId(), count: 1 }
                ],
                ingredients: [{ tag: `c:ores/${material.primary}` }],
                time: 120,
                id: `${id_prefix}ore_${material.primary}`
            },
            {
                results: [
                    { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 2 },
                    { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
                    { id: AlmostUnified.getTagTargetItem(`c:tiny_dusts/${material.secondary}`).getId(), count: 6 }
                ],
                ingredients: [{ tag: `c:raw_materials/${material.primary}` }],
                time: 120,
                id: `${id_prefix}raw_${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:grinder';

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
