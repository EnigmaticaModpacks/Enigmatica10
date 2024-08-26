ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/scry_ritual/';

    // Prep for scrying rituals to come. Needs assets to make the augment items.
    const recipes = [
        // {
        //     augment: `c:ingots/iron`,
        //     highlight: `c:ores/iron`,
        //     id: `${id_prefix}iron_from_ingot`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:scry_ritual';
        event.custom(recipe).id(recipe.id);
    });
});
