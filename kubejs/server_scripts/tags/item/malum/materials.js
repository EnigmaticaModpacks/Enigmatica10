ServerEvents.tags('item', (event) => {
    let additions = ['malum:wind_nucleus'];

    event.get('malum:materials').add(additions);
});
