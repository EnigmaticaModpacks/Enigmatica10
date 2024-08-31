ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('the_bumblezone:pollen_puff/multiplying_allowed_flowers').add(additions);
});
