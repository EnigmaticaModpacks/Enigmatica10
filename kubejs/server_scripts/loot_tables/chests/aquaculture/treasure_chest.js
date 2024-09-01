// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('aquaculture:box/treasure_chest')
        .firstPool()

        .addEntry(LootEntry.of('modern_industrialization:silver_ingot').withWeight(40))
        .addEntry(LootEntry.of('modern_industrialization:steel_ingot').withWeight(30))
        .addEntry(LootEntry.of('powah:steel_energized').withWeight(20))
        .addEntry(LootEntry.of('mekanism:ingot_osmium').withWeight(20))
        .addEntry(LootEntry.of('minecraft:amethyst_shard').withWeight(20))
        .addEntry(LootEntry.of('justdirethings:ferricore_ingot').withWeight(20))
        .addEntry(LootEntry.of('justdirethings:blazegold_ingot').withWeight(10))
        .addEntry(LootEntry.of('occultism:iesnium_ingot').withWeight(10))
        .addEntry(LootEntry.of('justdirethings:celestigem').withWeight(5));
});
