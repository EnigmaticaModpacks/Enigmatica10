// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('minecraft:entities/sheep').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:bone').setCount([0, 1]).applyEnchantmentBonus([0, 1]));
    });
});
