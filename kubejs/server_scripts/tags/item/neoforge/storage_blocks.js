ServerEvents.tags('item', (event) => {
    let additions = {
        amethyst: ['minecraft:amethyst_block'],

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
        nitro: ['powah:nitro_crystal_block'],

        uranium: ['bigreactors:yellorium_block'],
        raw_uranium: ['bigreactors:raw_yellorium_block'],

        infused_iron: ['naturesaura:infused_iron_block'],
        tainted_gold: ['naturesaura:tainted_gold_block'],
        sky: ['naturesaura:sky_ingot_block'],
        depth: ['naturesaura:depth_ingot_block'],

        dark: ['evilcraft:dark_block'],

        black_quartz: ['actuallyadditions:black_quartz_block'],

        charcoal: ['justdirethings:charcoal']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:storage_blocks/${tag}`).add(additions[tag]);
        event.get('c:storage_blocks').add(additions[tag]);
    });
});
