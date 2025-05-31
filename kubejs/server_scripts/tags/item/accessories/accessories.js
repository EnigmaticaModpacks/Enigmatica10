ServerEvents.tags('item', (event) => {
    let types = ['necklace', 'hat', 'belt', 'hand', 'shoes', 'charm'];

    types.forEach((type) => {
        event.get(`accessories:${type}`).removeAll();
    });
});
