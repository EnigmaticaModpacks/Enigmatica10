ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/fluid_extractor/';

    const recipes = [
        {
            input: { item: 'evilcraft:undead_log' },
            output: { id: 'evilcraft:blood', amount: 4 },
            result: {
                Name: 'evilcraft:undead_log_stripped',
                Properties: { axis: 'y' }
            },
            breakChance: 0.01,
            defaultRecipe: false,
            id: `${id_prefix}blood_from_log`
        },
        {
            input: { tag: 'evilcraft:undead_logs' },
            output: { id: 'evilcraft:blood', amount: 4 },
            result: { Name: 'minecraft:air' },
            breakChance: 0.01,
            defaultRecipe: true,
            id: `${id_prefix}blood_from_stripped`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:fluid_extractor';
        event.custom(recipe).id(recipe.id);
    });
});
