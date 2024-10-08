ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            entities: ['chococraft:chocobo'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 2,
                'geneticsresequenced:claws': 1,
                'geneticsresequenced:step_assist': 2
            }
        },
        {
            entities: ['occultism:possessed_endermite'],
            genes: {
                'geneticsresequenced:keep_inventory': 1,
                'geneticsresequenced:item_magnet': 2,
                'geneticsresequenced:xp_magnet': 3
            }
        },
        {
            entities: ['occultism:possessed_skeleton', 'occultism:wild_hunt_skeleton', 'occultism:wild_skeleton'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:infinity': 1
            }
        },
        {
            entities: ['occultism:possessed_shulker', 'occultism:possessed_weak_shulker'],
            genes: {
                'geneticsresequenced:basic': 3,
                'geneticsresequenced:resistance': 4,
                'geneticsresequenced:levitation': 4
            }
        },
        {
            entities: ['occultism:wild_silverfish', 'occultism:wild_horde_silverfish'],
            genes: {
                'geneticsresequenced:basic': 3,
                'geneticsresequenced:haste': 3,
                'geneticsresequenced:efficiency': 1,
                'geneticsresequenced:infested': 4
            }
        },
        {
            entities: ['occultism:possessed_enderman'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:more_hearts': 1,
                'geneticsresequenced:teleport': 3
            }
        },
        {
            entities: ['occultism:possessed_evoker'],
            genes: {
                'geneticsresequenced:basic': 4,
                'geneticsresequenced:emerald_heart': 3,
                'geneticsresequenced:bad_omen': 4
            }
        },
        {
            entities: [
                'occultism:possessed_weak_breeze',
                'occultism:possessed_breeze',
                'occultism:possessed_strong_breeze'
            ],
            genes: {
                'geneticsresequenced:basic': 2,
                'geneticsresequenced:jump_boost': 5,
                'geneticsresequenced:wind_charged': 4
            }
        },
        {
            entities: ['occultism:wild_horde_husk', 'occultism:wild_husk'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:chilling': 4
            }
        },
        {
            entities: ['occultism:possessed_ghast'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:shoot_fireballs': 4
            }
        },
        {
            entities: ['occultism:wild_cave_spider'],
            genes: {
                'geneticsresequenced:basic': 7,
                'geneticsresequenced:night_vision': 5,
                'geneticsresequenced:wall_climbing': 2,
                'geneticsresequenced:poison_immunity': 1
            }
        },
        {
            entities: ['occultism:wild_bogged', 'minecraft:bogged'],
            genes: {
                'geneticsresequenced:basic': 3,
                'geneticsresequenced:poison_immunity': 1
            }
        },
        {
            entities: ['occultism:wild_spider'],
            genes: {
                'geneticsresequenced:basic': 4,
                'geneticsresequenced:night_vision': 3,
                'geneticsresequenced:wall_climbing': 2,
                'geneticsresequenced:weaving': 4
            }
        },
        {
            entities: ['occultism:wild_slime', 'the_bumblezone:honey_slime'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 4,
                'geneticsresequenced:slimy_death': 2,
                'geneticsresequenced:oozing': 5
            }
        },
        {
            entities: ['occultism:wild_stray'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:infinity': 3
            }
        },
        {
            entities: ['occultism:wild_zombie'],
            genes: {
                'geneticsresequenced:basic': 7,
                'geneticsresequenced:resistance': 1
            }
        },
        {
            entities: ['occultism:wild_hunt_wither_skeleton'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:wither_hit': 2
            }
        },
        {
            entities: ['occultism:possessed_warden'],
            genes: {
                'geneticsresequenced:more_hearts': 5,
                'geneticsresequenced:mob_sight': 5
            }
        },
        {
            entities: ['occultism:possessed_phantom'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:invisible': 3,
                'geneticsresequenced:teleport': 3
            }
        },
        {
            entities: ['occultism:otherworld_bird'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:no_fall_damage': 2,
                'geneticsresequenced:jump_boost': 2,
                'geneticsresequenced:lay_egg': 4
            }
        },
        {
            entities: ['occultism:possessed_hoglin'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:meaty': 5
            }
        },
        {
            entities: ['occultism:possessed_elder_guardian'],
            genes: {
                'geneticsresequenced:mob_sight': 3,
                'geneticsresequenced:water_breathing': 4
            }
        },
        {
            entities: ['occultism:wild_horde_drowned'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:resistance': 4
            }
        },
        {
            entities: [
                'occultism:wild_horde_creeper',
                'creeperoverhaul:badlands_creeper',
                'creeperoverhaul:bamboo_creeper',
                'creeperoverhaul:beach_creeper',
                'creeperoverhaul:birch_creeper',
                'creeperoverhaul:cave_creeper',
                'creeperoverhaul:desert_creeper',
                'creeperoverhaul:dripstone_creeper',
                'creeperoverhaul:hills_creeper',
                'creeperoverhaul:jungle_creeper',
                'creeperoverhaul:mushroom_creeper',
                'creeperoverhaul:ocean_creeper',
                'creeperoverhaul:savannah_creeper',
                'creeperoverhaul:snowy_creeper',
                'creeperoverhaul:spruce_creeper',
                'creeperoverhaul:swamp_creeper'
            ],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:explosive_exit': 3
            }
        },
        {
            entities: ['ars_nouveau:starbuncle'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:speed': 2
            }
        },
        {
            entities: [
                'ars_nouveau:vexing_weald_walker',
                'ars_nouveau:flourishing_weald_walker',
                'ars_nouveau:cascading_weald_walker',
                'ars_nouveau:blazing_weald_walker'
            ],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:more_hearts': 2,
                'geneticsresequenced:regeneration': 2,
                'geneticsresequenced:resistance': 4,
                'geneticsresequenced:strength': 3,
                'geneticsresequenced:photosynthesis': 3
            }
        },
        {
            entities: ['ars_nouveau:whirlisprig', 'the_bumblezone:rootmin'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:photosynthesis': 3,
                'geneticsresequenced:regeneration': 2
            }
        },
        {
            entities: ['ars_nouveau:wixie'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:poison_immunity': 2
            }
        },
        {
            entities: ['ars_nouveau:drygmy'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:luck': 5
            }
        },
        {
            entities: ['ars_nouveau:amethyst_golem'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:knockback': 5
            }
        },
        {
            entities: ['ars_nouveau:wilden_guardian'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:chilling': 2,
                'geneticsresequenced:thorns': 2,
                'geneticsresequenced:claws': 1
            }
        },
        {
            entities: ['ars_nouveau:wilden_hunter'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:speed': 2,
                'geneticsresequenced:night_vision': 1,
                'geneticsresequenced:no_hunger': 1,
                'geneticsresequenced:claws': 1
            }
        },
        {
            entities: ['ars_nouveau:wilden_stalker'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:night_vision': 1,
                'geneticsresequenced:no_fall_damage': 1,
                'geneticsresequenced:claws': 1
            }
        },
        {
            entities: ['ars_nouveau:wilden_boss'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:mob_sight': 1,
                'geneticsresequenced:speed': 1,
                'geneticsresequenced:flight': 1,
                'geneticsresequenced:thorns': 1,
                'geneticsresequenced:claws': 1
            }
        },
        {
            entities: ['the_bumblezone:beehemoth', 'the_bumblezone:bee_queen'],
            genes: {
                'geneticsresequenced:basic': 5,
                'geneticsresequenced:thorns': 3
            }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.entities.forEach((entity) => {
            event.json(`enigmatica:geneticsresequenced/entity_genes/${entity.replace(':', '_')}`, {
                entity: entity,
                gene_weights: recipe.genes
            });
        });
    });
});
