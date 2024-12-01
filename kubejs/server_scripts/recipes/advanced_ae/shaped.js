ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:advanced_ae/shaped/';

    const recipes = [
        {
            output: `advanced_ae:reaction_chamber`,
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: 'ae2:singularity',
                B: 'ae2:condenser',
                C: 'ae2:cell_component_256k',
                D: 'ae2:spatial_cell_component_128'
            },
            id: `advanced_ae:reactionchamber`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
