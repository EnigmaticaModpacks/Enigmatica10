ServerEvents.tags('entity_type', (event) => {
    let additions = [/aquaculture/];
    let exclustions = [/aquaculture:.*turtle/];
    event.get('c:fish').add(additions).remove(exclustions);
});
