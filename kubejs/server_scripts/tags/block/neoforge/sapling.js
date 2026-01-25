ServerEvents.tags('block', (event) => {
    let additions = [/malum:.*_sapling/];
    event.get('c:sapling').add(additions);
});
