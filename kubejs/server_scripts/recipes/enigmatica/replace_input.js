ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

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
                { output: /tackle_box/ }
            ],
            to_replace: '#c:ingots/iron',
            replace_with: Ingredient.of(['#c:ingots/iron', '#c:ingots/tin'])
        },
        {
            filter: [{ output: /tackle_box/ }],
            to_replace: '#c:storage_blocks/iron',
            replace_with: Ingredient.of(['#c:storage_blocks/iron', '#c:storage_blocks/tin'])
        },
        {
            filter: { mod: 'functionalstorage' },
            to_replace: '#c:chests/wooden',
            replace_with: 'framedblocks:framed_chest'
        },
        {
            filter: [{ mod: 'handcrafted' }, { mod: 'aquaculture' }],
            to_replace: '#c:chests',
            replace_with: '#c:chests/wooden'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
