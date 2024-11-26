ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/shaped/';

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
        },
        {
            output: '2x pneumaticcraft:compressed_iron_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/dark_steel',
                B: '#c:ingots/compressed_iron',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}compressed_iron_gear`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
