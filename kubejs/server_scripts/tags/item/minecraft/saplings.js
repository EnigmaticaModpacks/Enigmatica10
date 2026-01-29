ServerEvents.tags('item', (event) => {
    let additions = [/malum:.*_sapling/];
    event.get('minecraft:saplings').add(additions);
});
