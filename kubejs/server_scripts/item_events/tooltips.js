ItemEvents.modifyTooltips((event) => {
    // https://kubejs.com/wiki/events/ItemEvents/modifyTooltips
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: [
                'minecraft:reinforced_deepslate',
                'modularrouters:blast_upgrade',
                'enderio:reinforced_obsidian_block'
            ],
            text: [Text.of('Wither Immune').lightPurple()]
        },
        {
            items: [
                'naturesaura:animal_generator',
                'naturesaura:projectile_generator',
                'naturesaura:chorus_generator',
                'naturesaura:oak_generator',
                'naturesaura:slime_split_generator',
                'naturesaura:firework_generator',
                'naturesaura:moss_generator',
                'naturesaura:flower_generator',
                'naturesaura:potion_generator'
            ],
            text: [Text.of(`Aura Generator`).green()]
        },
        {
            items: ['naturesaura:snow_creator'],
            text: [Text.of(`Snow and Ice Maker`).green()]
        },
        {
            items: ['naturesaura:light_staff', 'ars_nouveau:jar_of_light'],
            text: [Text.of(`Creates Light Sources`).gold()]
        },
        {
            items: ['naturesaura:cave_finder'],
            text: [Text.of(`Highlights Nearby Dark Areas`).gold()]
        },
        {
            items: ['naturesaura:loot_finder'],
            text: [Text.of(`Highlights Nearby Inventories`).gold()]
        },
        {
            items: ['naturesaura:netherite_finder'],
            text: [Text.of(`Highlights Nearby Netherite`).gold()]
        },
        {
            items: ['naturesaura:death_ring'],
            text: [Text.of(`Prevents Death`).gold()]
        },
        {
            items: ['naturesaura:shockwave_creator'],
            text: [Text.of(`Knocks Foes Back`).gold()]
        },
        {
            items: ['naturesaura:fortress_finder'],
            text: [Text.of(`Locates Nether Fortresses`).gold()]
        },
        {
            items: ['naturesaura:end_city_finder'],
            text: [Text.of(`Locates End Cities`).gold()]
        },
        {
            items: ['naturesaura:outpost_finder'],
            text: [Text.of(`Locates Pillager Outposts`).gold()]
        },
        {
            items: ['minecraft:ender_eye'],
            text: [Text.of(`Locates Strongholds`).gold()]
        },
        {
            items: ['naturesaura:aura_timer'],
            text: [Text.of(`Timer`).green()]
        },
        {
            items: ['naturesaura:animal_container'],
            text: [Text.of(`Invisible Fence`).green()]
        },
        {
            items: ['naturesaura:field_creator'],
            text: [Text.of(`Block Breaker`).green()]
        },
        {
            items: ['naturesaura:placer'],
            text: [Text.of(`Block Placer`).green()]
        },
        {
            items: ['naturesaura:grated_chute'],
            text: [Text.of(`Filtered Hopper`).green()]
        },
        {
            items: ['naturesaura:hopper_upgrade'],
            text: [Text.of(`Item Collector`).green()]
        },
        {
            items: ['naturesaura:spawn_lamp', 'ars_nouveau:ritual_sanctuary'],
            text: [Text.of(`Prevents Mob Spawns`).green()]
        },
        {
            items: ['naturesaura:rf_converter'],
            text: [Text.of(`Generates FE From Aura`).red()]
        },
        {
            items: ['naturesaura:lower_limiter'],
            text: [Text.of(`Prevents Negative Aura Drain`).green()]
        },
        {
            items: ['naturesaura:spring', 'ars_elemental:everfull_urn', 'evilcraft:eternal_water'],
            text: [Text.of(`Endless Water Source`).green()]
        },
        {
            items: ['naturesaura:aura_detector'],
            text: [Text.of(`Detects Aura Levels`).green()]
        },
        {
            items: ['naturesaura:pickup_stopper'],
            text: [Text.of(`Anti-Magnet`).green()]
        },
        {
            items: ['naturesaura:weather_changer'],
            text: [Text.of(`Weather Manipulator`).green()]
        },
        {
            items: ['naturesaura:time_changer'],
            text: [Text.of(`Time Manipulator`).green()]
        },
        {
            items: ['naturesaura:furnace_heater'],
            text: [Text.of(`Aura Powered Furnace`).green()]
        },
        {
            items: ['naturesaura:blast_furnace_booster'],
            text: [Text.of(`Ore Processing`).green()]
        },
        {
            items: ['naturesaura:range_visualizer'],
            text: [Text.of(`Arcane Instrument: Visualizes Apparatus Effect Area`).green()]
        },
        {
            items: [
                'naturesaura:ender_crate',
                'naturesaura:ender_access',
                'minecraft:ender_chest',
                'functionalstorage:ender_drawer',
                'occultism:stable_wormhole',
                'occultism:storage_controller',
                'mekanism:qio_dashboard',
                'mekanism:qio_drive_array',
                'mekanism:portable_qio_dashboard',
                'occultism:storage_remote',
                'enderstorage:ender_pouch',
                'enderstorage:ender_chest',
                'enderstorage:ender_tank'
            ],
            text: [Text.of(`Cross-Dimensional Storage`).darkPurple()]
        },
        {
            items: [
                'mekanism:quantum_entangloporter',
                'mekanism:qio_redstone_adapter',
                'mekanism:qio_exporter',
                'mekanism:qio_importer',
                'ae2:quantum_link',
                'ae2:quantum_ring',
                'laserio:laser_connector_advanced',
                'modularrouters:sender_module_3',
                'powah:ender_cell_starter',
                'powah:ender_cell_basic',
                'powah:ender_cell_hardened',
                'powah:ender_cell_blazing',
                'powah:ender_cell_niotic',
                'powah:ender_cell_spirited',
                'powah:ender_cell_nitro',
                'powah:ender_gate_starter',
                'powah:ender_gate_basic',
                'powah:ender_gate_hardened',
                'powah:ender_gate_blazing',
                'powah:ender_gate_niotic',
                'powah:ender_gate_spirited',
                'powah:ender_gate_nitro'
            ],
            text: [Text.of(`Cross-Dimensional Logistics`).darkPurple()]
        },
        {
            items: ['ars_nouveau:enchanters_mirror'],
            text: [Text.of(`Arcane Focus: Self`).gold()]
        },
        {
            items: ['ars_elemental:spell_horn'],
            text: [Text.of(`Arcane Focus: Area`).gold()]
        },
        {
            items: ['ars_nouveau:wand'],
            text: [Text.of(`Arcane Focus: Projectile`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_sword'],
            text: [Text.of(`Arcane Focus: Touch`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_shield'],
            text: [Text.of(`Arcane Instrument: Blocked Attacks Boost Spell Damage and Mana Regen`).lightPurple()]
        },
        {
            items: ['ars_nouveau:splash_flask_cannon'],
            text: [Text.of(`Arcane Instrument: Converts Potions to Splash Potions`).lightPurple()]
        },
        {
            items: ['ars_nouveau:lingering_flask_cannon'],
            text: [Text.of(`Arcane Instrument: Converts Potions to Lingering Potions`).lightPurple()]
        },
        {
            items: ['ars_nouveau:void_jar'],
            text: [Text.of(`Arcane Instrument: Converts Items to Source`).lightPurple()]
        },
        {
            items: ['ars_nouveau:potion_diffuser'],
            text: [Text.of(`Applies Potions in the Area`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [Text.of(`Arcane Instrument: Allows the Wearer to Hover`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_unstable_gifts'],
            text: [Text.of(`Arcane Instrument: Grants Random Potion Effects`).lightPurple()]
        },
        {
            items: ['ars_nouveau:ring_of_lesser_discount', 'ars_nouveau:ring_of_greater_discount'],
            text: [Text.of(`Arcane Instrument: Reduces Spell Cost`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_boost'],
            text: [Text.of(`Arcane Instrument: Increases Personal Mana Pool`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_regen'],
            text: [Text.of(`Arcane Instrument: Increases Personal Mana Regen Rate`).lightPurple()]
        },
        {
            items: [
                'ars_nouveau:wixie_cauldron',
                'ars_nouveau:wixie_charm',
                'mekanism:crafting_formula',
                'mekanism:formulaic_assemblicator',
                'naturesaura:auto_crafter'
            ],
            text: [Text.of(`Auto-crafter`).green()]
        },
        {
            items: ['functionalstorage:armory_cabinet'],
            text: [Text.of(`Bulk Unstackable Storage`).green()]
        },
        {
            items: ['irons_spellbooks:emerald_stoneplate_ring'],
            text: [Text.of(`Slain creatures drop +25% experience`).gold()]
        },
        {
            items: ['irons_spellbooks:fireward_ring'],
            text: [Text.of(`Grants fire immunity`).gold()]
        },
        {
            items: ['irons_spellbooks:frostward_ring'],
            text: [Text.of(`Grants freezing immunity`).gold()]
        },
        {
            items: ['irons_spellbooks:poisonward_ring'],
            text: [Text.of(`Grants poison immunity`).gold()]
        },
        {
            items: ['irons_spellbooks:concentration_amulet'],
            text: [Text.of(`Long Casts become uninterruptible`).gold()]
        },
        {
            items: ['irons_spellbooks:expulsion_ring'],
            text: [Text.of(`When attacked, emit an expulsive burst of air`).gold()]
        },
        {
            items: ['occultism:chalk_light_gray', 'occultism:chalk_gray', 'occultism:chalk_black'],
            text: [Text.of(`May replace White Chalk in any pentacle`).gold()]
        },
        {
            items: ['occultism:chalk_pink', 'occultism:chalk_magenta'],
            text: [Text.of(`May replace Purple Chalk in any pentacle`).gold()]
        },
        {
            items: ['occultism:chalk_green', 'occultism:chalk_lime'],
            text: [Text.of(`May replace Yellow Chalk in any pentacle`).gold()]
        },
        {
            items: ['occultism:chalk_light_blue', 'occultism:chalk_cyan'],
            text: [Text.of(`May replace Blue or Red Chalk in any pentacle`).gold()]
        },
        {
            items: ['occultism:chalk_blue', 'occultism:chalk_orange', 'occultism:chalk_brown'],
            text: [Text.of(`May replace Red Chalk in any pentacle`).gold()]
        },
        {
            items: ['occultism:chalk_rainbow'],
            text: [Text.of(`May replace any Color Chalk in any pentacle`).gold()]
        },
        {
            items: ['occultism:chalk_void'],
            text: [Text.of(`May replace any Chalk in any pentacle`).gold()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
    emi.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
