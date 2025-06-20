ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/crushing/';

    const recipes = [];

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                input: { item: `create:waxed_${oxide}${type}`, count: 1 },
                output: { id: `create:${oxide}${type}`, count: 1 },
                id: `${id_prefix}${oxide}${type}`
            });
        });
    });

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push({
            input: { tag: `c:clumps/${material}`, count: 1 },
            output: { id: AlmostUnified.getTagTargetItem(`c:dirty_dusts/${material}`).getId(), count: 1 },
            id: `${id_prefix}dirty_dust_from_${material}_clump`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
