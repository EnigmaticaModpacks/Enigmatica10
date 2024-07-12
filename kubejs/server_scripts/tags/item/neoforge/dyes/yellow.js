ServerEvents.tags('item', (event) => {
    let exclusions = ['mekanism:dust_sulfur'];

    event.get('c:dyes/yellow').remove(exclusions);
});
