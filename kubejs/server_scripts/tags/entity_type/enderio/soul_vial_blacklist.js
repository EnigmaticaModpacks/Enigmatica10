ServerEvents.tags('entity_type', (event) => {
    event.get('enderio:soul_vial_blacklist').add(['#enigmatica:mob_spawner_blacklist']).remove('minecraft:warden');
});
