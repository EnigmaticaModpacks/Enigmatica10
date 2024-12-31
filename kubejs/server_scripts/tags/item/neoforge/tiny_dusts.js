ServerEvents.tags('item', (event) => {
    let additions = {
        plutonium: ['oritech:small_plutonium_dust'],
        platinum: ['oritech:small_platinum_dust'],
        uranium: ['oritech:small_uranium_dust'],
        nickel: ['oritech:small_nickel_dust'],
        copper: ['oritech:small_copper_dust'],
        iron: ['oritech:small_iron_dust'],
        gold: ['oritech:small_gold_dust']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:tiny_dusts/${tag}`).add(additions[tag]);
        event.get('c:tiny_dusts').add(additions[tag]);
    });
});
