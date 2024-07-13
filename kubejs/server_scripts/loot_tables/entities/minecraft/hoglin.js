// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event.addTableModifier('minecraft:entities/hoglin').addLoot(LootEntry.of('minecraft:bone').setCount([1, 3]));
});
