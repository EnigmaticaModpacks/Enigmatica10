RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
    emi.items.disabled.forEach((stack) => {
        event.remove(stack);
    });
});
