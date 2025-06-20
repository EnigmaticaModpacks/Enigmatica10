ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/splashing/';

    const recipes = [];

    let materials = ['iesnium', 'iridium', 'platinum'];
    materials.forEach((material) => {
        recipes.push({
            ingredients: [{ tag: `c:clumps/${material}` }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:nuggets/${material}`).getId(), count: 9 }],
            id: `${id_prefix}clump_${material}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:splashing';
        event.custom(recipe).id(recipe.id);
    });
});
