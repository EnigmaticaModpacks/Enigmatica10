ServerEvents.tags('block', (event) => {
    event.add('ae2:growth_acceleratable', [
        /^ars.*_pod$/,
        '#c:bushes',
        '#sereneseasons:spring_crops',
        '#sereneseasons:summer_crops',
        '#sereneseasons:autumn_crops',
        '#sereneseasons:winter_crops',
        '#c:budding_blocks',
        '#c:budding'
    ]);
});
