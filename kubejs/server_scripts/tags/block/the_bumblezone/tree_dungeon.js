ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('the_bumblezone:tree_dungeon/allowed_flowers').add(additions);
});
