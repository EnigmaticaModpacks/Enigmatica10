ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shapeless/';

    const recipes = [
        {
            output: '4x actuallyadditions:black_quartz',
            inputs: ['#c:storage_blocks/black_quartz'],
            id: `${id_prefix}black_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
