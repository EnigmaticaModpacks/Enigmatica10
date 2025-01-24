ServerEvents.tags('block', (event) => {
    // Foliot tier pentacle blocks
    event.get('occultism:summon_t1/bricks').add(['#occultism:summon_t2/bricks']);
    event.get('occultism:summon_t1/accent').add(['#occultism:summon_t2/accent']);
    event.get('occultism:summon_t1/skull').add(['#occultism:summon_t2/skull']);
    event.get('occultism:summon_t1/moderator').add(['#occultism:summon_t2/moderator']);

    // Djinni tier pentacle blocks
    event.get('occultism:summon_t2/bricks').add(['#occultism:summon_t3/bricks', 'minecraft:tuff_bricks']);
    event.get('occultism:summon_t2/accent').add(['#occultism:summon_t3/accent', 'minecraft:chiseled_tuff']);
    event.get('occultism:summon_t2/skull').add(['#occultism:summon_t3/skull', 'minecraft:skeleton_skull']);
    event.get('occultism:summon_t2/moderator').add(['#occultism:summon_t3/moderator', '#c:storage_blocks/gold']);

    // Afrit tier pentacle blocks
    event.get('occultism:summon_t3/bricks').add(['#occultism:summon_t4/bricks', 'minecraft:red_nether_bricks']);
    event.get('occultism:summon_t3/accent').add(['#occultism:summon_t4/accent', 'minecraft:chiseled_nether_bricks']);
    event.get('occultism:summon_t3/skull').add(['#occultism:summon_t4/skull']);
    event.get('occultism:summon_t3/moderator').add(['#occultism:summon_t4/moderator']);

    // Marid tier pentacle blocks
    event.get('occultism:summon_t4/bricks').add(['minecraft:prismarine_bricks']);
    event.get('occultism:summon_t4/accent').add(['#minecraft:coral_blocks/dead']);
    event.get('occultism:summon_t4/skull').add(['minecraft:wither_skeleton_skull']);
    event.get('occultism:summon_t4/moderator').add(['#c:storage_blocks/iesnium']);

    // Add everything to pentacle materials for placement by Ritual Satchels
    event
        .get('occultism:pentacle_materials')
        .add([
            '#occultism:summon_t4/bricks',
            '#occultism:summon_t4/accent',
            '#occultism:summon_t4/skull',
            '#occultism:summon_t4/moderator'
        ]);
});
