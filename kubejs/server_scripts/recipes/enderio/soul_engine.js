ServerEvents.generateData('before_mods', (event) => {
    const id_prefix = 'enigmatica_soul_engine_';
    let recipes = [
        {
            entity: 'deeperdarker:sculk_snapper',
            fluid: '#c:eclipse_ember',
            'power/mb': 4000,
            'tick/mb': 10,
            id: `${id_prefix}warden_eclipse_ember`
        },
        {
            entity: 'minecraft:endermite',
            fluid: '#c:voidflame',
            'power/mb': 1300,
            'tick/mb': 10,
            id: `${id_prefix}endermite_voidflame`
        },
        {
            entity: 'minecraft:magma_cube',
            fluid: '#c:blaze_ember',
            'power/mb': 450,
            'tick/mb': 10,
            id: `${id_prefix}magma_cube_blaze_ember`
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enderio:eio_soul/engine/${recipe.id}`, recipe);
    });
});
