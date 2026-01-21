ServerEvents.tags('block', (event) => {
    let additions = ['#malum:runewood_logs', '#malum:soulwood_logs'];

    event.get('minecraft:logs').add(additions);
});
