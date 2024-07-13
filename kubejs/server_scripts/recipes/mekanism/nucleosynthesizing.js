ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:mekanism/nucleosynthesizing/';

    const recipes = [];

    let smithing_templates = [
        { input: 'minecraft:netherrack', output: 'minecraft:netherite_upgrade_smithing_template' },
        { input: 'minecraft:nether_bricks', output: 'minecraft:rib_armor_trim_smithing_template' },
        { input: 'minecraft:blackstone', output: 'minecraft:snout_armor_trim_smithing_template' },
        { input: 'minecraft:prismarine', output: 'minecraft:tide_armor_trim_smithing_template' },
        { input: 'minecraft:smooth_stone', output: 'minecraft:sentry_armor_trim_smithing_template' },
        { input: 'minecraft:cracked_stone_bricks', output: 'minecraft:vex_armor_trim_smithing_template' },
        { input: 'minecraft:mossy_cobblestone', output: 'minecraft:wild_armor_trim_smithing_template' },
        { input: 'minecraft:cobblestone', output: 'minecraft:coast_armor_trim_smithing_template' },
        { input: 'minecraft:sandstone', output: 'minecraft:dune_armor_trim_smithing_template' },
        { input: 'minecraft:end_stone', output: 'minecraft:eye_armor_trim_smithing_template' },
        { input: 'minecraft:terracotta', output: 'minecraft:raiser_armor_trim_smithing_template' },
        { input: 'minecraft:black_terracotta', output: 'minecraft:shaper_armor_trim_smithing_template' },
        { input: 'minecraft:brown_terracotta', output: 'minecraft:host_armor_trim_smithing_template' },
        { input: 'minecraft:gray_terracotta', output: 'minecraft:wayfinder_armor_trim_smithing_template' },
        { input: 'minecraft:chiseled_deepslate', output: 'minecraft:silence_armor_trim_smithing_template' },
        { input: 'minecraft:deepslate_bricks', output: 'minecraft:ward_armor_trim_smithing_template' },
        { input: 'minecraft:purpur_block', output: 'minecraft:spire_armor_trim_smithing_template' }
    ];

    smithing_templates.forEach((template) => {
        recipes.push({
            item_input: { count: 1, item: template.input },
            output: { count: 1, id: template.output },
            gas_input: { amount: 5, gas: 'mekanism:antimatter' },
            duration: 1250,
            id: `${id_prefix}${template.output.replace(':', '_')}`
        });
    });
    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
