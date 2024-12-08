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
            results: [{ id: 'minecraft:sand', count: 4 }],
            ingredients: [{ tag: 'c:sandstone/blocks' }],
            time: 200,
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
        { primary: 'iridium', secondary: 'platinum' },
        { primary: 'lead', secondary: 'silver' },
        { primary: 'osmium', secondary: 'silver' },
        { primary: 'iesnium', secondary: 'silver' },
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
                    { id: AlmostUnified.getTagTargetItem(`c:tiny_dusts/${material.secondary}`).getId(), count: 3 }
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
