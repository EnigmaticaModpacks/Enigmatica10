ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*shovel/];

    event.get(`minecraft:shovels`).add(additions);
});
