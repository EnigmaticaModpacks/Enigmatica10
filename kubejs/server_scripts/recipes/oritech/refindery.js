ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/refinery/';
    const recipes = [];

    let materials = [
        { primary: 'iridium' },
        { primary: 'iesnium' },
        { primary: 'osmium' },
        { primary: 'lead' },
        { primary: 'silver' },
        { primary: 'tin' },
        { primary: 'uranium' },
        { primary: 'aluminum' }
    ];
    materials.forEach((material) => {
        recipes.push({
            results: [{ id: AlmostUnified.getTagTargetItem(`c:clumps/${material.primary}`).getId(), count: 3 }],
            ingredients: [{ tag: `c:raw_materials/${material.primary}` }],
            fluidInput: { fluid: 'oritech:still_sheol_fire', amount: 250 },
            fluidOutputs: [{ fluid: 'minecraft:lava', amount: 200 }],
            time: 200,
            id: `${id_prefix}raw_${material.primary}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
