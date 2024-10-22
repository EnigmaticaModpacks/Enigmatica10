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
            output: { count: 1, id: AlmostUnified.getTagTargetItem('c:ingots/uranium').getId() },
            id: `${id_prefix}uraninite_to_uranium_ingot`
        },
        {
            input: { count: 1, tag: 'c:ores/black_quartz' },
            output: { count: 2, id: 'actuallyadditions:black_quartz' },
            id: `${id_prefix}black_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:enriching';
        event.custom(recipe).id(recipe.id);
    });
});
