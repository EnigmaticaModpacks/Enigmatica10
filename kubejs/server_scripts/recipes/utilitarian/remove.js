ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        { output: 'utilitarian:soul_snad' },
        { output: 'utilitarian:drit' },
        { output: 'utilitarian:grrass' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
