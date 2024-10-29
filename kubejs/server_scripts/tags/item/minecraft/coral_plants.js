ServerEvents.tags('item', (event) => {
    event.get('minecraft:coral_plants').add([/minecraft:(?!dead).*_coral$/]);
    event.get('minecraft:coral_plants/dead').add([/minecraft:dead.*_coral$/]);
});
