//priority: 1000

// Keep updated with emi_hidden_disabled in client_scripts
const disabled_item_tooltip = 'This item has been disabled.';

const emi = {
    items: { hidden: [], disabled: [], added: [] },
    fluids: { hidden: [] },
    gases: { hidden: [] },
    categories: { hidden: [] },
    recipes: { hidden: [] }
};

emi.items.disabled = [/mffs.*steel/];
