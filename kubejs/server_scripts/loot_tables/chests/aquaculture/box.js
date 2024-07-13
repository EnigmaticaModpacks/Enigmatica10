// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('aquaculture:box/box')
        .firstPool()
        .addEntry(LootEntry.of('minecraft:cherry_log').withWeight(2))
        .addEntry(LootEntry.of('minecraft:cherry_sapling').withWeight(1))
        .addEntry(LootEntry.of('arts_and_crafts:cork_log').withWeight(2))
        .addEntry(LootEntry.of('arts_and_crafts:cork_sapling').withWeight(1))
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id.match(/:leather_/)) {
                itemEntry.enchantRandomly();
            }
            if (itemEntry.item.id.match(/_log/)) {
                itemEntry.withWeight(2);
            }
            return itemEntry;
        })
        .removeItem(ItemFilter.tag('#minecraft:planks'));
});
