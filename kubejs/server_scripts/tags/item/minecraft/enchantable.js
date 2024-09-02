ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*(hammer|shovel)/];

    let enchantable_types = ['durability', 'mining', 'mining_loot', 'vanishing'];
    enchantable_types.forEach((type) => {
        event.get(`minecraft:enchantable/${type}`).add(additions);
    });
});
