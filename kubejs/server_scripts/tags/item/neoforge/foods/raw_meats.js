ServerEvents.tags('item', (event) => {
    let additions = ['chococraft:chocobo_drumstick_raw'];

    event.get('c:foods').add(additions);
    event.get('c:foods/raw_meat').add(additions);
});
