ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('the_bumblezone:sempiternal_sanctum/allowed_white_flowers').add(additions);
});
