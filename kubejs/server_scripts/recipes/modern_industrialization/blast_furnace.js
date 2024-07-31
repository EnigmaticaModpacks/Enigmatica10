ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/implosion_compressor/';

    const recipes = [
        {
            item_inputs: [{ amount: 1, tag: 'c:ingots/uraninite' }],
            // TODO: Convert to AU
            // item_outputs: [{ amount: 1, item: AlmostUnified.getPreferredItemForTag('c:ingots/uranium').getId() }],
            item_outputs: [{ amount: 1, item: 'modern_industrialization:uranium_ingot' }],
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
