ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/metal_press/';

    const recipes = [
        {
            result: { id: 'ae2:printed_silicon', count: 2 },
            input: { tag: 'c:silicon' },
            energy: 3200,
            mold: 'ae2:silicon_press',
            id: `${id_prefix}printed_silicon`
        },
        {
            result: { id: 'ae2:printed_logic_processor', count: 2 },
            input: { tag: 'c:ingots/gold' },
            energy: 3200,
            mold: 'ae2:logic_processor_press',
            id: `${id_prefix}printed_logic_processor`
        },
        {
            result: { id: 'ae2:printed_calculation_processor', count: 2 },
            input: { tag: 'c:gems/certus_quartz' },
            energy: 3200,
            mold: 'ae2:calculation_processor_press',
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            result: { id: 'ae2:printed_engineering_processor', count: 2 },
            input: { tag: 'c:gems/diamond' },
            energy: 3200,
            mold: 'ae2:engineering_processor_press',
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            result: { id: 'appflux:printed_energy_processor', count: 2 },
            input: { tag: 'c:gems/charged_redstone' },
            energy: 3200,
            mold: 'appflux:energy_processor_press',
            id: `${id_prefix}printed_energy_processor`
        },
        {
            result: { id: 'advanced_ae:printed_quantum_processor', count: 2 },
            input: { tag: 'c:ingots/quantum_alloy' },
            energy: 3200,
            mold: 'advanced_ae:quantum_processor_press',
            id: `${id_prefix}printed_quantum_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:metal_press';
        event.custom(recipe).id(recipe.id);
    });
});
