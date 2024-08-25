ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/mixer/';

    const recipes = [
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier1`, amount: 1, probability: 0.0 },
                { item: 'minecraft:coal_block', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t1', amount: 3 },
                { item: 'justdirethings:coal_t1', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t1`
        },
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier2`, amount: 1, probability: 0.0 },
                { item: 'justdirethings:coalblock_t1', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t2', amount: 3 },
                { item: 'justdirethings:coal_t2', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t2`
        },
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier3`, amount: 1, probability: 0.0 },
                { item: 'justdirethings:coalblock_t2', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t3', amount: 3 },
                { item: 'justdirethings:coal_t3', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t3`
        },
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier4`, amount: 1, probability: 0.0 },
                { item: 'justdirethings:coalblock_t3', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t4', amount: 3 },
                { item: 'justdirethings:coal_t4', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}coal_t4`
        },

        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier1`, amount: 1, probability: 0.0 },
                { item: 'minecraft:iron_block', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:raw_ferricore', amount: 3 },
                { item: 'justdirethings:raw_ferricore', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}raw_ferricore`
        },
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier2`, amount: 1, probability: 0.0 },
                { item: 'minecraft:gold_block', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:raw_blazegold', amount: 3 },
                { item: 'justdirethings:raw_blazegold', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}raw_blazegold`
        },
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier3`, amount: 1, probability: 0.0 },
                { item: 'minecraft:diamond_block', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:celestigem', amount: 3 },
                { item: 'justdirethings:celestigem', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}celestigem`
        },
        {
            item_inputs: [
                { item: `justdirethings:gooblock_tier4`, amount: 1, probability: 0.0 },
                { item: 'minecraft:netherite_block', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:raw_eclipsealloy', amount: 3 },
                { item: 'justdirethings:raw_eclipsealloy', amount: 1, probability: 0.5 }
            ],
            duration: 200,
            eu: 2,
            id: `${id_prefix}raw_eclipsealloy`
        },
        {
            item_inputs: [
                { item: 'ars_nouveau:abjuration_essence', amount: 1, probability: 0.0 },
                { item: `justdirethings:blazegold_ingot`, amount: 1 }
            ],
            item_outputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 4 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}polymorphic_catalyst`
        },
        {
            item_inputs: [{ item: `justdirethings:polymorphic_catalyst`, amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}polymorphic_fluid_source`
        },
        {
            item_inputs: [{ item: `justdirethings:coal_t2`, amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unrefined_t2_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}unrefined_t2_fluid_source`
        },
        {
            item_inputs: [{ item: `justdirethings:gooblock_tier2`, amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unrefined_t2_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:refined_t2_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}refined_t2_fluid_source`
        },

        {
            item_inputs: [{ item: `justdirethings:coal_t3`, amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unrefined_t3_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}unrefined_t3_fluid_source`
        },
        {
            item_inputs: [{ item: `justdirethings:gooblock_tier3`, amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unrefined_t3_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:refined_t3_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}refined_t3_fluid_source`
        },

        {
            item_inputs: [{ item: `justdirethings:coal_t4`, amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unrefined_t4_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}unrefined_t4_fluid_source`
        },
        {
            item_inputs: [{ item: `justdirethings:gooblock_tier4`, amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unrefined_t4_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:refined_t4_fluid_source', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `${id_prefix}refined_t4_fluid_source`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        event.custom(recipe).id(recipe.id);
    });
});
