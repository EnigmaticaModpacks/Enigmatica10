LootJS.modifiers((event) => {
    event.addTableModifier('minecraft:entities/sheep').addLoot(LootEntry.of('minecraft:bone').setCount([1, 2]));
});
