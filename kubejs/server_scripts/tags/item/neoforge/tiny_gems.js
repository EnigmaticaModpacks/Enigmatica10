ServerEvents.tags('item', (event) => {
    let additions = {
        charcoal: ['actuallyadditions:tiny_charcoal', 'utilitarian:tiny_charcoal'],
        coal: ['actuallyadditions:tiny_coal', 'utilitarian:tiny_coal']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tiny_gems/${tag}`).add(additions[tag]);
        event.get('c:tiny_gems').add(additions[tag]);
    });
});
