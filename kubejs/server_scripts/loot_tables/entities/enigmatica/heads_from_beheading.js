// // https://docs.almostreliable.com/lootjs/

LootJS.lootTables((event) => {
    const recipes = [
        { table: 'minecraft:entities/wither_skeleton', head: 'minecraft:wither_skeleton_skull' },
        { table: 'minecraft:entities/creeper', head: 'minecraft:creeper_head' },
        { table: 'minecraft:entities/ender_dragon', head: 'minecraft:dragon_head' },
        { table: 'minecraft:entities/piglin', head: 'minecraft:piglin_head' },
        { table: 'minecraft:entities/piglin_brute', head: 'minecraft:piglin_head' },
        { table: 'minecraft:entities/skeleton', head: 'minecraft:skeleton_skull' },
        { table: 'minecraft:entities/zombie', head: 'minecraft:zombie_head' },
        { table: 'minecraft:entities/enderman', head: 'enderio:enderman_head' }
    ];

    recipes.forEach((recipe) => {
        event.getLootTable(recipe.table).modifyEntry((entry) => {
            if (entry.isItem() && entry.item.id === recipe.head) {
                entry.matchMainHand(ItemFilter.tag('enigmatica:beheading').negate());
            }
            return entry;
        });

        event.getLootTable(recipe.table).createPool((pool) => {
            pool.addEntry(LootEntry.of(recipe.head).matchMainHand('#enigmatica:beheading').setCount(1));
        });
    });
});
