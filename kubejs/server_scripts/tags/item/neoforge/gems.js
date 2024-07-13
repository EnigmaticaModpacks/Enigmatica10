ServerEvents.tags('item', (event) => {
    let additions = {
        celestigem: ['justdirethings:celestigem'],
        primal_coal: ['justdirethings:coal_t1'],
        blaze_ember: ['justdirethings:coal_t2'],
        voidflame: ['justdirethings:coal_t3'],
        eclipse_ember: ['justdirethings:coal_t4']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:gems/${tag}`).add(additions[tag]);
        event.get('c:gems').add(additions[tag]);
    });
});
