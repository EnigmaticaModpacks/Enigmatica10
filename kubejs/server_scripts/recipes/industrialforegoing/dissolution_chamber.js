ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/dissolution_chamber/';

    const recipes = [
        {
            input: [{ tag: 'c:gems/quartz' }, { tag: 'c:gems/charged_certus' }, { tag: 'c:dusts/redstone' }],
            inputFluid: { fluid: 'minecraft:water', amount: 100 },
            output: { count: 2, id: 'ae2:fluix_crystal' },
            processingTime: 50,
            id: `${id_prefix}fluix_crystal`
        },
        {
            input: [{ tag: 'c:storage_blocks/redstone' }, { tag: 'c:gems/fluix' }, { tag: 'c:dusts/glowstone' }],
            inputFluid: { fluid: 'minecraft:water', amount: 100 },
            output: { count: 2, id: 'appflux:redstone_crystal' },
            processingTime: 50,
            id: `${id_prefix}redstone_crystal`
        }
    ];

    experience_fluids.forEach((fluid) => {
        recipes.push({
            input: [],
            inputFluid: { fluid: fluid, amount: 250 },
            output: { id: 'minecraft:experience_bottle', count: 1 },
            processingTime: 5,
            id: `${id_prefix}experience_bottle_from_${fluid.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
