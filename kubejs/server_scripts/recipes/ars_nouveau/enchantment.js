ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchantment/';

    const recipes = [
        {
            enchantment: 'geneticsresequenced:delicate_touch',
            level: 1,
            pedestalItems: [
                { tag: 'c:feathers' },
                { tag: 'c:feathers' },
                { tag: 'c:ingots/copper' },
                { tag: 'c:ingots/copper' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/lapis' },
                { tag: 'c:storage_blocks/lapis' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}delicate_touch`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchantment';
        event.custom(recipe).id(recipe.id);
    });
});
