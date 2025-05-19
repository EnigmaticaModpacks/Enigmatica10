ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/mixer/';

    const recipes = [
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier1', amount: 1, probability: 0.0 },
                { item: 'minecraft:coal', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t1', amount: 3 },
                { item: 'justdirethings:coal_t1', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 2,
            id: `${id_prefix}coal_t1`
        },
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier2', amount: 1, probability: 0.0 },
                { tag: 'c:gems/primal_coal', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t2', amount: 3 },
                { item: 'justdirethings:coal_t2', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 4,
            id: `${id_prefix}coal_t2`
        },
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier3', amount: 1, probability: 0.0 },
                { tag: 'c:gems/blaze_ember', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t3', amount: 3 },
                { item: 'justdirethings:coal_t3', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 8,
            id: `${id_prefix}coal_t3`
        },
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier4', amount: 1, probability: 0.0 },
                { tag: 'c:gems/voidflame', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:coal_t4', amount: 3 },
                { item: 'justdirethings:coal_t4', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 8,
            id: `${id_prefix}coal_t4`
        },

        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier1', amount: 1, probability: 0.0 },
                { tag: 'c:ingots/iron', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:raw_ferricore', amount: 3 },
                { item: 'justdirethings:raw_ferricore', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 2,
            id: `${id_prefix}raw_ferricore`
        },
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier2', amount: 1, probability: 0.0 },
                { tag: 'c:ingots/gold', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:raw_blazegold', amount: 3 },
                { item: 'justdirethings:raw_blazegold', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 4,
            id: `${id_prefix}raw_blazegold`
        },
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier3', amount: 1, probability: 0.0 },
                { tag: 'c:gems/diamond', amount: 9 }
            ],
            item_outputs: [
                { item: 'justdirethings:celestigem', amount: 3 },
                { item: 'justdirethings:celestigem', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 8,
            id: `${id_prefix}celestigem`
        },
        {
            item_inputs: [
                { tag: 'justdirethings:goo/tier4', amount: 1, probability: 0.0 },
                { tag: 'c:ingots/netherite', amount: 1 }
            ],
            item_outputs: [
                { item: 'justdirethings:raw_eclipsealloy', amount: 3 },
                { item: 'justdirethings:raw_eclipsealloy', amount: 1, probability: 0.5 }
            ],
            duration: 100,
            eu: 8,
            id: `${id_prefix}raw_eclipsealloy`
        },
        {
            item_inputs: [
                { item: 'ars_nouveau:abjuration_essence', amount: 1, probability: 0.0 },
                { tag: 'c:ingots/blazegold', amount: 1 }
            ],
            item_outputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 4 }],
            duration: 100,
            eu: 2,
            id: `${id_prefix}polymorphic_catalyst`
        },
        {
            item_inputs: [{ item: 'justdirethings:polymorphic_catalyst', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 2,
            id: `${id_prefix}polymorphic_fluid_source`
        },
        {
            item_inputs: [{ tag: 'c:gems/blaze_ember', amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unrefined_t2_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 4,
            id: `${id_prefix}unrefined_t2_fluid_source`
        },
        {
            item_inputs: [{ tag: 'justdirethings:goo/tier2', amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unrefined_t2_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:refined_t2_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 4,
            id: `${id_prefix}refined_t2_fluid_source`
        },

        {
            item_inputs: [{ tag: 'c:gems/voidflame', amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:refined_t2_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unrefined_t3_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}unrefined_t3_fluid_source`
        },
        {
            item_inputs: [{ tag: 'justdirethings:goo/tier3', amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unrefined_t3_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:refined_t3_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}refined_t3_fluid_source`
        },

        {
            item_inputs: [{ tag: 'c:gems/eclipse_ember', amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:refined_t3_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unrefined_t4_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}unrefined_t4_fluid_source`
        },
        {
            item_inputs: [{ tag: 'justdirethings:goo/tier4', amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unrefined_t4_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:refined_t4_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}refined_t4_fluid_source`
        },

        {
            item_inputs: [{ item: 'justdirethings:time_crystal', amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:time_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}time_fluid_source`
        },

        {
            item_inputs: [
                { item: 'minecraft:chorus_fruit', amount: 4 },
                { tag: 'c:gems/lapis', amount: 4 }
            ],
            item_outputs: [{ item: 'justdirethings:portal_fluid_catalyst', amount: 1 }],
            duration: 100,
            eu: 2,
            id: `${id_prefix}portal_fluid_catalyst`
        },
        {
            item_inputs: [{ item: 'justdirethings:portal_fluid_catalyst', amount: 1 }],
            fluid_inputs: [{ fluid: 'justdirethings:polymorphic_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:unstable_portal_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}unstable_portal_fluid_source`
        },
        {
            item_inputs: [{ tag: 'justdirethings:goo/tier3', amount: 1, probability: 0.0 }],
            fluid_inputs: [{ fluid: 'justdirethings:unstable_portal_fluid_source', amount: 1000 }],
            fluid_outputs: [{ fluid: 'justdirethings:portal_fluid_source', amount: 1000 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}portal_fluid_source`
        },
        {
            item_inputs: [{ tag: 'c:sugars', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:sugar_solution', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `modern_industrialization:oil/mixer/sugar_solution`
        },
        {
            item_inputs: [{ tag: 'c:dusts/redstone', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:plant_oil', amount: 1000 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:lubricant', amount: 1000 }],
            duration: 200,
            eu: 2,
            id: `modern_industrialization:oil/mixer/lubricant_from_plant_oil`
        },
        {
            item_inputs: [{ item: 'actuallyadditions:crystallized_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:refined_canola_oil', amount: 1000 }],
            fluid_outputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            duration: 20,
            eu: 1,
            id: `${id_prefix}crystallized_oil`
        },
        {
            item_inputs: [{ item: 'actuallyadditions:empowered_canola_seed', amount: 1 }],
            fluid_inputs: [{ fluid: 'actuallyadditions:crystallized_oil', amount: 1000 }],
            fluid_outputs: [{ fluid: 'actuallyadditions:empowered_oil', amount: 1000 }],
            duration: 20,
            eu: 1,
            id: `${id_prefix}empowered_oil`
        },
        {
            item_inputs: [
                { tag: 'c:storage_blocks/redstone', amount: 1 },
                { tag: 'c:gems/fluix', amount: 1 },
                { tag: 'c:dusts/glowstone', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 1000, probability: 0.0 }],
            item_outputs: [{ item: 'appflux:redstone_crystal', amount: 1 }],
            duration: 100,
            eu: 8,
            id: `${id_prefix}redstone_crystal`
        }
    ];

    ae_washables.forEach((washable) => {
        recipes.push({
            item_inputs: [{ tag: `ae2:${washable}_cable`, amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 100 }],
            item_outputs: [{ item: `ae2:fluix_${washable}_cable`, amount: 1 }],
            duration: 100,
            eu: 2,
            id: `${id_prefix}fluix_${washable}_cable_washing`
        });
    });

    copper_types.forEach((type) => {
        oxides.forEach((oxide) => {
            recipes.push({
                item_inputs: [{ item: `create:${oxide}${type}`, amount: 1 }],
                fluid_inputs: [{ tag: 'c:honey', amount: 1 }],
                item_outputs: [{ item: `create:waxed_${oxide}${type}`, amount: 1 }],
                duration: 100,
                eu: 2,
                id: `${id_prefix}waxed_${oxide}${type}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        event.custom(recipe).id(recipe.id);
    });
});
