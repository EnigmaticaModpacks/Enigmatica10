ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/nucleosynthesizing/';

    const recipes = [
        {
            item_input: { count: 1, item: 'minecraft:netherrack' },
            output: { count: 1, id: 'minecraft:netherite_upgrade_smithing_template' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}netherite_upgrade_smithing_template`
        },
        {
            item_input: { count: 1, item: 'modern_industrialization:analog_circuit_board' },
            output: { count: 4, id: 'modern_industrialization:basic_upgrade' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}basic_upgrade`
        },
        {
            item_input: { count: 1, item: 'modern_industrialization:digital_circuit_board' },
            output: { count: 4, id: 'modern_industrialization:turbo_upgrade' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}turbo_upgrade`
        },
        {
            item_input: { count: 1, item: 'modern_industrialization:electronic_circuit_board' },
            output: { count: 4, id: 'modern_industrialization:advanced_upgrade' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}advanced_upgrade`
        },
        {
            item_input: { count: 1, item: 'modern_industrialization:processing_unit_board' },
            output: { count: 4, id: 'modern_industrialization:highly_advanced_upgrade' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}highly_advanced_upgrade`
        },
        {
            item_input: { count: 1, tag: 'c:ingots/silver' },
            output: { count: 1, id: 'occultism:iesnium_ingot' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}iesnium_ingot`
        },
        {
            item_input: { count: 9, tag: 'c:ingots/uraninite' },
            output: { count: 1, id: 'aquaculture:neptunium_ingot' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}neptunium_ingot`
        },
        {
            item_input: { count: 1, tag: 'c:ingots/iron' },
            output: { count: 1, id: 'modern_industrialization:tungsten_ingot' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}tungsten_ingot`
        },
        {
            item_input: { count: 1, tag: 'c:ingots/copper' },
            output: { count: 1, id: 'modern_industrialization:superconductor_ingot' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}superconductor_ingot`
        },
        {
            item_input: { count: 1, tag: 'c:ingots/osmium' },
            output: { count: 1, id: 'modern_industrialization:iridium_ingot' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}iridium_ingot`
        },
        {
            item_input: { count: 1, tag: 'c:ingots/iridium' },
            output: { count: 1, id: 'modern_industrialization:platinum_ingot' },
            chemical_input: { amount: 1, chemical: 'mekanism:antimatter' },
            duration: 250,
            per_tick_usage: false,
            id: `${id_prefix}platinum_ingot`
        }
    ];

    let smithing_templates = {
        rib: { input: 'minecraft:nether_bricks' },
        snout: { input: 'minecraft:blackstone' },
        tide: { input: 'minecraft:prismarine' },
        sentry: { input: 'minecraft:smooth_stone' },
        vex: { input: 'minecraft:cracked_stone_bricks' },
        wild: { input: 'minecraft:mossy_cobblestone' },
        coast: { input: 'minecraft:cobblestone' },
        dune: { input: 'minecraft:sandstone' },
        eye: { input: 'minecraft:end_stone' },
        raiser: { input: 'minecraft:terracotta' },
        shaper: { input: 'minecraft:black_terracotta' },
        host: { input: 'minecraft:brown_terracotta' },
        wayfinder: { input: 'minecraft:gray_terracotta' },
        silence: { input: 'minecraft:chiseled_deepslate' },
        ward: { input: 'minecraft:deepslate_bricks' },
        spire: { input: 'minecraft:purpur_block' }
    };

    Object.keys(smithing_templates).forEach((type) => {
        let input = smithing_templates[type].input;
        let output = `minecraft:${type}_armor_trim_smithing_template`;

        recipes.push({
            item_input: { count: 1, item: input },
            output: { count: 1, id: output },
            chemical_input: { amount: 5, chemical: 'mekanism:antimatter' },
            duration: 1250,
            per_tick_usage: false,
            id: `${id_prefix}${output.replace(':', '_')}`
        });
    });
    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
