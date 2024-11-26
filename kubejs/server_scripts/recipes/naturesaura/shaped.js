ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/shaped/';

    const recipes = [
        {
            output: '8x naturesaura:crimson_aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:crimson_fungus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}crimson_aura_mushroom`
        },
        {
            output: '8x naturesaura:warped_aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:warped_fungus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}warped_aura_mushroom`
        },
        {
            output: '8x naturesaura:aura_bloom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:oxeye_daisy',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}aura_bloom`
        },
        {
            output: '8x naturesaura:aura_cactus',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:cactus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}aura_cactus`
        },
        {
            output: '8x naturesaura:aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:red_mushroom',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}aura_mushroom`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
