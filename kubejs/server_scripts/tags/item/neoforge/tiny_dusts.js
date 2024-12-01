ServerEvents.tags('item', (event) => {
    let additions = {
        nickel: ['oritech:small_nickel_dust'],
        platinum: ['oritech:small_platinum_dust'],
        iron: ['oritech:small_iron_dust'],
        copper: ['oritech:small_copper_dust'],
        gold: ['oritech:small_gold_dust']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tiny_dusts/${tag}`).add(additions[tag]);
        event.get('c:tiny_dusts').add(additions[tag]);
    });
});
