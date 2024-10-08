ServerEvents.compostableRecipes((event) => {
    compostables.forEach((compostable) => {
        event.add(compostable.input, compostable.chance);
    });
});

ServerEvents.generateData('before_mods', (event) => {
    let data_map = { values: {} };
    compostables.forEach((compostable) => {
        // Build up compostables data map for NeoForge
        data_map.values[compostable.input] = { chance: compostable.chance };
    });

    event.json(`neoforge:data_maps/item/compostables.json`, data_map);
});
