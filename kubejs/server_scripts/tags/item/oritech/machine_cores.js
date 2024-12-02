ServerEvents.tags('item', (event) => {
    let additions = {
        primitive: ['oritech:machine_core_1'],
        basic: ['oritech:machine_core_2'],
        improved: ['oritech:machine_core_3'],
        advanced: ['oritech:machine_core_4'],
        elite: ['oritech:machine_core_5'],
        ultra: ['oritech:machine_core_6'],
        ultimate: ['oritech:machine_core_7']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`oritech:machine_cores/${tag}`).add(additions[tag]);
        event.get('oritech:machine_cores').add(additions[tag]);
    });
});
