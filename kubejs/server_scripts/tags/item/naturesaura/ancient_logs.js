ServerEvents.tags('item', (event) => {
    let additions = ['naturesaura:ancient_log', 'naturesaura:ancient_bark'];
    event.get('naturesaura:ancient_logs').add(additions);
});
