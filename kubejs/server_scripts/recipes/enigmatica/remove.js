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
        { id: 'mffs:steel_compound' },
        { type: 'evilcraft:special/minecraft_dead_bush' },
        { id: `enderio:sag_milling/blaze_powder` },
        { id: `mekanism:sulfur_dye` }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
