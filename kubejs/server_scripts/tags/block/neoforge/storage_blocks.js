ServerEvents.tags('block', (event) => {
    let additions = {
        ferricore: ['justdirethings:ferricore_block'],
        blazegold: ['justdirethings:blazegold_block'],
        celestigem: ['justdirethings:celestigem_block'],
        eclipsealloy: ['justdirethings:eclipsealloy_block'],
        primal_coal: ['justdirethings:coalblock_t1'],
        blaze_ember: ['justdirethings:coalblock_t2'],
        voidflame: ['justdirethings:coalblock_t3'],
        eclipse_ember: ['justdirethings:coalblock_t4'],

        uraninite: ['powah:uraninite_block'],
        energized_steel: ['powah:energized_steel_block'],
        blazing: ['powah:blazing_crystal_block'],
        niotic: ['powah:niotic_crystal_block'],
        spirited: ['powah:spirited_crystal_block'],
        nitro: ['powah:nitro_crystal_block']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:storage_blocks/${tag}`).add(additions[tag]);
        event.get('c:storage_blocks').add(additions[tag]);
    });
});
