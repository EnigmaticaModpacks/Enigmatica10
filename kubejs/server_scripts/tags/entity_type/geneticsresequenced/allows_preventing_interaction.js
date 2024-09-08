ServerEvents.tags('entity_type', (event) => {
    let additions = [/guardvillagers/];
    event.get('geneticsresequenced:allows_preventing_interaction').add(additions);
});
