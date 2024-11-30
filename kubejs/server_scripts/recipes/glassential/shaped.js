ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:glassential/shaped/';

    const recipes = [
        {
            output: `2x glassential:tinted_glass_trapdoor`,
            pattern: ['BA', 'AB'],
            key: {
                A: `minecraft:tinted_glass`,
                B: 'glassential:glass_slab'
            },
            id: `glassential:tinted_glass_trapdoor_recipe`
        }
    ];

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
