ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/solid_fuel/';

    const recipes = [
        {
            item: { tag: 'c:gems/lignite_coal' },
            burn_time: 1600,
            total_energy: 32000,
            id: `${id_prefix}lignite_coal`
        },
        {
            item: { item: 'c:storage_blocks/lignite_coal' },
            burn_time: 16000,
            total_energy: 320000,
            id: `${id_prefix}lignite_coal_block`
        },
        {
            item: { tag: 'c:dusts/charcoal' },
            burn_time: 1600,
            total_energy: 32000,
            id: `${id_prefix}charcoal_dust`
        },
        {
            item: { tag: 'c:dusts/coal' },
            burn_time: 1600,
            total_energy: 32000,
            id: `${id_prefix}coal_dust`
        },
        {
            item: { tag: 'c:dusts/lignite_coal' },
            burn_time: 1600,
            total_energy: 32000,
            id: `${id_prefix}lignite_coal_dust`
        },
        {
            item: { tag: 'c:tiny_dusts/coal' },
            burn_time: 1600,
            total_energy: 32000,
            id: `${id_prefix}coal_tiny_dust`
        },
        {
            item: { tag: 'c:tiny_dusts/lignite_coal' },
            burn_time: 1600,
            total_energy: 32000,
            id: `${id_prefix}lignite_coal_tiny_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:solid_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
