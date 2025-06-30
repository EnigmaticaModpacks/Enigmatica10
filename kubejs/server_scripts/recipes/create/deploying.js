ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/deploying/';

    const recipes = [
        {
            results: [{ id: 'ae2:printed_silicon', count: 2 }],
            ingredients: [{ tag: 'c:silicon' }, { item: 'ae2:silicon_press' }],
            keep_held_item: true,
            id: `${id_prefix}printed_silicon`
        },
        {
            results: [{ id: 'ae2:printed_logic_processor', count: 2 }],
            ingredients: [{ tag: 'c:ingots/gold' }, { item: 'ae2:logic_processor_press' }],
            keep_held_item: true,
            id: `${id_prefix}printed_logic_processor`
        },
        {
            results: [{ id: 'ae2:printed_calculation_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/certus_quartz' }, { item: 'ae2:calculation_processor_press' }],
            keep_held_item: true,
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            results: [{ id: 'ae2:printed_engineering_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/diamond' }, { item: 'ae2:engineering_processor_press' }],
            keep_held_item: true,
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            results: [{ id: 'appflux:printed_energy_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/charged_redstone' }, { item: 'appflux:energy_processor_press' }],
            keep_held_item: true,
            id: `${id_prefix}printed_energy_processor`
        },
        {
            results: [{ id: 'advanced_ae:printed_quantum_processor', count: 2 }],
            ingredients: [{ tag: 'c:ingots/quantum_alloy' }, { item: 'advanced_ae:quantum_processor_press' }],
            keep_held_item: true,
            id: `${id_prefix}printed_quantum_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:deploying';
        event.custom(recipe).id(recipe.id);
    });
});
