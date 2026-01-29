ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:blasting/';
    const recipes = [];

    const materials = ['copper', 'gold', 'iron', 'nickel', 'zinc', 'steel'];

    materials.forEach((material) => {
        recipes.push({
            output: AlmostUnified.getTagTargetItem(`c:ingots/${material}`).getId(),
            input: `#c:dusts/${material}`,
            xp: 0.7,
            cookingTime: 100,
            id: `${id_prefix}${material}_ingot`
        });
    });

    recipes.push({
            output: AlmostUnified.getTagTargetItem('c:ingots/nickel').getId(),
            input: '#c:raw_materials/nickel',
            xp: 0.7,
            cookingTime: 200,
            id: `${id_prefix}nickel_ingot_from_raw_materials`
    });

    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input, recipe.xp, recipe.cookingTime).id(recipe.id);
    });
});
