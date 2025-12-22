ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_repair/';

    const recipes = [
        {
            validItems: [
                'pneumaticcraft:compressed_iron_helmet',
                'pneumaticcraft:compressed_iron_chestplate',
                'pneumaticcraft:compressed_iron_leggings',
                'pneumaticcraft:compressed_iron_boots'
            ],
            regex: { itemIdRegex: `compressed_iron_.+` },
            repairMaterial: { tag: `c:ingots/compressed_iron`, count: 2 },
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:earthen', count: 8 }
            ],
            id: `${id_prefix}compressed_iron`
        },
        {
            validItems: [
                'immersiveengineering:pickaxe_steel',
                'immersiveengineering:shovel_steel',
                'immersiveengineering:axe_steel',
                'immersiveengineering:hoe_steel',
                'immersiveengineering:sword_steel',
                'immersiveengineering:armor_steel_helmet',
                'immersiveengineering:armor_steel_chestplate',
                'immersiveengineering:armor_steel_leggings',
                'immersiveengineering:armor_steel_boots'
            ],
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(), count: 2 },
            spirits: [{ type: 'malum:earthen', count: 8 }],
            id: `${id_prefix}steel`
        },
        {
            validItems: [
                'aether:zanite_sword',
                'aether:zanite_shovel',
                'aether:zanite_pickaxe',
                'aether:zanite_axe',
                'aether:zanite_hoe',
                'aether:zanite_helmet',
                'aether:zanite_chestplate',
                'aether:zanite_leggings',
                'aether:zanite_boots',
                'aether:zanite_gloves'
            ],
            regex: { itemIdRegex: `zanite_.+` },
            repairMaterial: { tag: `aether:gems/zanite`, count: 2 },
            spirits: [
                { type: 'malum:earthen', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}zanite`
        },
        {
            validItems: [
                'aether:neptune_helmet',
                'aether:neptune_chestplate',
                'aether:neptune_leggings',
                'aether:neptune_boots',
                'aether:neptune_gloves'
            ],
            regex: { itemIdRegex: `neptune_.+` },
            repairMaterial: { tag: `c:essences/water`, count: 1 },
            spirits: [
                { type: 'malum:aqueous', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}neptune`
        },
        {
            validItems: [
                'aether:gravitite_sword',
                'aether:gravitite_shovel',
                'aether:gravitite_pickaxe',
                'aether:gravitite_axe',
                'aether:gravitite_hoe',
                'aether:gravitite_helmet',
                'aether:gravitite_chestplate',
                'aether:gravitite_leggings',
                'aether:gravitite_boots',
                'aether:gravitite_gloves'
            ],
            regex: { itemIdRegex: `gravitite_.+` },
            repairMaterial: { tag: 'aether:gravitite_repairing', count: 1 },
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}gravitite`
        },
        {
            validItems: [
                'aether:phoenix_bow',
                'aether:phoenix_helmet',
                'aether:phoenix_chestplate',
                'aether:phoenix_leggings',
                'aether:phoenix_boots',
                'aether:phoenix_gloves'
            ],
            regex: { itemIdRegex: `phoenix_.+` },
            repairMaterial: { tag: `c:essences/fire`, count: 1 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}phoenix`
        },
        {
            validItems: [
                'aether:valkyrie_lance',
                'aether:valkyrie_pickaxe',
                'aether:valkyrie_axe',
                'aether:valkyrie_hoe',
                'aether:valkyrie_shovel',
                'aether:valkyrie_helmet',
                'aether:valkyrie_chestplate',
                'aether:valkyrie_leggings',
                'aether:valkyrie_boots',
                'aether:valkyrie_gloves'
            ],
            regex: { itemIdRegex: `valkyrie_.+` },
            repairMaterial: { tag: `c:ingots/iridium`, count: 2 },
            spirits: [
                { type: 'malum:sacred', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}valkyrie`
        },
        {
            validItems: [
                'aether:obsidian_helmet',
                'aether:obsidian_chestplate',
                'aether:obsidian_leggings',
                'aether:obsidian_boots',
                'aether:obsidian_gloves'
            ],
            regex: { itemIdRegex: `obsidian_.+` },
            repairMaterial: { tag: `c:obsidians/normal`, count: 1 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}obsidian`
        },
        {
            validItems: ['irons_spellbooks:paladin_chestplate', 'irons_spellbooks:speed_boots'],
            repairMaterial: { tag: 'c:ingots/mithril', count: 1 },
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:earthen', count: 16 }
            ],
            id: `${id_prefix}mithril`
        },
        {
            validItems: [
                'irons_spellbooks:plagued_boots',
                'irons_spellbooks:plagued_leggings',
                'irons_spellbooks:plagued_chestplate',
                'irons_spellbooks:plagued_helmet',
                'irons_spellbooks:priest_boots',
                'irons_spellbooks:priest_leggings',
                'irons_spellbooks:priest_chestplate',
                'irons_spellbooks:priest_helmet',
                'irons_spellbooks:shadowwalker_boots',
                'irons_spellbooks:shadowwalker_leggings',
                'irons_spellbooks:shadowwalker_chestplate',
                'irons_spellbooks:shadowwalker_helmet',
                'irons_spellbooks:cryomancer_boots',
                'irons_spellbooks:cryomancer_leggings',
                'irons_spellbooks:cryomancer_chestplate',
                'irons_spellbooks:cryomancer_helmet',
                'irons_spellbooks:cultist_boots',
                'irons_spellbooks:cultist_leggings',
                'irons_spellbooks:cultist_chestplate',
                'irons_spellbooks:cultist_helmet',
                'irons_spellbooks:archevoker_boots',
                'irons_spellbooks:archevoker_leggings',
                'irons_spellbooks:archevoker_chestplate',
                'irons_spellbooks:archevoker_helmet',
                'irons_spellbooks:electromancer_boots',
                'irons_spellbooks:electromancer_leggings',
                'irons_spellbooks:electromancer_chestplate',
                'irons_spellbooks:electromancer_helmet',
                'irons_spellbooks:pyromancer_boots',
                'irons_spellbooks:pyromancer_leggings',
                'irons_spellbooks:pyromancer_chestplate',
                'irons_spellbooks:pyromancer_helmet',
                'irons_spellbooks:wandering_magician_boots',
                'irons_spellbooks:wandering_magician_leggings',
                'irons_spellbooks:wandering_magician_chestplate',
                'irons_spellbooks:wandering_magician_helmet',
                'irons_spellbooks:pumpkin_boots',
                'irons_spellbooks:pumpkin_leggings',
                'irons_spellbooks:pumpkin_chestplate',
                'irons_spellbooks:pumpkin_helmet'
            ],
            repairMaterial: { item: 'irons_spellbooks:magic_cloth', count: 2 },
            spirits: [{ type: 'malum:arcane', count: 16 }],
            id: `${id_prefix}magic_cloth`
        },
        {
            validItems: ['irons_spellbooks:magehunter'],
            repairMaterial: { tag: 'c:ingots/arcane', count: 1 },
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:earthen', count: 16 }
            ],
            id: `${id_prefix}arcane`
        },
        {
            validItems: ['irons_spellbooks:spellbreaker'],
            repairMaterial: { tag: 'c:gems/diamond', count: 2 },
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:earthen', count: 16 }
            ],
            id: `${id_prefix}diamond`
        },
        {
            validItems: ['irons_spellbooks:amethyst_rapier'],
            repairMaterial: { tag: 'c:gems/amethyst', count: 1 },
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:earthen', count: 16 }
            ],
            id: `${id_prefix}amethyst`
        },
        {
            validItems: ['irons_spellbooks:boreal_blade'],
            repairMaterial: { tag: 'c:ices/ice', count: 1 },
            spirits: [
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:earthen', count: 16 }
            ],
            id: `${id_prefix}ice`
        },
        {
            validItems: [
                'irons_spellbooks:keeper_flamberge',
                'irons_spellbooks:legionnaire_flamberge',
                'irons_spellbooks:decrepit_scythe',
                'irons_spellbooks:hellrazor'
            ],
            repairMaterial: { item: 'minecraft:netherite_scrap', count: 1 },
            spirits: [
                { type: 'malum:infernal', count: 8 },
                { type: 'malum:earthen', count: 8 },
                { type: 'malum:arcane', count: 8 }
            ],
            id: `${id_prefix}netherite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_repair';
        event.custom(recipe).id(recipe.id);
    });
});
