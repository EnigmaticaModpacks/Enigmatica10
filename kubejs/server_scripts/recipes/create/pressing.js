ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/pressing/';

    const recipes = [
        {
            ingredients: [{ tag: 'c:ingots/bronze' }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/bronze`).getId() }],
            id: `${id_prefix}bronze_plate`
        },
        {
            ingredients: [{ tag: 'c:ingots/invar' }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/invar`).getId() }],
            id: `${id_prefix}invar_plate`
        },
        {
            ingredients: [{ tag: 'c:ingots/platinum' }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/platinum`).getId() }],
            id: `${id_prefix}platinum_plate`
        },
        {
            ingredients: [{ tag: 'c:ingots/tin' }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/tin`).getId() }],
            id: `${id_prefix}tin_plate`
        },
        {
            ingredients: [{ tag: 'c:ingots/tungsten' }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/tungsten`).getId() }],
            id: `${id_prefix}tungsten_plate`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        event.custom(recipe).id(recipe.id);
    });
});
