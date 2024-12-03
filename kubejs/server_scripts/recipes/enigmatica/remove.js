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
        { type: 'evilcraft:special/minecraft_dead_bush' },
        { type: 'oritech:fuel_generator' },
        { id: /powah:crafting\/cable_(basic|hardened|blazing|niotic|spirited|nitro)$/ },
        { id: /actuallyadditions:crushing\/(copper|iron|gold)_ore/ },
        { id: /industrialforegoing:laser_drill_ore.*yellor(ite|ium)/ },
        { id: /mffs:steel_(ingot|compound)$/ },
        { id: /oritech:crafting\/alloy\/(steel|adamant|electrum)/ },
        { id: `enderio:sag_milling/blaze_powder` },
        { id: `mekanism:sulfur_dye` },
        { id: `utilitarian:utility/green_dye` },
        { id: `enderio:tank_fill/experience_bottle` },
        { id: `industrialforegoing:dissolution_chamber/xp_bottles` },

        // Duplicates detected by polymorph
        { id: 'minecraft:cake' },
        { id: 'actuallyadditions:tagged_sticky_piston' },
        { id: 'bigreactors:crafting/raw_yellorium_component_to_storage' },
        { id: 'bigreactors:crafting/yellorium_component_to_storage' },
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
        { id: /advanced_ae:.*budding/ },
        { id: 'advanced_ae:certuscharger' },
        { id: 'advanced_ae:chargedredstone' },
        { id: /oritech:(iron|gold|copper|nickel|platinum)_(ingot|dust)/ },
        { id: /oritech:grinder\/(raw|ore)\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:centrifuge\/clump(dry|wet)\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:foundry\/gem\/(copper|nickel|iron|gold|platinum)/ },
        { id: /oritech:atomicforge\/dust\/(copper|nickel|iron|gold|platinum)/ },
        { id: /enderio:smelting\/oritech\/(copper|nickel|iron|gold|platinum)_ingot/ },
        { id: 'aether:moa_egg_cake' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
