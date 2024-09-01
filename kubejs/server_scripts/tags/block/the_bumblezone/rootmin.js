ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('the_bumblezone:rootmin/allowed_flowers').add(additions);
    event.get('the_bumblezone:rootmin/default_flowers').add(additions);
});
