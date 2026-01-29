ServerEvents.tags('item', (event) => {
    let additions = {
        ferricore: ['justdirethings:raw_ferricore'],
        blazegold: ['justdirethings:raw_blazegold'],
        eclipsealloy: ['justdirethings:raw_eclipsealloy'],
        uranium: ['bigreactors:raw_yellorium', 'oritech:raw_uranium'],

        nickel: ['oritech:raw_nickel'],
        platinum: ['oritech:raw_platinum'],

        replica: ['replication:raw_replica'],

        soulstone: ['malum:raw_soulstone']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:raw_materials/${tag}`).add(additions[tag]);
        event.get('c:raw_materials').add(additions[tag]);
    });
});
