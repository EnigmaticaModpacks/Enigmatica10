ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            id: 'relics_for_music',
            wants: [{ id: '#c:music_discs', required: true }],
            possible_rewards: [
                // Feet
                { item: { id: 'relics:magma_walker', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:aqua_walker', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:ice_skates', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:ice_breaker', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:roller_skates', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:amphibian_boot', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // Belt
                { item: { id: 'relics:drowned_belt', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:hunter_belt', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:leather_belt', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // // Hand
                // { item: { id: 'relics:rage_glove', count: 1 }, xp_reward: 10, weight: 10, required: true },
                // { item: { id: 'relics:enders_hand', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:wool_mitten', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // Necklace
                { item: { id: 'relics:reflection_necklace', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:jellyfish_necklace', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:holy_locket', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // Back
                // { item: { id: 'relics:midnight_robe', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:elytra_booster', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // Ring
                { item: { id: 'relics:bastion_ring', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:chorus_inhibitor', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // Charm
                { item: { id: 'relics:spore_sack', count: 1 }, xp_reward: 10, weight: 10, required: true },

                // Other
                { item: { id: 'relics:magic_mirror', count: 1 }, xp_reward: 10, weight: 10, required: true },
                // { item: { id: 'relics:blazing_flask', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:shadow_glaive', count: 1 }, xp_reward: 10, weight: 10, required: true },
                { item: { id: 'relics:infinity_ham', count: 1 }, xp_reward: 10, weight: 10, required: true }
            ]
        },
        {
            id: 'cursed_honey_reward',
            wants: [{ id: 'occultism:cursed_honey', required: true }],
            possible_rewards: [
                { item: { id: 'the_bumblezone:windy_air', count: 3 }, xp_reward: 10, weight: 100, required: true }
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`the_bumblezone:bz_bee_queen_trades/${recipe.id}`, recipe);
    });
});
