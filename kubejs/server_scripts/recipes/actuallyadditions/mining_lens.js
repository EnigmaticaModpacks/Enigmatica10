ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/mining_lens/';

    const recipes = [
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'occultism:silver_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}silver_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'occultism:silver_ore_deepslate', count: 1 },
            weight: 500,
            id: `${id_prefix}silver_ore_deepslate`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'evilcraft:dark_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}dark_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'evilcraft:dark_ore_deepslate', count: 1 },
            weight: 200,
            id: `${id_prefix}dark_ore_deepslate`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'irons_spellbooks:mithril_ore', count: 1 },
            weight: 100,
            id: `${id_prefix}mithril_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'irons_spellbooks:deepslate_mithril_ore', count: 1 },
            weight: 100,
            id: `${id_prefix}deepslate_mithril_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'mekanism:deepslate_fluorite_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}deepslate_fluorite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'mekanism:deepslate_osmium_ore', count: 1 },
            weight: 3000,
            id: `${id_prefix}deepslate_osmium_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'powah:deepslate_uraninite_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}deepslate_uraninite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'replication:deepslate_replica_ore', count: 1 },
            weight: 10,
            id: `${id_prefix}deepslate_replica_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'modern_industrialization:quartz_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}quartz_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'kubejs:deepslate_quartz_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}deepslate_quartz_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'modern_industrialization:iridium_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}iridium_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'modern_industrialization:bauxite_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}bauxite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_bauxite_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}deepslate_bauxite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_antimony_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}deepslate_antimony_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'rftoolsbase:dimensionalshard_overworld', count: 1 },
            weight: 10,
            id: `${id_prefix}dimensionalshard_overworld`
        },
        {
            ingredient: { tag: 'c:ore_bearing_ground/netherrack' },
            result: { id: 'rftoolsbase:dimensionalshard_nether', count: 1 },
            weight: 10,
            id: `${id_prefix}dimensionalshard_nether`
        },
        {
            ingredient: { tag: 'c:end_stones' },
            result: { id: 'rftoolsbase:dimensionalshard_end', count: 1 },
            weight: 10,
            id: `${id_prefix}dimensionalshard_end`
        },
        {
            ingredient: { tag: 'c:end_stones' },
            result: { id: 'bigreactors:anglesite_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}anglesite_ore`
        },
        {
            ingredient: { tag: 'c:ore_bearing_ground/netherrack' },
            result: { id: 'bigreactors:benitoite_ore', count: 1 },
            weight: 1000,
            id: `${id_prefix}benitoite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'modern_industrialization:platinum_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}platinum_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'oritech:deepslate_platinum_ore', count: 1 },
            weight: 200,
            id: `${id_prefix}deepslate_platinum_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_lead_ore', count: 1 },
            weight: 2000,
            id: `${id_prefix}deepslate_lead_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_lignite_coal_ore', count: 1 },
            weight: 1500,
            id: `${id_prefix}deepslate_lignite_coal_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_monazite_ore', count: 1 },
            weight: 100,
            id: `${id_prefix}deepslate_monazite_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_nickel_ore', count: 1 },
            weight: 2000,
            id: `${id_prefix}deepslate_nickel_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_salt_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}deepslate_salt_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_uranium_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}deepslate_uranium_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'modern_industrialization:tungsten_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}tungsten_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_tungsten_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}deepslate_tungsten_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:stone_ore_replaceables' },
            result: { id: 'modern_industrialization:titanium_ore', count: 1 },
            weight: 500,
            id: `${id_prefix}titanium_ore`
        },
        {
            ingredient: { tag: 'actuallyadditions:deepslate_ore_replaceables' },
            result: { id: 'modern_industrialization:deepslate_tin_ore', count: 1 },
            weight: 2000,
            id: `${id_prefix}deepslate_tin_ore`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:mining_lens';
        event.custom(recipe).id(recipe.id);
    });
});
