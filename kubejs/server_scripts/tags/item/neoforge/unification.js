ServerEvents.tags('item', (event) => {
    const metal_types = ['clump', 'crystal', 'dirty_dust', 'shard'];

    metals.forEach((metal) => {
        event.get(`c:clumps/${metal}`).add(`emendatusenigmatica:${metal}_clump`);
        event.get(`c:clumps`).add(`emendatusenigmatica:${metal}_clump`);

        event.get(`c:crystals/${metal}`).add(`emendatusenigmatica:${metal}_crystal`);
        event.get(`c:crystals`).add(`emendatusenigmatica:${metal}_crystal`);

        event.get(`c:dirty_dusts/${metal}`).add(`emendatusenigmatica:diryt_${metal}_dust`);
        event.get(`c:dirty_dusts`).add(`emendatusenigmatica:diryt_${metal}_dust`);

        event.get(`c:shards/${metal}`).add(`emendatusenigmatica:${metal}_shard`);
        event.get(`c:shards`).add(`emendatusenigmatica:${metal}_shard`);
    });
});
