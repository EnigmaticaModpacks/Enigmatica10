ServerEvents.tags('item', (event) => {
    let additions = [/arts_and_crafts:.*cork_(log|wood)/];
    event.get('arts_and_crafts:cork_logs').add(additions);
});
