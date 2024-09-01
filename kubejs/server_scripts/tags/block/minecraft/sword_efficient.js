ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('minecraft:sword_efficient').add(additions);
});
