ServerEvents.tags('entity_type', (event) => {
    event
        .get('enigmatica:mob_spawner_blacklist')
        .add([/artifacts/, /ars_nouveau/, /pneumaticcraft.*drone/, /ars_elemental:.*_familiar/])
        .remove([/ars_nouveau:wilden/]);
});
