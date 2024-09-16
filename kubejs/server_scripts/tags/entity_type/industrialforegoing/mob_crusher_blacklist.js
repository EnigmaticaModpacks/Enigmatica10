ServerEvents.tags('entity_type', (event) => {
    event
        .get('industrialforegoing:mob_crusher_blacklist')
        .add([/ars_.*:.*familiar/, /occultism:.*familiar/, /occultism:demonic_/]);
});
