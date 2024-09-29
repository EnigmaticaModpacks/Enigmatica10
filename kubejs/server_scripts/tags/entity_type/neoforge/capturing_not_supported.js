ServerEvents.tags('entity_type', (event) => {
    let additions = ['justdirethings:creature_catcher'];
    event.get('c:capturing_not_supported').add(additions);
});
