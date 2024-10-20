ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:cobblegengalore/shaped/';

    const recipes = [
        {
            output: 'cobblegengalore:block_gen_stone',
            pattern: ['ABA', 'DCD', 'AEA'],
            key: {
                A: 'minecraft:polished_andesite',
                B: 'minecraft:hopper',
                C: 'minecraft:wooden_pickaxe',
                D: 'minecraft:glass',
                E: 'minecraft:observer'
            },
            id: `${id_prefix}block_gen_stone`
        },
        {
            output: 'cobblegengalore:block_gen_copper',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:ingots/copper',
                B: '#c:gems/lapis',
                C: 'minecraft:stone_pickaxe',
                D: 'cobblegengalore:block_gen_stone'
            },
            id: `${id_prefix}block_gen_copper`
        },
        {
            output: 'cobblegengalore:block_gen_iron',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:ingots/iron',
                B: 'minecraft:tinted_glass',
                C: 'minecraft:iron_pickaxe',
                D: 'cobblegengalore:block_gen_copper'
            },
            id: `${id_prefix}block_gen_iron`
        },
        {
            output: 'cobblegengalore:block_gen_gold',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:ingots/gold',
                B: 'minecraft:gilded_blackstone',
                C: 'minecraft:golden_pickaxe',
                D: 'cobblegengalore:block_gen_iron'
            },
            id: `${id_prefix}block_gen_gold`
        },
        {
            output: 'cobblegengalore:block_gen_emerald',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:gems/emerald',
                B: 'minecraft:chorus_flower',
                C: 'ae2:fluix_pickaxe',
                D: 'cobblegengalore:block_gen_gold'
            },
            id: `${id_prefix}block_gen_emerald`
        },
        {
            output: 'cobblegengalore:block_gen_diamond',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:gems/diamond',
                B: 'minecraft:echo_shard',
                C: 'minecraft:diamond_pickaxe',
                D: 'cobblegengalore:block_gen_emerald'
            },
            id: `${id_prefix}block_gen_diamond`
        },
        {
            output: 'cobblegengalore:block_gen_netherite',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:ingots/netherite',
                B: 'minecraft:nether_star',
                C: 'minecraft:netherite_pickaxe',
                D: 'cobblegengalore:block_gen_diamond'
            },
            id: `${id_prefix}block_gen_netherite`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
