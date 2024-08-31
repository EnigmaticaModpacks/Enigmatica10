ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('the_bumblezone:hanging_garden/allowed_flowers').add(additions);
});
