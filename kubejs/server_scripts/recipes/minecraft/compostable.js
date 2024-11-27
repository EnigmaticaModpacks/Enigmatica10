const compostables = [
    { input: 'minecraft:egg', chance: 0.35 },
    { input: '#c:foods/raw_meat', chance: 0.65 },
    { input: '#c:foods/safe_raw_fish', chance: 0.45 },
    { input: 'actuallyadditions:rice_seeds', chance: 0.35 },
    { input: 'actuallyadditions:canola_seeds', chance: 0.35 },
    { input: 'actuallyadditions:flax_seeds', chance: 0.35 },
    { input: 'actuallyadditions:coffee_beans', chance: 0.35 },
    { input: 'actuallyadditions:rice', chance: 0.65 },
    { input: 'actuallyadditions:canola', chance: 0.65 },
    { input: 'chococraft:gysahl_green', chance: 0.65 }
];

ServerEvents.compostableRecipes((event) => {
    compostables.forEach((compostable) => {
        event.add(compostable.input, compostable.chance);
    });
});

ServerEvents.generateData('before_mods', (event) => {
    let data_map = { values: {} };
    compostables.forEach((compostable) => {
        // Build up compostables data map for NeoForge
        // https://docs.neoforged.net/docs/resources/server/datamaps/builtin/
        data_map.values[compostable.input] = { chance: compostable.chance };
    });

    event.json(`neoforge:data_maps/item/compostables`, data_map);
});
