ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }
        { mod: 'cobblegengalore' },
        { mod: 'ironchest' },

        { type: 'oritech:fuel_generator' },
        { type: 'mekanism:combining', id: /.*(from_raw|to_ore|to_deepslate_ore|to_ancient_debris)/ },
        { type: 'immersiveengineering:generator_fuel' },

        { id: /actuallyadditions:crushing\/(copper|iron|gold)_ore/ },

        { id: 'aether:moa_egg_pumpkin_pie' },

        { id: /ae2:inscriber\/(ender|fluix|certus_quartz|sky_stone)_dust/ },
        { id: /advanced_ae:.*budding/ },
        { id: 'advanced_ae:certuscharger' },
        { id: 'advanced_ae:chargedredstone' },
        { id: 'advanced_ae:quantum_infused_dust' },
        { id: 'advanced_ae:quantum_infused_dust_crushed' },
        { id: /appflux:inscriber\/crush_(diamond|emerald)/ },

        { id: 'ars_elemental:blaze_powder' },

        { id: /arts_and_crafts:dye_.*_with_bleached_(wool|bed|carpet)/ },

        { id: /create:crushing\/(deepslate|nether_gold)/ },

        { id: /enderio:smelting\/oritech\/(copper|nickel|iron|gold|platinum)_ingot/ },
        { id: /enderio:sag_milling\/(lapis|coal|quartz)/ },
        { id: `enderio:sag_milling/blaze_powder` },
        { id: `enderio:tank_fill/experience_bottle` },

        { id: 'evilcraft:special/minecraft_dead_bush' },

        { id: 'handcrafted:terracotta_thin_pot' },
        { id: 'handcrafted:wood_plate' },

        { id: `immersiveengineering:crusher/dark_prismarine` },
        { id: `immersiveengineering:blastfurnace/fuel_coke_block` },
        { id: 'immersiveengineering:crafting/coke_to_coal_coke' },

        { id: /industrialforegoing:laser_drill_ore.*yellor(ite|ium)/ },
        { id: `industrialforegoing:dissolution_chamber/xp_bottles` },

        { id: /malum:malum\/spirit_crucible\/repair\/occultism/ },

        { id: /mekanism:processing\/(quartz|coal|diamond|emerald|lapis_lazuli|fluorite)\/to_dust/ },
        { id: /mekanism:compat\/ae2\/(fluix_crystal|certus_crystal|ender_pearl|sky_stone)_to_dust/ },
        { id: /mekanism:crushing\/(charcoal_dust|obsidian_to_dust|breeze_rod|blaze_rod)/ },
        { id: `mekanism:sulfur_dye` },

        { id: /modern_industrialization:compat\/ae2\/macerator\// },
        { id: /modern_industrialization:petrochem\/distillation\/crued_oil/ },

        { id: /mffs:steel_(ingot|compound)$/ },

        { id: /occultism:crushing\/(emerald|certus_quartz|quartz|fluix|coal|diamond|lapis|fluorite)_dust_from_gem/ },
        { id: `occultism:crushing/blaze_powder_from_rod` },
        { id: `occultism:crushing/obsidian_dust` },

        { id: /oritech:crafting\/alloy\/(steel|adamant|electrum)/ },
        { id: /oritech:pulverizer\/dust\/dyes/ },
        { id: /oritech:(iron|gold|copper|nickel)_(ingot|dust)/ },
        { id: /oritech:platinum_ingot_from_(smelting|blasting)_platinum_gem/ },
        { id: /oritech:foundry\/alloy\/gem\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:compat\/immersiveengineering\/(arcalloying|alloying)\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:mixing\/compat\/create\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:atomicforge\/dust\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:pulverizer\/dust\/(blaze|iron|copper|gold|nickel|platinum|uranium)/ },
        { id: /oritech:(pulverizer|grinder)\/(raw|ore)\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:pulverizer\/compat\/(mekanism|ae2|immersiveengineering|create)/ },
        { id: /oritech:grinder\/dust\/(iron|copper|gold|nickel|platinum|uranium)/ },
        { id: /oritech:grinder\/compat\/(mekanism|ae2|immersiveengineering)/ },
        { id: /oritech:refinery\/compat\/(mekanism|ae2|immersiveengineering)\/rawsheol/ },
        { id: /oritech:centrifuge\/clump/ },
        { id: /oritech:centrifuge\/compat\/(mekanism|immersiveengineering|create)\/clump/ },
        { id: /oritech:centrifuge\/compat\/clump/ },
        { id: /oritech:centrifuge\/fluid\/clump/ },
        { id: /oritech:centrifuge\/fluid\/compat\/(mekanism|create)/ },
        { id: /oritech:(splashing|blasting)\/compat\/create/ },
        { id: 'oritech:centrifuge/fluid/compat/clumpwet/crushed_uranium' },
        { id: 'oritech:centrifuge/fluid/compat/pneumaticcraft/fuel' },
        { id: 'oritech:centrifuge/fluid/fuel' },
        { id: 'oritech:centrifuge/fluid/polymerresin' },
        { id: 'oritech:centrifuge/redstoneuran' },
        { id: 'oritech:compat/immersiveengineering/alloying/electrum' },
        { id: 'oritech:compat/immersiveengineering/arcalloying/electrum' },
        { id: 'oritech:compat/mekanism/infusing/electrum_dust' },
        { id: 'oritech:cooler/compat/pneumaticcraft/plastic' },
        { id: 'oritech:crushing/compat/create/coal' },
        { id: 'oritech:foundry/alloy/compat/mekanism/infused_alloy' },
        { id: 'oritech:foundry/alloy/electrum' },
        { id: 'oritech:grinder/coal' },
        { id: 'oritech:grinder/dust/adamant' },
        { id: 'oritech:grinder/dust/biosteel' },
        { id: 'oritech:grinder/dust/duratium' },
        { id: 'oritech:grinder/dust/energite' },
        { id: 'oritech:grinder/dust/red_sand' },
        { id: 'oritech:grinder/dust/sand_from_sandstone' },
        { id: 'oritech:grinder/electrum' },
        { id: 'oritech:grinder/sand_from_sandstone' },
        { id: 'oritech:grinder/uranium' },
        { id: 'oritech:mixing/compat/create/electrum' },
        { id: 'oritech:pulverizer/coal' },
        { id: 'oritech:pulverizer/dust/adamant' },
        { id: 'oritech:pulverizer/dust/biosteel' },
        { id: 'oritech:pulverizer/dust/duratium' },
        { id: 'oritech:pulverizer/dust/energite' },
        { id: 'oritech:pulverizer/dust/red_sand' },
        { id: 'oritech:pulverizer/dust/sand_from_sandstone' },
        { id: 'oritech:pulverizer/electrum' },
        { id: 'oritech:pulverizer/sand_from_sandstone' },
        { id: 'oritech:pulverizer/uranium' },
        { id: 'oritech:refinery/oilalt' },
        { id: 'oritech:refinery/oilbase' },
        { id: 'oritech:silicon_blockblock' },
        { id: 'oritech:platinum_ingot' },
        { id: 'oritech:crafting/techdoor' },

        { id: /powah:crafting\/cable_(basic|hardened|blazing|niotic|spirited|nitro)$/ },

        { output: 'utilitarian:soul_snad' },
        { output: 'utilitarian:drit' },
        { output: 'utilitarian:grrass' },
        { id: `utilitarian:utility/green_dye` },
        { id: /utilitarian:utility\/redying/ },

        // Duplicates detected by polymorph
        { id: 'minecraft:cake' },
        { id: 'actuallyadditions:tagged_sticky_piston' },
        { id: 'bigreactors:crafting/raw_yellorium_component_to_storage' },
        { id: 'bigreactors:crafting/yellorium_component_to_storage' },
        { id: 'bigreactors:crafting/blutonium_storage_to_component' },
        { id: 'bigreactors:crafting/blutonium_component_to_storage' },
        { id: 'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium' },
        { id: 'bigreactors:reactor/reinforced/controller_ingots_yellorium' },
        { id: 'bigreactors:reactor/basic/fuelrod_ingots_yellorium' },
        { id: 'bigreactors:reactor/basic/controller_ingots_yellorium' },
        { id: 'bigreactors:misc/book/erguide_alt' },
        { id: /terralith:(dispenser|observer|lever|piston|dropper)_alt/ },
        { id: 'farmersdelight:paper_from_tree_bark' },
        { id: 'farmersdelight:organic_compost_from_tree_bark' },
        { id: 'enderio:stick' },
        { id: 'modern_industrialization:vanilla_recipes/easy_chest' },
        { id: 'actuallyadditions:tagged_slime_block' },
        { id: 'bigreactors:smelting/yellorium_from_ore' },
        { id: /mekanism:processing\/(tin|lead)\/ingot\/from_ore_smelting/ },
        { id: /mekanism:processing\/(tin|uranium|lead)\/ingot\/from_ore_blasting/ },
        { id: /deeperdarker:(copper|gold|iron)_ingot_from_(blasting|smelting)_gloomslate_.*_ore/ },
        { id: /deeperdarker:(coal|diamond|lapis_lazuli|emerald)_from_(blasting|smelting)_gloomslate_.*_ore/ },
        { id: /oritech:(steel|electrum)_ingot_from_(blasting|smelting)/ },
        { id: /oritech:(gold|nickel|copper|iron)_nugget_from_(blasting|smelting)/ },
        { id: 'aether:moa_egg_cake' },
        { id: 'oritech:platinum_dust' },
        { id: 'immersiveengineering:crafting/coal_coke_to_coke' },
        { id: 'immersiveengineering:crafting/coke_to_coal_coke' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
