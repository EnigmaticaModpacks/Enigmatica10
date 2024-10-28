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
                    '___1___________1___',
                    '_______WWWWW_______',
                    '_1___WW_____WW___1_',
                    '____W_________W____',
                    '___W_1___W___1_W___',
                    '___W_____W_____W___',
                    '__W____1WWW1____W__',
                    '__W____W___W____W__',
                    '__W__WWW_0_WWW__W__',
                    '__W____W___W____W__',
                    '__W____1WWW1____W__',
                    '___W_____W_____W___',
                    '___W_1___W___1_W___',
                    '____W_________W____',
                    '_1___WW_____WW___1_',
                    '_______WWWWW_______',
                    '___1___________1___',
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
                    '_SSS___________SSS_',
                    'S_L1S_________S1L_S',
                    'SL2LS__WWWWW__SL2LS',
                    'S1L_SWW_____WWS_L1S',
                    '_SSSW__WWWWW__WSSS_',
                    '___W_1___W___1_W___',
                    '___W_____W_____W___',
                    '__W_W__1WWW1__W_W__',
                    '__W_W__W___W__W_W__',
                    '__W_WWWW_0_WWWW_W__',
                    '__W_W__W___W__W_W__',
                    '__W_W__1WWW1__W_W__',
                    '___W_____W_____W___',
                    '___W_1___W___1_W___',
                    '_SSSW__WWWWW__WSSS_',
                    'S1L_SWW_____WWS_L1S',
                    'SL2LS__WWWWW__SL2LS',
                    'S_L1S_________S1L_S',
                    '_SSS___________SSS_'
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
                    '_SSS___________SSS_',
                    'S_L1S_________S1L_S',
                    'SL2LS__GGGGG__SL2LS',
                    'S1L_SGG_____GGS_L1S',
                    '_SSSGOOGGGGGOOGSSS_',
                    '___GO1___W___1OG___',
                    '___GO____W____OG___',
                    '__G_G__1SSS1__G_G__',
                    '__G_G__S___S__G_G__',
                    '__G_GWWS_0_SWWG_G__',
                    '__G_G__S___S__G_G__',
                    '__G_G__1SSS1__G_G__',
                    '___GO____W____OG___',
                    '___GO1___W___1OG___',
                    '_SSSGOOGGGGGOOGSSS_',
                    'S1L_SGG_____GGS_L1S',
                    'SL2LS__GGGGG__SL2LS',
                    'S_L1S_________S1L_S',
                    '_SSS___________SSS_'
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
                    '_SSS___________SSS_',
                    'S3L1S_________S1L3S',
                    'SL2LS__GGGGG__SL2LS',
                    'S1L3SGGRRRRRGGS3L1S',
                    '_SSSGOOGGGGGOOGSSS_',
                    '___GO1___W___1OG___',
                    '___GO____W____OG___',
                    '__GRG__1SSS1__GRG__',
                    '__GRG__S___S__GRG__',
                    '__GRGWWS_0_SWWGRG__',
                    '__GRG__S___S__GRG__',
                    '__GRG__1SSS1__GRG__',
                    '___GO____W____OG___',
                    '___GO1___W___1OG___',
                    '_SSSGOOGGGGGOOGSSS_',
                    'S1L3SGGRRRRRGGS3L1S',
                    'SL2LS__GGGGG__SL2LS',
                    'S3L1S_________S1L3S',
                    '_SSS___________SSS_'
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
                },
                K: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_black' }
            },
            pattern: [
                [
                    '_KKK___________KKK_',
                    'K3L1K_________K1L3K',
                    'KL2LK__GGGGG__KL2LK',
                    'K1L3KGGRRRRRGGK3L1K',
                    '_KKKGOOGGGGGOOGKKK_',
                    '___GO1___W___1OG___',
                    '___GO_4__W__4_OG___',
                    '__GRG__1SSS1__GRG__',
                    '__GRG__S___S__GRG__',
                    '__GRGWWS_0_SWWGRG__',
                    '__GRG__S___S__GRG__',
                    '__GRG__1SSS1__GRG__',
                    '___GO_4__W__4_OG___',
                    '___GO1___W___1OG___',
                    '_KKKGOOGGGGGOOGKKK_',
                    'K1L3KGGRRRRRGGK3L1K',
                    'KL2LK__GGGGG__KL2LK',
                    'K3L1K_________K1L3K',
                    '_KKK___________KKK_'
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
                },
                K: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_black' }
            },
            pattern: [
                [
                    '_KKK___________KKK_',
                    'K3L1K_________K1L3K',
                    'KL2LK__GGGGG__KL2LK',
                    'K1L3KGGRRRRRGGK3L1K',
                    '_KKKGOOGGGGGOOGKKK_',
                    '___GO1U3_W_3U1OG___',
                    '___GOU4U_W_U4UOG___',
                    '__GRG3U1SSS1U3GRG__',
                    '__GRG__S___S__GRG__',
                    '__GRGWWS_0_SWWGRG__',
                    '__GRG__S___S__GRG__',
                    '__GRG3U1SSS1U3GRG__',
                    '___GOU4U_W_U4UOG___',
                    '___GO1U3_W_3U1OG___',
                    '_KKKGOOGGGGGOOGKKK_',
                    'K1L3KGGRRRRRGGK3L1K',
                    'KL2LK__GGGGG__KL2LK',
                    'K3L1K_________K1L3K',
                    '_KKK___________KKK_'
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
