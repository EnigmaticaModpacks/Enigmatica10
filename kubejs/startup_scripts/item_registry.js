//priority: 900
StartupEvents.registry('item', (event) => {
    const ritualDummies = [
        {
            id: 'occultism:ritual_dummy/misc_eldritch_manuscript',
            type: 'misc',
            tooltip: 'Obtain an Eldritch Manuscript at the small cost of your sanity.'
        },
        {
            id: 'occultism:ritual_dummy/craft_archevoker_logbook_translated',
            type: 'craft',
            tooltip: 'Request the aid of a Djinni in translating the Logbook'
        }
    ];

    ritualDummies.forEach((item) => {
        event.create(item.id, 'occultism:ritual_dummy').pentacleType(item.type).ritualTooltip(item.tooltip);
    });
});
