ServerEvents.tags('entity_type', (event) => {
    let additions = [
        /aquaculture:.*turtle/,
        'chococraft:chocobo',
        'the_bumblezone:beehemoth',
        'the_bumblezone:rootmin',
        'ars_nouveau:drygmy',
        'ars_nouveau:starbuncle',
        'ars_nouveau:whirlisprig'
    ];
    event.get('occultism:random_animals_to_summon_list').add(additions);
});
