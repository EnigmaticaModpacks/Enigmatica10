MoreJS.wandererTrades((event) => {
    // https://docs.almostreliable.com/morejs/wanderer-trades.html
    // level 1 - normal trades
    // level 2 - rare trades
    // addTrade(level: number, input: Item | Item[], output: Item)
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'artifacts:helium_flamingo');
    event.addTrade(2, Item.of('minecraft:emerald', 48), 'chococraft:black_chocobo_spawn_egg');

    // Feet
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:magma_walker');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:aqua_walker');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:ice_skates');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:ice_breaker');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:roller_skates');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:amphibian_boot');

    // Belt
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:drowned_belt');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:hunter_belt');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:leather_belt');

    // Hand
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:wool_mitten');

    // Necklace
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:reflection_necklace');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:jellyfish_necklace');
    // Charm
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:spore_sack');

    // Other
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:magic_mirror');
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'relics:shadow_glaive');
});
