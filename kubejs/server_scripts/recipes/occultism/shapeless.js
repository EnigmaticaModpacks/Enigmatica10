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
        },

        // Non progression chalks
        {
            output: 'occultism:chalk_green_impure',
            inputs: ['occultism:chalk_yellow_impure', '#c:dyes/blue'],
            id: `occultism:crafting/chalk_green_impure`
        },
        {
            output: 'occultism:chalk_lime_impure',
            inputs: ['occultism:chalk_yellow_impure', '#c:dyes/blue', '#c:dyes/white'],
            id: `occultism:crafting/chalk_lime_impure`
        },
        {
            output: 'occultism:chalk_pink_impure',
            inputs: ['occultism:chalk_purple_impure', '#c:dyes/pink', '#c:dyes/white'],
            id: `occultism:crafting/chalk_pink_impure`
        },
        {
            output: 'occultism:chalk_magenta_impure',
            inputs: ['occultism:chalk_purple_impure', '#c:dyes/red', '#c:dyes/white'],
            id: `occultism:crafting/chalk_magenta_impure`
        },
        {
            output: 'occultism:chalk_brown_impure',
            inputs: ['occultism:chalk_red_impure', '#c:dyes/green'],
            id: `occultism:crafting/chalk_brown_impure`
        },
        {
            output: 'occultism:chalk_orange_impure',
            inputs: ['occultism:chalk_red_impure', '#c:dyes/yellow'],
            id: `occultism:crafting/chalk_orange_impure`
        },
        {
            output: 'occultism:chalk_cyan_impure',
            inputs: ['occultism:chalk_blue_impure', '#c:dyes/green'],
            id: `occultism:crafting/chalk_cyan_impure`
        },
        {
            output: 'occultism:chalk_light_blue_impure',
            inputs: ['occultism:chalk_blue_impure', '#c:dyes/white'],
            id: `occultism:crafting/chalk_light_blue_impure`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
