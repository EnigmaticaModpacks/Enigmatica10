ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/washing/';

    const recipes = [];

    let materials = ['aluminum', 'iesnium', 'iridium', 'nickel', 'silver', 'zinc', 'platinum'];
    materials.forEach((material) => {
        recipes.push({
            chemical_input: { chemical: `emendatusenigmatica:dirty_${material}_slurry`, amount: 1 },
            fluid_input: { tag: 'minecraft:water', amount: 5 },
            output: { id: `emendatusenigmatica:clean_${material}_slurry`, amount: 1 },
            id: `${id_prefix}clean_slurry_from_dirty_${material}_slurry`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:washing';
        event.custom(recipe).id(recipe.id);
    });
});
