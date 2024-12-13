ServerEvents.tags('item', (event) => {
    let additions = {
        green: ['minecraft:cactus'],
        light_blue: ['minecraft:blue_orchid'],
        gray: [/minecraft:dead.*coral/],
        white: ['aether:white_flower'],
        lime: ['minecraft:sea_pickle'],
        brown: ['minecraft:cocoa_beans', 'actuallyadditions:flax_seeds'],
        blue: ['modern_industrialization:lapis_dust'],
        purple: ['ars_nouveau:sourceberry_bush', 'aether:purple_flower']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:raw_materials/dyes/${tag}`).add(additions[tag]);
    });
    event.get(`c:raw_materials/dyes/blue`).remove(['minecraft:lapis_lazuli']);
});
