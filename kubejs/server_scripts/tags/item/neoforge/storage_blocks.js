ServerEvents.tags('item', (event) => {
    let additions = {
        uraninite: ['powah:uraninite_block'],
        energized_steel: ['powah:steel_energized_block'],
        ferricore: ['justdirethings:ferricore_block'],
        blazegold: ['justdirethings:blazegold_block'],
        celestigem: ['justdirethings:celestigem_block'],
        eclipsealloy: ['justdirethings:eclipsealloy_block'],
        primal_coal: ['justdirethings:coalblock_t1'],
        blaze_ember: ['justdirethings:coalblock_t2'],
        voidflame: ['justdirethings:coalblock_t3'],
        eclipse_ember: ['justdirethings:coalblock_t4']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:storage_blocks/${tag}`).add(additions[tag]);
        event.get('c:storage_blocks').add(additions[tag]);
    });
});
