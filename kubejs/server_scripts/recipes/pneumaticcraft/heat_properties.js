ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/heat_properties/';

    const recipes = [
        {
            block: 'modern_industrialization:uranium_block',
            transforms: { cold: 'modern_industrialization:lead_block' },
            heatCapacity: 500000,
            temperature: 438,
            thermalResistance: 500,
            id: `${id_prefix}uranium_to_lead`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:heat_properties`;
        event.custom(recipe).id(recipe.id);
    });
});
