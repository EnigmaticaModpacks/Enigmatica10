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
            ingredient: { item: 'ae2:printed_silicon' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { item: 'ae2:printed_logic_processor' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_silicon' },
            id: `${id_prefix}logic_processor`
        },
        {
            results: [{ id: 'ae2:calculation_processor' }],
            ingredient: { item: 'ae2:printed_silicon' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { item: 'ae2:printed_calculation_processor' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_silicon' },
            id: `${id_prefix}calculation_processor`
        },
        {
            results: [{ id: 'ae2:engineering_processor' }],
            ingredient: { item: 'ae2:printed_silicon' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { item: 'ae2:printed_engineering_processor' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_silicon' },
            id: `${id_prefix}engineering_processor`
        },
        {
            results: [{ id: 'appflux:energy_processor' }],
            ingredient: { item: 'ae2:printed_silicon' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { item: 'appflux:printed_energy_processor' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_silicon' },
            id: `${id_prefix}energy_processor`
        },
        {
            results: [{ id: 'advanced_ae:quantum_processor' }],
            ingredient: { item: 'ae2:printed_silicon' },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { tag: 'c:dusts/redstone' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'ae2:printed_silicon' }, { item: 'advanced_ae:printed_quantum_processor' }],
                    results: [{ id: 'ae2:printed_silicon' }]
                }
            ],
            loops: 1,
            transitional_item: { id: 'ae2:printed_silicon' },
            id: `${id_prefix}quantum_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        event.custom(recipe).id(recipe.id);
    });
});
