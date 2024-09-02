ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*(hammer|shovel)/];
    event.get('c:enchantables').add(additions);

    let enchantable_types = ['durability', 'mining', 'mining_loot', 'vanishing'];
});
