ServerEvents.recipes((event) => {
    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [];

    const compressors = [
        'pneumaticcraft:air_compressor',
        'pneumaticcraft:liquid_compressor',
        'pneumaticcraft:thermal_compressor',
        'pneumaticcraft:flux_compressor',
        'pneumaticcraft:electrostatic_compressor',
        'pneumaticcraft:solar_compressor'
    ];

    compressors.forEach((compressor) => {
        let default_upgrades =
            '[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]';
        recipes.push({
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: compressor,
            replace_with: Item.of(`${compressor}${default_upgrades}`)
        });
    });

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
