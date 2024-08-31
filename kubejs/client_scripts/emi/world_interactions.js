ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Adding-Recipes#adding-info-recipes

    const descriptions = [
        {
            left: 'item:justdirethings:raw_coal_t1_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t1',
                amount: 3
            },
            id: 'justdirethings:coal_t1'
        },
        {
            left: 'item:justdirethings:raw_coal_t2_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t2',
                amount: 3
            },
            id: 'justdirethings:coal_t2'
        },
        {
            left: 'item:justdirethings:raw_coal_t3_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t3',
                amount: 3
            },
            id: 'justdirethings:coal_t3'
        },
        {
            left: 'item:justdirethings:raw_coal_t4_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t4',
                amount: 3
            },
            id: 'justdirethings:coal_t4'
        },
        {
            left: 'item:justdirethings:raw_ferricore_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_ferricore',
                amount: 3
            },
            id: 'justdirethings:raw_ferricore'
        },
        {
            left: 'item:justdirethings:raw_blazegold_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_blazegold',
                amount: 3
            },
            id: 'justdirethings:raw_blazegold'
        },
        {
            left: 'item:justdirethings:raw_celestigem_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:celestigem',
                amount: 3
            },
            id: 'justdirethings:celestigem'
        },
        {
            left: 'item:justdirethings:raw_eclipsealloy_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_eclipsealloy',
                amount: 3
            },
            id: 'justdirethings:raw_eclipsealloy'
        },
        {
            left: 'item:minecraft:cauldron',
            right: 'item:ars_nouveau:wixie_charm',
            output: {
                type: 'item',
                id: 'ars_nouveau:wixie_cauldron',
                amount: 1
            },
            id: 'ars_nouveau:wixie_cauldron'
        },
        {
            left: 'item:ars_nouveau:enchanting_apparatus',
            right: 'item:ars_nouveau:wixie_charm',
            output: {
                type: 'item',
                id: 'ars_additions:enchanting_wixie_cauldron',
                amount: 1
            },
            id: 'ars_additions:enchanting_wixie_cauldron'
        },
        {
            left: 'item:minecraft:mossy_cobblestone',
            right: 'item:ars_nouveau:drygmy_charm',
            output: {
                type: 'item',
                id: 'ars_nouveau:drygmy_stone',
                amount: 1
            },
            id: 'ars_nouveau:drygmy_stone'
        },
        {
            left: 'item:minecraft:prismarine',
            right: 'item:ars_elemental:siren_charm',
            output: {
                type: 'item',
                id: 'ars_elemental:mermaid_rock',
                amount: 1
            },
            id: 'ars_elemental:mermaid_rock'
        },
        {
            left: '#item:minecraft:flowers',
            right: 'item:ars_nouveau:whirlisprig_charm',
            output: {
                type: 'item',
                id: 'ars_nouveau:whirlisprig_flower',
                amount: 1
            },
            id: 'ars_nouveau:whirlisprig_flower'
        },
        {
            left: {
                type: 'fluid',
                id: 'evilcraft:blood',
                amount: 5000
            },
            right: {
                type: 'item',
                id: 'evilcraft:dark_gem',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Throw in fluid"}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'evilcraft:dark_power_gem',
                amount: 1
            },
            id: 'evilcraft:dark_power_gem'
        },
        {
            left: {
                type: 'item',
                id: 'evilcraft:hardened_blood',
                amount: 1
            },
            right: {
                type: 'item',
                id: 'minecraft:flint_and_steel',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Break block with item"}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'evilcraft:hardened_blood_shard',
                amount: 7
            },
            id: 'evilcraft:hardened_blood_shard'
        },
        {
            left: {
                type: 'fluid',
                id: 'evilcraft:blood',
                amount: 1000
            },
            right: {
                type: 'item',
                id: 'minecraft:clock',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Converts over time"}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'evilcraft:hardened_blood',
                amount: 1
            },
            id: 'evilcraft:hardened_blood'
        },
        {
            left: 'item:minecraft:amethyst_block',
            right: {
                type: 'item',
                id: 'ars_nouveau:amethyst_golem_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Amethyst Golems convert to budding!"}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'minecraft:budding_amethyst',
                amount: 1
            },
            id: 'minecraft:budding_amethyst'
        },
        {
            left: 'item:ae2:quartz_block',
            right: {
                type: 'item',
                id: 'ars_nouveau:amethyst_golem_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Amethyst Golems convert to budding!"}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'ae2:flawed_budding_quartz',
                amount: 1
            },
            id: 'ae2:flawed_budding_quartz'
        },
        {
            left: 'item:justdirethings:time_crystal_block',
            right: {
                type: 'item',
                id: 'ars_nouveau:amethyst_golem_charm',
                nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Amethyst Golems convert to budding!"}\u0027]}',
                amount: 1
            },
            output: {
                type: 'item',
                id: 'justdirethings:time_crystal_budding_block',
                amount: 1
            },
            id: 'justdirethings:time_crystal_budding_block'
        },
        {
            left: '#item:c:ores/dark_gem',
            right: '#item:minecraft:pickaxes',
            output: [
                {
                    type: 'item',
                    id: 'evilcraft:dark_gem',
                    amount: 1
                },
                {
                    type: 'item',
                    id: 'evilcraft:dark_gem_crushed',
                    nbt: '{"minecraft:lore":[\u0027{"color":"green","text":"Requires Fortune"}\u0027]}',
                    amount: 1
                }
            ],
            id: 'evilcraft:dark_gem_crushed'
        },
        {
            left: 'item:evilcraft:environmental_accumulator',
            right: '#item:minecraft:pickaxes',
            output: 'item:evilcraft:environmental_accumulation_core',
            id: 'evilcraft:environmental_accumulation_core'
        }
    ];

    descriptions.forEach((description) => {
        description.type = 'emi:world_interaction';
        event.json(`emi:recipe/additions/${description.id.replace(/\:/g, '_')}`, description);
    });
});
