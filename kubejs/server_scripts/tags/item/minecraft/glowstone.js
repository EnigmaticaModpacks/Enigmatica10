ServerEvents.tags('item', (event) => {
    let additions = ['minecraft:glowstone'];

    event.get('minecraft:glowstone').add(additions);
});
