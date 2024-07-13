// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:entities/creeper')
        .firstPool()
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id === 'minecraft:creeper_head') {
                itemEntry.matchMainHand(ItemFilter.tag('enigmatica:beheading').negate());
            }
            return itemEntry;
        });

    event.getLootTable('minecraft:entities/creeper').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:creeper_head').matchMainHand('#enigmatica:beheading').setCount(1));
    });
});
