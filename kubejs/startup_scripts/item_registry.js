//priority: 900
StartupEvents.registry('item', (event) => {
    const metals = [
        'aluminum',
        'copper',
        'gold',
        'iesnium',
        'iridium',
        'iron',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc'
    ];

    const metal_types = ['clump', 'crystal', 'dirty_dust', 'shard'];

    metal_types.forEach((type) => {
        metals.forEach((metal) => {
            event.create(`emendatusenigmatica:${metal}_${type}`).texture(`emendatusenigmatica:item/${metal}_${type}`);
        });
    });

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
