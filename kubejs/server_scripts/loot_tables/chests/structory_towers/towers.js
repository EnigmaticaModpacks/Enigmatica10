// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    const towers = [
        'crimson',
        'dark',
        'desert',
        'farm',
        'forager',
        'fortress',
        'lighthouse',
        'mangrove',
        'nomad',
        'ocean_pillar',
        'paranoid',
        'pillager',
        'sacred_temple',
        'small_firetower',
        'strange',
        'trader',
        'warped',
        'wizard',
        'workshop'
    ];

    towers.forEach((tower) => {
        event.getLootTable(`structory_towers:top/${tower}_top`).createPool((pool) => {
            pool.addEntry(LootEntry.reference('ars_additions:chests/arcane_library'));
        });
    });

    let highly_magical = ['wizard', 'strange', 'ocean_pillar', 'paranoid', 'sacred_temple'];
    highly_magical.forEach((tower) => {
        event
            .getLootTable(`structory_towers:top/${tower}_top`)
            .firstPool()

            .addEntry(LootEntry.of('ars_additions:lost_codex_entry', [1, 5]).withWeight(40))
            .addEntry(LootEntry.of('cursedearth:blessed_flower', [1, 2]).withWeight(20));
    });
});
