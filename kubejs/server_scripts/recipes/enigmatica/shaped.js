ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shaped/';

    const recipes = [
        {
            output: '2x minecraft:red_dye',
            pattern: ['A ', ' A'],
            key: {
                A: 'productivetrees:haematoxylin'
            },
            id: `${id_prefix}red_dye_from_haematoxylin`
        },
        {
            output: '2x industrialforegoing:diamond_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/dark_steel',
                B: '#c:gems/diamond',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}diamond_gear`
        },
        {
            output: '2x modern_industrialization:gold_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/gold',
                B: '#c:ingots/gold',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}gold_gear`
        },
        {
            output: '2x pneumaticcraft:compressed_iron_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/dark_steel',
                B: '#c:ingots/compressed_iron',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}compressed_iron_gear`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
