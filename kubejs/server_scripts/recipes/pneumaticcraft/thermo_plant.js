ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            inputs: { fluid: { tag: 'c:diesel', amount: 1000 }, item: { tag: 'c:dusts/redstone' } },
            outputs: { fluid_output: { id: 'modern_industrialization:lubricant', amount: 1000 } },
            temperature: { min: 373 },
            id: `pneumaticcraft:thermo_plant/lubricant_from_diesel`
        },
        {
            inputs: { fluid: { tag: 'c:biodiesel', amount: 1000 }, item: { tag: 'c:dusts/redstone' } },
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
            temperature: { max: 333, min: 303 },
            id: `${id_prefix}yeast_culture`
        },
        {
            inputs: {
                fluid: { fluid: 'pneumaticcraft:vegetable_oil', amount: 20 },
                item: { item: 'actuallyadditions:canola' }
            },
            outputs: { fluid_output: { id: 'actuallyadditions:canola_oil', amount: 160 } },
            temperature: { min: 273 },
            pressure: 2.0,
            id: `${id_prefix}canola_oil`
        },
        {
            inputs: {
                fluid: { fluid: 'actuallyadditions:canola_oil', amount: 1000 }
            },
            outputs: { fluid_output: { id: 'actuallyadditions:refined_canola_oil', amount: 1000 } },
            speed: 0.1,
            temperature: { max: 333, min: 303 },
            id: `${id_prefix}refined_canola_oil`
        },
        {
            inputs: {
                fluid: { fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 },
                item: { item: 'actuallyadditions:crystallized_canola_seed' }
            },
            outputs: { fluid_output: { id: 'actuallyadditions:crystallized_oil', amount: 1000 } },
            temperature: { min: 273 },
            id: `${id_prefix}crystallized_oil`
        },
        {
            inputs: {
                fluid: { fluid: 'actuallyadditions:crystallized_oil', amount: 1000 },
                item: { item: 'actuallyadditions:empowered_canola_seed' }
            },
            outputs: { fluid_output: { id: 'actuallyadditions:empowered_oil', amount: 1000 } },
            temperature: { min: 273 },
            id: `${id_prefix}empowered_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:thermo_plant`;
        event.custom(recipe).id(recipe.id);
    });
});
