ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/blast_furnace_fuel/';

    const recipes = [
        {
            input: { item: 'occultism:mining_dim_core' },
            time: 12000
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
