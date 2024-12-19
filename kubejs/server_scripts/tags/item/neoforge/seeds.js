ServerEvents.tags('item', (event) => {
    let additions = {
        gysahl_green: ['chococraft:gysahl_green_seeds']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:seeds/${tag}`).add(additions[tag]);
        event.get('c:seeds').add(additions[tag]);
    });

    let exclusions = ['minecraft:wheat'];
    event.get('c:seeds').remove(exclusions);
});
