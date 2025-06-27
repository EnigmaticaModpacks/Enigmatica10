ServerEvents.tags('item', (event) => {
    let additions = {
        hallowed_gold: ['malum:hallowed_gold_nugget']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:nuggets/${tag}`).add(additions[tag]);
        event.get('c:nuggets').add(additions[tag]);
    });
});
