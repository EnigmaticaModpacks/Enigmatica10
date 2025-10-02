ServerEvents.tags('item', (event) => {
    let additions = ['irons_spellbooks:boreal_blade', 'malum:soul_stained_steel_scythe', 'malum:crude_scythe'];

    event.get(`minecraft:swords`).add(additions);
});
