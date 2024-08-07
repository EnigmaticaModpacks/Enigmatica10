ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sawing/';
    const recipes = [
        {
            input: 'neoforge:logs/archwood',
            output: 'ars_nouveau:archwood_planks',
            output_count: 6,
            id: 'archwood_planks'
        },
        {
            input: 'arts_and_crafts:cork_logs',
            output: 'arts_and_crafts:cork_planks',
            output_count: 6,
            id: 'cork_planks'
        }
    ];

    event.forEachRecipe({ type: 'productivetrees:sawmill' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let input = recipe.log.tag;
        let output = recipe.planks.id;
        let output_count = recipe.planks.count;
        // TODO: Convert to AU
        // let sawdust = AlmostUnified.getPreferredItemForTag('c:dusts/wood').getId();

        if (recipe.log.tag.match(/productivetrees/)) {
            recipes.push({
                from_productivetrees: true,
                input: input,
                output: output,
                output_count: output_count,
                id: recipe_id.split(':')[1]
            });
        }
    });

    recipes.forEach((recipe) => {
        if (!recipe.from_productivetrees) {
            event
                .custom({
                    type: 'productivetrees:sawmill',
                    log: { tag: recipe.input },
                    planks: { count: recipe.output_count, id: recipe.output },
                    // TODO: Convert to AU
                    // secondary: { count: 2, id: sawdust },
                    secondary: { count: 2, id: 'productivetrees:sawdust' }
                })
                .id(`${id_prefix}sawmill/${recipe.id}`);
        }

        event
            .custom({
                type: 'mekanism:sawing',
                input: { count: 1, tag: recipe.input },
                main_output: { count: recipe.output_count, id: recipe.output },
                secondary_chance: 0.25,
                // TODO: Convert to AU
                // secondary_output: { count: 1, id: sawdust },
                secondary_output: { count: 1, id: 'mekanism:sawdust' }
            })
            .id(`${id_prefix}sawing/${recipe.id}`);

        event
            .custom({
                type: 'modern_industrialization:cutting_machine',
                fluid_inputs: [{ amount: 1, fluid: 'modern_industrialization:lubricant' }],
                item_inputs: [{ amount: 1, tag: recipe.input }],
                item_outputs: [{ amount: recipe.output_count, item: recipe.output }],
                duration: 100,
                eu: 2
            })
            .id(`${id_prefix}cutting_machine/${recipe.id}`);
    });
});
