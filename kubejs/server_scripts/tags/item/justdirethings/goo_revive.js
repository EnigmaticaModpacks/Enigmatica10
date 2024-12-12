ServerEvents.tags('item', (event) => {
    let additions = {
        tier_1: ['minecraft:honeycomb', 'the_bumblezone:honey_crystal_shards'],
        tier_2: ['ars_nouveau:fire_essence'],
        tier_3: ['occultism:otherworld_essence'],
        tier_4: ['minecraft:echo_shard']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`justdirethings:goo_revive_${tag}`).add(additions[tag]);
    });
});
