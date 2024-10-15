ServerEvents.tags('item', (event) => {
    let crushed_dusts = [
        'bauxite',
        'chromium',
        'coal',
        'diamond',
        'emerald',
        'lapis',
        'lignite_coal',
        'manganese',
        'monazite',
        'quartz',
        'redstone',
        'salt'
    ];

    crushed_dusts.forEach((crushed_dust) => {
        event
            .get(`modern_industrialization:crushed_dusts/${crushed_dust}`)
            .add(`modern_industrialization:${crushed_dust}_crushed_dust`);
        event
            .get('modern_industrialization:crushed_dusts')
            .add(`modern_industrialization:${crushed_dust}_crushed_dust`);
    });
});
