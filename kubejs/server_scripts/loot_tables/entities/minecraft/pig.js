// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event.addTableModifier('minecraft:entities/pig').addLoot(LootEntry.of('minecraft:bone').setCount([1, 2]));
});
