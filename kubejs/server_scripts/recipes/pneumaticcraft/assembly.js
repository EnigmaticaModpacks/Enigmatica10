ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/assembly/';

    const recipes = [
        {
            input: { tag: 'c:gems/certus_quartz', count: 1 },
            result: { id: 'ae2:printed_calculation_processor', count: 2 },
            program: 'laser',
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            input: { tag: 'c:gems/diamond', count: 1 },
            result: { id: 'ae2:printed_engineering_processor', count: 2 },
            program: 'laser',
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            input: { tag: 'c:ingots/gold', count: 1 },
            result: { id: 'ae2:printed_logic_processor', count: 2 },
            program: 'laser',
            id: `${id_prefix}printed_logic_processor`
        },
        {
            input: { tag: 'c:silicon', count: 1 },
            result: { id: 'ae2:printed_silicon', count: 2 },
            program: 'drill',
            id: `${id_prefix}printed_silicon`
        },
        {
            input: { tag: 'c:storage_blocks/iron', count: 1 },
            result: { id: 'modularrouters:modular_router', count: 6 },
            program: 'drill',
            id: `${id_prefix}modular_router`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:assembly_${recipe.program}`;
        event.custom(recipe).id(recipe.id);
    });
});
