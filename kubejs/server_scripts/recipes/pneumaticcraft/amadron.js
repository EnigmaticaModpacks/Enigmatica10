ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/amadron/';

    const recipes = [
        {
            input: { resource: { id: 'modern_industrialization:lubricant', amount: 2500 } },
            output: { resource: { id: 'minecraft:emerald', count: 1 } },
            level: 0,
            id: `${id_prefix}lubricant_to_emerald`
        },
        {
            input: { resource: { id: 'minecraft:emerald', count: 5 } },
            output: { resource: { id: 'modern_industrialization:lubricant', amount: 1000 } },
            level: 0,
            id: `${id_prefix}emerald_to_lubricant`
        },
        {
            input: { resource: { id: 'modern_industrialization:diesel', amount: 4000 } },
            output: { resource: { id: 'minecraft:emerald', count: 1 } },
            level: 0,
            id: `${id_prefix}diesel_to_emerald`
        },
        {
            input: { resource: { id: 'modern_industrialization:crude_oil', amount: 5000 } },
            output: { resource: { id: 'minecraft:emerald', count: 1 } },
            level: 0,
            id: `${id_prefix}crude_oil_to_emerald`
        },
        {
            input: { resource: { id: 'minecraft:emerald', count: 1 } },
            output: { resource: { id: 'modern_industrialization:crude_oil', amount: 1000 } },
            level: 0,
            id: `${id_prefix}emerald_to_crude_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:amadron`;
        recipe.offer_id = recipe.id;
        event.custom(recipe).id(recipe.id);
    });
});
