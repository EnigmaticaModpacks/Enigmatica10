ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/particle_collision/';
    const recipes = [
        {
            results: [{ id: 'ae2:singularity', count: 1 }],
            ingredients: [{ item: 'oritech:overcharged_crystal' }, { item: 'ae2:matter_ball' }],
            time: 15000,
            id: `${id_prefix}singularity`
        },
        {
            results: [{ id: 'mekanism:pellet_antimatter', count: 1 }],
            ingredients: [{ item: 'minecraft:dragon_egg' }, { item: 'ae2:singularity' }],
            time: 15000,
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
            ingredients: [{ item: 'minecraft:honey_bottle' }, { item: 'irons_spellbooks:arcane_essence' }],
            time: 15000,
            id: `${id_prefix}royal_jelly_bottle`
        },
        {
            results: [{ id: 'minecraft:crying_obsidian', count: 1 }],
            ingredients: [{ tag: 'c:nuggets/neptunium' }, { item: 'minecraft:obsidian' }],
            time: 500,
            id: `${id_prefix}crying_obsidian`
        },
        {
            results: [{ id: 'replication:raw_replica', count: 2 }],
            ingredients: [{ tag: 'c:raw_materials/uraninite' }, { tag: 'c:raw_materials/tungsten' }],
            time: 5000,
            id: `${id_prefix}raw_replica`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:particle_collision';
        event.custom(recipe).id(recipe.id);
    });
});
