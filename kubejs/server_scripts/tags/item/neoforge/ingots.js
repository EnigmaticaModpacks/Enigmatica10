ServerEvents.tags('item', (event) => {
    let additions = {
        uraninite: ['powah:uraninite'],
        energized_steel: ['powah:steel_energized'],
        ferricore: ['justdirethings:ferricore_ingot'],
        blazegold: ['justdirethings:blazegold_ingot'],
        eclipsealloy: ['justdirethings:eclipsealloy_ingot']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:ingots/${tag}`).add(additions[tag]);
        event.get('c:ingots').add(additions[tag]);
    });
});
