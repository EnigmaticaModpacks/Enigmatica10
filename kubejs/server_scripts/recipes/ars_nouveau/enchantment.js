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
        },
        {
            enchantment: 'apothic_spawners:capturing',
            level: 1,
            pedestalItems: [
                { tag: 'c:essences/manipulation' },
                { tag: 'c:gems/emerald' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 6000,
            id: `${id_prefix}capturing_1`
        },
        {
            enchantment: 'apothic_spawners:capturing',
            level: 2,
            pedestalItems: [
                { tag: 'c:essences/manipulation' },
                { tag: 'c:essences/manipulation' },
                { tag: 'c:gems/emerald' },
                { tag: 'c:gems/emerald' },
                { tag: 'c:gems/emerald' },
                { tag: 'c:gems/emerald' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 8000,
            id: `${id_prefix}capturing_2`
        },
        {
            enchantment: 'apothic_spawners:capturing',
            level: 3,
            pedestalItems: [
                { tag: 'c:essences/manipulation' },
                { tag: 'c:essences/manipulation' },
                { tag: 'c:essences/manipulation' },
                { tag: 'c:storage_blocks/emerald' },
                { tag: 'c:storage_blocks/lapis' },
                { tag: 'c:storage_blocks/lapis' },
                { tag: 'c:storage_blocks/source' },
                { tag: 'c:storage_blocks/source' }
            ],
            sourceCost: 9000,
            id: `${id_prefix}capturing_3`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchantment';
        event.custom(recipe).id(recipe.id);
    });
});
