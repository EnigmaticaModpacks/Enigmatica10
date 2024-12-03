ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/deep_drill/';
    const recipes = [];

    const resource_nodes = [
        // Common
        { input: 'kubejs:resource_node_lignite', output: 'modern_industrialization:lignite_coal' },
        { input: 'kubejs:resource_node_tin', output: 'modern_industrialization:raw_tin' },
        { input: 'kubejs:resource_node_lead', output: 'modern_industrialization:raw_lead' },
        { input: 'kubejs:resource_node_antimony', output: 'modern_industrialization:raw_antimony' },

        // Other
        { input: 'kubejs:resource_node_uraninite', output: 'powah:uraninite_raw' },
        { input: 'kubejs:resource_node_bauxite', output: 'modern_industrialization:bauxite_dust' },
        { input: 'kubejs:resource_node_monazite', output: 'modern_industrialization:monazite_dust' },
        { input: 'kubejs:resource_node_salt', output: 'modern_industrialization:salt_dust' },

        // Rare
        { input: 'kubejs:resource_node_tungsten', output: 'modern_industrialization:raw_tungsten' },
        { input: 'kubejs:resource_node_osmium', output: 'mekanism:raw_osmium' },
        { input: 'kubejs:resource_node_mithril', output: 'irons_spellbooks:raw_mithril' },
        { input: 'kubejs:resource_node_uranium', output: 'modern_industrialization:raw_uranium' },
        { input: 'kubejs:resource_node_iridium', output: 'modern_industrialization:raw_iridium' },
        { input: 'kubejs:resource_node_fluorite', output: 'mekanism:fluorite_gem' }
    ];

    resource_nodes.forEach((node) => {
        recipes.push({
            results: [{ count: 1, id: node.output }],
            ingredients: [{ item: node.input }],
            time: 1
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:deep_drill';

        if (!recipe.fluidInputVariant) {
            recipe.fluidInputVariant = 'minecraft:empty';
            recipe.fluidInputAmount = 0;
        }
        if (!recipe.fluidOutputVariant) {
            recipe.fluidOutputVariant = 'minecraft:empty';
            recipe.fluidOutputAmount = 0;
        }

        event.custom(recipe).id(recipe.id);
    });
});
