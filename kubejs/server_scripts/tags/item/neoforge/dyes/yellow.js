ServerEvents.tags('item', (event) => {
    let exclusions = ['mekanism:dust_sulfur', 'productivetrees:fustic'];

    event.get('c:dyes/yellow').remove(exclusions);
});
