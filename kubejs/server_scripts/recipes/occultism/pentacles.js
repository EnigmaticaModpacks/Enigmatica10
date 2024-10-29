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
    const default_mapping = {
        0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
        1: { type: 'modonomicon:tag', tag: '#minecraft:candles' },
        2: { type: 'modonomicon:block', block: 'minecraft:skeleton_skull' },
        3: { type: 'modonomicon:block', block: 'occultism:spirit_attuned_crystal' },
        4: { type: 'modonomicon:block', block: 'minecraft:wither_skeleton_skull' },
        Y: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_gold' },
        X: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_purple' },
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
    };

    let pentacles = [
        // Summoning Pentacle Overrides
        {
            name: 'summon_foliot',
            override: true,
            mapping: default_mapping,
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
            mapping: default_mapping,
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
            mapping: default_mapping,
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
            mapping: default_mapping,
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
            mapping: default_mapping,
            pattern: [
                [
                    '_GGG___________GGG_',
                    'G3L1G_________G1L3G',
                    'GL2LG__KKKKK__GL2LG',
                    'G1L3GKKRRRRRKKG3L1G',
                    '_GGGKOOKKKKKOOKGGG_',
                    '___KO1___W___1OK___',
                    '___KO_4__W__4_OK___',
                    '__KRK__1SSS1__KRK__',
                    '__KRK__S___S__KRK__',
                    '__KRKWWS_0_SWWKRK__',
                    '__KRK__S___S__KRK__',
                    '__KRK__1SSS1__KRK__',
                    '___KO_4__W__4_OK___',
                    '___KO1___W___1OK___',
                    '_GGGKOOKKKKKOOKGGG_',
                    'G1L3GKKRRRRRKKG3L1G',
                    'GL2LG__KKKKK__GL2LG',
                    'G3L1G_________G1L3G',
                    '_GGG___________GGG_'
                ]
            ]
        },
        {
            name: 'summon_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_GGG___________GGG_',
                    'G3L1G_________G1L3G',
                    'GL2LG__KKKKK__GL2LG',
                    'G1L3GKKRRRRRKKG3L1G',
                    '_GGGKOOKKKKKOOKGGG_',
                    '___KO1U3_W_3U1OK___',
                    '___KOU4U_W_U4UOK___',
                    '__KRK3U1SSS1U3KRK__',
                    '__KRK__S___S__KRK__',
                    '__KRKWWS_0_SWWKRK__',
                    '__KRK__S___S__KRK__',
                    '__KRK3U1SSS1U3KRK__',
                    '___KOU4U_W_U4UOK___',
                    '___KO1U3_W_3U1OK___',
                    '_GGGKOOKKKKKOOKGGG_',
                    'G1L3GKKRRRRRKKG3L1G',
                    'GL2LG__KKKKK__GL2LG',
                    'G3L1G_________G1L3G',
                    '_GGG___________GGG_'
                ]
            ]
        },
        // Possession Pentacle Overrides
        {
            name: 'possess_foliot',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_______YYYYY_______',
                    '______YSSSSSY______',
                    '_____YS_____SY_____',
                    '____YS__L2L__SY____',
                    '___YS____L____SY___',
                    '__YS_1_______1_SY__',
                    '_YS___1__Y__1___SY_',
                    'YS_____1Y_Y1_____SY',
                    'YS_L___Y___Y___L_SY',
                    'YS_2L_Y__0__Y_L2_SY',
                    'YS_L___Y___Y___L_SY',
                    'YS_____1Y_Y1_____SY',
                    '_YS___1__Y__1___SY_',
                    '__YS_1_______1_SY__',
                    '___YS____L____SY___',
                    '____YS__L2L__SY____',
                    '_____YS_____SY_____',
                    '______YSSSSSY______',
                    '_______YYYYY_______'
                ]
            ]
        },
        {
            name: 'possess_djinni',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_______YYYYY_______',
                    '______YSSSSSY______',
                    '_____YS_____SY_____',
                    '____YS__L2L__SY____',
                    '___YS____L____SY___',
                    '__YS_1_______1_SY__',
                    '_YS___1__Y__1___SY_',
                    'YS_____1Y_Y1_____SY',
                    'YS_L___Y___Y___L_SY',
                    'YS_2L_Y__0__Y_L2_SY',
                    'YS_L___Y___Y___L_SY',
                    'YS_____1Y_Y1_____SY',
                    '_YS___1__Y__1___SY_',
                    '__YS_1_______1_SY__',
                    '___YS____L____SY___',
                    '____YS__L2L__SY____',
                    '_____YS_____SY_____',
                    '______YSSSSSY______',
                    '_______YYYYY_______'
                ]
            ]
        },
        {
            name: 'possess_unbound_afrit',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_______YYYYY_______',
                    '_3____YSSSSSY____3_',
                    '__3__YG_____GY__3__',
                    '___3YG_GL2LG_GY3___',
                    '___YGO__GLG__OGY___',
                    '__YGO1O__G__O1OGY__',
                    '_YG__O1O_Y_O1O__GY_',
                    'YS_G__O1Y_Y1O__G_SY',
                    'YS_LG__Y___Y__GL_SY',
                    'YS_2LGY__0__YGL2_SY',
                    'YS_LG__Y___Y__GL_SY',
                    'YS_G__O1Y_Y1O__G_SY',
                    '_YG__O1O_Y_O1O__GY_',
                    '__YGO1O__G__O1OGY__',
                    '___YGO__GLG__OGY___',
                    '___3YG_GL2LG_GY3___',
                    '__3__YG_____GY__3__',
                    '_3____YSSSSSY____3_',
                    '_______YYYYY_______'
                ]
            ]
        },
        {
            name: 'possess_afrit',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_R_____YYYYY_____R_',
                    'R3R___YSSSSSY___R3R',
                    '_R3R_YG_____GY_R3R_',
                    '__R3YG_GL2LG_GY3R__',
                    '___YGO__GLG__OGY___',
                    '__YGO1O__G__O1OGY__',
                    '_YG__O1O_Y_O1O__GY_',
                    'YS_G__O1Y_Y1O__G_SY',
                    'YS_LG__Y___Y__GL_SY',
                    'YS_2LGY__0__YGL2_SY',
                    'YS_LG__Y___Y__GL_SY',
                    'YS_G__O1Y_Y1O__G_SY',
                    '_YG__O1O_Y_O1O__GY_',
                    '__YGO1O__G__O1OGY__',
                    '___YGO__GLG__OGY___',
                    '__R3YG_GL2LG_GY3R__',
                    '_R3R_YG_____GY_R3R_',
                    'R3R___YSSSSSY___R3R',
                    '_R_____YYYYY_____R_'
                ]
            ]
        },
        {
            name: 'possess_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_R_____YYYYY_____R_',
                    'R3R___YKKKKKY___R3R',
                    '_R3R_YGU4U4UGY_R3R_',
                    '__R3YG_GL2LG_GY3R__',
                    '___YGO__GLG__OGY___',
                    '__YGO1O__G__O1OGY__',
                    '_YG__O1O_Y_O1O__GY_',
                    'YKUG__O1Y_Y1O__GUKY',
                    'YK4LG__Y___Y__GL4KY',
                    'YKU2LGY__0__YGL2UKY',
                    'YK4LG__Y___Y__GL4KY',
                    'YKUG__O1Y_Y1O__GUKY',
                    '_YG__O1O_Y_O1O__GY_',
                    '__YGO1O__G__O1OGY__',
                    '___YGO__GLG__OGY___',
                    '__R3YG_GL2LG_GY3R__',
                    '_R3R_YGU4U4UGY_R3R_',
                    'R3R___YKKKKKY___R3R',
                    '_R_____YYYYY_____R_'
                ]
            ]
        },
        // Infusion Pentacle Overrides
        {
            name: 'craft_foliot',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '___________________',
                    '_XXXXX_______XXXXX_',
                    '_X__1X_XXXXX_X1__X_',
                    '_X___XX_____XX___X_',
                    '_X1__X_XXXXX_X__1X_',
                    '_XXXXXW_____WXXXXX_',
                    '___X_W1W___W1W_X___',
                    '__X_X_WWWWWWW_X_X__',
                    '__X_X__W___W__X_X__',
                    '__X_X__W_0_W__X_X__',
                    '__X_X__W___W__X_X__',
                    '__X_X_WWWWWWW_X_X__',
                    '___X_W1W___W1W_X___',
                    '_XXXXXW_____WXXXXX_',
                    '_X1__X_XXXXX_X__1X_',
                    '_X___XX_____XX___X_',
                    '_X__1X_XXXXX_X1__X_',
                    '_XXXXX_______XXXXX_',
                    '___________________'
                ]
            ]
        },
        {
            name: 'craft_djinni',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '___________________',
                    '_XXXXX_______XXXXX_',
                    '_X__1X_XXXXX_X1__X_',
                    '_X_LLXX_____XXLL_X_',
                    '_X1L2X_XXXXX_X2L1X_',
                    '_XXXXXW_____WXXXXX_',
                    '___X_W1W___W1W_X___',
                    '__X_X_WSSSSSW_X_X__',
                    '__X_X__S___S__X_X__',
                    '__X_X__S_0_S__X_X__',
                    '__X_X__S___S__X_X__',
                    '__X_X_WSSSSSW_X_X__',
                    '___X_W1W___W1W_X___',
                    '_XXXXXW_____WXXXXX_',
                    '_X1L2X_XXXXX_X2L1X_',
                    '_X_LLXX_____XXLL_X_',
                    '_X__1X_XXXXX_X1__X_',
                    '_XXXXX_______XXXXX_',
                    '___________________'
                ]
            ]
        },
        {
            name: 'craft_afrit',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '___3___________3___',
                    '_XXXXX_______XXXXX_',
                    '_XRR1X_XXXXX_X1RRX_',
                    '3XRLLXX_____XXLLRX3',
                    '_X1L2X_XXXXX_X2L1X_',
                    '_XXXXXS_____SXXXXX_',
                    '___X_S1S___S1S_X___',
                    '__X_X_SGGGGGS_X_X__',
                    '__X_X__G___G__X_X__',
                    '__X_X__G_0_G__X_X__',
                    '__X_X__G___G__X_X__',
                    '__X_X_SGGGGGS_X_X__',
                    '___X_S1S___S1S_X___',
                    '_XXXXXS_____SXXXXX_',
                    '_X1L2X_XXXXX_X2L1X_',
                    '3XRLLXX_____XXLLRX3',
                    '_XRR1X_XXXXX_X1RRX_',
                    '_XXXXX_______XXXXX_',
                    '___3___________3___'
                ]
            ]
        },
        {
            name: 'craft_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '___3___________3___',
                    '_XXXXX_______XXXXX_',
                    '_XRR1X_XXXXX_X1RRX_',
                    '3XRLLXXUU4UUXXLLRX3',
                    '_X1L2X_XXXXX_X2L1X_',
                    '_XXXXXG_____GXXXXX_',
                    '___X_G1G___G1G_X___',
                    '__XUX_GKKKKKG_XUX__',
                    '__XUX__K___K__XUX__',
                    '__X4X__K_0_K__X4X__',
                    '__XUX__K___K__XUX__',
                    '__XUX_GKKKKKG_XUX__',
                    '___X_G1G___G1G_X___',
                    '_XXXXXG_____GXXXXX_',
                    '_X1L2X_XXXXX_X2L1X_',
                    '3XRLLXXUU4UUXXLLRX3',
                    '_XRR1X_XXXXX_X1RRX_',
                    '_XXXXX_______XXXXX_',
                    '___3___________3___'
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
