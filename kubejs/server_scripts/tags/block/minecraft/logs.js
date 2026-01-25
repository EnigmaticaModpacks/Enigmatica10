ServerEvents.tags('block', (event) => {
    let additions = [/malum:.*_log/];
    event.get('minecraft:logs').add(additions);
});
