ServerEvents.tags('entity_type', (event) => {
    let additions = [/occultism:.*skeleton/];
    event.get('geneticsresequenced:avoids_scare_skeleton_gene').add(additions);
});
