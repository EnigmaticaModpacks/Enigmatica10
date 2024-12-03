//priority: 900
StartupEvents.registry('block', (event) => {
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
        'uranium'
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
