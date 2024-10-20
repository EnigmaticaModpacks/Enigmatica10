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
        },
        {
            inputs: {
                fluid: { fluid: 'minecraft:water', amount: 1000 },
                item: { item: 'naturesaura:aura_mushroom' }
            },
            outputs: { fluid_output: { id: 'pneumaticcraft:yeast_culture', amount: 1000 } },
            speed: 0.1,
            temperature: { max: 333, min: 303 }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        event.custom(recipe).id(recipe.id);
    });
});
