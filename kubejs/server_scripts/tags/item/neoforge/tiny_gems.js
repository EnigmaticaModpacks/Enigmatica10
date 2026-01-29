ServerEvents.tags('item', (event) => {
    let additions = {
        charcoal: ['actuallyadditions:tiny_charcoal', 'utilitarian:tiny_charcoal', 'malum:charcoal_fragment'],
        coal: ['actuallyadditions:tiny_coal', 'utilitarian:tiny_coal', 'malum:coal_fragment'],
        arcane_charcoal: ['malum:arcane_charcoal_fragment']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tiny_gems/${tag}`).add(additions[tag]);
        event.get('c:tiny_gems').add(additions[tag]);
    });
});
