//priority: 900
// https://kubejs.com/wiki/tutorials/block-registry
StartupEvents.registry('block', (event) => {
    event
        .create(`deepslate_quartz_ore`)
        .hardness(3.0)
        .resistance(3.0)
        .displayName(`Deepslate Quartz Ore`)
        .soundType('stone')
        .tagBlock('c:ores')
        .tagBlock('c:ores/quartz')
        .tagBlock('c:ore_rates/singular')
        .tagBlock('minecraft:mineable/pickaxe');

    const resource_nodes = [
        'antimony',
        'bauxite',
        'fluorite',
        'iridium',
        'lead',
        'lignite',
        'mithril',
        'monazite',
        'osmium',
        'salt',
        'tin',
        'tungsten',
        'uraninite',
        'uranium',
        'silver',
        'quartz'
    ];
    resource_nodes.forEach((node) => {
        event
            .create(`resource_node_${node}`)
            .displayName(`${properCase(node)} Resource Node`)
            .soundType('stone')
            .unbreakable()
            .tagBlock('oritech:resource_nodes');
    });
});

function properCase(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
