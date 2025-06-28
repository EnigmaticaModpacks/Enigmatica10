ServerEvents.generateData('after_mods', (event) => {
    const recipes = [
        {
            registry_name: 'occultism:possessed_enderman',
            drops: [
                {
                    ingredient: { item: 'malum:warp_flux' },
                    chance: '0.3',
                    min: '2',
                    max: '4'
                }
            ]
        },
        {
            registry_name: 'occultism:possessed_ghast',
            drops: [
                {
                    ingredient: { item: 'malum:astral_weave' },
                    chance: '0.5',
                    min: '1',
                    max: '3'
                }
            ]
        },
        {
            registry_name: 'occultism:possessed_phantom',
            drops: [
                {
                    ingredient: { item: 'malum:astral_weave' },
                    chance: '0.25',
                    min: '1',
                    max: '2'
                }
            ]
        }
    ];

    let skeletons = [
        'occultism:possessed_skeleton',
        'occultism:wild_hunt_skeleton',
        'occultism:wild_hunt_wither_skeleton',
        'occultism:wild_stray',
        'occultism:wild_bogged',
        'occultism:wild_skeleton'
    ];
    skeletons.forEach((skeleton) => {
        recipes.push({
            registry_name: skeleton,
            drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '0.2', min: '2', max: '4' }]
        });
    });

    let breezes = [
        'occultism:possessed_weak_breeze',
        'occultism:possessed_strong_breeze',
        'occultism:possessed_breeze'
    ];
    breezes.forEach((breeze) => {
        recipes.push({
            registry_name: breeze,
            drops: [{ ingredient: { item: 'malum:wind_nucleus' }, chance: '0.5', min: '2', max: '4' }]
        });
    });

    let zombies = [
        'minecraft:drowned',
        'evilcraft:controlled_zombie',
        'occultism:possessed_zombie_piglin',
        'occultism:wild_zombie',
        'occultism:wild_horde_drowned',
        'occultism:wild_horde_husk',
        'occultism:wild_husk'
    ];
    zombies.forEach((zombie) => {
        recipes.push({
            registry_name: zombie,
            drops: [
                {
                    ingredient: { item: 'malum:rotting_essence' },
                    chance: zombie.includes('husk') ? '0.15' : '0.1',
                    min: '1',
                    max: '3'
                }
            ]
        });
    });

    recipes.forEach((recipe) => {
        event.json(`malum:reaping_data/enigmatica/${recipe.registry_name.replace(':', '_')}`, recipe);
    });
});
