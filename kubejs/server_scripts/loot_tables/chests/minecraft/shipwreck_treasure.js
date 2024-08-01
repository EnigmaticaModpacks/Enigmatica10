// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event.addTableModifier('minecraft:chests/shipwreck_treasure').pool((pool) => {
        pool.rolls([5, 10])
            .bonusRolls(0)
            .addEntry(LootEntry.of('aquaculture:box').withWeight(16))
            .addEntry(LootEntry.of('aquaculture:lockbox').withWeight(8))
            .addEntry(LootEntry.of('aquaculture:treasure_chest').withWeight(4));
    });
});
