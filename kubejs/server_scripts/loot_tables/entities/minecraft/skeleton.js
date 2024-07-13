// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:entities/skeleton')
        .firstPool()
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id === 'minecraft:skeleton_skull') {
                itemEntry.matchMainHand(ItemFilter.tag('enigmatica:beheading').negate());
            }
            return itemEntry;
        });

    event.getLootTable('minecraft:entities/skeleton').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:skeleton_skull').matchMainHand('#enigmatica:beheading').setCount(1));
    });
});
