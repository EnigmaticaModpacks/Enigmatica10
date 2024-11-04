ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/solid_fuel/';

    const recipes = [
        {
            item: { tag: 'c:gems/lignite_coal' },
            fuel_quality: 8,
            id: `${id_prefix}lignite_coal`
        },
        {
            item: { tag: 'c:storage_blocks/charcoal' },
            fuel_quality: 80,
            id: `${id_prefix}charcoal_block`
        },
        {
            item: { tag: 'c:storage_blocks/lignite_coal' },
            fuel_quality: 80,
            id: `${id_prefix}lignite_coal_block`
        },
        {
            item: { tag: 'c:dusts/charcoal' },
            fuel_quality: 8,
            id: `${id_prefix}charcoal_dust`
        },
        {
            item: { tag: 'c:dusts/coal' },
            fuel_quality: 8,
            id: `${id_prefix}coal_dust`
        },
        {
            item: { tag: 'c:dusts/lignite_coal' },
            fuel_quality: 8,
            id: `${id_prefix}lignite_coal_dust`
        },
        {
            item: { tag: 'c:tiny_dusts/coal' },
            fuel_quality: 0.8,
            id: `${id_prefix}coal_tiny_dust`
        },
        {
            item: { tag: 'c:tiny_dusts/lignite_coal' },
            fuel_quality: 0.8,
            id: `${id_prefix}lignite_coal_tiny_dust`
        },
        {
            item: { item: 'evilcraft:blood_waxed_coal' },
            fuel_quality: 16,
            id: `${id_prefix}blood_waxed_coal`
        },
        {
            item: { tag: 'c:gems/primal_coal' },
            fuel_quality: 24,
            id: `${id_prefix}primal_coal`
        },
        {
            item: { tag: 'c:gems/blaze_ember' },
            fuel_quality: 72,
            id: `${id_prefix}blaze_ember`
        },
        {
            item: { tag: 'c:gems/voidflame' },
            fuel_quality: 216,
            id: `${id_prefix}voidflame`
        },
        {
            item: { tag: 'c:gems/eclipse_ember' },
            fuel_quality: 648,
            id: `${id_prefix}eclipse_ember`
        },
        {
            item: { tag: 'c:storage_blocks/primal_coal' },
            fuel_quality: 240,
            id: `${id_prefix}primal_coal_block`
        },
        {
            item: { tag: 'c:storage_blocks/blaze_ember' },
            fuel_quality: 720,
            id: `${id_prefix}blaze_ember_block`
        },
        {
            item: { tag: 'c:storage_blocks/voidflame' },
            fuel_quality: 2160,
            id: `${id_prefix}voidflame_block`
        },
        {
            item: { tag: 'c:storage_blocks/eclipse_ember' },
            fuel_quality: 6480,
            id: `${id_prefix}eclipse_ember_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:solid_fuel';
        if (recipe.fuel_quality) {
            recipe.burn_time = recipe.fuel_quality * 200;
            recipe.total_energy = recipe.fuel_quality * 4000;
        }
        event.custom(recipe).id(recipe.id);
    });
});
