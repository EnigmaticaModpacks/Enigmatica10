//priority: 900
StartupEvents.registry('item', (event) => {
    const ritualDummies = [
        {
            id: 'occultism:ritual_dummy/misc_eldritch_manuscript',
            type: 'misc',
            tooltip: 'Obtain an Eldritch Manuscript at the small cost of your sanity.'
        }
    ];

    ritualDummies.forEach((item) => {
        event.create(item.id, 'occultism:ritual_dummy').pentacleType(item.type).ritualTooltip(item.tooltip);
    });
});
