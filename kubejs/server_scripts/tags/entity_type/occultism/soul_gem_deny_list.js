ServerEvents.tags('entity_type', (event) => {
    event
        .get('occultism:soul_gem_deny_list')
        .remove('minecraft:wither')
        .add([/ars_(nouveau|elemental):.*familiar/, 'ars_nouveau:alakarkinos']);
});
