RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
    emi.items.disabled.forEach((stack) => {
        console.log(`removing: ${stack}`);
        event.remove(stack);
    });
});
