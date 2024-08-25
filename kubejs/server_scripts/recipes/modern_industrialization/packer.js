ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/packer/';

    const recipes = [
        {
            item_inputs: [
                { item: 'justdirethings:coal_t1', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            item_outputs: [{ item: 'justdirethings:coalblock_t1', amount: 1 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t1`
        },
        {
            item_inputs: [
                { item: 'justdirethings:coal_t2', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            item_outputs: [{ item: 'justdirethings:coalblock_t2', amount: 1 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t2`
        },
        {
            item_inputs: [
                { item: 'justdirethings:coal_t3', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            item_outputs: [{ item: 'justdirethings:coalblock_t3', amount: 1 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t3`
        },
        {
            item_inputs: [
                { item: 'justdirethings:coal_t4', amount: 9 },
                { item: 'modern_industrialization:packer_block_template', amount: 1, probability: 0.0 }
            ],
            item_outputs: [{ item: 'justdirethings:coalblock_t4', amount: 1 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t4`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:packer';
        event.custom(recipe).id(recipe.id);
    });
});
