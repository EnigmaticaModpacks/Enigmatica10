ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shapeless/';

    const recipes = [
        {
            output: '4x ars_nouveau:sourcestone',
            inputs: [
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone'
            ],
            id: `ars_nouveau:smooth_sourcestone_to_sourcestone`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
    });
});
