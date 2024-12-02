ServerEvents.tags('item', (event) => {
    let additions = {
        platinum: ['oritech:small_platinum_clump'],
        nickel: ['oritech:small_nickel_clump'],
        iron: ['oritech:small_iron_clump'],
        copper: ['oritech:small_copper_clump'],
        gold: ['oritech:small_gold_clump']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tiny_clumps/${tag}`).add(additions[tag]);
        event.get('c:tiny_clumps').add(additions[tag]);
    });
});
