ServerEvents.tags('entity_type', (event) => {
    let additions = ['minecraft:wandering_trader', 'guardvillagers:guard'];
    event.get('geneticsresequenced:allows_preventing_interaction').add(additions);
});
