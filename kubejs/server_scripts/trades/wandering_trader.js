MoreJS.wandererTrades((event) => {
    // https://docs.almostreliable.com/morejs/wanderer-trades.html
    // level 1 - normal trades
    // level 2 - rare trades
    // addTrade(level: number, input: Item | Item[], output: Item)
    event.addTrade(2, Item.of('minecraft:emerald', 32), 'artifacts:helium_flamingo');
    event.addTrade(2, Item.of('minecraft:emerald', 48), 'chococraft:black_chocobo_spawn_egg');
});
