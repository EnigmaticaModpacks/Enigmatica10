// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event
        .getLootTable('modern_industrialization:blocks/deepslate_bauxite_ore')
        .clear()
        .firstPool()
        .addEntry(
            LootEntry.alternative(
                LootEntry.of('modern_industrialization:deepslate_bauxite_ore').matchTool(
                    ItemFilter.tag('c:tools').and(ItemFilter.hasEnchantment('minecraft:silk_touch', 1))
                ),
                LootEntry.of('immersiveengineering:raw_aluminum').applyOreBonus('minecraft:fortune')
            )
        );
});
