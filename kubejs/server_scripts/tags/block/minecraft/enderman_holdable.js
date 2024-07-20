ServerEvents.tags('block', (event) => {
    event.get('minecraft:enderman_holdable').removeAll();
});
