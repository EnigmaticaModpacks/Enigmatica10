ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:powah/energizing/';

    const recipes = [
        {
            energy: 1600,
            ingredients: [{ item: 'ae2:certus_quartz_crystal' }],
            result: {
                count: 1,
                id: 'ae2:charged_certus_quartz_crystal'
            },
            id: `${id_prefix}charged_certus_quartz_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
