ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/chemical_reactor/';

    const recipes = [
        {
            item_inputs: [{ tag: 'c:foods/raw_meat', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:hydrochloric_acid', amount: 10 }],
            item_outputs: [{ item: 'minecraft:rotten_flesh', amount: 1 }],
            eu: 4,
            duration: 100,
            id: `${id_prefix}rotten_flesh`
        },
        {
            item_inputs: [
                { item: 'actuallyadditions:crystallized_canola_seed', amount: 1 },
                { item: 'actuallyadditions:canola_seeds', amount: 4 }
            ],
            item_outputs: [{ item: 'actuallyadditions:empowered_canola_seed', amount: 1 }],
            eu: 32,
            duration: 60,
            id: `${id_prefix}empowered_canola_seed`
        },
        {
            fluid_inputs: [
                { fluid: 'modern_industrialization:sulfuric_crude_oil', amount: 12000 },
                { fluid: 'modern_industrialization:hydrogen', amount: 2000 }
            ],
            fluid_outputs: [
                { fluid: 'pneumaticcraft:oil', amount: 12000 },
                { fluid: 'modern_industrialization:sulfuric_acid', amount: 2000 }
            ],
            duration: 400,
            eu: 16,
            id: `modern_industrialization:petrochem/sulfuric_purification/crude_oil`
        }
    ];

    copper_types.forEach((type) => {
        oxides.forEach((oxide, index) => {
            if (index < oxides.length - 1) {
                recipes.push({
                    item_inputs: [{ item: `create:${oxide}${type}`, amount: 1 }],
                    fluid_inputs: [{ fluid: 'modern_industrialization:oxygen', amount: 100 }],
                    item_outputs: [{ item: `create:${oxides[index + 1]}${type}`, amount: 1 }],
                    duration: 100,
                    eu: 8,
                    id: `${id_prefix}${oxides[index + 1]}${type}`
                });
            }
            recipes.push({
                item_inputs: [
                    { item: `create:${oxide}${type}`, amount: 1 },
                    { item: 'modern_industrialization:wax', amount: 1 }
                ],
                item_outputs: [{ item: `create:waxed_${oxide}${type}`, amount: 1 }],
                duration: 100,
                eu: 8,
                id: `${id_prefix}waxed_${oxide}${type}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:chemical_reactor';
        event.custom(recipe).id(recipe.id);
    });
});
