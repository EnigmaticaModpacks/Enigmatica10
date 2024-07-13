// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('chococraft:entities/chocobo').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:bone').setCount([0, 2]).applyEnchantmentBonus([0, 1]));
    });
});
