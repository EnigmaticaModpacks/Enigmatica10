ServerEvents.generateData('after_mods', (event) => {
    // Match blocks by Blockstate: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/blockstate-matcher/
    // A: {
    //     type: 'modonomicon:blockstate',
    //     display: 'minecraft:chest[facing=east]',
    //     block: 'minecraft:chest[facing=west]'
    // }
    // Match blocks by Tag: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/tag-matcher/
    // A: {
    //     type: 'modonomicon:tag',
    //     tag: 'minecraft:planks'
    // }

    let pentacles = [
        {
            name: 'contact_eldritch_spirit',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                B: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_brown' },
                C: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_cyan' },
                M: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_magenta' },
                f: { type: 'modonomicon:block', block: 'minecraft:sculk_sensor' }
            },
            pattern: [
                [
                    '_____________________',
                    '__________C__________',
                    '_________CfC_________',
                    '_________CMC_________',
                    '____BB__CMMMC__BB____',
                    '____BfBBCM_MCBBfB____',
                    '_____B_B_____B_B_____',
                    '_____BB_______BB_____',
                    '____CC_________CC____',
                    '__CCMM_________MMCC__',
                    '_CfMM_____0_____MMfC_',
                    '__CCMM_________MMCC__',
                    '____CC_________CC____',
                    '_____BB_______BB_____',
                    '_____B_B_____B_B_____',
                    '____BfBBCM_MCBBfB____',
                    '____BB__CMMMC__BB____',
                    '_________CMC_________',
                    '_________CfC_________',
                    '__________C__________',
                    '_____________________'
                ]
            ]
        }
    ];

    pentacles.forEach((pentacle) => {
        pentacle.type = 'modonomicon:dense';

        // Set background display. Same size as pentacle, blocks alternate between otherstone and andesite.
        // * and + are used as the keys following Occultism's convention.
        let ground = [];
        let pattern = pentacle.pattern[0];

        for (let i = 0; i < pattern.length; i++) {
            let row = '';
            for (let j = 0; j < pattern[i].length; j++) {
                row += (i + j) % 2 == 0 ? '*' : '+';
            }
            ground.push(row);
        }

        pentacle.pattern.push(ground);
        pentacle.mapping['*'] = { type: 'modonomicon:display', display: 'occultism:otherstone' };
        pentacle.mapping['+'] = { type: 'modonomicon:display', display: 'minecraft:stone' };

        event.json(`occultism:modonomicon/multiblocks/${pentacle.name}`, pentacle);

        // Remember to set lang entries for all new pentacles in en_us.json
        // x and y placement refer to the entry location within the modonomicon
        if (!pentacle.override) {
            {
                event.json(
                    `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}`,
                    generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
                );
            }
        }
    });
});
