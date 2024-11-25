// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('ars_additions:chests/arcane_library')
        .createPool((pool) => {
            pool.addEntry(LootEntry.of('ars_elemental:fire_bangle', 1).withWeight(6));
            pool.addEntry(LootEntry.of('ars_elemental:water_bangle', 1).withWeight(6));
            pool.addEntry(LootEntry.of('ars_elemental:air_bangle', 1).withWeight(6));
            pool.addEntry(LootEntry.of('ars_elemental:earth_bangle', 1).withWeight(6));
            pool.addEntry(LootEntry.of('ars_elemental:summon_bangle', 1).withWeight(6));
            pool.addEntry(
                LootEntry.of('artifacts:bunny_hoppers', 1)
                    .setName({ text: 'Cozy Bunny Slippers', color: '#735643' })
                    .addLore({ text: 'The only appropriate footwear for browsing the stacks.', color: 'gold' })
                    .withWeight(18)
            );
            pool.addEntry(
                LootEntry.of('ars_nouveau:sorcerer_robes', 1)
                    .setName({ text: 'Luxurious Lounge Jacket', color: 'red' })
                    .addLore({ text: 'Velvet lined and very cozy.', color: 'light_purple' })
                    .jsonFunction({
                        function: 'minecraft:set_components',
                        components: {
                            'ars_nouveau:armor_perks': { color: 'red', perkTags: {}, perks: [], tier: 2 }
                        }
                    })
                    .withWeight(18)
            );
        })
        .createPool((pool) => {
            pool.addEntry(LootEntry.of('ars_additions:codex_entry', [1, 2]).withWeight(12));
            pool.addEntry(LootEntry.of('ars_additions:lost_codex_entry', [1, 4]).withWeight(10));
            pool.addEntry(LootEntry.of('ars_additions:ancient_codex_entry', [1, 3]).withWeight(8));
        })
        .createPool((pool) => {
            pool.addEntry(LootEntry.reference(`structory_towers:potions`));
        })
        .createPool((pool) => {
            pool.addEntry(LootEntry.reference(`irons_spellbooks:chests/component_storage`));
        });
});
