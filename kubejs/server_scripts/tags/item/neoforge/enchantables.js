ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*(hammer|shovel)/];
    event.get('c:enchantables').add(additions);
});
