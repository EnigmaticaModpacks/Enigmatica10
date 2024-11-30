ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/tank/';

    const recipes = [];

    experience_fluids.forEach((fluid) => {
        recipes.push({
            fluid: { id: fluid, amount: 250 },
            input: { item: 'minecraft:glass_bottle' },
            output: { id: 'minecraft:experience_bottle', count: 1 },
            mode: 'fill',
            id: `${id_prefix}experience_bottle_from_${fluid.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:tank';
        event.custom(recipe).id(recipe.id);
    });
});
