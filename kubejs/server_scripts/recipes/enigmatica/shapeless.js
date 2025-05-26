ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#c:dyes/green', '#c:dyes/red'],
            id: `${id_prefix}brown_dye_from_green_red`
        },
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#c:dyes/blue', '#c:dyes/red', '#c:dyes/yellow'],
            id: `${id_prefix}brown_dye_from_blue_red_yellow`
        },
        {
            output: '2x minecraft:green_dye',
            inputs: ['#c:dyes/blue', '#c:dyes/yellow'],
            id: `${id_prefix}green_dye_from_blue_yellow`
        },
        {
            output: 'minecraft:green_dye',
            inputs: [
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass'
            ],
            id: `${id_prefix}green_dye_from_short_grass`
        },
        {
            output: '2x minecraft:yellow_dye',
            inputs: ['#c:dusts/sulfur', '#c:dusts/sulfur'],
            id: `${id_prefix}yellow_dye_from_sulfur`
        },
        {
            output: 'minecraft:yellow_dye',
            inputs: ['productivetrees:fustic'],
            id: `${id_prefix}yellow_dye_from_fustic`
        },
        {
            output: 'minecraft:yellow_dye',
            inputs: ['minecraft:glow_berries'],
            id: `${id_prefix}yellow_dye_from_glow_berries`
        },
        {
            output: 'minecraft:red_dye',
            inputs: ['productivetrees:dracaena_sap'],
            id: `${id_prefix}red_dye_from_dracaena_sap`
        },
        {
            output: 'minecraft:reinforced_deepslate',
            inputs: [
                'minecraft:polished_deepslate',
                '#c:ingots/iron',
                '#c:ingots/iron',
                '#c:ingots/iron',
                '#c:ingots/iron'
            ],
            id: `${id_prefix}reinforced_deepslate`
        },
        {
            output: '2x minecraft:name_tag',
            inputs: ['#c:strings', 'minecraft:paper'],
            id: `${id_prefix}name_tag`
        },
        {
            output: 'minecraft:dead_bush',
            inputs: ['#minecraft:saplings', 'minecraft:shears'],
            damage: { item: 'minecraft:shears', amount: 1 },
            id: `${id_prefix}dead_bush`
        },
        {
            output: '4x minecraft:quartz',
            inputs: ['#c:storage_blocks/quartz'],
            id: `${id_prefix}quartz`
        },
        {
            output: '4x minecraft:amethyst_shard',
            inputs: ['#c:storage_blocks/amethyst'],
            id: `${id_prefix}amethyst_shard`
        }
    ];

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                output: `create:waxed_${oxide}${type}`,
                inputs: [`create:${oxide}${type}`, 'modern_industrialization:wax'],
                id: `${id_prefix}${oxide}${type}`
            });
        });
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
