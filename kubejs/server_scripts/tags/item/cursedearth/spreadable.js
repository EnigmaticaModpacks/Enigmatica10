ServerEvents.tags('item', (event) => {
    let additions = ['minecraft:dirt_path', 'minecraft:dirt', 'minecraft:coarse_dirt', 'minecraft:rooted_dirt'];
    event.get('cursedearth:spreadable').add(additions);
});
