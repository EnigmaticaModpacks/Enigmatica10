ServerEvents.tags('block', (event) => {
    let additions = ['#chipped:iron_bars', 'minecraft:lightning_rod', /chipped:.*copper/, /minecraft:.*copper/];
    let exclusions = [/_ore$/, /raw_copper/, /_door/, /_trapdoor/, /_barrel/];
    event.get('pneumaticcraft:electrostatic_grid').add(additions).remove(exclusions);
});
