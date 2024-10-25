ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sawing/';
    const recipes = [
        {
            input: 'c:logs/archwood',
            output: 'ars_nouveau:archwood_planks',
            output_count: 6,
            id: 'archwood_planks'
        },
        {
            input: 'arts_and_crafts:cork_logs',
            output: 'arts_and_crafts:cork_planks',
            output_count: 6,
            id: 'cork_planks'
        },
        {
            input: 'evilcraft:undead_logs',
            output: 'evilcraft:undead_planks',
            output_count: 6,
            id: 'undead_planks'
        },
        {
            input: 'deeperdarker:echo_logs',
            output: 'deeperdarker:echo_planks',
            output_count: 6,
            id: 'echo_planks'
        },
        {
            input: 'occultism:otherworld_logs',
            output: 'occultism:otherplanks',
            output_count: 6,
            id: 'otherplanks'
        },
        {
            input: 'naturesaura:ancient_logs',
            output: 'naturesaura:ancient_planks',
            output_count: 6,
            id: 'ancient_planks'
        }
    ];

    event.forEachRecipe({ type: 'productivetrees:sawmill' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let input = recipe.input.tag;
        let output = recipe.output.id;
        let output_count = recipe.output.count;

        if (input.match(/productivetrees/)) {
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
                    input: { tag: recipe.input },
                    output: { count: recipe.output_count, id: recipe.output },
                    secondary: { count: 2, id: sawdust },
                    ertiary: {}
                })
                .id(`${id_prefix}sawmill/${recipe.id}`);
        }

        event
            .custom({
                type: 'mekanism:sawing',
                input: { count: 1, tag: recipe.input },
                main_output: { count: recipe.output_count, id: recipe.output },
                secondary_chance: 0.25,
                secondary_output: { count: 1, id: sawdust }
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
