ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:appflux/shapeless/';

    const recipes = [
        {
            output: 'appflux:insulating_resin',
            inputs: [
                '#c:buckets/water',
                '#c:dyes/green',
                '#c:dyes/green',
                '#c:dusts/silicon',
                '#c:slimeballs',
                '#c:dusts/glowstone'
            ],
            id: `${id_prefix}insulating_resin`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
