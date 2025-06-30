ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/blueprint/';

    const recipes = [
        {
            result: { id: 'ae2:logic_processor', count: 1 },
            inputs: [
                { item: 'ae2:printed_logic_processor' },
                { item: 'ae2:printed_silicon' },
                { tag: 'c:dusts/redstone' }
            ],
            category: 'components',
            id: `${id_prefix}logic_processor`
        },
        {
            result: { id: 'ae2:calculation_processor', count: 1 },
            inputs: [
                { item: 'ae2:printed_calculation_processor' },
                { item: 'ae2:printed_silicon' },
                { tag: 'c:dusts/redstone' }
            ],
            category: 'components',
            id: `${id_prefix}calculation_processor`
        },
        {
            result: { id: 'ae2:engineering_processor', count: 1 },
            inputs: [
                { item: 'ae2:printed_engineering_processor' },
                { item: 'ae2:printed_silicon' },
                { tag: 'c:dusts/redstone' }
            ],
            category: 'components',
            id: `${id_prefix}engineering_processor`
        },
        {
            result: { id: 'appflux:energy_processor', count: 1 },
            inputs: [
                { item: 'appflux:printed_energy_processor' },
                { item: 'ae2:printed_silicon' },
                { tag: 'c:dusts/redstone' }
            ],
            category: 'components',
            id: `${id_prefix}energy_processor`
        },
        {
            result: { id: 'advanced_ae:quantum_processor', count: 1 },
            inputs: [
                { item: 'advanced_ae:printed_quantum_processor' },
                { item: 'ae2:printed_silicon' },
                { tag: 'c:dusts/redstone' }
            ],
            category: 'components',
            id: `${id_prefix}quantum_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blueprint';
        event.custom(recipe).id(recipe.id);
    });
});
