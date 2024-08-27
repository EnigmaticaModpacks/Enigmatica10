ServerEvents.recipes((event) => {
    const id_prefix = 'pneumaticcraft:handcrafted/shaped/';

    const recipes = [
        {
            output: 'pneumaticcraft:advanced_air_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['BBB', 'B C', 'BAB'],
            key: {
                A: 'pneumaticcraft:air_compressor',
                B: '#c:ingots/compressed_iron',
                C: 'pneumaticcraft:advanced_pressure_tube'
            },
            id: 'pneumaticcraft:advanced_air_compressor'
        },
        {
            output: 'pneumaticcraft:advanced_liquid_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['BBB', 'B C', 'BAB'],
            key: {
                A: 'pneumaticcraft:liquid_compressor',
                B: '#c:ingots/compressed_iron',
                C: 'pneumaticcraft:advanced_pressure_tube'
            },
            id: 'pneumaticcraft:advanced_liquid_compressor'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});