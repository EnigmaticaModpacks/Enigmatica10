ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_additions/locate_structure/';

    const recipes = [
        {
            augments: [{ key: 'naturesaura:token_grief' }],
            structure: { key: 'malum:weeping_well' },
            id: `${id_prefix}weeping_well`
        },
        {
            augments: [{ key: 'evilcraft:dark_gem' }],
            structure: { key: 'evilcraft:dark_temple' },
            id: `${id_prefix}dark_temple`
        },
        {
            augments: [{ key: 'farmersdelight:potato_crate' }],
            structure: { key: 'underground_villages:underground_village' },
            id: `${id_prefix}underground_village`
        },
        {
            augments: [{ key: 'minecraft:hay_block' }],
            structure: { tag: 'minecraft:village' },
            id: `${id_prefix}village`
        },
        {
            augments: [{ key: 'minecraft:stone_sword' }],
            structure: { key: 'irons_spellbooks:ancient_battleground' },
            id: `${id_prefix}ancient_battleground`
        },
        {
            augments: [{ key: 'minecraft:blue_ice' }],
            structure: { key: 'irons_spellbooks:impaled_icebreaker' },
            id: `${id_prefix}impaled_icebreaker`
        },
        {
            augments: [{ key: 'minecraft:amethyst_block' }],
            structure: { key: 'irons_spellbooks:evoker_fort' },
            id: `${id_prefix}evoker_fort`
        },
        {
            augments: [{ key: 'minecraft:mangrove_propagule' }],
            structure: { key: 'irons_spellbooks:mangrove_hut' },
            id: `${id_prefix}mangrove_hut`
        },
        {
            augments: [{ key: 'minecraft:snow_block' }],
            structure: { key: 'irons_spellbooks:mountain_tower' },
            id: `${id_prefix}mountain_tower`
        },
        {
            augments: [{ key: 'minecraft:magma_block' }],
            structure: { key: 'irons_spellbooks:pyromancer_tower' },
            id: `${id_prefix}pyromancer_tower`
        },
        {
            augments: [{ key: 'minecraft:bone_block' }],
            structure: { key: 'irons_spellbooks:catacombs' },
            id: `${id_prefix}catacombs`
        },
        {
            augments: [{ key: 'minecraft:tuff_bricks' }],
            structure: { key: 'minecraft:trial_chambers' },
            id: `${id_prefix}trial_chambers`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_additions:locate_structure';
        event.custom(recipe).id(recipe.id);
    });
});
