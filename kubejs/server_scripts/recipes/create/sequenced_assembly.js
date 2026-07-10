ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/sequenced_assembly/';

    const recipes = [
        {
            results: [{ id: 'create:precision_mechanism' }],
            ingredient: { tag: 'c:plates/gold' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'create:cogwheel' }],
                    results: [{ id: 'create:incomplete_precision_mechanism' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'create:large_cogwheel' }],
                    results: [{ id: 'create:incomplete_precision_mechanism' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { tag: 'c:nuggets/iron' }],
                    results: [{ id: 'create:incomplete_precision_mechanism' }]
                }
            ],
            loops: 5,
            transitional_item: { id: 'create:incomplete_precision_mechanism' },
            id: 'create:sequenced_assembly/precision_mechanism'
        },
        {
            results: [{ id: 'ae2:logic_processor' }],
            ingredient: { item: 'ae2:printed_logic_processor' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_logic_processor' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_logic_processor' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_logic_processor' }, { item: 'ae2:printed_silicon' }],
                    results: [{ id: 'ae2:printed_logic_processor' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_logic_processor' },
            id: `${id_prefix}logic_processor`
        },
        {
            results: [{ id: 'ae2:calculation_processor' }],
            ingredient: { item: 'ae2:printed_calculation_processor' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_calculation_processor' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_calculation_processor' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_calculation_processor' }, { item: 'ae2:printed_silicon' }],
                    results: [{ id: 'ae2:printed_calculation_processor' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_calculation_processor' },
            id: `${id_prefix}calculation_processor`
        },
        {
            results: [{ id: 'ae2:engineering_processor' }],
            ingredient: { item: 'ae2:printed_engineering_processor' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_engineering_processor' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_engineering_processor' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_engineering_processor' }, { item: 'ae2:printed_silicon' }],
                    results: [{ id: 'ae2:printed_engineering_processor' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_engineering_processor' },
            id: `${id_prefix}engineering_processor`
        },
        {
            results: [{ id: 'appflux:energy_processor' }],
            ingredient: { item: 'appflux:printed_energy_processor' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'appflux:printed_energy_processor' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'appflux:printed_energy_processor' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'appflux:printed_energy_processor' }, { item: 'ae2:printed_silicon' }],
                    results: [{ id: 'appflux:printed_energy_processor' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'appflux:printed_energy_processor' },
            id: `${id_prefix}energy_processor`
        },
        {
            results: [{ id: 'advanced_ae:quantum_processor' }],
            ingredient: { item: 'advanced_ae:printed_quantum_processor' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'advanced_ae:printed_quantum_processor' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'advanced_ae:printed_quantum_processor' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'advanced_ae:printed_quantum_processor' }, { item: 'ae2:printed_silicon' }],
                    results: [{ id: 'advanced_ae:printed_quantum_processor' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'advanced_ae:printed_quantum_processor' },
            id: `${id_prefix}quantum_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        event.custom(recipe).id(recipe.id);
    });
});
