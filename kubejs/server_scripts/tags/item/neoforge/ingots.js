ServerEvents.tags('item', (event) => {
    let additions = {
        ferricore: ['justdirethings:ferricore_ingot'],
        blazegold: ['justdirethings:blazegold_ingot'],
        eclipsealloy: ['justdirethings:eclipsealloy_ingot'],

        uraninite: ['powah:uraninite'],
        energized_steel: ['powah:steel_energized'],

        infused_iron: ['naturesaura:infused_iron'],
        tainted_gold: ['naturesaura:tainted_gold'],
        sky: ['naturesaura:sky_ingot'],
        depth: ['naturesaura:depth_ingot'],

        adamant: ['oritech:adamant_ingot'],
        duratium: ['oritech:duratium_ingot'],
        electrum: ['oritech:electrum_ingot'],
        energite: ['oritech:energite_ingot'],
        prometheum: ['oritech:prometheum_ingot'],
        biosteel: ['oritech:biosteel_ingot'],

        quantum_alloy: ['advanced_ae:quantum_alloy'],

        replica: ['replication:replica_ingot'],
        arcane: ['irons_spellbooks:arcane_ingot']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:ingots/${tag}`).add(additions[tag]);
        event.get('c:ingots').add(additions[tag]);
    });

    event.get('c:ingots/steel').remove('oritech:biosteel_ingot');
});
