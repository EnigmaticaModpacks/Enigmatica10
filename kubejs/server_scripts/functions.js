//priority: 1005

function getPreferredItemInTag(tag) {
    return (
        Ingredient.of(tag)
            .stacks.toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air)
    );
}

function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of mod_priorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}

function onlyDrygmy(event, entity) {
    return event.addEntityModifier(entity).matchAttackerCustom((attacker) => attacker.uuid.toString() == DRYGMY_UUID);
}

function notDrygmy(event, entity) {
    return event.addEntityModifier(entity).matchAttackerCustom((attacker) => attacker.uuid.toString() != DRYGMY_UUID);
}

function generatePentacleEntry(ritual_name, x_placement, y_placement, parents) {
    let entry = {
        name: ritual_name,
        background_u_index: 0,
        background_v_index: 0,
        category: 'occultism:pentacles',
        description: '',
        hide_while_locked: false,
        icon: 'occultism:pentacle',
        name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
        pages: [
            {
                type: 'modonomicon:text',
                anchor: '',
                show_title_separator: true,
                text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
                title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
                use_markdown_in_title: false
            },
            {
                type: 'modonomicon:multiblock',
                anchor: '',
                multiblock_id: `occultism:${ritual_name}`,
                multiblock_name: '',
                show_visualize_button: true,
                text: ''
            }
        ],
        parents: parents,
        x: x_placement,
        y: y_placement
    };

    return entry;
}

function bigReactorsIngredient(item) {
    let ingredient = {
        type: 'neoforge:components',
        items: item,
        strict: true,
        components: {
            'minecraft:attribute_modifiers': { modifiers: [] },
            'minecraft:enchantments': { levels: {} },
            'minecraft:lore': [],
            'minecraft:max_stack_size': 64,
            'minecraft:rarity': 'common',
            'minecraft:repair_cost': 0
        }
    };
    return ingredient;
}
