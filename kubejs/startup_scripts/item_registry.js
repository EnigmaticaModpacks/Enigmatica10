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

    metals.forEach((metal) => {
        event.create(`emendatusenigmatica:${metal}_clump`).texture(`emendatusenigmatica:item/${metal}_clump`);
        event.create(`emendatusenigmatica:${metal}_crystal`).texture(`emendatusenigmatica:item/${metal}_crystal`);
        event.create(`emendatusenigmatica:dirty_${metal}_dust`).texture(`emendatusenigmatica:item/dirty_${metal}_dust`);
        event.create(`emendatusenigmatica:${metal}_shard`).texture(`emendatusenigmatica:item/${metal}_shard`);
        event.create(`emendatusenigmatica:${metal}_dust`).texture(`emendatusenigmatica:item/${metal}_dust`);
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
