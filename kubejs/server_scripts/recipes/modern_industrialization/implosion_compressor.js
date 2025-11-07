ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/implosion_compressor/';

    const recipes = [
        {
            item_inputs: [
                { tag: 'c:dusts/blaze', amount: 4 },
                { item: 'modern_industrialization:industrial_tnt', amount: 1 }
            ],
            item_outputs: [{ item: 'minecraft:blaze_rod', amount: 1 }],
            eu: 1,
            duration: 10,
            id: `${id_prefix}blaze_rod`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:implosion_compressor';
        event.custom(recipe).id(recipe.id);
    });
});
