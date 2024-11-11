ServerEvents.tags('block', (event) => {
    // Blocks to be accelerated by golems
    event.add('ars_nouveau:golem/budding', ['#c:budding_blocks', '#c:budding']);
    // Blocks to be broken by golems
    event.add('ars_nouveau:golem/cluster', ['#c:clusters']);
});
