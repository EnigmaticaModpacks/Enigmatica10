// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('ars_additions:chests/nexus_tower').createPool((pool) => {
        pool.rolls([3, 7]);
        pool.addEntry(LootEntry.reference(`irons_spellbooks:chests/component_storage`));
    });
});
