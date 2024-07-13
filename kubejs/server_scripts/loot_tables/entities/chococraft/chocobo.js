// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event
        .addTableModifier('chococraft:entities/chocobo')
        .addLoot(LootEntry.of('minecraft:bone').setCount([1, 3]))
        .addLoot(LootEntry.of('occultism:tallow').matchMainHand(ItemFilter.tag('occultism:tools/knives')).setCount(3));
});
