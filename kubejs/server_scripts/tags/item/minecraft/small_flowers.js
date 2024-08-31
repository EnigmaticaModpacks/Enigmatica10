ServerEvents.tags('item', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('minecraft:small_flowers').add(additions);
});
