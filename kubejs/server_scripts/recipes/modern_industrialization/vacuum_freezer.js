ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/vacuum_freezer/';

    const recipes = [
        {
            fluid_inputs: [{
                fluid: 'pneumaticcraft:plastic',
                amount: 1000
            }],
            item_outputs: [{
                item: 'pneumaticcraft:plastic',
                amount: 2
            }],
            eu: 2,
            duration: 200,
            id: `${id_prefix}plastic`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:vacuum_freezer';
        event.custom(recipe).id(recipe.id);
    });
});
