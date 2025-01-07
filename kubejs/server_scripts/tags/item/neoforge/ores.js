ServerEvents.tags('item', (event) => {
    let additions = {
        uranium: ['oritech:deepslate_uranium_ore'],

        replica: ['replication:deepslate_replica_ore']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:ores/${tag}`).add(additions[tag]);
        event.get('c:ores').add(additions[tag]);
    });
});
