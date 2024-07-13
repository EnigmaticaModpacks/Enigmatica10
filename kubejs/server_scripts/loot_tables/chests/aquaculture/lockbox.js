// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('aquaculture:box/lockbox')
        .firstPool()
        .addEntry(LootEntry.of('minecraft:ink_sac').withWeight(10))
        .addEntry(LootEntry.of('minecraft:glow_ink_sac').withWeight(7));
});
