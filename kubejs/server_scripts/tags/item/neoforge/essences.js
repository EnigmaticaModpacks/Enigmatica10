ServerEvents.tags('item', (event) => {
    let additions = {
        air: ['ars_nouveau:air_essence'],
        fire: ['ars_nouveau:fire_essence'],
        earth: ['ars_nouveau:earth_essence'],
        water: ['ars_nouveau:water_essence'],
        anima: ['ars_elemental:anima_essence'],
        abjuration: ['ars_nouveau:abjuration_essence'],
        conjuration: ['ars_nouveau:conjuration_essence'],
        manipulation: ['ars_nouveau:manipulation_essence']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:essences/${tag}`).add(additions[tag]);
        event.get('c:essences').add(additions[tag]);
    });
});
