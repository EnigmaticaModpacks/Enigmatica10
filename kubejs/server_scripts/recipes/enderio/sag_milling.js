ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/sag_milling/';

    const recipes = [
        {
            input: { item: `ae2:sky_stone_block` },
            outputs: [{ item: `ae2:sky_dust` }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}sky_dust`
        },
        {
            input: { tag: 'c:rods/breeze' },
            outputs: [{ count: 4, item: 'minecraft:wind_charge' }],
            energy: 2400,
            id: `${id_prefix}wind_charge`
        },
        {
            input: { tag: 'c:rods/blaze' },
            outputs: [{ count: 4, tag: 'c:dusts/blaze' }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}blaze_from_rod`
        },
        {
            input: { tag: 'c:gems/blaze_ember' },
            outputs: [{ count: 6, tag: 'c:dusts/blaze' }],
            energy: 2400,
            id: `${id_prefix}blaze_from_ember`
        },
        {
            input: { item: 'minecraft:prismarine' },
            outputs: [{ count: 4, tag: 'c:dusts/prismarine' }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_block`
        },
        {
            input: { item: 'minecraft:prismarine_bricks' },
            outputs: [{ count: 9, tag: 'c:dusts/prismarine' }],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_bricks`
        },
        {
            input: { item: 'minecraft:dark_prismarine' },
            outputs: [
                { count: 8, tag: 'c:dusts/prismarine' },
                { count: 1, item: 'minecraft:black_dye' }
            ],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_dark_prismarine`
        },
        {
            input: { item: 'minecraft:sea_lantern' },
            outputs: [
                { count: 4, tag: 'c:dusts/prismarine' },
                { count: 5, tag: 'c:gems/prismarine' }
            ],
            bonus: 'none',
            energy: 2400,
            id: `${id_prefix}prismarine_from_sea_lantern`
        }
    ];

    // Add support for other materials
    let gems = ['diamond', 'emerald', 'lapis', 'certus_quartz', 'fluix'];
    gems.forEach((gem) => {
        recipes.push({
            input: { tag: `c:gems/${gem}` },
            outputs: [{ tag: `c:dusts/${gem}` }],
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
                    { tag: `c:raw_materials/${material.primary}` },
                    { tag: `c:raw_materials/${material.primary}`, chance: 0.33 },
                    { item: `minecraft:cobblestone`, chance: 0.15 }
                ],
                energy: 2400,
                id: `${id_prefix}${material.primary}_ore`
            },
            {
                input: { tag: `c:raw_materials/${material.primary}` },
                outputs: [
                    { tag: `c:dusts/${material.primary}` },
                    { chance: 0.25, tag: `c:dusts/${material.primary}` },
                    { chance: 0.05, tag: `c:dusts/${material.secondary}` }
                ],
                energy: 2400,
                id: `${id_prefix}raw_${material.primary}`
            },
            {
                input: { tag: `c:ingots/${material.primary}` },
                outputs: [{ tag: `c:dusts/${material.primary}` }],
                bonus: 'none',
                energy: 2400,
                id: `${id_prefix}${material.primary}`
            }
        );
    });

    // Convert item outputs to tag outputs for unification. This is temporary. AU is in communication with EIO to fix this in the mod.
    event.forEachRecipe({ type: 'enderio:sag_milling' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        let materials = ['coal', 'ender_pearl', 'gold', 'iron', 'copper', 'lapis', 'obsidian', 'quartz'];
        recipe.outputs.forEach((output) => {
            if (output.item) {
                let output_item = output.item;

                materials.map((material) => {
                    if (output_item.includes(`powdered_${material}`)) {
                        delete output.item;
                        output.tag = `c:dusts/${material}`;
                    }
                });

                if (output.item == 'enderio:silicon') {
                    delete output.item;
                    output.tag = 'c:silicon';
                }
            }
        });
        recipe.id = recipe_id;
        recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:sag_milling';
        event.custom(recipe).id(recipe.id);
    });
});
