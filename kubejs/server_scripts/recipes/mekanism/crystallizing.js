ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/crystallizing/';

    const recipes = [];

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push({
            input: { chemical: `emendatusenigmatica:clean_${material}_slurry`, amount: 200 },
            output: { id: AlmostUnified.getTagTargetItem(`c:crystals/${material}`).getId(), count: 1 },
            id: `${id_prefix}crystal_from_${material}_slurry`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:crystallizing';
        event.custom(recipe).id(recipe.id);
    });
});
