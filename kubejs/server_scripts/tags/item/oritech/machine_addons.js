ServerEvents.tags('item', (event) => {
    event.get('oritech:machine_addons').add([/oritech:.*_addon$/]);
});
