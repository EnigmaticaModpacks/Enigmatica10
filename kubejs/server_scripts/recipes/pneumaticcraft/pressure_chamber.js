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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:pressure_chamber`;
        event.custom(recipe).id(recipe.id);
    });
});
