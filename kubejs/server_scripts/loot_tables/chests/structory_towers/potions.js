// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable(`structory_towers:potions`)
        .firstPool()
        .removeItem('minecraft:potion')
        .removeItem('minecraft:splash_potion')
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_regeneration').withWeight(1000))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_recovery').withWeight(1000))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_shielding').withWeight(700))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_spell_damage').withWeight(700))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_mana_regen').withWeight(700))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_strength').withWeight(1000))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('kubejs:greater_resistance').withWeight(700))
        .addEntry(LootEntry.of('minecraft:potion').addPotion('apothic_attributes:extra_long_flying').withWeight(1500))
        .addEntry(LootEntry.of('minecraft:splash_potion').addPotion('kubejs:greater_instant_damage').withWeight(1000))

        .addEntry(LootEntry.of('minecraft:potion').addPotion('minecraft:long_swiftness').withWeight(1000))

        .addEntry(
            LootEntry.of(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time[ars_nouveau:multi_potion={charges:8,contents:{custom_effects:[{amplifier:3b,duration:3600,id:"ars_nouveau:mana_regen","neoforge:cures":["milk","protected_by_totem"],show_icon:1b}],potion:"kubejs:greater_spell_damage"},maxUses:8}]'
                )
            ).withWeight(700)
        )
        .addEntry(
            LootEntry.of(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time[ars_nouveau:multi_potion={charges:8,contents:{custom_effects:[{amplifier:3b,duration:3600,id:"minecraft:strength","neoforge:cures":["milk","protected_by_totem"],show_icon:1b}],potion:"kubejs:greater_resistance"},maxUses:8}]'
                )
            ).withWeight(700)
        )
        .addEntry(
            LootEntry.of(
                Item.of(
                    'ars_nouveau:potion_flask_extend_time[ars_nouveau:multi_potion={charges:8,contents:{custom_effects:[{amplifier:3b,duration:3600,id:"ars_nouveau:shielding","neoforge:cures":["milk","protected_by_totem"],show_icon:1b}],potion:"kubejs:greater_recovery"},maxUses:8}]'
                )
            ).withWeight(700)
        );
});
