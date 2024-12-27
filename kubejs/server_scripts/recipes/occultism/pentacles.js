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
        0: {
            type: 'modonomicon:tag',
            display: 'occultism:golden_sacrificial_bowl',
            tag: '#occultism:center_sacrificial_bowl'
        },
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
        B: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_black' }
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
        N: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_brown' },
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
                    '___W_1_______1_W___',
                    '___W___________W___',
                    '__W____1WWW1____W__',
                    '__W____W___W____W__',
                    '__W____W_0_W____W__',
                    '__W____W___W____W__',
                    '__W____1WWW1____W__',
                    '___W___________W___',
                    '___W_1_______1_W___',
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
                    '___W_1___S___1_W___',
                    '___W_____S_____W___',
                    '__W_W__1WWW1__W_W__',
                    '__W_W__W___W__W_W__',
                    '__W_WSSW_0_WSSW_W__',
                    '__W_W__W___W__W_W__',
                    '__W_W__1WWW1__W_W__',
                    '___W_____S_____W___',
                    '___W_1___S___1_W___',
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
                    '_BBB___________BBB_',
                    'B3L1B_________B1L3B',
                    'BL2LB__WWWWW__BL2LB',
                    'B1L3BWWRRRRRWWB3L1B',
                    '_BBBWOOWWWWWOOWBBB_',
                    '___WO1___G___1OW___',
                    '___WO_4__G__4_OW___',
                    '__WRW__1WWW1__WRW__',
                    '__WRW__W___W__WRW__',
                    '__WRWGGW_0_WGGWRW__',
                    '__WRW__W___W__WRW__',
                    '__WRW__1WWW1__WRW__',
                    '___WO_4__G__4_OW___',
                    '___WO1___G___1OW___',
                    '_BBBWOOWWWWWOOWBBB_',
                    'B1L3BWWRRRRRWWB3L1B',
                    'BL2LB__WWWWW__BL2LB',
                    'B3L1B_________B1L3B',
                    '_BBB___________BBB_'
                ]
            ]
        },
        {
            name: 'summon_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '_BBB___________BBB_',
                    'B3L1B_________B1L3B',
                    'BL2LB__WWWWW__BL2LB',
                    'B1L3BWWRRRRRWWB3L1B',
                    '_BBBWOOWWWWWOOWBBB_',
                    '___WO1U3_G_3U1OW___',
                    '___WOU4U_G_U4UOW___',
                    '__WRW3U1WWW1U3WRW__',
                    '__WRW__W___W__WRW__',
                    '__WRWGGW_0_WGGWRW__',
                    '__WRW__W___W__WRW__',
                    '__WRW3U1WWW1U3WRW__',
                    '___WOU4U_G_U4UOW___',
                    '___WO1U3_G_3U1OW___',
                    '_BBBWOOWWWWWOOWBBB_',
                    'B1L3BWWRRRRRWWB3L1B',
                    'BL2LB__WWWWW__BL2LB',
                    'B3L1B_________B1L3B',
                    '_BBB___________BBB_'
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
                    'R3R___YBBBBBY___R3R',
                    '_R3R_YGU4U4UGY_R3R_',
                    '__R3YG_GL2LG_GY3R__',
                    '___YGO__GLG__OGY___',
                    '__YGO1O__G__O1OGY__',
                    '_YG__O1O_Y_O1O__GY_',
                    'YBUG__O1Y_Y1O__GUBY',
                    'YB4LG__Y___Y__GL4BY',
                    'YBU2LGY__0__YGL2UBY',
                    'YB4LG__Y___Y__GL4BY',
                    'YBUG__O1Y_Y1O__GUBY',
                    '_YG__O1O_Y_O1O__GY_',
                    '__YGO1O__G__O1OGY__',
                    '___YGO__GLG__OGY___',
                    '__R3YG_GL2LG_GY3R__',
                    '_R3R_YGU4U4UGY_R3R_',
                    'R3R___YBBBBBY___R3R',
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
                    '_XXXXX_______XXXXX_',
                    '___X__1_____1__X___',
                    '__X_X__WWWWW__X_X__',
                    '__X_X__W___W__X_X__',
                    '__X_X__W_0_W__X_X__',
                    '__X_X__W___W__X_X__',
                    '__X_X__WWWWW__X_X__',
                    '___X__1_____1__X___',
                    '_XXXXX_______XXXXX_',
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
                    '_X_2LXX_____XXL2_X_',
                    '_X1LLX_XXXXX_XLL1X_',
                    '_XXXXXS_____SXXXXX_',
                    '___X_S1S___S1S_X___',
                    '__X_X_SWWWWWS_X_X__',
                    '__X_X__W___W__X_X__',
                    '__X_X__W_0_W__X_X__',
                    '__X_X__W___W__X_X__',
                    '__X_X_SWWWWWS_X_X__',
                    '___X_S1S___S1S_X___',
                    '_XXXXXS_____SXXXXX_',
                    '_X1LLX_XXXXX_XLL1X_',
                    '_X_2LXX_____XXL2_X_',
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
                    '3_____3_____3_____3',
                    '_XXXXX_______XXXXX_',
                    '_XRR1X_XXXXX_X1RRX_',
                    '_XR2LXX_____XXL2RX_',
                    '_X1LLX_XXXXX_XLL1X_',
                    '_XXXXXG_____GXXXXX_',
                    '3__X_G1G___G1G_X__3',
                    '__X_X_GSSSSSG_X_X__',
                    '__X_X__S___S__X_X__',
                    '__X_X__S_0_S__X_X__',
                    '__X_X__S___S__X_X__',
                    '__X_X_GSSSSSG_X_X__',
                    '3__X_G1G___G1G_X__3',
                    '_XXXXXG_____GXXXXX_',
                    '_X1LLX_XXXXX_XLL1X_',
                    '_XR2LXX_____XXL2RX_',
                    '_XRR1X_XXXXX_X1RRX_',
                    '_XXXXX_______XXXXX_',
                    '3_____3_____3_____3'
                ]
            ]
        },
        {
            name: 'craft_marid',
            override: true,
            mapping: default_mapping,
            pattern: [
                [
                    '3_____3_____3_____3',
                    '_XXXXX_______XXXXX_',
                    '_XRR1X_XXXXX_X1RRX_',
                    '_XR2LXXUU4UUXXL2RX_',
                    '_X1LLX_XXXXX_XLL1X_',
                    '_XXXXXB_____BXXXXX_',
                    '3__X_B1B___B1B_X__3',
                    '__XUX_BGGGGGB_XUX__',
                    '__XUX__G___G__XUX__',
                    '__X4X__G_0_G__X4X__',
                    '__XUX__G___G__XUX__',
                    '__XUX_BGGGGGB_XUX__',
                    '3__X_B1B___B1B_X__3',
                    '_XXXXXB_____BXXXXX_',
                    '_X1LLX_XXXXX_XLL1X_',
                    '_XR2LXXUU4UUXXL2RX_',
                    '_XRR1X_XXXXX_X1RRX_',
                    '_XXXXX_______XXXXX_',
                    '3_____3_____3_____3'
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
                    '_________W_________',
                    '_____W_______W_____',
                    '___________________',
                    '___________________',
                    '___________________',
                    '____W____0____W____',
                    '___________________',
                    '___________________',
                    '___________________',
                    '_____W_______W_____',
                    '_________W_________',
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
                    '___A___________A___',
                    '____A_________A____',
                    '____A_________A____',
                    'A____A__APA__A____A',
                    '_AA___AAPWPAA___AA_',
                    '___A_W__EPE__W_A___',
                    '____A__E___E__A____',
                    '____A_E_____E_A____',
                    '___APE_______EPA___',
                    '___PWP___0___PWP___',
                    '___APE_______EPA___',
                    '____A_E_____E_A____',
                    '____A__E___E__A____',
                    '___A_W__EPE__W_A___',
                    '_AA___AAPWPAA___AA_',
                    'A____A__APA__A____A',
                    '____A_________A____',
                    '____A_________A____',
                    '___A___________A___'
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
                    '______8_____8______',
                    '___________________',
                    '____6_________6____',
                    '___________________',
                    '__8_____________8__',
                    '___________________',
                    '___________________',
                    '_6_______________6_',
                    '___________________',
                    '___________________',
                    '__8_____________8__',
                    '___________________',
                    '____6_________6____',
                    '___________________',
                    '______8_____8______',
                    '_________6_________',
                    '___________________'
                ],
                [
                    '___A__C_____C__A___',
                    '____A__C_6_C__A____',
                    '____A_6_CCC_6_A____',
                    'A__NNA__APA__ANN__A',
                    '_AAN6NAAPWPAAN6NAA_',
                    '___ANWN_EPE_NWNA___',
                    'C_6_AN_EMMME_NA_6_C',
                    '_C__A_EM___ME_A__C_',
                    '__CAPEM_____MEPAC__',
                    '_6CPWPM__0__MPWPC6_',
                    '__CAPEM_____MEPAC__',
                    '_C__A_EM___ME_A__C_',
                    'C_6_AN_EMMME_NA_6_C',
                    '___ANWN_EPE_NWNA___',
                    '_AAN6NAAPWPAAN6NAA_',
                    'A__NNA__APA__ANN__A',
                    '____A_6_CCC_6_A____',
                    '____A__C_6_C__A____',
                    '___A__C_____C__A___'
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
