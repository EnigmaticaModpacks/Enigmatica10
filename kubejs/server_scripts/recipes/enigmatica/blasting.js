ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:blasting/';
    const recipes = [
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/copper`).getId(),
            input: '#c:dusts/copper',
            xp: 0.7,
            cookingTime: 100,
            id: `${id_prefix}copper_ingot`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/gold`).getId(),
            input: '#c:dusts/gold',
            xp: 0.7,
            cookingTime: 100,
            id: `${id_prefix}gold_ingot`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/iron`).getId(),
            input: '#c:dusts/iron',
            xp: 0.7,
            cookingTime: 100,
            id: `${id_prefix}iron_ingot`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/nickel`).getId(),
            input: '#c:dusts/nickel',
            xp: 0.7,
            cookingTime: 100,
            id: `${id_prefix}nickel_ingot`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/zinc`).getId(),
            input: '#c:dusts/zinc',
            xp: 0.7,
            cookingTime: 100,
            id: `${id_prefix}zinc_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input, recipe.xp, recipe.cookingTime).id(recipe.id);
    });
});
