ServerEvents.tags('item', (event) => {
    metals.forEach((metal) => {
        metal_types.forEach((type) => {
            event.get(`c:${type}s/${metal}`).add(`emendatusenigmatica:${metal}_${type}`);
            event.get(`c:${type}s`).add(`emendatusenigmatica:${metal}_${type}`);
        });
    });
});
