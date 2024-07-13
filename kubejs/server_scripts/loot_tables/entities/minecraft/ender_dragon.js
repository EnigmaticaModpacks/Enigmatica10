// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:entities/ender_dragon')
        .createPool((pool) => {
            pool.addEntry(LootEntry.of('minecraft:dragon_head').matchMainHand('#enigmatica:beheading').setCount(1));
        })
        .createPool((pool) => {
            pool.addEntry(LootEntry.of('minecraft:dragon_egg').setCount(1));
        });
});
