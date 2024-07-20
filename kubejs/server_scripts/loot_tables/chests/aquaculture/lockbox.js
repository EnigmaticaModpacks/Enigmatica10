// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('aquaculture:box/lockbox')
        .firstPool()
        .addEntry(LootEntry.of('minecraft:ink_sac').withWeight(10))
        .addEntry(LootEntry.of('ae2:certus_quartz_crystal').withWeight(8))
        .addEntry(LootEntry.of('minecraft:glow_ink_sac').withWeight(7));
});

LootJS.modifiers((event) => {
    event
        .addTableModifier('aquaculture:box/lockbox')
        .removeLoot('minecraft:iron_ingot')
        .removeLoot('minecraft:gold_ingot');
});
