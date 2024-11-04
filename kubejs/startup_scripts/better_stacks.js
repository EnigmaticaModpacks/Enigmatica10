ItemEvents.modification((event) => {
    const increaseStackSize = [
        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',
        'powah:charged_snowball',
        'the_bumblezone:pollen_puff',
        /occultism:book_of_binding_(empty|foliot|djinni|afrit|marid)/,
        'occultism:soul_gem',

        //signs
        /(minecraft|supplementaries|occultism|deeperdarker):\w+_sign/
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
