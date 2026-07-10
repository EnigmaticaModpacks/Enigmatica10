ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:immersiveengineering/generator_fuel/';

    const recipes = [
        {
            fluidTag: 'c:diesel',
            burnTime: 400,
            id: `${id_prefix}diesel`
        },
        {
            fluidTag: 'c:biodiesel',
            burnTime: 400,
            id: `${id_prefix}biodiesel`
        },
        {
            fluidTag: 'c:boosted_diesel',
            burnTime: 800,
            id: `${id_prefix}boosted_diesel`
        },
        {
            fluidTag: 'c:high_power_biodiesel',
            burnTime: 800,
            id: `${id_prefix}high_power_biodiesel`
        },
        {
            fluidTag: 'c:heavy_fuel',
            burnTime: 600,
            id: `${id_prefix}heavy_fuel`
        },
        {
            fluidTag: 'c:light_fuel',
            burnTime: 720,
            id: `${id_prefix}light_fuel`
        },
        {
            fluidTag: 'c:creosote',
            burnTime: 160,
            id: `${id_prefix}creosote`
        },
        {
            fluidTag: 'c:naphtha',
            burnTime: 80,
            id: `${id_prefix}naphtha`
        },
        {
            fluidTag: 'c:raw_biodiesel',
            burnTime: 50,
            id: `${id_prefix}raw_biodiesel`
        },
        {
            fluidTag: 'c:synthetic_oil',
            burnTime: 16,
            id: `${id_prefix}synthetic_oil`
        },
        {
            fluidTag: 'c:crude_oil',
            burnTime: 16,
            id: `${id_prefix}crude_oil`
        },
        {
            fluidTag: 'c:blaze_ember',
            burnTime: 450,
            id: `${id_prefix}blaze_ember`
        },
        {
            fluidTag: 'c:voidflame',
            burnTime: 1300,
            id: `${id_prefix}voidflame`
        },
        {
            fluidTag: 'c:eclipse_ember',
            burnTime: 4000,
            id: `${id_prefix}eclipse_ember`
        },
        {
            fluidTag: 'c:lpg',
            burnTime: 720,
            id: `${id_prefix}lpg`
        },
        {
            fluidTag: 'c:gasoline',
            burnTime: 600,
            id: `${id_prefix}gasoline`
        },
        {
            fluidTag: 'c:kerosene',
            burnTime: 440,
            id: `${id_prefix}kerosene`
        },
        {
            fluidTag: 'c:canola_oil',
            burnTime: 80,
            id: `${id_prefix}canola_oil`
        },
        {
            fluidTag: 'c:refined_canola_oil',
            burnTime: 192,
            id: `${id_prefix}refined_canola_oil`
        },
        {
            fluidTag: 'c:crystallized_oil',
            burnTime: 560,
            id: `${id_prefix}crystallized_oil`
        },
        {
            fluidTag: 'c:empowered_oil',
            burnTime: 960,
            id: `${id_prefix}empowered_oil`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:generator_fuel';
        recipe.burnTime /= 1.6;
        event.custom(recipe).id(recipe.id);
    });
});
