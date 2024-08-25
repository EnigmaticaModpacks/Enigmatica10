ServerEvents.generateData('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Adding-Recipes#adding-info-recipes

    const descriptions = [
        {
            left: 'item:justdirethings:raw_coal_t1_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t1',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_coal_t2_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t2',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_coal_t3_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t3',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_coal_t4_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:coal_t4',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_ferricore_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_ferricore',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_blazegold_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_blazegold',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_celestigem_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:celestigem',
                amount: 3
            }
        },
        {
            left: 'item:justdirethings:raw_eclipsealloy_ore',
            right: '#item:minecraft:pickaxes',
            output: {
                type: 'item',
                id: 'justdirethings:raw_eclipsealloy',
                amount: 3
            }
        }
    ];

    descriptions.forEach((description) => {
        description.type = 'emi:world_interaction';
        event.json(`emi:recipe/additions/${description.output.id.replace(/\:/g, '_')}`, description);
    });
});
