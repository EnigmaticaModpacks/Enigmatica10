ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/imbuement/';

    const recipes = [
        {
            input: { tag: 'c:storage_blocks/amethyst' },
            output: { id: 'ars_nouveau:source_gem_block', count: 1 },
            pedestalItems: [],
            source: 1500,
            id: `ars_nouveau:imbuement_amethyst_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
