ServerEvents.tags('block', (event) => {
    // Foliot tier pentacle blocks
    event.get('occultism:bricks/tier_1').add(['#occultism:bricks/tier_2']);
    event.get('occultism:accents/tier_1').add(['#occultism:accents/tier_2']);
    event.get('occultism:skulls/tier_1').add(['#occultism:skulls/tier_2']);
    event
        .get('occultism:moderators/tier_1')
        .add(['#occultism:moderators/tier_2', /minecraft:(waxed_)?(copper_block|(exposed|weathered|oxidized))/]);

    // Djinni tier pentacle blocks
    event.get('occultism:bricks/tier_2').add(['#occultism:bricks/tier_3', 'minecraft:tuff_bricks']);
    event.get('occultism:accents/tier_2').add(['#occultism:accents/tier_3', 'minecraft:chiseled_tuff']);
    event.get('occultism:skulls/tier_2').add(['#occultism:skulls/tier_3', 'minecraft:skeleton_skull']);
    event.get('occultism:moderators/tier_2').add(['#occultism:moderators/tier_3', '#c:storage_blocks/gold']);

    // Afrit tier pentacle blocks
    event.get('occultism:bricks/tier_3').add(['#occultism:bricks/tier_4', 'minecraft:red_nether_bricks']);
    event.get('occultism:accents/tier_3').add(['#occultism:accents/tier_4', 'minecraft:chiseled_nether_bricks']);
    event.get('occultism:skulls/tier_3').add(['#occultism:skulls/tier_4', 'minecraft:wither_skeleton_skull']);
    event.get('occultism:moderators/tier_3').add(['#occultism:moderators/tier_4']);

    // Marid tier pentacle blocks
    event.get('occultism:bricks/tier_4').add(['minecraft:prismarine_bricks']);
    event.get('occultism:accents/tier_4').add(['minecraft:dark_prismarine']);
    event.get('occultism:skulls/tier_4').add(['minecraft:conduit']);
    event.get('occultism:moderators/tier_4').add(['#c:storage_blocks/iesnium']);

    // Chalk Combos
    event
        .get('occultism:glyphs_red')
        .add(['#occultism:glyphs_blue', '#occultism:glyphs_orange', '#occultism:glyphs_brown']);
    event.get('occultism:glyphs_blue').add(['#occultism:glyphs_cyan', '#occultism:glyphs_light_blue']);
    event.get('occultism:glyphs_yellow').add(['#occultism:glyphs_green', '#occultism:glyphs_lime']);
    event.get('occultism:glyphs_purple').add(['#occultism:glyphs_pink', '#occultism:glyphs_magenta']);

    // Add everything to pentacle materials for placement by Ritual Satchels
    event
        .get('occultism:pentacle_materials')
        .add([
            'minecraft:sculk',
            'minecraft:sculk_shrieker',
            'minecraft:sculk_sensor',
            'minecraft:sea_lantern',
            'occultism:otherstone',
            '#occultism:bricks/tier_1',
            '#occultism:accents/tier_1',
            '#occultism:skulls/tier_1',
            '#occultism:moderators/tier_1'
        ]);
});
