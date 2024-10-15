ServerEvents.tags('entity_type', (event) => {
    event.get('ars_additions:source_spawner_denylist').add(['#enigmatica:mob_spawner_blacklist']);
});
