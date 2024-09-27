ServerEvents.recipes((event) => {
    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [
        {
            filter: [{ mod: 'waystones' }, { output: 'minecraft:writable_book' }],
            to_replace: 'minecraft:ink_sac',
            replace_with: '#c:dyes/black'
        },
        {
            filter: [
                { mod: 'ae2', not: { output: 'ae2:cable_anchor' } },
                { mod: 'ae2netanalyser' },
                { mod: 'aquaculture', output: /tackle_box/ },
                { mod: 'evilcraft' }
            ],
            to_replace: '#c:ingots/iron',
            replace_with: Ingredient.of(['#c:ingots/iron', '#c:ingots/tin'])
        },
        {
            filter: [{ mod: 'aquaculture', output: /tackle_box/ }, { mod: 'evilcraft' }],
            to_replace: '#c:storage_blocks/iron',
            replace_with: Ingredient.of(['#c:storage_blocks/iron', '#c:storage_blocks/tin'])
        },
        {
            filter: [{ mod: 'functionalstorage' }],
            to_replace: '#c:chests/wooden',
            replace_with: 'framedblocks:framed_chest'
        },
        {
            filter: [{ mod: 'handcrafted' }, { mod: 'aquaculture' }],
            to_replace: '#c:chests',
            replace_with: '#c:chests/wooden'
        },
        {
            filter: {},
            to_replace: 'minecraft:feather',
            replace_with: '#c:feathers'
        },
        {
            filter: [{ output: 'minecraft:sticky_piston' }, { output: 'minecraft:lead' }],
            to_replace: 'minecraft:slime_ball',
            replace_with: '#c:slimeballs'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
