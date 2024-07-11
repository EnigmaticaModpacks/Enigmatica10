LootJS.modifiers((event) => {
    event.addTableModifier('chococraft:entities/chocobo').addLoot(LootEntry.of('minecraft:bone').setCount([1, 3]));
});
