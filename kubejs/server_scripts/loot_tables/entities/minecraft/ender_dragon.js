// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('minecraft:entities/ender_dragon').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:dragon_egg').setCount(1));
    });
});

LootJS.modifiers((event) => {
    onlyDrygmy(event, 'minecraft:ender_dragon').addLoot('minecraft:dragon_head');
});
