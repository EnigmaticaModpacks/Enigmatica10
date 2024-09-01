ServerEvents.tags('item', (event) => {
    // Items golems can pick up
    event.get('ars_nouveau:golem/shard').add(['#c:gems']);
});
