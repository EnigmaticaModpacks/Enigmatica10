ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/smelting/';
    const recipes = [
        {
            input: '#c:raw_materials/mithril',
            output: 'irons_spellbooks:mithril_scrap',
            xp: 0.5,
            id: `${id_prefix}mithril_scrap`
        },
        {
            input: '#c:dusts/platinum',
            output: AlmostUnified.getTagTargetItem(`c:ingots/platinum`).getId(),
            xp: 0.5,
            id: `${id_prefix}platinum`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
