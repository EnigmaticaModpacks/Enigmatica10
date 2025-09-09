ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:smelting/';
    const recipes = [];

    const materials = ['copper', 'gold', 'iron', 'nickel', 'zinc', 'steel'];

    materials.forEach((material) => {
        recipes.push({
            output: AlmostUnified.getTagTargetItem(`c:ingots/${material}`).getId(),
            input: `#c:dusts/${material}`,
            xp: 0.7,
            cookingTime: 200,
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

    const materialsMissingSmeltingRecipes = ['platinum', 'iesnium', 'iridium']
    
    materialsMissingSmeltingRecipes.forEach((material) => {
        recipes.push({
                output: AlmostUnified.getTagTargetItem(`c:ingots/${material}`).getId(),
                input: `#c:clumps/${material}`,
                xp: 0.1,
                cookingTime: 200,
                id: `${id_prefix}${material}_ingot_from_clumps`
        });
    });


    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.cookingTime).id(recipe.id);
    });
});
