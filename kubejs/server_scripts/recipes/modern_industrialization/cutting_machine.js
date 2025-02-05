ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/cutting_machine/';

    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:cutting_machine';
        event.custom(recipe).id(recipe.id);
    });
});
