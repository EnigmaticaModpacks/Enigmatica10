ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge_fluid/';
    const recipes = [
        {
            results: [],
            ingredients: [{ item: 'oritech:fluxite' }],
            fluidInput: { fluid: '#c:crude_oil', amount: 1000 },
            fluidOutputs: [{ fluid: 'oritech:still_fuel', amount: 1000 }],
            time: 200,
            id: `${id_prefix}still_fuel_from_oil`
        },
        {
            results: [{ count: 1, id: 'oritech:polymer_resin' }],
            ingredients: [{ tag: 'minecraft:sand' }],
            fluidInput: { fluid: '#c:crude_oil', amount: 1000 },
            fluidOutputs: [],
            time: 200,
            id: `${id_prefix}polymer_resin_from_oil`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            ingredients: [{ tag: `ae2:${washable}_cable` }],
            fluidInput: { fluid: 'minecraft:water', amount: 100 },
            fluidOutputs: [],
            results: [{ id: `ae2:fluix_${washable}_cable` }],
            time: 5,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    let materials = [
        { primary: 'iron' },
        { primary: 'copper' },
        { primary: 'gold' },
        { primary: 'osmium' },
        { primary: 'iesnium' },
        { primary: 'iridium' },
        { primary: 'lead' },
        { primary: 'silver' },
        { primary: 'nickel' },
        { primary: 'tin' },
        { primary: 'aluminum' },
        { primary: 'platinum' },
        { primary: 'uranium' },
        { primary: 'zinc' }
    ];

    materials.forEach((material) => {
        recipes.push(
            {
                results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 2 }],
                ingredients: [{ tag: `c:clumps/${material.primary}` }],
                fluidInput: { fluid: 'minecraft:water', amount: 1000 },
                fluidOutputs: [],
                time: 300,
                id: `${id_prefix}clump_${material.primary}`
            },
            {
                results: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 3 }],
                ingredients: [{ tag: `c:clumps/${material.primary}` }],
                fluidInput: { fluid: 'oritech:still_sulfuric_acid', amount: 1000 },
                fluidOutputs: [{ fluid: 'oritech:still_mineral_slurry', amount: 250 }],
                time: 300,
                id: `${id_prefix}clump_acid_${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
