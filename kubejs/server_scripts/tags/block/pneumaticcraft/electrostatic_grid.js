ServerEvents.tags('block', (event) => {
    event
        .add('pneumaticcraft:electrostatic_grid', [
            '#chipped:iron_bars',
            'minecraft:lightning_rod',
            /chipped:.*copper/,
            /minecraft:.*copper/
        ])
        .remove(/_ore$/, /raw_copper/, /_door/, /_trapdoor/, /_barrel/);
});
