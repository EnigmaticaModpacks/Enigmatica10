ItemEvents.modification((event) => {
    const betterStacks = [
        {
            size: 64,
            items: [
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
                'oritech:heisenberg_compensator',
                'immersiveengineering:graphite_electrode',
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
                /minecraft:\w+_banner/,
                /banner_pattern/,
                /actuallyadditions:.*_pattern$/,
                // minecarts
                /minecraft:(\w+)?minecart/,
                // music discs
                /music_disc/
            ]
        }
    ];

    betterStacks.forEach((stack) => {
        event.modify(stack.items, (item) => {
            item.maxStackSize = stack.size;
        });
    });
});
