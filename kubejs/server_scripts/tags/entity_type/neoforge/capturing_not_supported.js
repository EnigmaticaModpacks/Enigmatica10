ServerEvents.tags('entity_type', (event) => {
    let additions = ['justdirethings:creature_catcher', 'industrialforegoing:launcher_projectile_entity'];
    event.get('c:capturing_not_supported').add(additions);
});
