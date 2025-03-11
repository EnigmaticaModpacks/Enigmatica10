ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/matter_value/';

    const recipes = [
        {
            input: { item: 'ae2:certus_quartz_crystal' },
            matter: [
                { type: 'replication:precious', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}certus_quartz_crystal`
        },
        {
            input: { tag: 'c:ingots/osmium' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}osmium`
        },
        {
            input: { tag: 'c:ingots/zinc' },
            matter: [{ type: 'replication:metallic', amount: 9.0 }],
            id: `${id_prefix}zinc`
        },
        {
            input: { tag: 'c:ingots/aluminum' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}aluminum`
        },
        {
            input: { tag: 'c:ingots/antimony' },
            matter: [{ type: 'replication:metallic', amount: 9.0 }],
            id: `${id_prefix}antimony`
        },
        {
            input: { tag: 'c:ingots/lead' },
            matter: [{ type: 'replication:metallic', amount: 9.0 }],
            id: `${id_prefix}lead`
        },
        {
            input: { tag: 'c:ingots/iridium' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}iridium`
        },
        {
            input: { tag: 'c:ingots/nickel' },
            matter: [{ type: 'replication:metallic', amount: 9.0 }],
            id: `${id_prefix}nickel`
        },
        {
            input: { tag: 'c:ingots/platinum' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}platinum`
        },
        {
            input: { tag: 'c:ingots/plutonium' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 },
                { type: 'replication:quantum', amount: 9.0 }
            ],
            id: `${id_prefix}plutonium`
        },
        {
            input: { tag: 'c:ingots/iesnium' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:quantum', amount: 9.0 }
            ],
            id: `${id_prefix}iesnium`
        },
        {
            input: { tag: 'c:ingots/silver' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}silver`
        },
        {
            input: { tag: 'c:ingots/tin' },
            matter: [{ type: 'replication:metallic', amount: 9.0 }],
            id: `${id_prefix}tin`
        },
        {
            input: { tag: 'c:ingots/titanium' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}titanium`
        },
        {
            input: { tag: 'c:ingots/tungsten' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}tungsten`
        },
        {
            input: { tag: 'c:ingots/uranium' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:quantum', amount: 9.0 }
            ],
            id: `${id_prefix}uranium`
        },
        {
            input: { tag: 'c:ingots/uraninite' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:quantum', amount: 9.0 }
            ],
            id: `${id_prefix}uraninite`
        },
        {
            input: { tag: 'c:ingots/mithril' },
            matter: [
                { type: 'replication:metallic', amount: 9.0 },
                { type: 'replication:precious', amount: 9.0 }
            ],
            id: `${id_prefix}mithril`
        },
        {
            input: { item: 'farmersdelight:straw' },
            matter: [{ type: 'replication:organic', amount: 1.0 }],
            id: `${id_prefix}straw`
        },
        {
            input: { tag: 'c:cork' },
            matter: [{ type: 'replication:organic', amount: 1.0 }],
            id: `${id_prefix}cork`
        },
        {
            input: { tag: 'c:gems/dark' },
            matter: [{ type: 'replication:precious', amount: 24.0 }],
            id: `${id_prefix}dark_gem`
        },
        {
            input: { tag: 'c:dusts/dark_gem' },
            matter: [{ type: 'replication:precious', amount: 12.0 }],
            id: `${id_prefix}dark_gem_dust`
        },
        {
            input: { item: 'evilcraft:hardened_blood_shard' },
            matter: [
                { type: 'replication:living', amount: 3.0 },
                { type: 'replication:organic', amount: 1.0 }
            ],
            id: `${id_prefix}hardened_blood_shard`
        },
        {
            input: { item: 'evilcraft:hardened_blood' },
            matter: [
                { type: 'replication:living', amount: 27.0 },
                { type: 'replication:organic', amount: 9.0 }
            ],
            id: `${id_prefix}hardened_blood`
        },
        {
            input: { tag: 'c:silicon' },
            matter: [{ type: 'replication:earth', amount: 2.0 }],
            id: `${id_prefix}silicon`
        },
        {
            input: { item: 'deeperdarker:soul_dust' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:quantum', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}soul_dust`
        },
        {
            input: { item: 'deeperdarker:soul_crystal' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:quantum', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}soul_crystal`
        },
        {
            input: { item: 'deeperdarker:resonarium' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:quantum', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}resonarium`
        },
        {
            input: { item: 'deeperdarker:sculk_bone' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:quantum', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}sculk_bone`
        },
        {
            input: { item: 'deeperdarker:heart_of_the_deep' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:quantum', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}heart_of_the_deep`
        },
        {
            input: { item: 'deeperdarker:warden_carapace' },
            matter: [
                { type: 'replication:organic', amount: 16.0 },
                { type: 'replication:quantum', amount: 54.0 },
                { type: 'replication:living', amount: 16.0 }
            ],
            id: `${id_prefix}warden_carapace`
        },
        {
            input: { item: 'deeperdarker:grime_ball' },
            matter: [
                { type: 'replication:quantum', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}grime_ball`
        },
        {
            input: { item: 'irons_spellbooks:arcane_essence' },
            matter: [{ type: 'replication:quantum', amount: 4.0 }],
            id: `${id_prefix}arcane_essence`
        },
        {
            input: { item: 'irons_spellbooks:lightning_bottle' },
            matter: [
                { type: 'replication:quantum', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}lightning_bottle`
        },
        {
            input: { item: 'occultism:otherworld_essence' },
            matter: [
                { type: 'replication:ender', amount: 1.0 },
                { type: 'replication:organic', amount: 4.0 }
            ],
            id: `${id_prefix}otherworld_essence`
        },
        {
            input: { item: 'occultism:otherstone' },
            matter: [
                { type: 'replication:quantum', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}otherstone`
        },
        {
            input: { item: 'occultism:othercobblestone' },
            matter: [
                { type: 'replication:quantum', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}othercobblestone`
        },
        {
            input: { item: 'occultism:spirit_attuned_gem' },
            matter: [
                { type: 'replication:quantum', amount: 8.0 },
                { type: 'replication:precious', amount: 28.0 }
            ],
            id: `${id_prefix}spirit_attuned_gem`
        },
        {
            input: { item: 'enderio:grains_of_infinity' },
            matter: [
                { type: 'replication:quantum', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}grains_of_infinity`
        },
        {
            input: { item: 'actuallyadditions:black_quartz' },
            matter: [
                { type: 'replication:precious', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}black_quartz`
        },
        {
            input: { item: 'oritech:fluxite' },
            matter: [
                { type: 'replication:precious', amount: 4.0 },
                { type: 'replication:earth', amount: 1.0 },
                { type: 'replication:quantum', amount: 2.0 }
            ],
            id: `${id_prefix}fluxite`
        },
        {
            input: { item: 'modern_industrialization:lignite_coal' },
            matter: [
                { type: 'replication:earth', amount: 2.0 },
                { type: 'replication:precious', amount: 0.3 },
                { type: 'replication:organic', amount: 0.3 }
            ],
            id: `${id_prefix}lignite_coal`
        },
        {
            input: { item: 'mekanism:fluorite_gem' },
            matter: [
                { type: 'replication:precious', amount: 4.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}fluorite_gem`
        },
        {
            input: { item: 'irons_spellbooks:cinder_essence' },
            matter: [
                { type: 'replication:living', amount: 1.0 },
                { type: 'replication:organic', amount: 1.0 },
                { type: 'replication:nether', amount: 1.0 }
            ],
            id: `${id_prefix}cinder_essence`
        }
    ];

    /*
    Types:
        living
        organic
        metallic
        earth
        precious
        quantum
        nether
        ender

    */
    const basic_living_materials = [
        '#c:foods/berry',
        '#c:berries',
        '#c:fruits',
        '#c:nuts',
        'occultism:tallow',
        'ars_elemental:flashpine_pod',
        'ars_nouveau:bombegranate_pod',
        'ars_nouveau:frostaya_pod',
        'ars_nouveau:bastion_pod',
        'ars_nouveau:mendosteen_pod',
        'aether:aechor_petal',
        'the_bumblezone:bee_stinger',
        'ars_nouveau:wilden_spike',
        'ars_nouveau:wilden_horn',
        'ars_nouveau:wilden_wing',
        'aquaculture:jellyfish',
        'evilcraft:poison_sac',
        'aquaculture:atlantic_cod',
        'aquaculture:blackfish',
        'aquaculture:atlantic_halibut',
        'aquaculture:atlantic_herring',
        'aquaculture:pink_salmon',
        'aquaculture:pollock',
        'aquaculture:rainbow_trout',
        'aquaculture:bayad',
        'aquaculture:boulti',
        'aquaculture:capitaine',
        'aquaculture:smallmouth_bass',
        'aquaculture:bluegill',
        'aquaculture:brown_trout',
        'aquaculture:carp',
        'aquaculture:catfish',
        'aquaculture:gar',
        'aquaculture:minnow',
        'aquaculture:muskellunge',
        'aquaculture:perch',
        'aquaculture:arapaima',
        'aquaculture:piranha',
        'aquaculture:tambaqui',
        'aquaculture:red_grouper',
        'aquaculture:tuna',
        'irons_spellbooks:frozen_bone',
        'deeperdarker:bloom_berries',
        'chococraft:chocobo_drumstick_raw'
    ];

    basic_living_materials.forEach((material) => {
        recipes.push({
            input: material.charAt(0) == '#' ? { tag: material.slice(1) } : { item: material },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}${material.replace('#', '').replace(':', '_')}`
        });
    });

    const basic_plant_materials = [
        '#diet:ingredient',
        '#c:crops/flax',
        '#c:crops/cabbage',
        '#c:crops/tomato',
        '#c:crops/onion',
        '#c:crops/rice',
        'deeperdarker:glowing_flowers',
        'deeperdarker:glowing_grass',
        'deeperdarker:gloomy_grass',
        'deeperdarker:gloomy_cactus',
        'deeperdarker:glowing_roots',
        'deeperdarker:sculk_tendrils',
        'deeperdarker:sculk_vines',
        'deeperdarker:ice_lily',
        'ars_nouveau:magebloom',
        'deeperdarker:blooming_moss_block',
        'deeperdarker:sculk_gleam'
    ];

    basic_plant_materials.forEach((material) => {
        recipes.push({
            input: material.charAt(0) == '#' ? { tag: material.slice(1) } : { item: material },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}${material.replace('#', '').replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'replication:matter_value';
        event.custom(recipe).id(recipe.id);
    });
});
