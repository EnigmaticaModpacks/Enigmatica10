ServerEvents.tags('entity_type', (event) => {
    let additions = [/aquaculture/];
    event.get('minecraft:aquatic').add(additions);
});
