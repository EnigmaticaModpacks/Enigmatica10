ServerEvents.tags('item', (event) => {
    let additions = ['chococraft:chocobo_drumstick_cooked'];

    event.get('c:foods').add(additions);
    event.get('c:foods/cooked_meat').add(additions);
});
