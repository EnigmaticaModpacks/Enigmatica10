ServerEvents.tags('item', (event) => {
    let additions = beheading_tools;

    event.get('enigmatica:beheading').add(additions);
});
