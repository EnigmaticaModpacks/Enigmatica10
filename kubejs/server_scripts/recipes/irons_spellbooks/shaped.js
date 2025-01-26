ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:irons_spellbooks/shaped/';

    const recipes = [
        {
            output: '8x irons_spellbooks:epic_ink',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'occultism:purified_ink',
                B: '#c:dusts/research'
            },
            id: `${id_prefix}epic_ink`
        },
        {
            output: 'irons_spellbooks:dragonskin_spell_book',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'irons_spellbooks:dragonskin',
                B: '#c:dusts/dragonyst',
                C: 'irons_spellbooks:iron_spell_book'
            },
            id: `${id_prefix}dragonskin_spell_book`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
