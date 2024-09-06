ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:functionalstorage/custom_compacting/';

    const recipes = [
        {
            higher_input: { id: 'ae2:quartz_block', count: 1 },
            lower_input: { id: 'ae2:certus_quartz_crystal', count: 4 },
            id: `${id_prefix}certus_quartz_crystal_to_quartz_block`
        },
        {
            higher_input: { id: 'minecraft:snow_block', count: 1 },
            lower_input: { id: 'minecraft:snowball', count: 4 },
            id: `${id_prefix}snowball_to_snow_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'functionalstorage:custom_compacting';
        event.custom(recipe).id(recipe.id);
    });
});
