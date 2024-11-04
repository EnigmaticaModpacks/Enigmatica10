ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/altar/';

    const recipes = [
        {
            input: { item: 'minecraft:calcite' },
            output: { id: 'minecraft:nautilus_shell' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 5000,
            time: 20,
            id: `${id_prefix}nautilus_shell`
        },
        {
            input: { item: 'minecraft:glow_berries' },
            output: { id: 'minecraft:glowstone_dust' },
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 5000,
            time: 20,
            id: `${id_prefix}glowstone_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        event.custom(recipe).id(recipe.id);
    });
});
