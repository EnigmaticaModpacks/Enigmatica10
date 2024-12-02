ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/liquid_fuel/';

    const recipes = [
        {
            fuel: 'justdirethings:refined_t2_fluid_source',
            fe_per_mb: 450,
            fe_per_tick: 100,
            id: `${id_prefix}refined_t2_fluid_source`
        },
        {
            fuel: 'justdirethings:refined_t3_fluid_source',
            fe_per_mb: 1300,
            fe_per_tick: 130,
            id: `${id_prefix}refined_t3_fluid_source`
        },
        {
            fuel: 'justdirethings:refined_t4_fluid_source',
            fe_per_mb: 4000,
            fe_per_tick: 160,
            id: `${id_prefix}refined_t4_fluid_source`
        },

        {
            fuel: 'oritech:still_oil',
            fe_per_mb: 1300,
            fe_per_tick: 130,
            id: `${id_prefix}still_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:liquid_fuel';
        let burn_amount = 50;
        recipe.fuel = { id: recipe.fuel, amount: burn_amount };
        recipe.total_energy = recipe.fe_per_mb * burn_amount;
        recipe.burn_time = recipe.total_energy / recipe.fe_per_tick;
        event.custom(recipe).id(recipe.id);
    });
});
