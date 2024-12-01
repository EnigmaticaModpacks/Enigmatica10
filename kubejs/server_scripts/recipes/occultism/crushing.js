ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/crushing/';

    const recipes = [
        {
            ingredient: { item: 'justdirethings:coal_t2' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: 'minecraft:blaze_powder',
                count: 6
            },
            id: `${id_prefix}blaze_powder_from_coal_t2`
        },
        {
            ingredient: { tag: 'c:rods/blaze' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: 'minecraft:blaze_powder',
                count: 4
            },
            id: `occultism:crushing/blaze_powder_from_rod`
        },
        {
            ingredient: { tag: 'c:ores/uraninite' },
            ignore_crushing_multiplier: false,
            result: {
                type: 'occultism:item',
                id: 'powah:uraninite_raw',
                count: 4
            },
            id: `${id_prefix}uraninite_raw`
        },
        {
            ingredient: { tag: 'c:gems/certus_quartz' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: 'ae2:certus_quartz_dust',
                count: 1
            },
            id: `occultism:crushing/certus_quartz_dust_from_gem`
        },
        {
            ingredient: { tag: 'c:gems/emerald' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: AlmostUnified.getTagTargetItem(`c:dusts/emerald`).getId(),
                count: 1
            },
            id: `occultism:crushing/emerald_dust_from_gem`
        },
        {
            ingredient: { tag: 'c:ores/black_quartz' },
            ignore_crushing_multiplier: false,
            result: {
                type: 'occultism:item',
                id: 'actuallyadditions:black_quartz',
                count: 2
            },
            id: `${id_prefix}black_quartz`
        },
        {
            ingredient: { item: 'minecraft:glow_berries' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: 'minecraft:glowstone_dust',
                count: 1
            },
            id: `${id_prefix}glowstone_dust`
        },
        {
            ingredient: { item: 'minecraft:ender_pearl' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: AlmostUnified.getTagTargetItem(`c:dusts/ender_pearl`).getId(),
                count: 1
            },
            id: `${id_prefix}ender_pearl_dust`
        },
        {
            ingredient: { item: 'ae2:sky_stone_block' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: 'ae2:sky_dust',
                count: 1
            },
            id: `${id_prefix}sky_dust`
        },
        {
            ingredient: { item: 'advanced_ae:shattered_singularity' },
            ignore_crushing_multiplier: true,
            result: {
                type: 'occultism:item',
                id: 'advanced_ae:quantum_infused_dust',
                count: 1
            },
            id: `${id_prefix}quantum_infused_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
