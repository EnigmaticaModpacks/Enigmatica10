// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event.addTableModifier('minecraft:chests/shipwreck_supply').pool((pool) => {
        pool.rolls([5, 8])
            .bonusRolls(0)
            .addEntry(LootEntry.of('aquaculture:box').withWeight(16))
            .addEntry(LootEntry.of('aquaculture:lockbox').withWeight(8));
    });
});

LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:chests/shipwreck_supply')
        .firstPool()
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id.match(/:leather_/)) {
                itemEntry.enchantRandomly();
            }

            return itemEntry;
        });
});
