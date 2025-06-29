ServerEvents.tags('item', (event) => {
    let additions = ['irons_spellbooks:boreal_blade'];

    event.get(`minecraft:swords`).add(additions);
});
