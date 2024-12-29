ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/animal_spawner/';

    const recipes = [
        {
            entity: 'minecraft:rabbit',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:carrot' },
                { item: 'farmersdelight:cabbage' }
            ],
            aura: 30000,
            time: 40,
            id: `naturesaura:animal_spawner/rabbit`
        },
        {
            entity: 'minecraft:armadillo',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:spider_eye' },
                { item: 'minecraft:dead_bush' }
            ],
            aura: 30000,
            time: 40,
            id: `${id_prefix}armadillo`
        },
        {
            entity: 'minecraft:allay',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'minecraft:jukebox' },
                { item: 'minecraft:emerald' }
            ],
            aura: 30000,
            time: 40,
            id: `${id_prefix}allay`
        },
        {
            entity: 'chococraft:chocobo',
            ingredients: [
                { item: 'naturesaura:birth_spirit' },
                { item: 'chococraft:loverly_gysahl_green' },
                { item: 'minecraft:feather' }
            ],
            aura: 30000,
            time: 40,
            id: `${id_prefix}chocobo`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        event.custom(recipe).id(recipe.id);
    });
});
