// https://docs.almostreliable.com/lootjs/

LootJS.lootTables((event) => {
    event.create('enigmatica:entities/dispel/possessed_endermite').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:elytra').setCount(1).withWeight(20));
        pool.addEntry(LootEntry.reference('occultism:entities/possessed_endermite').withWeight(80));
    });
});
