ServerEvents.generateData('after_mods', (event) => {
    /*
    spirits: [
        { spirit: 'infernal', count: 1 },
        { spirit: 'earthen', count: 1 },
        { spirit: 'aqueous', count: 1 },
        { spirit: 'aerial', count: 1 },
        { spirit: 'sacred', count: 1 },
        { spirit: 'arcane', count: 1 },
        { spirit: 'eldritch', count: 1 },
        { spirit: 'wicked', count: 1 },
    ]
*/

    const recipes = [
        {
            registry_name: 'aether:aerbunny',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:aerwhale',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:aechor_plant',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'aether:blue_swet',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'aether:golden_swet',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'aether:flying_cow',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:moa',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:cockatrice',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:phyg',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:sheepuff',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:fire_minion',
            spirits: [
                { spirit: 'infernal', count: 3 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'aether:zephyr',
            spirits: [
                { spirit: 'arcane', count: 2 },
                { spirit: 'wicked', count: 2 },
                { spirit: 'aerial', count: 3 }
            ]
        },
        {
            registry_name: 'aether:mimic',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'aether:valkyrie',
            spirits: [
                { spirit: 'sacred', count: 3 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'aether:evil_whirlwind',
            spirits: [
                { spirit: 'aerial', count: 3 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'aether:whirlwind',
            spirits: [{ spirit: 'aerial', count: 3 }]
        },
        {
            registry_name: 'aether:sentry',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'aether:slider',
            spirits: [
                { spirit: 'arcane', count: 5 },
                { spirit: 'earthen', count: 5 }
            ]
        },
        {
            registry_name: 'aether:valkyrie_queen',
            spirits: [
                { spirit: 'sacred', count: 5 },
                { spirit: 'aerial', count: 5 }
            ]
        },
        {
            registry_name: 'aether:sun_spirit',
            spirits: [
                { spirit: 'sacred', count: 5 },
                { spirit: 'infernal', count: 5 }
            ]
        },
        {
            registry_name: 'deeperdarker:angler_fish',
            spirits: [
                { spirit: 'eldritch', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'deeperdarker:sculk_leech',
            spirits: [
                { spirit: 'eldritch', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'deeperdarker:sculk_centipede',
            spirits: [
                { spirit: 'eldritch', count: 1 },
                { spirit: 'earthen', count: 2 }
            ]
        },
        {
            registry_name: 'deeperdarker:sculk_snapper',
            spirits: [
                { spirit: 'eldritch', count: 1 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'deeperdarker:sludge',
            spirits: [
                { spirit: 'eldritch', count: 1 },
                { spirit: 'arcane', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'deeperdarker:shattered',
            spirits: [
                { spirit: 'eldritch', count: 1 },
                { spirit: 'wicked', count: 1 },
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'deeperdarker:shriek_worm',
            spirits: [
                { spirit: 'eldritch', count: 3 },
                { spirit: 'wicked', count: 3 },
                { spirit: 'arcane', count: 3 },
                { spirit: 'earthen', count: 3 }
            ]
        },
        {
            registry_name: 'deeperdarker:stalker',
            spirits: [
                { spirit: 'eldritch', count: 3 },
                { spirit: 'wicked', count: 3 },
                { spirit: 'arcane', count: 3 },
                { spirit: 'earthen', count: 3 }
            ]
        },
        {
            registry_name: 'minecraft:warden',
            spirits: [
                { spirit: 'eldritch', count: 6 },
                { spirit: 'wicked', count: 6 },
                { spirit: 'arcane', count: 6 },
                { spirit: 'earthen', count: 6 }
            ]
        },
        {
            registry_name: 'evilcraft:controlled_zombie',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'evilcraft:werewolf',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'evilcraft:netherfish',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 },
                { spirit: 'infernal', count: 1 }
            ]
        },
        {
            registry_name: 'evilcraft:poisonous_libelle',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'aerial', count: 1 }
            ]
        },
        {
            registry_name: 'evilcraft:vengeance_spirit',
            spirits: [{ spirit: 'wicked', count: 1 }]
        },
        {
            registry_name: 'artifacts:mimic',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'the_bumblezone:honey_slime',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'the_bumblezone:beehemoth',
            spirits: [
                { spirit: 'aerial', count: 4 },
                { spirit: 'sacred', count: 2 }
            ]
        },
        {
            registry_name: 'the_bumblezone:bee_queen',
            spirits: [
                { spirit: 'aerial', count: 6 },
                { spirit: 'sacred', count: 6 },
                { spirit: 'arcane', count: 6 }
            ]
        },
        {
            registry_name: 'the_bumblezone:rootmin',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:foliot',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:djinni',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aerial', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:afrit',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:afrit_wild',
            spirits: [
                { spirit: 'arcane', count: 3 },
                { spirit: 'infernal', count: 3 }
            ]
        },
        {
            registry_name: 'occultism:marid',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aqueous', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:marid_unbound',
            spirits: [
                { spirit: 'arcane', count: 3 },
                { spirit: 'aqueous', count: 3 }
            ]
        },
        {
            registry_name: 'occultism:possessed_bee',
            spirits: [
                { spirit: 'aerial', count: 2 },
                { spirit: 'sacred', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_breeze',
            spirits: [
                { spirit: 'aerial', count: 3 },
                { spirit: 'arcane', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_strong_breeze',
            spirits: [
                { spirit: 'aerial', count: 6 },
                { spirit: 'arcane', count: 3 }
            ]
        },
        {
            registry_name: 'occultism:possessed_weak_breeze',
            spirits: [
                { spirit: 'aerial', count: 1 },
                { spirit: 'arcane', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_shulker',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'eldritch', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_weak_shulker',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'eldritch', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_elder_guardian',
            spirits: [
                { spirit: 'aqueous', count: 5 },
                { spirit: 'eldritch', count: 3 }
            ]
        },
        {
            registry_name: 'occultism:possessed_enderman',
            spirits: [
                { spirit: 'eldritch', count: 3 },
                { spirit: 'arcane', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_endermite',
            spirits: [{ spirit: 'eldritch', count: 1 }]
        },
        {
            registry_name: 'occultism:possessed_evoker',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'arcane', count: 2 },
                { spirit: 'eldritch', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:possessed_ghast',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 },
                { spirit: 'aqueous', count: 2 },
                { spirit: 'aerial', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_hoglin',
            spirits: [
                { spirit: 'infernal', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_phantom',
            spirits: [
                { spirit: 'arcane', count: 3 },
                { spirit: 'wicked', count: 3 },
                { spirit: 'aerial', count: 3 }
            ]
        },
        {
            registry_name: 'occultism:possessed_skeleton',
            spirits: [
                { spirit: 'arcane', count: 2 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:possessed_warden',
            spirits: [
                { spirit: 'eldritch', count: 6 },
                { spirit: 'wicked', count: 6 },
                { spirit: 'arcane', count: 6 },
                { spirit: 'earthen', count: 6 }
            ]
        },
        {
            registry_name: 'occultism:possessed_witch',
            spirits: [
                { spirit: 'wicked', count: 2 },
                { spirit: 'arcane', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:possessed_zombie_piglin',
            spirits: [
                { spirit: 'wicked', count: 2 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:wild_bogged',
            spirits: [
                { spirit: 'arcane', count: 2 },
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_cave_spider',
            spirits: [
                { spirit: 'aerial', count: 1 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_horde_creeper',
            spirits: [{ spirit: 'infernal', count: 3 }]
        },
        {
            registry_name: 'occultism:wild_horde_drowned',
            spirits: [
                { spirit: 'aqueous', count: 2 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_horde_husk',
            spirits: [
                { spirit: 'infernal', count: 1 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_horde_silverfish',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_hunt_skeleton',
            spirits: [
                { spirit: 'arcane', count: 3 },
                { spirit: 'wicked', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:wild_hunt_wither_skeleton',
            spirits: [
                { spirit: 'infernal', count: 3 },
                { spirit: 'wicked', count: 3 },
                { spirit: 'arcane', count: 3 }
            ]
        },
        {
            registry_name: 'occultism:wild_husk',
            spirits: [
                { spirit: 'infernal', count: 1 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_silverfish',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_skeleton',
            spirits: [
                { spirit: 'arcane', count: 2 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_slime',
            spirits: [
                { spirit: 'aqueous', count: 1 },
                { spirit: 'arcane', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_spider',
            spirits: [
                { spirit: 'aerial', count: 2 },
                { spirit: 'wicked', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_stray',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'wicked', count: 1 },
                { spirit: 'aerial', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:wild_zombie',
            spirits: [
                { spirit: 'wicked', count: 1 },
                { spirit: 'earthen', count: 1 }
            ]
        },
        {
            registry_name: 'occultism:mercy_goat',
            spirits: [{ spirit: 'sacred', count: 10 }]
        },
        {
            registry_name: 'occultism:otherworld_bird',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:greedy_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:bat_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:deer_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:cthulhu_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'aqueous', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:devil_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:dragon_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:blacksmith_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:guardian_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:headless_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:chimera_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:goat_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:shub_niggurath_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:beholder_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'eldritch', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:fairy_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'sacred', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:mummy_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'infernal', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:beaver_familiar',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'earthen', count: 2 },
                { spirit: 'aqueous', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:parrot_familiar',
            spirits: [
                { spirit: 'sacred', count: 1 },
                { spirit: 'aerial', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:demonic_wife',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'eldritch', count: 2 }
            ]
        },
        {
            registry_name: 'occultism:demonic_husband',
            spirits: [
                { spirit: 'arcane', count: 1 },
                { spirit: 'eldritch', count: 2 }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.primary_type = recipe.spirits[0].spirit;

        event.json(`malum:spirit_data/entity/enigmatica/${recipe.registry_name.replace(':', '_')}`, recipe);
    });
});
