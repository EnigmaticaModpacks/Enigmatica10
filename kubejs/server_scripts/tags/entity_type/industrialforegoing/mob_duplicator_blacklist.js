ServerEvents.tags('entity_type', (event) => {
    event.get('industrialforegoing:mob_duplicator_blacklist').add(['#enigmatica:mob_spawner_blacklist']);
});
