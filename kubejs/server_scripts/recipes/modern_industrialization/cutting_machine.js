ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/cutting_machine/';

    const recipes = [];

    const anchor_materials = ['gold', 'iron', 'copper', 'tin'];

    anchor_materials.forEach((material) => {
        recipes.push({
            fluid_inputs: [{ fluid: 'modern_industrialization:lubricant', amount: 1 }],
            item_inputs: [{ item: `modern_industrialization:${material}_rod`, amount: 1 }],
            item_outputs: [{ item: 'ae2:cable_anchor', amount: 4 }],
            eu: 2,
            duration: 100,
            id: `${id_prefix}cable_anchor_from_${material}_rod`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:cutting_machine';
        event.custom(recipe).id(recipe.id);
    });
});
