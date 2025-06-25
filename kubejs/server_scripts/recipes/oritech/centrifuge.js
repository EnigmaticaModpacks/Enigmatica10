ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge/';
    const recipes = [
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ tag: 'c:dusts/charcoal' }],
            time: 100,
            id: `${id_prefix}carbon_fibre_strands_from_charcoal`
        },
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ tag: 'c:dusts/lignite_coal' }],
            time: 100,
            id: `${id_prefix}carbon_fibre_strands_from_lignite_coal`
        }
    ];

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
        { primary: 'aluminum', secondary: 'aluminum' },
        { primary: 'platinum', secondary: 'osmium' },
        { primary: 'uranium', secondary: 'plutonium' },
        { primary: 'zinc', secondary: 'silver' }
    ];
    materials.forEach((material) => {
        recipes.push({
            results: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
                { id: AlmostUnified.getTagTargetItem(`c:nuggets/${material.secondary}`).getId(), count: 3 }
            ],
            ingredients: [{ tag: `c:clumps/${material.primary}` }],
            time: 200,
            id: `${id_prefix}clump_${material.primary}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge';

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
