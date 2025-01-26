// // https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('occultismm:wild_hunt_wither_skeleton').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:wither_rose').setCount([1, 3]).applyEnchantmentBonus([0, 1]));
    });
});
