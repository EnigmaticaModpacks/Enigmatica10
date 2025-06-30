ServerEvents.tags('item', (event) => {
    let additions = {
        durability: [
            /vanillaplustools:.*(hammer|shovel)/,
            'geneticsresequenced:scraper',
            /justdirethings:bow_(ferricore|blazegold)/
        ],
        mining: [/vanillaplustools:.*(hammer|shovel)/],
        mining_loot: [/vanillaplustools:.*(hammer|shovel)/],
        vanishing: [/vanillaplustools:.*(hammer|shovel)/],
        armor: ['minecraft:wolf_armor']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:enchantable/${tag}`).add(additions[tag]);
    });
});
