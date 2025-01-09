ItemEvents.modification((event) => {
    const increaseStackSize = [
        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',
        'minecraft:armor_stand',
        'minecraft:saddle',
        'minecraft:suspicious_stew',
        'minecraft:mushroom_stew',
        'minecraft:rabbit_stew',
        'minecraft:cake',
        'chococraft:gysahl_cake',
        'powah:charged_snowball',
        'the_bumblezone:pollen_puff',
        /occultism:book_of_binding_(empty|foliot|djinni|afrit|marid)/,
        /enderio:.*_capacitor/,

        //signs
        /(minecraft|supplementaries|occultism|deeperdarker|farmersdelight|productivetrees|arts_and_crafts|framedblocks|aether):\w+_sign/,
        // shulker boxes
        /shulker_box/,
        // boats
        /(minecraft|aether|deeperdarker):\w+_boat/,
        // beds
        /minecraft:\w+_bed/,
        // banners
        /minecraft:\w+_banner(_pattern)?/,
        // minecarts
        /minecraft:\w+_minecart/,
        // music discs
        /music_disc/
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
