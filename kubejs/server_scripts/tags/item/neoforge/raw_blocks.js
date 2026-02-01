ServerEvents.tags('item', (event) => {
    let additions = {
        // Mekanism
        osmium: ['mekanism:block_raw_osmium'],
        tin: ['mekanism:block_raw_tin'],
        lead: ['mekanism:block_raw_lead', 'modern_industrialization:raw_lead_block', 'immersiveengineering:raw_block_lead'],
        uranium: ['mekanism:block_raw_uranium'],

        // Modern Industrialization
        iridium: ['modern_industrialization:raw_iridium_block'],
        silver: ['modern_industrialization:raw_silver_block', 'immersiveengineering:raw_block_silver'],
        zinc: ['modern_industrialization:raw_zinc_block'],
        tin: ['modern_industrialization:raw_tin_block'],
        platinum: ['modern_industrialization:raw_platinum_block'],
        antimony: ['modern_industrialization:raw_antimony_block'],
        nickel: ['modern_industrialization:raw_nickel_block'],
        titanium: ['modern_industrialization:raw_titanium_block'],
        tungsten: ['modern_industrialization:raw_tungsten_block'],
        uranium: ['modern_industrialization:raw_uranium_block'],

        // Immersive Engineering
        aluminum: ['immersiveengineering:raw_block_aluminum'],

        // Occultism
        iesnium: ['occultism:raw_iesnium_block'],

        // Create
        zinc: ['create:raw_zinc_block'],

        // Malum
        raw_soulstone:['malum:block_of_raw_soulstone']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:raw_blocks/${tag}`).add(additions[tag]);
        event.get('c:raw_blocks').add(additions[tag]);
    });
});
