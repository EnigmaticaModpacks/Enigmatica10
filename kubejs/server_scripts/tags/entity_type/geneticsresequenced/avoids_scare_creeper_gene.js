ServerEvents.tags('entity_type', (event) => {
    let additions = [/creeperoverhaul/];
    event.get('geneticsresequenced:avoids_scare_creeper_gene').add(additions);
});
