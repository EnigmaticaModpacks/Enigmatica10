// // https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('minecraft:entities/guardian').createPool((pool) => {
        pool.addEntry(
            LootEntry.of('minecraft:nautilus_shell').setCount([0, 1]).applyEnchantmentBonus([0, 1]).randomChance(0.25)
        );
    });
});
