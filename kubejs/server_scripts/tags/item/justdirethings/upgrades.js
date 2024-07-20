ServerEvents.tags('item', (event) => {
    let additions = [/justdirethings:upgrade_/];
    let exclusions = ['justdirethings:upgrade_blank'];
    event.get('justdirethings:upgrades').add(additions).remove(exclusions);
});
