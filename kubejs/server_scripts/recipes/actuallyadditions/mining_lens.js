ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/mining_lens/';

    const recipes = [
        {
            ingredient: { tag: 'c:stones' },
            result: { id: 'occultism:silver_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}silver_ore`
        },
        {
            ingredient: { item: 'minecraft:deepslate' },
            result: { id: 'occultism:silver_ore_deepslate', count: 1 },
            weight: 500,
            id: `${id_prefix}silver_ore_deepslate`
        },
        {
            ingredient: { tag: 'c:stones' },
            result: { id: 'evilcraft:dark_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}dark_ore`
        },
        {
            ingredient: { item: 'minecraft:deepslate' },
            result: { id: 'evilcraft:dark_ore_deepslate', count: 1 },
            weight: 200,
            id: `${id_prefix}dark_ore_deepslate`
        },
        {
            ingredient: { tag: 'c:stones' },
            result: { id: 'irons_spellbooks:mithril_ore', count: 1 },
            weight: 100,
            id: `${id_prefix}mithril_ore`
        },
        {
            ingredient: { item: 'minecraft:deepslate' },
            result: { id: 'irons_spellbooks:deepslate_mithril_ore', count: 1 },
            weight: 100,
            id: `${id_prefix}deepslate_mithril_ore`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:mining_lens';
        event.custom(recipe).id(recipe.id);
    });
});
