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
            pool.addEntry(LootEntry.of('ars_additions:codex_entry', [1, 4]).withWeight(40));
            pool.addEntry(LootEntry.of('ars_nouveau:bombegranate_pod', [1, 8]).withWeight(20));
            pool.addEntry(LootEntry.of('ars_nouveau:frostaya_pod', [1, 8]).withWeight(20));
            pool.addEntry(LootEntry.of('ars_nouveau:bastion_pod', [1, 8]).withWeight(20));
            pool.addEntry(LootEntry.of('ars_nouveau:mendosteen_pod', [1, 8]).withWeight(20));
        });
    });

    const highly_magical = ['wizard', 'strange', 'ocean_pillar', 'paranoid', 'sacred_temple'];
    highly_magical.forEach((tower) => {
        event
            .getLootTable(`structory_towers:top/${tower}_top`)
            .firstPool()

            .addEntry(LootEntry.of('ars_additions:lost_codex_entry', [1, 5]).withWeight(40))
            .addEntry(LootEntry.of('cursedearth:blessed_flower', [1, 2]).withWeight(20));
    });
});
