// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('ars_additions:chests/arcane_library')
        .firstPool()

        .addEntry(LootEntry.of('ars_additions:lost_codex_entry', [1, 5]).withWeight(40))
        .addEntry(LootEntry.of('ars_additions:ancient_codex_entry', [1, 5]).withWeight(10))
        .addEntry(
            LootEntry.of('artifacts:bunny_hoppers', 1)
                .setName({ text: 'Cozy Bunny Slippers', color: '#735643' })
                .addLore({ text: 'The only appropriate footwear for browsing the stacks.', color: 'gold' })
                .withWeight(20)
        )
        .addEntry(
            LootEntry.of('ars_nouveau:sorcerer_robes', 1)
                .setName({ text: 'Luxurious Lounge Jacket', color: 'red' })
                .addLore({ text: 'Velvet lined and very cozy.', color: 'light_purple' })
                .jsonFunction({
                    function: 'minecraft:set_components',
                    components: {
                        'ars_nouveau:armor_perks': { color: 'red', perkTags: {}, perks: [], tier: 2 }
                    }
                })
                .withWeight(20)
        );
});

//find other yummy stuff to add to these. t2 and t3 codex are good
