ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/enriching/';

    const recipes = [
        {
            input: { count: 4, tag: 'c:dusts/blaze' },
            output: { count: 1, id: 'minecraft:blaze_rod' },
            id: `${id_prefix}blaze_rod`
        },
        {
            input: { count: 1, tag: 'c:ingots/uraninite' },
            // TODO: Convert to AU
            // output: { count: 1, id: AlmostUnified.getPreferredItemForTag('c:ingots/uranium').getId() },
            output: { count: 1, id: 'mekanism:ingot_uranium' },
            id: `${id_prefix}ingot_uranium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        event.custom(recipe).id(recipe.id);
    });
});
