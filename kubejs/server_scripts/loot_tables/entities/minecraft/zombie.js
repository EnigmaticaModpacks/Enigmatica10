// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:entities/zombie')
        .firstPool()
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id === 'minecraft:zombie_head') {
                itemEntry.matchMainHand(ItemFilter.tag('enigmatica:beheading').negate());
            }
            return itemEntry;
        });

    event.getLootTable('minecraft:entities/zombie').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:zombie_head').matchMainHand('#enigmatica:beheading').setCount(1));
    });
});
