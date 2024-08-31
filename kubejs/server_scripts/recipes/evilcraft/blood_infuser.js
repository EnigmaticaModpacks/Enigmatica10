ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:evilcraft/blood_infuser/';

    const recipes = [
        {
            input_item: { item: 'minecraft:emerald_ore' },
            input_fluid: { id: 'evilcraft:blood', amount: 10000 },
            output_item: { id: 'evilcraft:dark_ore' },
            duration: 150,
            xp: 0.1,
            tier: 1,
            id: `${id_prefix}dark_ore`
        },
        {
            input_item: { item: 'minecraft:deepslate_emerald_ore' },
            input_fluid: { id: 'evilcraft:blood', amount: 10000 },
            output_item: { id: 'evilcraft:dark_ore_deepslate' },
            duration: 150,
            xp: 0.1,
            tier: 1,
            id: `${id_prefix}dark_ore_deepslate`
        },
        {
            input_item: { item: 'cursedearth:blessed_flower' },
            input_fluid: { id: 'evilcraft:blood', amount: 10000 },
            output_item: { id: 'minecraft:wither_rose' },
            duration: 150,
            xp: 0.1,
            tier: 1,
            id: `${id_prefix}wither_rose`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'evilcraft:blood_infuser';
        event.custom(recipe).id(recipe.id);
    });
});
