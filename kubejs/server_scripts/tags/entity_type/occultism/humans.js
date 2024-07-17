ServerEvents.tags('entity_type', (event) => {
    let additions = ['minecraft:wandering_trader', 'guardvillagers:guard'];
    event.get('occultism:humans').add(additions);
});
