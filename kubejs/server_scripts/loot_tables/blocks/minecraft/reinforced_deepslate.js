// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:blocks/reinforced_deepslate')
        .firstPool()
        .addEntry(LootEntry.of('minecraft:reinforced_deepslate'));
});
