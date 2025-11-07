ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/quarry/';

    const recipes = [
        {
            item_inputs: [{ item: 'modern_industrialization:bronze_drill', probability: 0.04 }],
            duration: 600,
            eu: 4,
            item_outputs: [
                { item: 'minecraft:iron_ore', probability: 0.4 },
                { item: 'minecraft:coal_ore', probability: 0.4 },
                { item: 'modern_industrialization:lignite_coal_ore', probability: 0.24 },
                { item: 'minecraft:copper_ore', probability: 0.2 },
                { item: 'modern_industrialization:tin_ore', probability: 0.3 },
                { item: 'minecraft:gold_ore', probability: 0.15 },
                { item: 'minecraft:redstone_ore', probability: 0.2 },
                { item: 'mekanism:osmium_ore', probability: 0.12 },
                { item: 'create:zinc_ore', probability: 0.1 }
            ],
            id: `modern_industrialization:quarry/bronze`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:quarry';
        event.custom(recipe).id(recipe.id);
    });
});
