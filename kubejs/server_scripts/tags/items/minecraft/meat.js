ServerEvents.tags('item', (event) => {
    let additions = ['chococraft:chocobo_drumstick_raw', 'chococraft:chocobo_drumstick_cooked'];

    event.get('minecraft:meat').add(additions);
});
