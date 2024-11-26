// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('ars_additions:chests/ruined_portal').createPool((pool) => {
        pool.rolls([1, 3]);
        pool.addEntry(LootEntry.reference(`irons_spellbooks:chests/component_storage`));
    });
});
