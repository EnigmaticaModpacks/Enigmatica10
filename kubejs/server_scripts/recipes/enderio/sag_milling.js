ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/sag_milling/';

    const recipes = [
        {
            input: { item: `ae2:sky_stone_block` },
            outputs: [{ item: { id: `ae2:sky_dust`, count: 1 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}sky_dust`
        },
        {
            input: { tag: 'c:rods/breeze' },
            outputs: [{ item: { id: 'minecraft:wind_charge', count: 4 } }],
            energy: 2400,
            id: `${id_prefix}wind_charge`
        },
        {
            input: { tag: 'c:rods/blaze' },
            outputs: [{ item: { tag: 'c:dusts/blaze', count: 4 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}blaze_from_rod`
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            outputs: [{ item: { tag: 'c:dusts/blaze', count: 6 } }],
            energy: 2400,
            id: `${id_prefix}blaze_from_ember`
        },
        {
            input: { item: 'minecraft:prismarine' },
            outputs: [{ item: { tag: 'c:dusts/prismarine', count: 4 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_block`
        },
        {
            input: { item: 'minecraft:prismarine_bricks' },
            outputs: [{ item: { tag: 'c:dusts/prismarine', count: 9 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_bricks`
        },
        {
            input: { item: 'minecraft:dark_prismarine' },
            outputs: [
                { item: { tag: 'c:dusts/prismarine', count: 8 } },
                { item: { tag: 'minecraft:black_dye', count: 1 } }
            ],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_dark_prismarine`
        },
        {
            input: { item: 'minecraft:sea_lantern' },
            outputs: [
                { item: { tag: 'c:dusts/prismarine', count: 4 } },
                { item: { tag: 'c:gems/prismarine', count: 5 } }
            ],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_sea_lantern`
        },
        {
            input: { tag: 'minecraft:logs' },
            outputs: [{ item: { tag: 'c:dusts/wood', count: 12 } }],
            energy: 2400,
            id: `${id_prefix}sawdust_from_logs`
        },
        {
            input: { tag: 'c:rods/wooden' },
            outputs: [{ item: { tag: 'c:dusts/wood', count: 1 } }],
            energy: 2400,
            id: `${id_prefix}sawdust_from_sticks`
        },
        {
            input: { tag: 'minecraft:planks' },
            outputs: [{ item: { tag: 'c:dusts/wood', count: 3 } }],
            energy: 2400,
            id: `${id_prefix}sawdust_from_planks`
        },
        {
            input: { tag: 'c:ores/netherite_scrap' },
            outputs: [
                { item: { id: 'minecraft:netherite_scrap', count: 1 } },
                { item: { id: 'minecraft:netherite_scrap', count: 1 }, chance: 0.75 }
            ],
            energy: 2400,
            id: `${id_prefix}netherite_scrap`
        }
    ];

    // Add support for other materials
    let gems = ['diamond', 'emerald', 'lapis', 'certus_quartz', 'fluix'];
    gems.forEach((gem) => {
        recipes.push({
            input: { tag: `c:gems/${gem}` },
            outputs: [{ item: { tag: `c:dusts/${gem}`, count: 1 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}${gem}`
        });
    });

    let materials = [
        { primary: 'osmium', secondary: 'silver' },
        { primary: 'iesnium', secondary: 'silver' },
        { primary: 'iridium', secondary: 'osmium' },
        { primary: 'lead', secondary: 'silver' },
        { primary: 'silver', secondary: 'lead' },
        { primary: 'nickel', secondary: 'iron' },
        { primary: 'uranium', secondary: 'lead' }
    ];
    materials.forEach((material) => {
        recipes.push(
            {
                input: { tag: `c:ores/${material.primary}` },
                outputs: [
                    { item: { tag: `c:raw_materials/${material.primary}`, count: 1 } },
                    {
                        chance: 0.33,
                        item: { tag: `c:raw_materials/${material.primary}`, count: 1 }
                    },
                    {
                        chance: 0.15,
                        item: { id: `minecraft:cobblestone`, count: 1 }
                    }
                ],
                energy: 2400,
                id: `${id_prefix}${material.primary}_ore`
            },
            {
                input: { tag: `c:raw_materials/${material.primary}` },
                outputs: [
                    { item: { tag: `c:dusts/${material.primary}`, count: 1 } },
                    {
                        chance: 0.25,
                        item: { tag: `c:dusts/${material.primary}`, count: 1 }
                    },
                    {
                        chance: 0.05,
                        item: { tag: `c:dusts/${material.secondary}`, count: 1 }
                    }
                ],
                energy: 2400,
                id: `${id_prefix}raw_${material.primary}`
            },
            {
                input: { tag: `c:ingots/${material.primary}` },
                outputs: [{ item: { tag: `c:dusts/${material.primary}`, count: 1 } }],
                bonus: 'none',
                energy: 2400,
                id: `${id_prefix}${material.primary}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:sag_milling';
        event.custom(recipe).id(recipe.id);
    });
});
