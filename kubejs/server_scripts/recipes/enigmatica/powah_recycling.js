ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:powah_recycling/';
    const recipes = [
        {
            input: { item: 'powah:energy_cable_starter', count: 12 },
            primary: { item: 'powah:capacitor_basic_tiny', count: 1 },
            secondary: { item: 'minecraft:iron_nugget', count: 2 }
        },
        {
            input: { item: 'powah:energy_cable_basic', count: 12 },
            primary: { item: 'powah:capacitor_basic', count: 1 },
            secondary: { item: 'minecraft:iron_ingot', count: 2 }
        },
        {
            input: { item: 'powah:energy_cable_hardened', count: 12 },
            primary: { item: 'powah:capacitor_hardened', count: 1 },
            secondary: { item: 'powah:steel_energized', count: 2 }
        },
        {
            input: { item: 'powah:energy_cable_blazing', count: 12 },
            primary: { item: 'powah:capacitor_blazing', count: 1 },
            secondary: { item: 'powah:crystal_blazing', count: 2 }
        },
        {
            input: { item: 'powah:energy_cable_niotic', count: 12 },
            primary: { item: 'powah:capacitor_niotic', count: 1 },
            secondary: { item: 'powah:crystal_niotic', count: 2 }
        },
        {
            input: { item: 'powah:energy_cable_spirited', count: 12 },
            primary: { item: 'powah:capacitor_spirited', count: 1 },
            secondary: { item: 'powah:crystal_spirited', count: 2 }
        },
        {
            input: { item: 'powah:energy_cable_nitro', count: 12 },
            primary: { item: 'powah:capacitor_nitro', count: 1 },
            secondary: { item: 'powah:crystal_nitro', count: 2 }
        },

        {
            input: { item: 'powah:ender_cell_starter', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'minecraft:iron_nugget', count: 4 }
        },
        {
            input: { item: 'powah:ender_cell_basic', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'minecraft:iron_ingot', count: 4 }
        },
        {
            input: { item: 'powah:ender_cell_hardened', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'powah:steel_energized', count: 4 }
        },
        {
            input: { item: 'powah:ender_cell_blazing', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'powah:crystal_blazing', count: 4 }
        },
        {
            input: { item: 'powah:ender_cell_niotic', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'powah:crystal_niotic', count: 4 }
        },
        {
            input: { item: 'powah:ender_cell_spirited', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'powah:crystal_spirited', count: 4 }
        },
        {
            input: { item: 'powah:ender_cell_nitro', count: 1 },
            primary: { item: 'powah:ender_core', count: 1 },
            secondary: { item: 'powah:crystal_nitro', count: 4 }
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'mekanism:sawing',
                input: recipe.input,
                main_output: { id: recipe.primary.item, count: recipe.primary.count },
                secondary_output: { id: recipe.secondary.item, count: recipe.secondary.count },
                secondary_chance: 1
            })
            .id(`${id_prefix}sawing/${recipe.input.item.replace(':', '_')}`);

        event
            .custom({
                type: 'enderio:sag_milling',
                input: recipe.input,
                outputs: [
                    { item: { id: recipe.primary.item, count: recipe.primary.count }, chance: 1 / recipe.input.count },
                    {
                        item: { id: recipe.secondary.item, count: recipe.secondary.count },
                        chance: 1 / recipe.input.count
                    }
                ],
                bonus: 'none',
                energy: 2400
            })
            .id(`${id_prefix}sag_milling/${recipe.input.item.replace(':', '_')}`);
    });
});
