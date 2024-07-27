ServerEvents.tags('item', (event) => {
    let exclusions = ['productivetrees:dracaena_sap', 'productivetrees:haematoxylin'];

    event.get('c:dyes/red').remove(exclusions);
});
