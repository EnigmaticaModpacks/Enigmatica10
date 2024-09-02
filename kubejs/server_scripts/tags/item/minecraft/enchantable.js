ServerEvents.tags('item', (event) => {
    let additions = {
        durability: [/vanillaplustools:.*(hammer|shovel)/, 'geneticsresequenced:scraper'],
        mining: [/vanillaplustools:.*(hammer|shovel)/],
        mining_loot: [/vanillaplustools:.*(hammer|shovel)/],
        vanishing: [/vanillaplustools:.*(hammer|shovel)/]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:enchantable/${tag}`).add(additions[tag]);
    });
});
