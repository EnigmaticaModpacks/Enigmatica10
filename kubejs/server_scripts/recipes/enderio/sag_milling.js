ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/sag_milling/';

    const recipes = [
        {
            input: { tag: `c:gems/certus_quartz` },
            outputs: [{ item: { id: 'ae2:certus_quartz_dust', count: 1 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}certus_quartz`
        },
        {
            input: { tag: `c:gems/fluix` },
            outputs: [{ item: { id: 'ae2:fluix_dust', count: 1 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}fluix`
        },
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
            outputs: [{ item: { id: 'minecraft:blaze_powder', count: 4 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}blaze_from_rod`
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            outputs: [{ item: { id: 'minecraft:blaze_powder', count: 6 } }],
            energy: 2400,
            id: `${id_prefix}blaze_from_ember`
        },
        {
            input: { item: 'minecraft:prismarine' },
            outputs: [{ item: { id: 'minecraft:prismarine_shard', count: 4 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_block`
        },
        {
            input: { item: 'minecraft:prismarine_bricks' },
            outputs: [{ item: { id: 'minecraft:prismarine_shard', count: 9 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_bricks`
        },
        {
            input: { item: 'minecraft:dark_prismarine' },
            outputs: [
                { item: { id: 'minecraft:prismarine_shard', count: 8 } },
                { item: { id: 'minecraft:black_dye', count: 1 } }
            ],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_dark_prismarine`
        },
        {
            input: { item: 'minecraft:sea_lantern' },
            outputs: [
                { item: { id: 'minecraft:prismarine_shard', count: 4 } },
                { item: { id: 'minecraft:prismarine_crystals', count: 5 } }
            ],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_sea_lantern`
        },
        {
            input: { tag: 'minecraft:logs' },
            outputs: [{ item: { id: 'mekanism:sawdust', count: 12 } }],
            energy: 2400,
            id: `${id_prefix}sawdust_from_logs`
        },
        {
            input: { tag: 'c:rods/wooden' },
            outputs: [{ item: { id: 'mekanism:sawdust', count: 1 } }],
            energy: 2400,
            id: `${id_prefix}sawdust_from_sticks`
        },
        {
            input: { tag: 'minecraft:planks' },
            outputs: [{ item: { id: 'mekanism:sawdust', count: 3 } }],
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
        },
        {
            input: { tag: 'c:ores/black_quartz' },
            outputs: [
                { item: { id: 'actuallyadditions:black_quartz', count: 2 } },
                { item: { id: 'actuallyadditions:black_quartz', count: 1 }, chance: 0.25 },
                { item: { id: `minecraft:cobblestone`, count: 1 }, chance: 0.15 }
            ],
            energy: 2400,
            id: `${id_prefix}black_quartz`
        },
        {
            input: { tag: 'minecraft:smelts_to_glass' },
            outputs: [
                { item: { id: 'ae2:silicon', count: 1 } },
                { item: { id: 'ae2:silicon', count: 1 }, chance: 0.15 }
            ],
            energy: 2400,
            id: `enderio:sag_milling/sand`
        },
        {
            input: { item: 'minecraft:glow_berries' },
            outputs: [
                { item: { id: 'minecraft:yellow_dye', count: 1 }, chance: 0.8 },
                {
                    item: { id: 'minecraft:yellow_dye', count: 1 },
                    chance: 0.6
                },
                {
                    item: { id: 'minecraft:yellow_dye', count: 1 },
                    chance: 0.3
                },
                {
                    item: { id: 'enderio:plant_matter_green', count: 1 },
                    chance: 0.1
                }
            ],
            energy: 2400,
            id: `${id_prefix}yellow_dye_from_glow_berries`
        }
    ];

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
                    {
                        item: {
                            id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(),
                            count: 1
                        }
                    },
                    {
                        item: {
                            id: AlmostUnified.getTagTargetItem(`c:raw_materials/${material.primary}`).getId(),
                            count: 1
                        },
                        chance: 0.33
                    },
                    { item: { id: `minecraft:cobblestone`, count: 1 }, chance: 0.15 }
                ],
                energy: 2400,
                id: `${id_prefix}${material.primary}_ore`
            },
            {
                input: { tag: `c:raw_materials/${material.primary}` },
                outputs: [
                    { item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 } },
                    {
                        item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 },
                        chance: 0.25
                    },
                    {
                        item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.secondary}`).getId(), count: 1 },
                        chance: 0.05
                    }
                ],
                energy: 2400,
                id: `${id_prefix}raw_${material.primary}`
            },
            {
                input: { tag: `c:ingots/${material.primary}` },
                outputs: [
                    { item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material.primary}`).getId(), count: 1 } }
                ],
                bonus: 'none',
                energy: 2400,
                id: `${id_prefix}${material.primary}`
            }
        );
    });

    // Add support for other materials
    materials = ['diamond', 'emerald', 'fluorite'];
    materials.forEach((material) => {
        recipes.push({
            input: { tag: `c:gems/${material}` },
            outputs: [{ item: { id: AlmostUnified.getTagTargetItem(`c:dusts/${material}`).getId(), count: 1 } }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}${material}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:sag_milling';
        event.custom(recipe).id(recipe.id);
    });
});
