ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            inputs: { fluid: { tag: 'c:fuels/diesel', amount: 1000 }, item: { tag: 'c:dusts/redstone' } },
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 1000 } },
            temperature: { min: 373 },
            id: `pneumaticcraft:thermo_plant/lubricant_from_diesel`
        },
        {
            inputs: { fluid: { tag: 'c:fuels/biodiesel', amount: 1000 }, item: { tag: 'c:dusts/redstone' } },
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 1000 } },
            temperature: { min: 373 },
            id: `pneumaticcraft:thermo_plant/lubricant_from_biodiesel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        event.custom(recipe).id(recipe.id);
    });
});
