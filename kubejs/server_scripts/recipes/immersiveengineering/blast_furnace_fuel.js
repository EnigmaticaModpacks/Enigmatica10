ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/blast_furnace_fuel/';

    const recipes = [
        {
            input: { tag: 'c:storage_blocks/coke' },
            time: 12000,
            id: `${id_prefix}coke_block`
        },
        {
            input: { item: 'occultism:mining_dim_core' },
            time: 12000,
            id: `${id_prefix}mining_dim_core`
        },
        {
            input: { tag: 'c:gems/primal_coal' },
            time: 900,
            id: `${id_prefix}primal_coal`
        },
        {
            input: { tag: 'c:storage_blocks/primal_coal' },
            time: 9000,
            id: `${id_prefix}primal_coal_block`
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            time: 2700,
            id: `${id_prefix}blaze_ember`
        },
        {
            input: { tag: 'c:storage_blocks/blaze_ember' },
            time: 27000,
            id: `${id_prefix}blaze_ember_block`
        },
        {
            input: { tag: 'c:gems/voidflame' },
            time: 8100,
            id: `${id_prefix}voidflame`
        },
        {
            input: { tag: 'c:storage_blocks/voidflame' },
            time: 81000,
            id: `${id_prefix}voidflame_block`
        },
        {
            input: { tag: 'c:gems/eclipse_ember' },
            time: 24300,
            id: `${id_prefix}eclipse_ember`
        },
        {
            input: { tag: 'c:storage_blocks/eclipse_ember' },
            time: 243000,
            id: `${id_prefix}eclipse_ember_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
