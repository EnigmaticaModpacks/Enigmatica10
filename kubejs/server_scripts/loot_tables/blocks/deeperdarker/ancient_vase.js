// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.getLootTable('deeperdarker:blocks/ancient_vase').createPool((pool) => {
        pool.addEntry(LootEntry.of('irons_spellbooks:ancient_knowledge_fragment', [1, 3]).randomChance(0.15));
        pool.addEntry(LootEntry.of('irons_spellbooks:ruined_book').randomChance(0.15));
        pool.addEntry(LootEntry.of('irons_spellbooks:blank_rune').randomChance(0.15));
        pool.addEntry(
            LootEntry.of('irons_spellbooks:scroll')
                .randomChance(0.15)
                .jsonFunction({
                    function: 'irons_spellbooks:randomize_spell',
                    quality: { min: 0.3, max: 1 }
                })
        );
    });
});
