ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*(hammer|shovel)/];
    event.get('c:tools').add(additions);

    additions = [/vanillaplustools:.*hammer/];
    event.get('c:tools/mining_tool').add(additions);
});
