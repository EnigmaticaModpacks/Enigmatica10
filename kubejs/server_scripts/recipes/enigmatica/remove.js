ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { id: 'mffs:steel_ingot' },
        { id: 'mffs:steel_compound' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
