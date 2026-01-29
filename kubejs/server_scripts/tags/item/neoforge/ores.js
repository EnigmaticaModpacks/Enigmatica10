ServerEvents.tags('item', (event) => {
    let additions = {
        uranium: ['oritech:deepslate_uranium_ore'],
        replica: ['replication:deepslate_replica_ore'],
        quartz: ['kubejs:deepslate_quartz_ore'],
        cthonic_gold: ['malum:cthonic_gold_ore'],
        blazing_quartz: ['malum:blazing_quartz_ore'],

        brilliance: ['malum:brilliant_stone', 'malum:brilliant_deepslate'],
        soulstone: ['malum:deepslate_soulstone_ore', 'malum:soulstone_ore']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:ores/${tag}`).add(additions[tag]);
        event.get('c:ores').add(additions[tag]);
    });
});
