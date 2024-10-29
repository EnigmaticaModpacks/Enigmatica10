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

    const wild_mapping = {
        0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
        W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
        A: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_light_blue' },
        E: {
            type: 'modonomicon:block',
            block: 'occultism:chalk_glyph_green'
        },
        P: {
            type: 'modonomicon:block',
            block: 'occultism:chalk_glyph_pink'
        },
        B: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_brown' },
        C: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_cyan' },
        M: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_magenta' },
        5: { type: 'modonomicon:block', block: 'minecraft:sculk_catalyst' },
        6: { type: 'modonomicon:block', block: 'minecraft:sculk' },
        7: { type: 'modonomicon:block', block: 'minecraft:sculk_shrieker' },
        8: { type: 'modonomicon:block', block: 'minecraft:sculk_sensor' }
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
                    '_GGG___________GGG_',
                    'G_L1G_________G1L_G',
                    'GL2LG__WWWWW__GL2LG',
                    'G1L_GWW_____WWG_L1G',
                    '_GGGWOOWWWWWOOWGGG_',
                    '___WO1___S___1OW___',
                    '___WO____S____OW___',
                    '__W_W__1WWW1__W_W__',
                    '__W_W__W___W__W_W__',
                    '__W_WSSW_0_WSSW_W__',
                    '__W_W__W___W__W_W__',
                    '__W_W__1WWW1__W_W__',
                    '___WO____S____OW___',
                    '___WO1___S___1OW___',
                    '_GGGWOOWWWWWOOWGGG_',
                    'G1L_GWW_____WWG_L1G',
                    'GL2LG__WWWWW__GL2LG',
                    'G_L1G_________G1L_G',
                    '_GGG___________GGG_'
                ]
            ]
        },
        {
            name: 'summon_afrit',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_GGG___________GGG_',
                    'G3L1G_________G1L3G',
                    'GL2LG__WWWWW__GL2LG',
                    'G1L3GWWRRRRRWWG3L1G',
                    '_GGGWOOWWWWWOOWGGG_',
                    '___WO1___S___1OW___',
                    '___WO____S____OW___',
                    '__WRW__1WWW1__WRW__',
                    '__WRW__W___W__WRW__',
                    '__WRWSSW_0_WSSWRW__',
                    '__WRW__W___W__WRW__',
                    '__WRW__1WWW1__WRW__',
                    '___WO____S____OW___',
                    '___WO1___S___1OW___',
                    '_GGGWOOWWWWWOOWGGG_',
                    'G1L3GWWRRRRRWWG3L1G',
                    'GL2LG__WWWWW__GL2LG',
                    'G3L1G_________G1L3G',
                    '_GGG___________GGG_'
                ]
            ]
        },
        {
            name: 'summon_unbound_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_GKG___________GKG_',
                    'G3L1G_________G1L3G',
                    'KL2LK__WWWWW__KL2LK',
                    'G1L3GWWRRRRRWWG3L1G',
                    '_GKGWOOWWWWWOOWGKG_',
                    '___WO1___S___1OW___',
                    '___WO_4__S__4_OW___',
                    '__WRW__1WWW1__WRW__',
                    '__WRW__W___W__WRW__',
                    '__WRWSSW_0_WSSWRW__',
                    '__WRW__W___W__WRW__',
                    '__WRW__1WWW1__WRW__',
                    '___WO_4__S__4_OW___',
                    '___WO1___S___1OW___',
                    '_GKGWOOWWWWWOOWGKG_',
                    'G1L3GWWRRRRRWWG3L1G',
                    'KL2LK__WWWWW__KL2LK',
                    'G3L1G_________G1L3G',
                    '_GKG___________GKG_'
                ]
            ]
        },
        {
            name: 'summon_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_GKG___________GKG_',
                    'G3L1G_________G1L3G',
                    'KL2LK__WWWWW__KL2LK',
                    'G1L3GWWRRRRRWWG3L1G',
                    '_GKGWOOWWWWWOOWGKG_',
                    '___WO1U3_S_3U1OW___',
                    '___WOU4U_S_U4UOW___',
                    '__WRW3U1WWW1U3WRW__',
                    '__WRW__W___W__WRW__',
                    '__WRWSSW_0_WSSWRW__',
                    '__WRW__W___W__WRW__',
                    '__WRW3U1WWW1U3WRW__',
                    '___WOU4U_S_U4UOW___',
                    '___WO1U3_S_3U1OW___',
                    '_GKGWOOWWWWWOOWGKG_',
                    'G1L3GWWRRRRRWWG3L1G',
                    'KL2LK__WWWWW__KL2LK',
                    'G3L1G_________G1L3G',
                    '_GKG___________GKG_'
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
                    '______YWWWWWY______',
                    '_____YW_____WY_____',
                    '____YW_______WY____',
                    '___YW_________WY___',
                    '__YW_1_______1_WY__',
                    '_YW___1__Y__1___WY_',
                    'YW_____1Y_Y1_____WY',
                    'YW_____Y___Y_____WY',
                    'YW____Y__0__Y____WY',
                    'YW_____Y___Y_____WY',
                    'YW_____1Y_Y1_____WY',
                    '_YW___1__Y__1___WY_',
                    '__YW_1_______1_WY__',
                    '___YW_________WY___',
                    '____YW_______WY____',
                    '_____YW_____WY_____',
                    '______YWWWWWY______',
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
                    '3__3___________3__3',
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
                    '3__3___________3__3'
                ]
            ]
        },
        {
            name: 'craft_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '3__3___________3__3',
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
                    '3__3___________3__3'
                ]
            ]
        },

        // Wild Pentacle Overrides
        {
            name: 'resurrect_spirit',
            override: true,
            mapping: wild_mapping,
            pattern: [
                [
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '_________W_________',
                    '______W_____W______',
                    '___________________',
                    '___________________',
                    '_____W___0___W_____',
                    '___________________',
                    '___________________',
                    '______W_____W______',
                    '_________W_________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________'
                ]
            ]
        },
        {
            name: 'contact_wild_spirit',
            override: true,
            mapping: wild_mapping,
            pattern: [
                [
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '_________P_________',
                    '_______AEWEA_______',
                    '______WPE_EPW______',
                    '_____APA_P_APA_____',
                    '_____EE_____EE_____',
                    '____PW_P_0_P_WP____',
                    '_____EE_____EE_____',
                    '_____APA_P_APA_____',
                    '______WPE_EPW______',
                    '_______AEWEA_______',
                    '_________P_________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________'
                ]
            ]
        },
        {
            name: 'contact_eldritch_spirit',
            override: true,
            mapping: wild_mapping,
            pattern: [
                [
                    '___________________',
                    '___________________',
                    '___________________',
                    '_________6_________',
                    '_________6_________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___66_________66___',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '_________6_________',
                    '_________6_________',
                    '___________________',
                    '___________________',
                    '___________________'
                ],
                [
                    '___________________',
                    '___________________',
                    '_________6_________',
                    '___________________',
                    '____7_________7____',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '__6_____________6__',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '____7_________7____',
                    '___________________',
                    '_________6_________',
                    '___________________',
                    '___________________'
                ],
                [
                    '___________________',
                    '_________6_________',
                    '___________________',
                    '___________________',
                    '____6_________6____',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '_6_______________6_',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '____6_________6____',
                    '___________________',
                    '___________________',
                    '_________6_________',
                    '___________________'
                ],
                [
                    '___________________',
                    '_________6_________',
                    '___________________',
                    '___________________',
                    '____6_________6____',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '_6_______________6_',
                    '___________________',
                    '___________________',
                    '___________________',
                    '___________________',
                    '____6_________6____',
                    '___________________',
                    '___________________',
                    '_________6_________',
                    '___________________'
                ],
                [
                    '_________C_________',
                    '________C5C________',
                    '______8_CMC_8______',
                    '___BB__CMMMC__BB___',
                    '___B5BB_MPM_BB5B___',
                    '____B_BAEWEAB_B____',
                    '__8_BBWPE_EPWBB_8__',
                    '___C_APA_P_APA_C___',
                    '_CCMMEE_____EEMMCC_',
                    'C5MMPW_P_0_P_WPMM5C',
                    '_CCMMEE_____EEMMCC_',
                    '___C_APA_P_APA_C___',
                    '__8_BBWPE_EPWBB_8__',
                    '____B_BAEWEAB_B____',
                    '___B5BB_MPM_BB5B___',
                    '___BB__CMMMC__BB___',
                    '______8_CMC_8______',
                    '________C5C________',
                    '_________C_________'
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
