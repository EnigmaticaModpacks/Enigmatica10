ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/alloy_smelter/';

    const recipes = [
        {
            item_inputs: [
                { tag: 'c:storage_blocks/zinc', amount: 1 },
                { tag: 'c:storage_blocks/copper', amount: 1 }
            ],
            item_outputs: [{ item: AlmostUnified.getTagTargetItem(`c:storage_blocks/brass`).getId(), amount: 2 }],
            eu: 4,
            duration: 1800,
            id: `${id_prefix}brass_block`
        },
        {
            item_inputs: [
                { tag: 'c:ingots/zinc', amount: 1 },
                { tag: 'c:ingots/copper', amount: 1 }
            ],
            item_outputs: [{ item: AlmostUnified.getTagTargetItem(`c:ingots/brass`).getId(), amount: 2 }],
            eu: 4,
            duration: 200,
            id: `${id_prefix}brass_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'extended_industrialization:alloy_smelter';
        event.custom(recipe).id(recipe.id);
    });
});
