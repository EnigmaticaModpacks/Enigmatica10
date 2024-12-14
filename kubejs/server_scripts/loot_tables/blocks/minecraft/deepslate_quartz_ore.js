// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('kubejs:blocks/deepslate_quartz_ore')
        .clear()
        .firstPool()
        .addEntry(
            LootEntry.alternative(
                LootEntry.of('kubejs:deepslate_quartz_ore').matchTool(
                    ItemFilter.tag('c:tools').and(ItemFilter.hasEnchantment('minecraft:silk_touch', 1))
                ),
                LootEntry.of('minecraft:quartz').applyOreBonus('minecraft:fortune')
            )
        );
});
