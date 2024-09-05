ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:gold_/];

    event.get(`minecraft:piglin_loved`).add(additions);
});
