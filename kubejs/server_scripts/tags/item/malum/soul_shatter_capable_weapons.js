ServerEvents.tags('item', (event) => {
    let additions = [
        'ars_nouveau:enchanters_sword',
        'ars_nouveau:enchanters_gauntlet',
        'arsdelight:enchanters_knife',
        /deeperdarker:warden_(sword|axe)/,
        /naturesaura:(sky|depth)_(sword|axe)/,
        /justdirethings:(eclipsealloy|celestigem)_(sword|axe|paxel)/
    ];

    event.get('malum:soul_shatter_capable_weapons').add(additions);
});
