ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/blasting/';
    const recipes = [
        {
            input: `#c:storage_blocks/raw_replica`,
            output: 'replication:replica_block',
            xp: 6.3,
            duration: 45,
            id: `${id_prefix}replica_block_from_raw_block`
        },
        {
            input: `#c:storage_blocks/raw_antimony`,
            output: 'modern_industrialization:antimony_block',
            xp: 6.3,
            duration: 45,
            id: `${id_prefix}antimony_block_from_raw_block`
        }
    ];

    let materials = ['osmium', 'iesnium', 'iridium', 'lead', 'nickel', 'platinum', 'silver', 'tin', 'uranium'];
    materials.forEach((material) => {
        recipes.push({
            input: `#c:storage_blocks/raw_${material}`,
            output: AlmostUnified.getTagTargetItem(`c:storage_blocks/${material}`).getId(),
            xp: 6.3,
            duration: 45,
            id: `${id_prefix}${material}_block_from_raw_block`
        });
    });

    materials = ['iesnium', 'iridium', 'platinum'];
    materials.forEach((material) => {
        recipes.push({
            input: `#c:clumps/${material}`,
            output: AlmostUnified.getTagTargetItem(`c:ingots/${material}`).getId(),
            xp: 0.1,
            duration: 5,
            id: `${id_prefix}${material}_ingot_from_clump`
        });
    });

    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
