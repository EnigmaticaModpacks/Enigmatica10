ServerEvents.tags('item', (event) => {
    let additions = {
        platinum: ['oritech:platinum_clump'],
        nickel: ['oritech:nickel_clump'],
        iron: ['oritech:iron_clump'],
        copper: ['oritech:copper_clump'],
        gold: ['oritech:gold_clump']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:clumps/${tag}`).add(additions[tag]);
        event.get('c:clumps').add(additions[tag]);
    });

    metals.forEach((metal) => {
        event.get(`c:clumps/${metal}`).add(`create:crushed_raw_${metal}`);
        event.get(`c:clumps`).add(`create:crushed_raw_${metal}`);
    });
});
