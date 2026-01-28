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

        // Immersive Engineering
        aluminum: ['immersiveengineering:raw_block_aluminum']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:raw_blocks/${tag}`).add(additions[tag]);
        event.get('c:raw_blocks').add(additions[tag]);
    });
});
