ServerEvents.tags('item', (event) => {
    let exclusions = ['#malum:runewood_logs', '#malum:soulwood_logs'];

    event.get(`minecraft:logs_that_burn`).remove(exclusions);
});
