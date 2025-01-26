ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: '2x occultism:chalk_light_gray_impure',
            inputs: [
                'occultism:chalk_white_impure',
                'occultism:chalk_white_impure',
                '#c:dusts/silver',
                '#c:dusts/calcite',
                '#c:dusts/calcite'
            ],
            id: `occultism:crafting/chalk_light_gray_impure`
        },
        {
            output: '2x occultism:chalk_gray_impure',
            inputs: ['occultism:chalk_white_impure', 'occultism:chalk_white_impure', 'occultism:gray_paste'],
            id: `occultism:crafting/chalk_gray_impure`
        },
        {
            output: '2x occultism:chalk_black_impure',
            inputs: [
                'occultism:chalk_white_impure',
                'occultism:chalk_white_impure',
                '#c:dusts/witherite',
                '#c:dusts/witherite',
                '#c:dusts/witherite'
            ],
            id: `occultism:crafting/chalk_black_impure`
        },
        {
            output: 'occultism:chalk_purple_impure',
            inputs: [
                'occultism:chalk_light_gray_impure',
                '#c:dusts/end_stone',
                '#c:dusts/obsidian',
                '#c:dusts/obsidian'
            ],
            id: `occultism:crafting/chalk_purple_impure`
        },
        {
            output: 'occultism:chalk_red_impure',
            inputs: [
                'occultism:chalk_gray_impure',
                'occultism:afrit_essence',
                'occultism:demonic_meat',
                'minecraft:crimson_fungus'
            ],
            id: `occultism:crafting/chalk_red_impure`
        },
        {
            output: 'occultism:chalk_blue_impure',
            inputs: [
                'occultism:chalk_black_impure',
                'occultism:marid_essence',
                '#c:dusts/echo',
                'minecraft:glow_ink_sac'
            ],
            id: `occultism:crafting/chalk_blue_impure`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
