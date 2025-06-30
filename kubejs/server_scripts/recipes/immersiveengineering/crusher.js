ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/crusher/';

    const recipes = [
        {
            result: { item: 'ae2:silicon' },
            input: { tag: 'minecraft:smelts_to_glass' },
            energy: 3200,
            id: `${id_prefix}silicon`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:crusher';
        event.custom(recipe).id(recipe.id);
    });
});
