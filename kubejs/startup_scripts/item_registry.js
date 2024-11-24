//priority: 900
StartupEvents.registry('item', (event) => {
    const ritualDummies = [
        { id: 'occultism:ritual_dummy/misc_eldritch_manuscript', type: 'misc', tooltip: 'Obtain Eldritch Knowledge' }
    ];

    ritualDummies.forEach((item) => {
        event.create(item.id, 'occultism:ritual_dummy').pentacleType(item.type).ritualTooltip(item.tooltip);
    });
});
