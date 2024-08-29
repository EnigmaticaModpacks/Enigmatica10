// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:chests/bastion_treasure')
        .firstPool()
        .addEntry(LootEntry.of('chococraft:flame_chocobo_spawn_egg').withWeight(10));
});
