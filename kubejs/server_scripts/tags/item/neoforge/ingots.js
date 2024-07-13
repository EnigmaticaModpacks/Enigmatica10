ServerEvents.tags('item', (event) => {
    let additions = {
        ferricore: ['justdirethings:ferricore_ingot'],
        blazegold: ['justdirethings:blazegold_ingot'],
        eclipsealloy: ['justdirethings:eclipsealloy_ingot'],

        uraninite: ['powah:uraninite'],
        energized_steel: ['powah:steel_energized']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:ingots/${tag}`).add(additions[tag]);
        event.get('c:ingots').add(additions[tag]);
    });
});
