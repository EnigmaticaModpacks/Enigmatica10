// https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event.addTableModifier('aquaculture:box/neptunes_bounty').pool((pool) => {
        pool.addEntry(LootEntry.of('chococraft:blue_chocobo_spawn_egg').withWeight(5))
            .addEntry(LootEntry.of('minecraft:heart_of_the_sea').withWeight(10))
            .addEntry(LootEntry.of('usefulhats:aquanaut_helmet').withWeight(5))
            .addEntry(LootEntry.of('relics:jellyfish_necklace').withWeight(2));
    });

    event.addTableModifier('aquaculture:box/neptunes_bounty_junk').pool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:nautilus_shell').setCount([2, 8]))
            .addEntry(LootEntry.of('minecraft:wet_sponge').setCount([1, 4]))
            .addEntry(LootEntry.of('minecraft:turtle_scute').setCount([1, 2]));
    });
});
