ServerEvents.tags('item', (event) => {
    let additions = {
        coal_coke: ['modern_industrialization:coke_dust'],
        adamant: ['oritech:adamant_dust'],
        biosteel: ['oritech:biosteel_dust'],
        duratium: ['oritech:duratium_dust'],
        electrum: ['oritech:electrum_dust'],
        energite: ['oritech:energite_dust'],
        steel: ['oritech:steel_dust']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:dusts/${tag}`).add(additions[tag]);
        event.get('c:dusts').add(additions[tag]);
    });
});
