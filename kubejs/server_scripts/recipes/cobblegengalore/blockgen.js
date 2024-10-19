ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:cobblegengalore/blockgen/';

    const recipes = [];

    const stoneworks = {
        stones: [
            'minecraft:granite',
            'minecraft:diorite',
            'minecraft:andesite',
            'minecraft:deepslate',
            'minecraft:sandstone',
            'minecraft:tuff',

            'deeperdarker:sculk_stone',
            'deeperdarker:gloomslate',

            'arts_and_crafts:soapstone'
        ],
        cobblestones: [
            'minecraft:cobbled_deepslate',
            'deeperdarker:cobbled_sculk_stone',
            'deeperdarker:cobbled_gloomslate'
        ]
    };

    Object.keys(stoneworks).forEach((type) => {
        stoneworks[type].forEach((block) => {
            recipes.push({
                result: { id: block, count: 1 },
                left: { Name: 'minecraft:water' },
                consumeLeft: true,
                right: { Name: 'minecraft:lava' },
                modifier: { Name: block },
                id: `${id_prefix}${block.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'cobblegengalore:blockgen';
        event.custom(recipe).id(recipe.id);
    });
});
