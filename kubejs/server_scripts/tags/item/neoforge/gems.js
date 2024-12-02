ServerEvents.tags('item', (event) => {
    let additions = {
        coal: ['minecraft:coal'],
        charcoal: ['minecraft:charcoal'],
        charged_certus: ['ae2:charged_certus_quartz_crystal'],

        celestigem: ['justdirethings:celestigem'],
        primal_coal: ['justdirethings:coal_t1'],
        blaze_ember: ['justdirethings:coal_t2'],
        voidflame: ['justdirethings:coal_t3'],
        eclipse_ember: ['justdirethings:coal_t4'],
        time: ['justdirethings:time_crystal'],

        spirit_attuned: ['occultism:spirit_attuned_gem'],

        blazing: ['powah:crystal_blazing'],
        niotic: ['powah:crystal_niotic'],
        spirited: ['powah:crystal_spirited'],
        nitro: ['powah:crystal_nitro'],

        platinum: ['oritech:platinum_gem'],
        nickel: ['oritech:nickel_gem'],
        iron: ['oritech:iron_gem'],
        copper: ['oritech:copper_gem'],
        gold: ['oritech:gold_gem'],
        fluxite: ['oritech:fluxite'],
        overcharged_crystal: ['oritech:overcharged_crystal'],
        enderic: ['oritech:enderic_compound']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:gems/${tag}`).add(additions[tag]);
        event.get('c:gems').add(additions[tag]);
    });
});
