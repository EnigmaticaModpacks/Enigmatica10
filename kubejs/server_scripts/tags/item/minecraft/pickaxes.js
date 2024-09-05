ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*hammer/];

    event.get(`minecraft:pickaxes`).add(additions);
});
