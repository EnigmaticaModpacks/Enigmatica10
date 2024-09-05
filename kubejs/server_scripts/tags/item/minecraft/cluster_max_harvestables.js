ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*hammer/];

    event.get(`minecraft:cluster_max_harvestables`).add(additions);
});
