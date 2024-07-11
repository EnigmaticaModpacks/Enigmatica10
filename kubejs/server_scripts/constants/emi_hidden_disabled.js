//priority: 1000

const disabled_item_message =
    "This item has been disabled. If you managed to obtain it please report it on Enigmatica 10's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica10/issues";

const disabled_item_tooltip = 'This item has been disabled.';

const emi = {
    items: { hidden: [], disabled: [], added: [] },
    fluids: { hidden: [] },
    gases: { hidden: [] },
    categories: { hidden: [] },
    recipes: { hidden: [] }
};
// Base
emi.items.disabled = [/mffs.*steel/];
