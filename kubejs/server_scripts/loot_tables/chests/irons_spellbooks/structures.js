// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    const structure_tiers = {
        codex_entry: [
            'pyromancer_tower/pyromancer_basic_storage',
            'mountain_tower/mountain_tower',
            'mangrove_hut',
            'catacombs/crypt_loot',
            'priest_house',
            'component_storage',
            'bookshelf_loot',
            'generic_magic_treasure',
            'trial_chambers/additional_regular_vault_loot'
        ],
        lost_codex_entry: [
            'pyromancer_tower/pyromancer_supplies',
            'mountain_tower/ice_barrel',
            'mangrove_hut/hidden_potion_storage',
            'catacombs/coffin_loot',
            'battleground/piglin_camp',
            'impaled_icebreaker/captain_quarters',
            'evoker_fort',
            'magic_bookshelf_loot',
            'trial_chambers/additional_regular_vault_loot'
        ],
        ancient_codex_entry: [
            'battleground/burial_loot',
            'additional_end_city_loot',
            'additional_ancient_city_loot',
            'trial_chambers/additional_ominous_vault_loot'
        ]
    };

    Object.keys(structure_tiers).forEach((tier) => {
        structure_tiers[tier].forEach((structure) => {
            event.getLootTable(`irons_spellbooks:chests/${structure}`).createPool((pool) => {
                pool.addEntry(LootEntry.of(`ars_additions:${tier}`, [1, 2]).randomChance(0.25));
            });
        });
    });
});
