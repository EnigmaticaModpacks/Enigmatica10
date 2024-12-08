ServerEvents.recipes((event) => {
    // multiply values: 'none', 'multiply_output', 'chance_only'

    const id_prefix = 'enigmatica:simple_crushing/';
    const recipes = [
        {
            input: { tag: `c:gems/certus_quartz` },
            outputs: [{ id: 'ae2:certus_quartz_dust', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'certus_quartz_dust_from_certus_quartz'
        },
        {
            input: { tag: `c:gems/fluix` },
            outputs: [{ id: 'ae2:fluix_dust', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'fluix_dust_from_fluix'
        },
        {
            input: { tag: `c:gems/lignite_coal` },
            outputs: [{ id: 'modern_industrialization:lignite_coal_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'lignite_coal_dust_from_lignite_coal'
        },
        {
            input: { item: 'minecraft:ender_pearl' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/ender_pearl`).getId(), count: 9 }],
            multiply: 'none',
            exclusions: ['oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'ender_pearl_dust_from_ender_pearl'
        },
        {
            input: { item: 'ae2:sky_stone_block' },
            outputs: [{ id: 'ae2:sky_dust', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'sky_stone_dust_from_sky_stone_block'
        },
        {
            input: { tag: 'c:obsidians' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/obsidian`).getId(), count: 4 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'obsidian_dust_from_obsidian'
        },
        {
            input: { item: 'advanced_ae:shattered_singularity' },
            outputs: [{ id: 'advanced_ae:quantum_infused_dust', count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'quantum_infused_dust_from_shattered_singularity'
        },
        {
            input: { tag: 'c:ingots/adamant' },
            outputs: [{ id: 'oritech:adamant_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'adamant_dust_from_adamant'
        },
        {
            input: { tag: 'c:ingots/biosteel' },
            outputs: [{ id: 'oritech:biosteel_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'biosteel_dust_from_biosteel'
        },
        {
            input: { tag: 'c:ingots/duratium' },
            outputs: [{ id: 'oritech:duratium_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'duratium_dust_from_duratium'
        },
        {
            input: { tag: 'c:ingots/energite' },
            outputs: [{ id: 'oritech:energite_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'energite_dust_from_energite'
        },
        {
            input: { tag: 'c:gems/coal' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/coal`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization', 'oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'coal_dust_from_coal'
        },
        {
            input: { tag: 'c:gems/charcoal' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/charcoal`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'charcoal_dust_from_charcoal'
        },
        {
            input: { tag: 'c:gems/diamond' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/diamond`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: { cost: 2, duration: 40 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'diamond_dust_from_diamond'
        },
        {
            input: { tag: 'c:gems/emerald' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/emerald`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: { cost: 2, duration: 40 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'emerald_dust_from_emerald'
        },
        {
            input: { tag: 'c:gems/lapis' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/lapis`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'lapis_dust_from_lapis'
        },
        {
            input: { tag: 'c:gems/fluorite' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/fluorite`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'fluorite_dust_from_fluorite'
        },
        {
            input: { tag: 'c:gems/quartz' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/quartz`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization', 'oritech:pulverizer', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'quartz_dust_from_quartz'
        },
        {
            input: { tag: 'c:rods/breeze' },
            outputs: [{ id: 'minecraft:wind_charge', count: 6 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'wind_charge_from_breeze_rod'
        },
        {
            input: { tag: 'c:rods/blaze' },
            outputs: [{ id: 'minecraft:blaze_powder', count: 4 }],
            multiply: 'none',
            exclusions: ['modern_industrialization', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'blaze_powder_from_blaze_rod'
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            outputs: [{ id: 'minecraft:blaze_powder', count: 6 }],
            multiply: 'none',
            exclusions: [],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'blaze_powder_from_blaze_ember'
        },
        {
            input: { tag: 'minecraft:logs' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/wood`).getId(), count: 12 }],
            multiply: 'none',
            exclusions: ['modern_industrialization', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'sawdust_from_logs'
        },
        {
            input: { tag: 'c:rods/wooden' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/wood`).getId(), count: 1 }],
            multiply: 'none',
            exclusions: ['modern_industrialization', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'sawdust_from_sticks'
        },
        {
            input: { tag: 'minecraft:planks' },
            outputs: [{ id: AlmostUnified.getTagTargetItem(`c:dusts/wood`).getId(), count: 3 }],
            multiply: 'none',
            exclusions: ['modern_industrialization', 'oritech:grinder'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 300, grinder: 200 } },
            id_suffix: 'sawdust_from_planks'
        },
        {
            input: { item: 'minecraft:prismarine' },
            outputs: [{ id: 'minecraft:prismarine_shard', count: 4 }],
            multiply: 'none',
            exclusions: ['mekanism', 'occultism'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 200, grinder: 100 } },
            id_suffix: 'prismarine_shard_from_prismarine'
        },
        {
            input: { item: 'minecraft:prismarine_bricks' },
            outputs: [{ id: 'minecraft:prismarine_shard', count: 9 }],
            multiply: 'none',
            exclusions: ['mekanism', 'occultism'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 200, grinder: 100 } },
            id_suffix: 'prismarine_shard_from_prismarine_bricks'
        },
        {
            input: { item: 'minecraft:dark_prismarine' },
            outputs: [
                { id: 'minecraft:prismarine_shard', count: 8 },
                { id: 'minecraft:black_dye', count: 1 }
            ],
            multiply: 'none',
            exclusions: ['mekanism', 'occultism'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 200, grinder: 100 } },
            id_suffix: 'prismarine_shard_from_dark_prismarine'
        },
        {
            input: { item: 'minecraft:sea_lantern' },
            outputs: [
                { id: 'minecraft:prismarine_shard', count: 4 },
                { id: 'minecraft:prismarine_crystals', count: 5 }
            ],
            multiply: 'none',
            exclusions: ['mekanism', 'occultism'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 200, grinder: 100 } },
            id_suffix: 'prismarine_from_sea_lantern'
        },
        {
            input: { item: 'minecraft:glow_berries' },
            outputs: [{ id: 'minecraft:glowstone_dust', count: 1 }],
            multiply: 'none',
            exclusions: ['mekanism', 'oritech:pulverizer'],
            fe: 2400,
            eu: { cost: 2, duration: 5 },
            ori: { time: { pulverizer: 200, grinder: 100 } },
            id_suffix: 'glowstone_dust_from_glow_berries'
        }
    ];

    recipes.forEach((recipe) => {
        // Actually Additions
        if (!recipe.exclusions.includes('actuallyadditions')) {
            let r = {
                type: 'actuallyadditions:crushing',
                ingredient: recipe.input,
                result: [{ result: recipe.outputs[0] }]
            };
            if (recipe.outputs[1]) {
                r.result.push({ result: recipe.outputs[1] });
            }
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }
        // Ars Nouveau
        if (!recipe.exclusions.includes('ars_nouveau')) {
            let r = {
                type: 'ars_nouveau:crush',
                input: recipe.input,
                output: [{ stack: recipe.outputs[0], chance: 1.0, maxRange: 1 }]
            };
            if (recipe.outputs[1]) {
                r.output.push({ stack: recipe.outputs[1], chance: 1.0, maxRange: 1 });
            }
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }
        // EnderIO
        if (!recipe.exclusions.includes('enderio')) {
            let r = {
                type: 'enderio:sag_milling',
                input: recipe.input,
                outputs: [{ item: recipe.outputs[0] }],
                multiply: 'none',
                bonus: recipe.multiply,
                energy: recipe.fe
            };
            if (recipe.outputs[1]) {
                r.outputs.push({ item: recipe.outputs[1] });
            }
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Mekanism
        if (!recipe.exclusions.includes('mekanism')) {
            let r = {
                type: 'mekanism:crushing',
                input: recipe.input,
                output: recipe.outputs[0]
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Modern Industrialization
        if (!recipe.exclusions.includes('modern_industrialization')) {
            let r = {
                type: 'modern_industrialization:macerator',
                item_inputs: recipe.input,
                item_outputs: [{ item: recipe.outputs[0].id, amount: recipe.outputs[0].count }],
                eu: recipe.eu.cost,
                duration: recipe.eu.duration * 20
            };
            if (recipe.outputs[1]) {
                r.item_outputs.push({ item: recipe.outputs[1].id, amount: recipe.outputs[1].count });
            }
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Occultism
        if (!recipe.exclusions.includes('occultism')) {
            let r = {
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: { type: 'occultism:item', id: recipe.outputs[0].id, count: recipe.outputs[0].count },
                ignore_crushing_multiplier: recipe.multiply == 'none' ? true : false
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Oritech Pulverizer
        if (!recipe.exclusions.includes('oritech:pulverizer')) {
            let r = {
                type: 'oritech:pulverizer',
                ingredients: [recipe.input],
                results: recipe.outputs,
                fluidInputVariant: 'minecraft:empty',
                fluidInputAmount: 0,
                fluidOutputVariant: 'minecraft:empty',
                fluidOutputAmount: 0,
                time: recipe.ori.time.pulverizer
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Oritech Grinder
        if (!recipe.exclusions.includes('oritech:grinder')) {
            let r = {
                type: 'oritech:grinder',
                ingredients: [recipe.input],
                results: recipe.outputs,
                fluidInputVariant: 'minecraft:empty',
                fluidInputAmount: 0,
                fluidOutputVariant: 'minecraft:empty',
                fluidOutputAmount: 0,
                time: recipe.ori.time.grinder
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }
    });
});
