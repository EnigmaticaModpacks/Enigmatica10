ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/blast_furnace/';

    const recipes = [
        {
            item_inputs: [{ amount: 1, tag: 'c:ingots/uraninite' }],

            item_outputs: [{ amount: 1, item: AlmostUnified.getTagTargetItem('c:ingots/uranium').getId() }],
            duration: 200,
            eu: 128,
            id: `${id_prefix}ingot_uranium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:blast_furnace';
        event.custom(recipe).id(recipe.id);
    });
});
