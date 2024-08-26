ServerEvents.tags('item', (event) => {
    // Items golems can pick up
    event.add('ars_nouveau:golem/shard', ['#c:gems']);
});
