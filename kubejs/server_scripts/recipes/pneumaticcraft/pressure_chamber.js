ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/pressure_chamber/';

    const recipes = [
        {
            inputs: [
                { item: 'ae2:printed_logic_processor', count: 1 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'ae2:printed_silicon', count: 1 }
            ],
            results: [{ id: 'ae2:logic_processor', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}logic_processor`
        },
        {
            inputs: [
                { item: 'ae2:printed_calculation_processor', count: 1 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'ae2:printed_silicon', count: 1 }
            ],
            results: [{ id: 'ae2:calculation_processor', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}calculation_processor`
        },
        {
            inputs: [
                { item: 'ae2:printed_engineering_processor', count: 1 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'ae2:printed_silicon', count: 1 }
            ],
            results: [{ id: 'ae2:engineering_processor', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}engineering_processor`
        },
        {
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 2 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'ae2:printed_silicon', count: 1 }
            ],
            results: [{ id: 'laserio:logic_chip', count: 4 }],
            pressure: 1.0,
            id: `${id_prefix}logic_chip`
        },
        {
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'minecraft:paper', count: 3 }
            ],
            results: [{ id: 'modularrouters:blank_module', count: 12 }],
            pressure: 1.0,
            id: `${id_prefix}blank_module`
        },
        {
            inputs: [
                { tag: 'pneumaticcraft:wiring', count: 3 },
                { tag: 'c:gems/lapis', count: 1 },
                { item: 'minecraft:paper', count: 4 }
            ],
            results: [{ id: 'modularrouters:blank_upgrade', count: 8 }],
            pressure: 1.0,
            id: `${id_prefix}blank_upgrade`
        },
        {
            inputs: [
                { item: 'minecraft:snow_block', count: 1 },
                { tag: 'c:buckets/empty', count: 1 }
            ],
            results: [{ id: 'minecraft:powder_snow_bucket', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}powder_snow_bucket`
        },
        {
            inputs: [{ item: 'naturesaura:bottle_two_the_rebottling', count: 1 }],
            results: [{ id: 'naturesaura:vacuum_bottle', count: 1 }],
            pressure: -0.75,
            id: `${id_prefix}vacuum_bottle`
        },
        {
            inputs: [
                { item: 'advanced_ae:printed_quantum_processor', count: 1 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'ae2:printed_silicon', count: 1 }
            ],
            results: [{ id: 'advanced_ae:quantum_processor', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}quantum_processor`
        },
        {
            inputs: [
                { item: 'appflux:printed_energy_processor', count: 1 },
                { tag: 'c:dusts/redstone', count: 1 },
                { item: 'ae2:printed_silicon', count: 1 }
            ],
            results: [{ id: 'appflux:energy_processor', count: 1 }],
            pressure: 1.0,
            id: `${id_prefix}energy_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:pressure_chamber`;
        event.custom(recipe).id(recipe.id);
    });
});
