ServerEvents.tags('item', (event) => {
    let additions = ['malum:wind_nucleus'];

    event.get('malum:mob_drops').add(additions);
});
