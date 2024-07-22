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
        }
    ];

    event.forEachRecipe({ type: 'occultism:crushing' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (recipe.result.type == 'occultism:tag') {
            // console.log(`Found a tagged output: ${recipe.result.tag}`);
            // console.log(`Preferred output: ${getPreferredItemInTag(`#${recipe.result.tag}`).getId()}`);

            recipe.result.type = 'occultism:item';
            recipe.result.id = getPreferredItemInTag(`#${recipe.result.tag}`).getId();
            recipe.id = recipe_id;

            delete recipe.result.tag;

            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
