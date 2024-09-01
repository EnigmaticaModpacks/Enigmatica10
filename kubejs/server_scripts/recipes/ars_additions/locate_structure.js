ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_additions/locate_structure/';

    const recipes = [
        {
            augments: [{ key: 'minecraft:ender_eye' }],
            structure: { tag: 'minecraft:stronghold' },
            id: `${id_prefix}stronghold`
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_additions:locate_structure';
        event.custom(recipe).id(recipe.id);
    });
});
