ServerEvents.generateData('before_mods', (event) => {
    const id_prefix = 'enigmatica:modern_industrialization/fluid_fuels/';
    const recipes = {
        values: {
            'modern_industrialization:boosted_diesel': { eu_per_mb: 800 },
            'modern_industrialization:diesel': { eu_per_mb: 400 },
            // 'modern_industrialization:biodiesel': { eu_per_mb: 250 },
            'modern_industrialization:biodiesel': { eu_per_mb: 400 },
            // 'modern_industrialization:heavy_fuel': { eu_per_mb: 240 },
            'modern_industrialization:heavy_fuel': { eu_per_mb: 600 },
            // 'modern_industrialization:light_fuel': { eu_per_mb: 160 },
            'modern_industrialization:light_fuel': { eu_per_mb: 720 },
            'modern_industrialization:creosote': { eu_per_mb: 160 },
            'modern_industrialization:naphtha': { eu_per_mb: 80 },
            'modern_industrialization:raw_biodiesel': { eu_per_mb: 50 },
            'modern_industrialization:synthetic_oil': { eu_per_mb: 16 },
            'modern_industrialization:crude_oil': { eu_per_mb: 16 },
            'modern_industrialization:deuterium': { eu_per_mb: 1 },
            'modern_industrialization:hydrogen': { eu_per_mb: 1 },
            'modern_industrialization:tritium': { eu_per_mb: 1 },

            'justdirethings:refined_t4_fluid_source': { eu_per_mb: 4000 },
            'justdirethings:refined_t3_fluid_source': { eu_per_mb: 1300 },
            'justdirethings:refined_t2_fluid_source': { eu_per_mb: 450 },

            'pneumaticcraft:lpg': { eu_per_mb: 720 },
            'pneumaticcraft:gasoline': { eu_per_mb: 600 },
            'pneumaticcraft:kerosene': { eu_per_mb: 440 },
            'pneumaticcraft:biodiesel': { eu_per_mb: 400 },
            'pneumaticcraft:diesel': { eu_per_mb: 400 },
            'pneumaticcraft:oil': { eu_per_mb: 16 },

            'actuallyadditions:canola_oil': { eu_per_mb: 80 },
            'actuallyadditions:refined_canola_oil': { eu_per_mb: 192 },
            'actuallyadditions:crystallized_oil': { eu_per_mb: 560 },
            'actuallyadditions:empowered_oil': { eu_per_mb: 960 },

            'oritech:still_oil': { eu_per_mb: 16 },
            'oritech:still_fuel': { eu_per_mb: 1300 }
        }
    };

    event.json(`modern_industrialization:data_maps/fluid/fluid_fuels`, recipes);
});
