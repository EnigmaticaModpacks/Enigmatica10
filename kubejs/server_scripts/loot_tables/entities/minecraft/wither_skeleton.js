// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('minecraft:entities/wither_skeleton')
        .firstPool()
        .modifyEntry((itemEntry) => {
            if (itemEntry.item.id === 'minecraft:wither_skeleton_skull') {
                itemEntry.matchMainHand(ItemFilter.tag('enigmatica:beheading').negate());
            }
            return itemEntry;
        });

    event.getLootTable('minecraft:entities/wither_skeleton').createPool((pool) => {
        pool.addEntry(
            LootEntry.of('minecraft:wither_skeleton_skull').matchMainHand('#enigmatica:beheading').setCount(1)
        );
    });
});
