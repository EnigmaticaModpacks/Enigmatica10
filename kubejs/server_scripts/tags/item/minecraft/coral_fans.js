ServerEvents.tags('item', (event) => {
    event.get('minecraft:coral_fans').add([/minecraft:(?!dead).*_coral_fan$/]);
    event.get('minecraft:coral_fans/dead').add([/minecraft:dead.*_coral_fan$/]);
});
