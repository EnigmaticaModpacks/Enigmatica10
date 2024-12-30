ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/assembler/';
    const recipes = [
        {
            results: [{ id: 'ae2:printed_silicon', count: 2 }],
            ingredients: [{ tag: 'c:silicon' }],
            time: 160,
            id: `${id_prefix}printed_silicon`
        },
        {
            results: [{ id: 'ae2:printed_calculation_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/certus_quartz' }],
            time: 160,
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            results: [{ id: 'ae2:calculation_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'ae2:printed_calculation_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}calculation_processor`
        },
        {
            results: [{ id: 'ae2:printed_logic_processor', count: 2 }],
            ingredients: [{ tag: 'c:ingots/gold' }],
            time: 160,
            id: `${id_prefix}printed_logic_processor`
        },
        {
            results: [{ id: 'ae2:logic_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'ae2:printed_logic_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}logic_processor`
        },
        {
            results: [{ id: 'ae2:printed_engineering_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/diamond' }],
            time: 160,
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            results: [{ id: 'ae2:engineering_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'ae2:printed_engineering_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}engineering_processor`
        },
        {
            results: [{ id: 'advanced_ae:printed_quantum_processor', count: 2 }],
            ingredients: [{ tag: 'c:ingots/quantum_alloy' }],
            time: 160,
            id: `${id_prefix}printed_quantum_processor`
        },
        {
            results: [{ id: 'advanced_ae:quantum_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'advanced_ae:printed_quantum_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}quantum_processor`
        },
        {
            results: [{ id: 'ae2:flawless_budding_quartz', count: 1 }],
            ingredients: [
                { item: 'oritech:enderic_compound' },
                { item: 'oritech:overcharged_crystal' },
                { tag: 'c:gems/certus_quartz' },
                { tag: 'c:gems/certus_quartz' }
            ],
            time: 160,
            id: `${id_prefix}flawless_budding_quartz`
        },
        {
            results: [{ id: 'appflux:printed_energy_processor', count: 2 }],
            ingredients: [{ item: 'appflux:charged_redstone' }],
            time: 160,
            id: `${id_prefix}printed_energy_processor`
        },
        {
            results: [{ id: 'appflux:energy_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'appflux:printed_energy_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}energy_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:assembler';

        if (!recipe.fluidInputVariant) {
            recipe.fluidInputVariant = 'minecraft:empty';
            recipe.fluidInputAmount = 0;
        }
        if (!recipe.fluidOutputVariant) {
            recipe.fluidOutputVariant = 'minecraft:empty';
            recipe.fluidOutputAmount = 0;
        }

        event.custom(recipe).id(recipe.id);
    });
});
