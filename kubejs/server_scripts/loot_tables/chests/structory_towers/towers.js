// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    const towers = [
        'top/crimson_top',
        'top/dark_top',
        'top/desert_top',
        'top/farm_top',
        'top/forager_top',
        'top/fortress_top',
        'top/lighthouse_top',
        'top/mangrove_top',
        'top/nomad_top',
        'top/ocean_pillar_top',
        'top/paranoid_top',
        'top/pillager_top',
        'top/sacred_temple_top',
        'top/small_firetower_top',
        'top/strange_top',
        'top/trader_top',
        'top/warped_top',
        'top/wizard_top',
        'top/workshop_top'
    ];

    towers.forEach((tower) => {
        event
            .getLootTable(`structory_towers:${tower}`)
            .createPool((pool) => {
                pool.addEntry(LootEntry.of('ars_additions:codex_entry', [1, 4]));
            })
            .createPool((pool) => {
                pool.addEntry(LootEntry.of('ars_nouveau:bombegranate_pod', [1, 8]));
                pool.addEntry(LootEntry.of('ars_nouveau:frostaya_pod', [1, 8]));
            })
            .createPool((pool) => {
                pool.addEntry(LootEntry.of('ars_nouveau:bastion_pod', [1, 8]));
                pool.addEntry(LootEntry.of('ars_nouveau:mendosteen_pod', [1, 8]));
            });
    });

    const magical = [
        'basic/wizard_basic',
        'basic/strange_basic',
        'basic/ocean_pillar_basic',
        'basic/paranoid_basic',
        'basic/sacred_temple_basic'
    ];
    magical.forEach((tower) => {
        event.getLootTable(`structory_towers:${tower}`).createPool((pool) => {
            pool.addEntry(LootEntry.reference(`irons_spellbooks:chests/component_storage`));
        });
    });

    const highly_magical = [
        'top/wizard_top',
        'top/strange_top',
        'top/ocean_pillar_top',
        'top/paranoid_top',
        'top/sacred_temple_top',
        'end_tower'
    ];
    highly_magical.forEach((tower) => {
        event
            .getLootTable(`structory_towers:${tower}`)
            .firstPool()

            .addEntry(LootEntry.of('ars_additions:lost_codex_entry', [1, 5]).withWeight(40))
            .addEntry(LootEntry.of('cursedearth:blessed_flower', [1, 2]).withWeight(20));

        event.getLootTable(`structory_towers:${tower}`).createPool((pool) => {
            pool.addEntry(LootEntry.reference(`irons_spellbooks:chests/component_storage`));
        });
    });
});
