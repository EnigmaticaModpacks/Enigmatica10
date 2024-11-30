ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ppfluids/shapeless/';

    const recipes = [
        {
            output: 'ppfluids:fluid_pipe',
            inputs: ['prettypipes:pipe'],
            id: `ppfluids:fluid_pipe`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
