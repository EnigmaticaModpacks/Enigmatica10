ServerEvents.tags('item', (event) => {
    let additions = [/ars_.*ritual/];
    let exclusions = ['ars_nouveau:ritual_brazier'];
    event.get('ars_nouveau:ritual_tablet').add(additions).remove(exclusions);
});
