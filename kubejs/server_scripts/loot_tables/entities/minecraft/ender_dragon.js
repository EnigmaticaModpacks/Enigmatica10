// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('minecraft:entities/ender_dragon').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:dragon_egg').setCount(1));
    });
});

LootJS.modifiers((event) => {
    event
        .addEntityModifier('minecraft:ender_dragon')
        .matchAttackerCustom((attacker) => {
            return attacker.uuid == DRYGMY_UUID.toString();
        })
        .addLoot('minecraft:dragon_head');
});
