ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/dissolution_chamber/';

    const recipes = [
        {
            input: [{ tag: 'c:gems/quartz' }, { tag: 'c:gems/charged_certus' }, { tag: 'c:dusts/redstone' }],
            inputFluid: { id: 'minecraft:water', amount: 100 },
            output: { count: 2, id: 'ae2:fluix_crystal' },
            processingTime: 100,
            id: `${id_prefix}fluix_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
