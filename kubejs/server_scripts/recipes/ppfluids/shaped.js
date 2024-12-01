ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ppfluids/shaped/';

    const recipes = [
        {
            output: 'ppfluids:medium_fluid_retrieval_module',
            pattern: ['LLL', 'IMI', ' I '],
            key: {
                I: '#c:ingots/copper',
                M: 'ppfluids:low_fluid_retrieval_module',
                L: '#c:gems/lapis'
            },
            id: `ppfluids:medium_fluid_retrieval_module`
        },
        {
            output: 'ppfluids:medium_fluid_filter_module',
            pattern: [' B ', 'IMI', ' B '],
            key: {
                I: Ingredient.of(['#c:ingots/iron', '#c:ingots/tin']),
                M: 'ppfluids:low_fluid_filter_module',
                B: 'minecraft:iron_bars'
            },
            id: `ppfluids:medium_fluid_filter_module`
        },
        {
            output: 'ppfluids:medium_fluid_extraction_module',
            pattern: [' I ', 'IMI', ' I '],
            key: {
                I: Ingredient.of(['#c:ingots/iron', '#c:ingots/tin']),
                M: 'ppfluids:low_fluid_extraction_module'
            },
            id: `ppfluids:medium_fluid_extraction_module`
        },
        {
            output: 'ppfluids:low_fluid_retrieval_module',
            pattern: [' P ', 'LML', ' E '],
            key: {
                L: '#c:gems/lapis',
                P: 'minecraft:sticky_piston',
                M: 'prettypipes:blank_module',
                E: 'minecraft:ender_pearl'
            },
            id: `ppfluids:low_fluid_retrieval_module`
        },
        {
            output: 'ppfluids:low_fluid_filter_module',
            pattern: [' H ', 'LML', ' L '],
            key: {
                L: '#c:gems/lapis',
                H: 'minecraft:hopper',
                M: 'prettypipes:blank_module'
            },
            id: `ppfluids:low_fluid_filter_module`
        },
        {
            output: 'ppfluids:low_fluid_extraction_module',
            pattern: [' P ', 'LML', ' L '],
            key: {
                L: '#c:gems/lapis',
                P: 'minecraft:piston',
                M: 'prettypipes:blank_module'
            },
            id: `ppfluids:low_fluid_extraction_module`
        },
        {
            output: 'ppfluids:high_fluid_retrieval_module',
            pattern: ['LDL', 'GMG', 'LGL'],
            key: {
                G: '#c:ingots/copper',
                M: 'ppfluids:medium_fluid_retrieval_module',
                D: 'minecraft:diamond',
                L: '#c:gems/lapis'
            },
            id: `ppfluids:high_fluid_retrieval_module`
        },
        {
            output: 'ppfluids:high_fluid_filter_module',
            pattern: ['GBG', 'BMB', 'GBG'],
            key: {
                G: '#c:ingots/copper',
                M: 'ppfluids:medium_fluid_filter_module',
                B: 'minecraft:iron_bars'
            },
            id: `ppfluids:high_fluid_filter_module`
        },
        {
            output: 'ppfluids:high_fluid_extraction_module',
            pattern: ['GDG', 'GMG', 'GGG'],
            key: {
                D: 'minecraft:diamond',
                G: '#c:ingots/copper',
                M: 'ppfluids:medium_fluid_extraction_module'
            },
            id: `ppfluids:high_fluid_extraction_module`
        },
        {
            output: 'ppfluids:fluid_limiter_module',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'minecraft:dropper',
                B: '#c:gems/lapis',
                C: 'prettypipes:blank_module'
            },
            id: `ppfluids:fluid_limiter_module`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
