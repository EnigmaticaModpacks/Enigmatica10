ServerEvents.tags('item', (event) => {
    let additions = ['chococraft:chocobo_feather'];

    event.get('c:feathers').add(additions);
});
