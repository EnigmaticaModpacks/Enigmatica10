ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/crusher/';

    const recipes = [
        {
            input: { tag: 'c:sands' },
            output: { item: 'ae2:silicon' },
            id: `${id_prefix}silicon`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:crusher';
        event.custom(recipe).id(recipe.id);
    });
});
