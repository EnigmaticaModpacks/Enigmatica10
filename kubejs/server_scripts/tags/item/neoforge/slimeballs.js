ServerEvents.tags('item', (event) => {
    let additions = ['actuallyadditions:rice_slimeball'];

    event.get('c:slimeballs').add(additions);
});
