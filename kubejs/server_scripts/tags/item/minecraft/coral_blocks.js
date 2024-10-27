ServerEvents.tags('item', (event) => {
    event.get('minecraft:coral_blocks').add([/minecraft:(?!dead).*_coral_block$/]);
    event.get('minecraft:coral_blocks/dead').add([/minecraft:dead.*_coral_block$/]);
});
