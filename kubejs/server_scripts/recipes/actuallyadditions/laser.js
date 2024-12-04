ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
        {
            ingredient: { tag: 'c:storage_blocks/certus_quartz' },
            result: { id: 'ae2:flawless_budding_quartz', count: 1 },
            energy: 100000,
            id: `${id_prefix}flawless_budding_quartz`
        },
        {
            ingredient: { item: 'minecraft:nether_wart' },
            result: { id: 'oritech:wither_crop_block', count: 1 },
            energy: 50000,
            id: `${id_prefix}wither_crop_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
