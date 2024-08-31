ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:evilcraft/crafting_shaped_custom_output_dark_tank_large/';

    const recipes = [
        {
            pattern: [' D ', 'IGI', ' D '],
            key: {
                D: { item: 'evilcraft:dark_block' },
                I: Ingredient.of(['#c:storage_blocks/iron', '#c:storage_blocks/tin']),
                G: { tag: 'c:glass_blocks' }
            },
            id: `evilcraft:special/dark_tank_large`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'evilcraft:crafting_shaped_custom_output_dark_tank_large';
        event.custom(recipe).id(recipe.id);
    });
});
