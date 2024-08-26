ServerEvents.tags('block', (event) => {
    event.add('ae2:growth_acceleratable', [/^ars.*_pod$/, '#c:bushes']);
});
