ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/matter_value/';

    const recipes = [
        {
            input: { item: 'ae2:certus_quartz_crystal' },
            matter: [
                { type: 'replication:precious', amount: 1.0 },
                { type: 'replication:earth', amount: 2.0 },
                { type: 'replication:organic', amount: 2.0 }
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
            input: { tag: 'c:crops/cabbage' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}cabbage`
        },
        {
            input: { tag: 'c:crops/tomato' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}tomato`
        },
        {
            input: { tag: 'c:crops/onion' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}onion`
        },
        {
            input: { tag: 'c:crops/rice' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}rice`
        },
        {
            input: { tag: 'c:foods/berry' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}berry`
        },
        {
            input: { tag: 'c:berries' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}berries`
        },
        {
            input: { tag: 'c:fruits' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}fruits`
        },
        {
            input: { tag: 'c:nuts' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}nuts`
        },
        {
            input: { item: 'ars_nouveau:magebloom' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}magebloom`
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
            input: { tag: 'diet:ingredient' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}ingredient`
        },
        {
            input: { tag: 'c:crops/flax' },
            matter: [
                { type: 'replication:organic', amount: 2.0 },
                { type: 'replication:earth', amount: 2.0 }
            ],
            id: `${id_prefix}flax`
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
            input: { item: 'ars_nouveau:mendosteen_pod' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}mendosteen_pod`
        },
        {
            input: { item: 'ars_nouveau:bastion_pod' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}bastion_pod`
        },
        {
            input: { item: 'ars_nouveau:frostaya_pod' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}frostaya_pod`
        },
        {
            input: { item: 'ars_nouveau:bombegranate_pod' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}bombegranate_pod`
        },
        {
            input: { item: 'ars_elemental:flashpine_pod' },
            matter: [
                { type: 'replication:organic', amount: 4.0 },
                { type: 'replication:living', amount: 4.0 }
            ],
            id: `${id_prefix}flashpine_pod`
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

    recipes.forEach((recipe) => {
        recipe.type = 'replication:matter_value';
        event.custom(recipe).id(recipe.id);
    });
});
