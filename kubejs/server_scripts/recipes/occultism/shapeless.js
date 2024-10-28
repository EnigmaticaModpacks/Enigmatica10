ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: 'occultism:chalk_red_impure',
            inputs: [
                'occultism:chalk_white_impure',
                'occultism:afrit_essence',
                'minecraft:nether_wart',
                '#c:dusts/redstone'
            ],
            id: `occultism:crafting/chalk_red_impure`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
