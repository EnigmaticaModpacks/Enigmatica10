// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:entities/piglin')
        .firstPool()
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id === 'minecraft:piglin_head') {
                itemEntry.matchMainHand(ItemFilter.tag('enigmatica:beheading').negate());
            }
            return itemEntry;
        });

    event.getLootTable('minecraft:entities/piglin').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:piglin_head').matchMainHand('#enigmatica:beheading').setCount(1));
    });
});
