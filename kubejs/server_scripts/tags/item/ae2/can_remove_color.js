ServerEvents.tags('item', (event) => {
    let additions = ['supplementaries:soap'];
    event.get('ae2:can_remove_color').add(additions);
});
