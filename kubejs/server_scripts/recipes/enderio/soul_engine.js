ServerEvents.generateData('before_mods', (event) => {
    const id_prefix = 'enigmatica_soul_engine_';
    let recipes = [
        {
            entity: 'deeperdarker:sculk_snapper',
            fluid: '#c:fuels/eclipse_ember',
            'power/mb': 4000,
            'tick/mb': 10,
            id: `${id_prefix}warden_eclipse_ember`
        },
        {
            entity: 'minecraft:endermite',
            fluid: '#c:fuels/voidflame',
            'power/mb': 1300,
            'tick/mb': 10,
            id: `${id_prefix}endermite_voidflame`
        },
        {
            entity: 'minecraft:magma_cube',
            fluid: '#c:fuels/blaze_ember',
            'power/mb': 450,
            'tick/mb': 10,
            id: `${id_prefix}magma_cube_blaze_ember`
        },
        {
            entity: 'the_bumblezone:honey_slime',
            fluid: '#c:fuels/hootch',
            'power/mb': 600,
            'tick/mb': 6,
            id: `${id_prefix}honey_slime_hootch`
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enderio:eio_soul/engine/${recipe.id}`, recipe);
    });
});
