ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_repair/';

    const recipes = [
        {
            inputs: [],
            itemIdRegex: `osmium_.+`,
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/osmium`).getId(), count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}osmium`
        },
        {
            inputs: [],
            itemIdRegex: `bronze_.+`,
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/bronze`).getId(), count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}bronze`
        },
        {
            inputs: [],
            itemIdRegex: `lapis_.+`,
            repairMaterial: { tag: `c:gems/lapis`, count: 2 },
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}lapis`
        },
        {
            inputs: [],
            itemIdRegex: `refined_glowstone_.+`,
            repairMaterial: { tag: `c:ingots/refined_glowstone`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}refined_glowstone`
        },
        {
            inputs: [],
            itemIdRegex: `refined_obsidian_.+`,
            repairMaterial: { tag: `c:ingots/refined_obsidian`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}refined_obsidian`
        },
        {
            inputs: [],
            itemIdRegex: `compressed_iron_.+`,
            repairMaterial: { tag: `c:ingots/compressed_iron`, count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}compressed_iron`
        },
        {
            inputs: [
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
            itemIdRegex: `steel_.+`,
            repairMaterial: { item: AlmostUnified.getTagTargetItem(`c:ingots/steel`).getId(), count: 2 },
            spirits: [{ type: 'earthen', count: 8 }],
            id: `${id_prefix}steel`
        },
        {
            inputs: [],
            itemIdRegex: `zanite_.+`,
            repairMaterial: { tag: `aether:gems/zanite`, count: 2 },
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}zanite`
        },
        {
            inputs: [],
            itemIdRegex: `neptune_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}neptune`
        },
        {
            inputs: [],
            itemIdRegex: `neptunium_.+`,
            repairMaterial: { tag: `c:ingots/neptunium`, count: 1 },
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}neptunium`
        },
        {
            inputs: [],
            itemIdRegex: `gravitite_.+`,
            repairMaterial: { tag: 'aether:gravitite_repairing', count: 1 },
            spirits: [
                { type: 'aerial', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}gravitite`
        },
        {
            inputs: [],
            itemIdRegex: `phoenix_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}phoenix`
        },
        {
            inputs: [],
            itemIdRegex: `valkyrie_.+`,
            repairMaterial: { tag: `c:ingots/iron`, count: 2 },
            spirits: [
                { type: 'sacred', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}valkyrie`
        },
        {
            inputs: [],
            itemIdRegex: `obsidian_.+`,
            repairMaterial: { tag: `c:obsidians/normal`, count: 1 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}obsidian`
        },
        {
            inputs: [],
            itemIdRegex: `warden_.+`,
            repairMaterial: { item: 'deeperdarker:reinforced_echo_shard', count: 1 },
            spirits: [
                { type: 'eldritch', count: 16 },
                { type: 'wicked', count: 16 },
                { type: 'earthen', count: 16 }
            ],
            id: `${id_prefix}warden`
        },
        {
            inputs: ['irons_spellbooks:paladin_chestplate', 'irons_spellbooks:speed_boots'],
            repairMaterial: { tag: 'c:ingots/mithril', count: 1 },
            spirits: [
                { type: 'arcane', count: 16 },
                { type: 'earthen', count: 16 }
            ],
            id: `${id_prefix}mithril`
        },
        {
            inputs: [
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
            spirits: [{ type: 'arcane', count: 16 }],
            id: `${id_prefix}magic_cloth`
        },
        {
            inputs: ['irons_spellbooks:magehunter'],
            repairMaterial: { tag: 'c:ingots/arcane', count: 1 },
            spirits: [
                { type: 'arcane', count: 16 },
                { type: 'earthen', count: 16 }
            ],
            id: `${id_prefix}arcane`
        },
        {
            inputs: ['irons_spellbooks:spellbreaker'],
            repairMaterial: { tag: 'c:gems/diamond', count: 2 },
            spirits: [
                { type: 'arcane', count: 16 },
                { type: 'earthen', count: 16 }
            ],
            id: `${id_prefix}diamond`
        },
        {
            inputs: ['irons_spellbooks:amethyst_rapier'],
            repairMaterial: { tag: 'c:gems/amethyst', count: 1 },
            spirits: [
                { type: 'arcane', count: 16 },
                { type: 'earthen', count: 16 }
            ],
            id: `${id_prefix}amethyst`
        },
        {
            inputs: ['irons_spellbooks:boreal_blade'],
            repairMaterial: { tag: 'c:ices/ice', count: 1 },
            spirits: [
                { type: 'arcane', count: 16 },
                { type: 'earthen', count: 16 }
            ],
            id: `${id_prefix}ice`
        },
        {
            inputs: [
                'irons_spellbooks:keeper_flamberge',
                'irons_spellbooks:legionnaire_flamberge',
                'irons_spellbooks:decrepit_scythe',
                'irons_spellbooks:hellrazor'
            ],
            repairMaterial: { item: 'minecraft:netherite_scrap', count: 1 },
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}netherite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_repair';
        event.custom(recipe).id(recipe.id);
    });
});
