ServerEvents.recipes((event) => {
    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [
        {
            filter: [{ mod: 'waystones' }, { output: 'minecraft:writable_book' }],
            to_replace: 'minecraft:ink_sac',
            replace_with: '#c:dyes/black'
        },
        {
            filter: [
                { mod: 'ae2', not: { output: 'ae2:cable_anchor' } },
                { mod: 'ae2netanalyser' },
                { mod: 'aquaculture', output: /tackle_box/ },
                { mod: 'evilcraft' },
                { mod: 'prettypipes' },
                { mod: 'ppfluids' }
            ],
            to_replace: '#c:ingots/iron',
            replace_with: Ingredient.of(['#c:ingots/iron', '#c:ingots/tin'])
        },
        {
            filter: [
                { mod: 'aquaculture', output: /tackle_box/ },
                { mod: 'evilcraft' },
                { mod: 'prettypipes' },
                { mod: 'ppfluids' }
            ],
            to_replace: '#c:storage_blocks/iron',
            replace_with: Ingredient.of(['#c:storage_blocks/iron', '#c:storage_blocks/tin'])
        },
        {
            filter: [{ mod: 'functionalstorage' }],
            to_replace: '#c:chests/wooden',
            replace_with: 'framedblocks:framed_chest'
        },
        {
            filter: [{ mod: 'handcrafted' }, { mod: 'aquaculture' }],
            to_replace: '#c:chests',
            replace_with: '#c:chests/wooden'
        },
        {
            filter: {},
            to_replace: 'minecraft:feather',
            replace_with: '#c:feathers'
        },
        {
            filter: [{ output: 'minecraft:sticky_piston' }, { output: 'minecraft:lead' }, { mod: 'appflux' }],
            to_replace: 'minecraft:slime_ball',
            replace_with: '#c:slimeballs'
        },
        {
            filter: [{ mod: 'appflux' }],
            to_replace: 'minecraft:cactus',
            replace_with: '#c:dyes/green'
        },
        {
            filter: [{ output: 'minecraft:observer' }, { mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: 'minecraft:quartz',
            replace_with: Ingredient.of(['minecraft:quartz', 'ae2:certus_quartz_crystal'])
        },
        {
            filter: [{ mod: 'bigreactors' }],
            to_replace: '#c:ingots/yellorium',
            replace_with: '#c:ingots/uranium'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:ingots/gold',
            replace_with: '#c:ingots/copper'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:storage_blocks/redstone',
            replace_with: '#c:dusts/redstone'
        },
        {
            filter: [{ id: /actuallyadditions:black_quartz_(wall|stair|slab)/ }],
            to_replace: 'actuallyadditions:black_quartz_pillar_block',
            replace_with: 'actuallyadditions:black_quartz_block'
        },
        {
            filter: [{ id: `oritech:motor/motorcraft` }, { id: `oritech:crafting/magnet` }],
            to_replace: '#c:ingots/steel',
            replace_with: '#c:ingots/iron'
        },
        {
            filter: [{ id: `oritech:crafting/foundry` }],
            to_replace: '#c:ingots/electrum',
            replace_with: '#c:ingots/iron'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: '#c:ingots/steel',
            replace_with: Ingredient.of(['#c:ingots/steel', '#c:ingots/biosteel'])
        },
        {
            filter: [{ id: `replication:replicator` }],
            to_replace: '#c:dusts/redstone',
            replace_with: Ingredient.of([
                'pneumaticcraft:printed_circuit_board',
                'oritech:processing_unit',
                '#c:circuits/ultimate',
                'modern_industrialization:analog_circuit',
                'enderio:z_logic_controller'
            ])
        },
        {
            filter: [{ id: `theurgy:crafting/shaped/reformation_target_pedestal` }],
            to_replace: '#c:gems/diamond',
            replace_with: Ingredient.of([
                '#evilcraft:gems/dark_power',
                '#c:essences/manipulation',
                '#c:ingots/arcane',
                '#c:ingots/infused_iron'
            ])
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
