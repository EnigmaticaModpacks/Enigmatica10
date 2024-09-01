ServerEvents.tags('block', (event) => {
    let additions = ['cursedearth:blessed_flower'];
    event.get('the_bumblezone:biomes/floral_meadow_rootmin_flowers').add(additions);
    event.get('the_bumblezone:biomes/floral_meadow_flowers').add(additions);
});
