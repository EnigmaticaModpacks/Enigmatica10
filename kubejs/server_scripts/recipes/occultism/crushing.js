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
            ingredient: { tag: 'c:ores/black_quartz' },
            ignore_crushing_multiplier: false,
            result: {
                type: 'occultism:item',
                id: 'actuallyadditions:black_quartz',
                count: 2
            },
            id: `${id_prefix}black_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
