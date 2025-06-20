ServerEvents.tags('item', (event) => {
    metals.forEach((metal) => {
        event.get(`c:clumps/${metal}`).add(`emendatusenigmatica:${metal}_clump`);
        event.get(`c:clumps`).add(`emendatusenigmatica:${metal}_clump`);

        event.get(`c:crystals/${metal}`).add(`emendatusenigmatica:${metal}_crystal`);
        event.get(`c:crystals`).add(`emendatusenigmatica:${metal}_crystal`);

        event.get(`c:dirty_dusts/${metal}`).add(`emendatusenigmatica:dirty_${metal}_dust`);
        event.get(`c:dirty_dusts`).add(`emendatusenigmatica:dirty_${metal}_dust`);

        event.get(`c:shards/${metal}`).add(`emendatusenigmatica:${metal}_shard`);
        event.get(`c:shards`).add(`emendatusenigmatica:${metal}_shard`);

        event.get(`c:dusts/${metal}`).add(`emendatusenigmatica:${metal}_dust`);
        event.get(`c:dusts`).add(`emendatusenigmatica:${metal}_dust`);
    });
});
