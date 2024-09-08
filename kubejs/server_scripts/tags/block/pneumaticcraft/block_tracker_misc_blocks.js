ServerEvents.tags('block', (event) => {
    let additions = ['minecraft:budding_amethyst', /ae2:.*budding/, 'minecraft:reinforced_deepslate'];
    let exclusions = [];
    event.get('pneumaticcraft:block_tracker_misc_blocks').add(additions).remove(exclusions);
});
