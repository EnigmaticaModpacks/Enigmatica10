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
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
    emi.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
