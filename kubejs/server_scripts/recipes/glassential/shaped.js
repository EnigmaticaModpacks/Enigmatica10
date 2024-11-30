ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:glassential/shaped/';

    const recipes = [];

    colors.forEach((color) => {
        recipes.push({
            output: `2x glassential:${color}_glass_trapdoor`,
            pattern: ['BA', 'AB'],
            key: {
                A: `minecraft:${color}_stained_glass`,
                B: 'glassential:glass_slab'
            },
            id: `glassential:${color}_glass_trapdoor_recipe`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
