RecipeViewerEvents.addEntries('item', (event) => {
    const additions = [
        { id: 'immersiveengineering:alloy_smelter' },
        { id: 'immersiveengineering:arc_furnace' },
        { id: 'immersiveengineering:assembler' },
        { id: 'immersiveengineering:auto_workbench' },
        { id: 'immersiveengineering:blast_furnace' },
        { id: 'immersiveengineering:bottling_machine' },
        { id: 'immersiveengineering:chunk_loader' },
        { id: 'immersiveengineering:coke_oven' },
        { id: 'immersiveengineering:crusher' },
        { id: 'immersiveengineering:diesel_generator' },
        { id: 'immersiveengineering:excavator' },
        { id: 'immersiveengineering:fermenter' },
        { id: 'immersiveengineering:advanced_blast_furnace' },
        { id: 'immersiveengineering:lightning_rod' },
        { id: 'immersiveengineering:metal_press' },
        { id: 'immersiveengineering:mixer' },
        { id: 'immersiveengineering:radio_tower' },
        { id: 'immersiveengineering:refinery' },
        { id: 'immersiveengineering:sawmill' },
        { id: 'immersiveengineering:silo' },
        { id: 'immersiveengineering:squeezer' },
        { id: 'immersiveengineering:tank' }
    ];

    additions.forEach((addition) => {
        event.add(addition.id);
    });
});
