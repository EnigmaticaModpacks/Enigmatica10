ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
        {
            ingredient: { tag: 'c:storage_blocks/certus_quartz' },
            result: { id: 'ae2:flawless_budding_quartz', count: 1 },
            energy: 10000,
            id: `${id_prefix}flawless_budding_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
