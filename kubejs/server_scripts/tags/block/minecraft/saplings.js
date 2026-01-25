ServerEvents.tags('block', (event) => {
    let additions = [/malum:.*_sapling/];
    event.get('minecraft:saplings').add(additions);
});
