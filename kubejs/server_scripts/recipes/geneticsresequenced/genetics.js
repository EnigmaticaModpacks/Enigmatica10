ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            entity: 'chococraft:chocobo',
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 2,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:step_assist': 2
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:geneticsresequenced/entity_genes/${recipe.entity.replace(':', '_')}`, recipe);
    });
});
