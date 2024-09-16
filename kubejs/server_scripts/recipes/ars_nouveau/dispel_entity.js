ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/dispel_entity/';

    const recipes = [
        {
            entity: 'occultism:possessed_endermite',
            loot_conditions: [],
            loot_table: 'enigmatica:entities/dispel/possessed_endermite',
            id: `${id_prefix}dispel_possessed_endermite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:dispel_entity';
        event.custom(recipe).id(recipe.id);
    });
});
