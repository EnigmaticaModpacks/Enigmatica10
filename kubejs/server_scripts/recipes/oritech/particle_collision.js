ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/particle_collision/';
    const recipes = [
        {
            results: [{ id: 'ae2:singularity', count: 1 }],
            ingredients: [{ item: 'oritech:overcharged_crystal' }, { item: 'ae2:matter_ball' }],
            time: 30000,
            id: `${id_prefix}singularity`
        },
        {
            results: [{ id: 'mekanism:pellet_antimatter', count: 1 }],
            ingredients: [{ item: 'minecraft:dragon_egg' }, { item: 'ae2:singularity' }],
            time: 30000,
            id: `${id_prefix}pellet_antimatter`
        },
        {
            results: [{ id: 'minecraft:heart_of_the_sea', count: 1 }],
            ingredients: [{ item: 'minecraft:pufferfish' }, { tag: 'c:ingots/neptunium' }],
            time: 500,
            id: `${id_prefix}heart_of_the_sea`
        },
        {
            results: [{ id: 'aquaculture:neptunium_nugget', count: 1 }],
            ingredients: [{ tag: 'c:nuggets/copper' }, { tag: 'c:ingots/uraninite' }],
            time: 500,
            id: `${id_prefix}neptunium_nugget`
        },
        {
            results: [{ id: 'the_bumblezone:royal_jelly_bottle', count: 1 }],
            ingredients: [{ item: 'minecraft:honey_bottle' }, { item: 'the_bumblezone:honey_crystal_shards' }],
            time: 5000,
            id: `${id_prefix}royal_jelly_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:particle_collision';

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
