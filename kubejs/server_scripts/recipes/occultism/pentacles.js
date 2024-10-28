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
        // Summoning Pentacle Overrides
        {
            name: 'summon_foliot',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
                W: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_any',
                    display: 'occultism:chalk_glyph_white'
                }
            },
            pattern: [
                [
                    '___________________',
                    '___________________',
                    '_______WWWWW_______',
                    '_____WW_____WW_____',
                    '____W_________W____',
                    '___W___1___1___W___',
                    '___W___________W___',
                    '__W__1__WWW__1__W__',
                    '__W____W___W____W__',
                    '__W____W_0_W____W__',
                    '__W____W___W____W__',
                    '__W__1__WWW__1__W__',
                    '___W___________W___',
                    '___W___1___1___W___',
                    '____W_________W____',
                    '_____WW_____WW_____',
                    '_______WWWWW_______',
                    '___________________',
                    '___________________'
                ]
            ]
        },
        {
            name: 'summon_djinni',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
                2: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' },
                L: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_lime' },

                W: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_any',
                    display: 'occultism:chalk_glyph_white'
                },
                S: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_no_white',
                    display: 'occultism:chalk_glyph_light_gray'
                }
            },
            pattern: [
                [
                    '___________________',
                    '___S___________S___',
                    '__SLS__WWWWW__SLS__',
                    '_SL2LSW_____WSL2LS_',
                    '__SLS_________SLS__',
                    '___S_S_1___1_S_S___',
                    '___W__S_____S__W___',
                    '__W__1_SWWWS_1__W__',
                    '__W____W___W____W__',
                    '__W____W_0_W____W__',
                    '__W____W___W____W__',
                    '__W__1_SWWWS_1__W__',
                    '___W__S_____S__W___',
                    '___S_S_1___1_S_S___',
                    '__SLS_________SLS__',
                    '_SL2LSW_____WSL2LS_',
                    '__SLS__WWWWW__SLS__',
                    '___S___________S___',
                    '___________________'
                ]
            ]
        },
        {
            name: 'summon_unbound_afrit',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
                2: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' },
                3: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
                L: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_lime' },
                O: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_orange' },
                W: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_any',
                    display: 'occultism:chalk_glyph_white'
                },
                S: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_no_white',
                    display: 'occultism:chalk_glyph_light_gray'
                },
                G: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_dark',
                    display: 'occultism:chalk_glyph_gray'
                }
            },
            pattern: [
                [
                    '___________________',
                    '___S___________S___',
                    '__SLS__GGGGG__SLS__',
                    '_SL2LSGO___OGSL2LS_',
                    '__SLS_O_____O_SLS__',
                    '___S_S_1___1_S_S___',
                    '___GO_S_____S_OG___',
                    '__GO_1_SWWWS_1_OG__',
                    '__G____W___W____G__',
                    '__G____W_0_W____G__',
                    '__G____W___W____G__',
                    '__GO_1_SWWWS_1_OG__',
                    '___GO_S_____S_OG___',
                    '___S_S_1___1_S_S___',
                    '__SLS_O_____O_SLS__',
                    '_SL2LSGO___OGSL2LS_',
                    '__SLS__GGGGG__SLS__',
                    '___S___________S___',
                    '___________________'
                ]
            ]
        },
        {
            name: 'summon_afrit',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
                2: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' },
                3: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
                L: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_lime' },
                O: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_orange' },
                R: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_red' },
                W: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_any',
                    display: 'occultism:chalk_glyph_white'
                },
                S: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_no_white',
                    display: 'occultism:chalk_glyph_light_gray'
                },
                G: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_dark',
                    display: 'occultism:chalk_glyph_gray'
                }
            },
            pattern: [
                [
                    '___________________',
                    '___S_3_______3_S___',
                    '__SLS__GGGGG__SLS__',
                    '_SL2LSGORRROGSL2LS_',
                    '__SLSRO_____ORSLS__',
                    '_3_SRS_1___1_SRS_3_',
                    '___GO_S_____S_OG___',
                    '__GO_1_SWWWS_1_OG__',
                    '__GR___W___W___RG__',
                    '__GR___W_0_W___RG__',
                    '__GR___W___W___RG__',
                    '__GO_1_SWWWS_1_OG__',
                    '___GO_S_____S_OG___',
                    '_3_SRS_1___1_SRS_3_',
                    '__SLSRO_____ORSLS__',
                    '_SL2LSGORRROGSL2LS_',
                    '__SLS__GGGGG__SLS__',
                    '___S_3_______3_S___',
                    '___________________'
                ]
            ]
        },
        {
            name: 'summon_unbound_marid',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
                2: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' },
                3: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
                4: { type: 'modonomicon:block', block: 'minecraft:wither_skeleton_skull' },
                L: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_lime' },
                O: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_orange' },
                R: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_red' },
                S: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_no_white',
                    display: 'occultism:chalk_glyph_light_gray'
                },
                G: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_dark',
                    display: 'occultism:chalk_glyph_gray'
                },
                K: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_black' }
            },
            pattern: [
                [
                    '___________________',
                    '___K_3_______3_K___',
                    '__KLK__KKKKK__KLK__',
                    '_KL2LKKORRROKKL2LK_',
                    '__KLKRO_____ORKLK__',
                    '_3_KRG_1_4_1_GRK_3_',
                    '___KO_G_____G_OK___',
                    '__KO_1_GSSSG_1_OK__',
                    '__KR___S___S___RK__',
                    '__KR_4_S_0_S_4_RK__',
                    '__KR___S___S___RK__',
                    '__KO_1_GSSSG_1_OK__',
                    '___KO_G_____G_OK___',
                    '_3_KRG_1_4_1_GRK_3_',
                    '__KLKRO_____ORKLK__',
                    '_KL2LKKORRROKKL2LK_',
                    '__KLK__KKKKK__KLK__',
                    '___K_3_______3_K___',
                    '___________________'
                ]
            ]
        },
        {
            name: 'summon_marid',
            override: true,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
                2: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' },
                3: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
                4: { type: 'modonomicon:block', block: 'minecraft:wither_skeleton_skull' },
                L: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_lime' },
                O: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_orange' },
                R: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_red' },
                U: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_blue' },
                S: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_no_white',
                    display: 'occultism:chalk_glyph_light_gray'
                },
                G: {
                    type: 'modonomicon:tag',
                    tag: '#occultism:foundation_glyphs_dark',
                    display: 'occultism:chalk_glyph_gray'
                },
                K: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_black' }
            },
            pattern: [
                [
                    '_________3_________',
                    '___K_3_______3_K___',
                    '__KLK__KKKKK__KLK__',
                    '_KL2LKKORRROKKL2LK_',
                    '__KLKRO__U__ORKLK__',
                    '_3_KRG_1U4U1_GRK_3_',
                    '___KO_G__U__G_OK___',
                    '__KO_1_GSSSG_1_OK__',
                    '__KR_U_S___S_U_RK__',
                    '3_KRU4US_0_SU4URK_3',
                    '__KR_U_S___S_U_RK__',
                    '__KO_1_GSSSG_1_OK__',
                    '___KO_G__U__G_OK___',
                    '_3_KRG_1U4U1_GRK_3_',
                    '__KLKRO__U__ORKLK__',
                    '_KL2LKKORRROKKL2LK_',
                    '__KLK__KKKKK__KLK__',
                    '___K_3_______3_K___',
                    '_________3_________'
                ]
            ]
        },

        // Wild Pentacle Overrides
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
