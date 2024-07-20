ServerEvents.tags('item', (event) => {
    chisel_types.forEach((tag) => {
        let type = tag.split(':')[1];
        let additions = [`minecraft:${type}`, `/chisel:.*${type}/`];
        event.get(`chisel:${type}`).add(additions);
    });
});
