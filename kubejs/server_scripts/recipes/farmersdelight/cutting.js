ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/cutting/';

    const recipes = [];

    wood_registry.forEach((r) => {
        recipes.push(
            {
                ingredients: [{ item: r.log }],
                result: [
                    { item: { count: 1, id: r.stripped_log } },
                    { item: { count: 1, id: 'farmersdelight:tree_bark' } }
                ],
                sound: { sound_id: 'minecraft:item.axe.strip' },
                tool: { type: 'farmersdelight:item_ability', action: 'axe_strip' },
                id: `${id_prefix}${r.stripped_log.replace(':', '_')}_from_log`
            },
            {
                ingredients: [{ item: r.wood }],
                result: [
                    { item: { count: 1, id: r.stripped_wood } },
                    { item: { count: 1, id: 'farmersdelight:tree_bark' } }
                ],
                sound: { sound_id: 'minecraft:item.axe.strip' },
                tool: { type: 'farmersdelight:item_ability', action: 'axe_strip' },
                id: `${id_prefix}${r.stripped_wood.replace(':', '_')}_from_wood`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cutting';
        event.custom(recipe).id(recipe.id);
    });
});