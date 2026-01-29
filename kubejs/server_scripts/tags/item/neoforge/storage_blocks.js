ServerEvents.tags('item', (event) => {
    let additions = {
        amethyst: ['minecraft:amethyst_block'],

        ferricore: ['justdirethings:ferricore_block'],
        blazegold: ['justdirethings:blazegold_block'],
        celestigem: ['justdirethings:celestigem_block'],
        eclipsealloy: ['justdirethings:eclipsealloy_block'],
        primal_coal: ['justdirethings:coalblock_t1'],
        blaze_ember: ['justdirethings:coalblock_t2'],
        voidflame: ['justdirethings:coalblock_t3'],
        eclipse_ember: ['justdirethings:coalblock_t4'],

        uraninite: ['powah:uraninite_block'],
        energized_steel: ['powah:energized_steel_block'],
        blazing: ['powah:blazing_crystal_block'],
        niotic: ['powah:niotic_crystal_block'],
        spirited: ['powah:spirited_crystal_block'],
        nitro: ['powah:nitro_crystal_block'],

        uranium: ['bigreactors:yellorium_block'],
        raw_uranium: ['bigreactors:raw_yellorium_block'],
        plutonium: ['bigreactors:blutonium_block'],

        infused_iron: ['naturesaura:infused_iron_block'],
        tainted_gold: ['naturesaura:tainted_gold_block'],
        sky: ['naturesaura:sky_ingot_block'],
        depth: ['naturesaura:depth_ingot_block'],

        dark: ['evilcraft:dark_block'],

        black_quartz: ['actuallyadditions:black_quartz_block'],

        charcoal: ['justdirethings:charcoal'],

        raw_nickel: ['oritech:raw_nickel_block'],
        raw_platinum: ['oritech:raw_platinum_block'],
        steel: ['oritech:steel_block'],
        energite: ['oritech:energite_block'],
        nickel: ['oritech:nickel_block'],
        biosteel: ['oritech:biosteel_block'],
        platinum: ['oritech:platinum_block'],
        adamant: ['oritech:adamant_block'],
        electrum: ['oritech:electrum_block'],
        duratium: ['oritech:duratium_block'],
        biomass: ['oritech:biomass_block'],
        plastic: ['oritech:plastic_block'],
        fluxite: ['oritech:fluxite_block'],
        silicon: ['oritech:silicon_block'],

        replica: ['replication:replica_block'],
        raw_replica: ['replication:raw_replica_block'],

        hallowed_gold: ['malum:block_of_hallowed_gold'],
        malignant_pewter: ['malum:block_of_malignant_pewter'],
        soul_stained_steel: ['malum:block_of_soul_stained_steel'],
        raw_malignant_lead: ['malum:block_of_malignant_lead'],
        raw_cthonic_gold: ['malum:block_of_cthonic_gold'],
        raw_soulstone: ['malum:block_of_raw_soulstone'],
        soulstone: ['malum:block_of_soulstone'],
        arcane_charcoal: ['malum:block_of_arcane_charcoal'],
        mnemonic_fragment: ['malum:block_of_mnemonic_fragment'],
        raw_brilliance: ['malum:block_of_brilliance'],
        auric_embers: ['malum:block_of_auric_embers'],
        blazing_quartz: ['malum:block_of_blazing_quartz'],
        astral_weave: ['malum:block_of_astral_weave'],
        warp_flux: ['malum:block_of_warp_flux'],
        grim_talc: ['malum:block_of_grim_talc'],
        hex_ash: ['malum:block_of_hex_ash'],
        null_slate: ['malum:block_of_null_slate'],
        alchemical_calx: ['malum:block_of_alchemical_calx'],
        living_flesh: ['malum:block_of_living_flesh'],
        rotting_essence: ['malum:block_of_rotting_essence'],
        void_salts: ['malum:block_of_void_salts'],
        blighted_gunk: ['malum:mass_of_blighted_gunk'],

        coke: ['immersiveengineering:coke']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:storage_blocks/${tag}`).add(additions[tag]);
        event.get('c:storage_blocks').add(additions[tag]);
    });
});
