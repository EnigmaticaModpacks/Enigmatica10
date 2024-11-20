ServerEvents.tags('item', (event) => {
    let additions = ['minecraft:sculk', 'minecraft:sculk_shrieker', 'minecraft:sculk_sensor'];
    event.get('occultism:pentacle_materials').add(additions);
});
