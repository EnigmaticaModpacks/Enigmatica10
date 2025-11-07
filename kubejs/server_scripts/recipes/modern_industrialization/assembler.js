ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/assembler/';

    const recipes = [
        {
            item_inputs: [
                { item: 'modern_industrialization:conveyor', amount: 2 },
                { item: 'modern_industrialization:motor', amount: 2 },
                { item: 'modern_industrialization:robot_arm', amount: 2 },
                { item: 'modern_industrialization:analog_circuit_board', amount: 1 }
            ],
            item_outputs: [{ item: 'modern_industrialization:basic_upgrade', amount: 4 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:electric_age/upgrades/basic'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:basic_upgrade', amount: 4 },
                { item: 'modern_industrialization:large_motor', amount: 1 },
                { item: 'modern_industrialization:large_pump', amount: 1 },
                { item: 'modern_industrialization:electronic_circuit_board', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'modern_industrialization:polyethylene', amount: 1000 }],
            item_outputs: [{ item: 'modern_industrialization:advanced_upgrade', amount: 4 }],
            eu: 8,
            duration: 400,
            id: 'modern_industrialization:electric_age/upgrades/advanced'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:advanced_motor', amount: 2 },
                { item: 'modern_industrialization:advanced_pump', amount: 1 },
                { item: 'modern_industrialization:advanced_upgrade', amount: 4 },
                { item: 'modern_industrialization:digital_circuit_board', amount: 1 }
            ],
            eu: 16,
            duration: 400,
            fluid_inputs: [{ fluid: 'modern_industrialization:polyvinyl_chloride', amount: 1000 }],
            item_outputs: [{ item: 'modern_industrialization:turbo_upgrade', amount: 4 }],
            id: 'modern_industrialization:electric_age/upgrades/turbo'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:large_advanced_motor', amount: 2 },
                { item: 'modern_industrialization:large_advanced_pump', amount: 1 },
                { item: 'modern_industrialization:turbo_upgrade', amount: 4 },
                { item: 'modern_industrialization:processing_unit_board', amount: 1 }
            ],
            eu: 32,
            duration: 400,
            fluid_inputs: [{ fluid: 'modern_industrialization:polyvinyl_chloride', amount: 2500 }],
            item_outputs: [{ item: 'modern_industrialization:highly_advanced_upgrade', amount: 4 }],
            id: 'modern_industrialization:electric_age/upgrades/highly_advanced'
        },
        {
            item_inputs: [
                { tag: 'c:plates/aluminum', amount: 3 },
                { item: 'modern_industrialization:electrum_cable', amount: 4 },
                { item: 'modern_industrialization:analog_circuit_board', amount: 1 },
                { item: 'modern_industrialization:redstone_battery', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:electronic_circuit_board', amount: 3 }],
            id: `modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit_board`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:rubber_sheet', amount: 2 },
                { tag: 'c:plates/copper', amount: 1 }
            ],
            eu: 8,
            duration: 100,
            item_outputs: [{ item: 'modern_industrialization:analog_circuit_board', amount: 4 }],
            id: `modern_industrialization:assembler_generated/electric_age/circuit/craft/lv_circuit_board`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:aluminum_cable', amount: 6 },
                { item: 'modern_industrialization:silicon_battery', amount: 1 },
                { item: 'modern_industrialization:electronic_circuit_board', amount: 1 },
                { item: 'modern_industrialization:stainless_steel_plate', amount: 4 }
            ],
            fluid_inputs: [{ fluid: 'modern_industrialization:polyethylene', amount: 750 }],
            item_outputs: [{ item: 'modern_industrialization:digital_circuit_board', amount: 4 }],
            eu: 16,
            duration: 400,
            id: 'modern_industrialization:electric_age/circuit/assembler/digital_circuit_board'
        },
        {
            type: 'modern_industrialization:assembler',

            item_inputs: [
                { item: 'modern_industrialization:annealed_copper_cable', amount: 8 },
                { item: 'modern_industrialization:cadmium_battery', amount: 2 },
                { item: 'modern_industrialization:digital_circuit_board', amount: 1 },
                { tag: 'c:plates/platinum', amount: 4 }
            ],
            fluid_inputs: [{ fluid: 'modern_industrialization:polyvinyl_chloride', amount: 750 }],
            item_outputs: [{ item: 'modern_industrialization:processing_unit_board', amount: 2 }],
            eu: 32,
            duration: 800,
            id: 'modern_industrialization:electric_age/circuit/assembler/processing_unit_board'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:superconductor_cable', amount: 12 },
                { item: 'modern_industrialization:plutonium_battery', amount: 2 },
                { item: 'modern_industrialization:processing_unit_board', amount: 1 },
                { tag: 'c:plates/iridium', amount: 6 }
            ],

            fluid_inputs: [{ fluid: 'modern_industrialization:helium_3', amount: 50 }],
            item_outputs: [{ item: 'modern_industrialization:quantum_circuit_board', amount: 2 }],
            eu: 64,
            duration: 1500,
            id: 'modern_industrialization:electric_age/circuit/assembler/quantum_circuit_board'
        },
        {
            item_inputs: [
                { tag: 'c:plates/silicon', amount: 1 },
                { tag: 'c:glass_blocks', amount: 3 },
                { item: 'modern_industrialization:electrum_fine_wire', amount: 3 },
                { tag: 'c:plates/steel', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:diode', amount: 2 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/diode`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:silicon_n_doped_plate', amount: 1 },
                { tag: 'c:glass_blocks', amount: 3 },
                { item: 'modern_industrialization:electrum_fine_wire', amount: 3 },
                { tag: 'c:plates/steel', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:diode', amount: 4 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/diode_doped`
        },
        {
            item_inputs: [
                { tag: 'c:plates/silicon', amount: 3 },
                { item: 'modern_industrialization:electrum_fine_wire', amount: 1 },
                { tag: 'c:plates/steel', amount: 3 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:transistor', amount: 3 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/transistor`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:silicon_p_doped_plate', amount: 2 },
                { item: 'modern_industrialization:silicon_n_doped_plate', amount: 1 },
                { item: 'modern_industrialization:electrum_fine_wire', amount: 1 },
                { tag: 'c:plates/steel', amount: 3 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:transistor', amount: 6 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/transistor_doped`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:resistor', amount: 4 },
                { item: 'modern_industrialization:transistor', amount: 4 },
                { item: 'modern_industrialization:diode', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:op_amp', amount: 3 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/op_amp`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:resistor', amount: 1 },
                { item: 'modern_industrialization:op_amp', amount: 1 },
                { item: 'modern_industrialization:aluminum_wire', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:not_gate', amount: 2 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/not_gate`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:resistor', amount: 1 },
                { item: 'modern_industrialization:op_amp', amount: 1 },
                { item: 'modern_industrialization:aluminum_wire', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:and_gate', amount: 2 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/and_gate`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:diode', amount: 1 },
                { item: 'modern_industrialization:op_amp', amount: 1 },
                { item: 'modern_industrialization:aluminum_wire', amount: 1 }
            ],
            eu: 8,
            duration: 200,
            item_outputs: [{ item: 'modern_industrialization:or_gate', amount: 2 }],
            id: `modern_industrialization:assembler_generated/electric_age/component/craft/or_gate`
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:inductor', amount: 1 },
                { item: 'modern_industrialization:copper_wire', amount: 3 },
                { item: 'modern_industrialization:resistor', amount: 2 },
                { item: 'modern_industrialization:capacitor', amount: 2 },
                { item: 'modern_industrialization:analog_circuit_board', amount: 1 }
            ],
            item_outputs: [{ item: 'modern_industrialization:analog_circuit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/lv_circuit'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:diode', amount: 2 },
                { item: 'modern_industrialization:analog_circuit', amount: 4 },
                { item: 'modern_industrialization:transistor', amount: 2 },
                { item: 'modern_industrialization:electronic_circuit_board', amount: 1 }
            ],
            item_outputs: [{ item: 'modern_industrialization:electronic_circuit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/electronic_circuit'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:or_gate', amount: 1 },
                { item: 'modern_industrialization:electronic_circuit', amount: 4 },
                { item: 'modern_industrialization:not_gate', amount: 2 },
                { item: 'modern_industrialization:and_gate', amount: 1 },
                { item: 'modern_industrialization:digital_circuit_board', amount: 1 }
            ],
            item_outputs: [{ item: 'modern_industrialization:digital_circuit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/digital_circuit'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:digital_circuit', amount: 4 },
                { item: 'modern_industrialization:random_access_memory', amount: 2 },
                { item: 'modern_industrialization:memory_management_unit', amount: 1 },
                { item: 'modern_industrialization:arithmetic_logic_unit', amount: 1 },
                { item: 'modern_industrialization:processing_unit_board', amount: 1 }
            ],
            item_outputs: [{ item: 'modern_industrialization:processing_unit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/processing_unit'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:steel_rod_magnetic', amount: 1 },
                { tag: 'c:rods/steel', amount: 2 },
                { item: 'modern_industrialization:tin_cable', amount: 2 },
                { item: 'modern_industrialization:copper_wire', amount: 4 }
            ],
            item_outputs: [{ item: 'modern_industrialization:motor', amount: 4 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/motor'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:electronic_circuit', amount: 1 },
                { tag: 'c:rods/aluminum', amount: 2 },
                { item: 'modern_industrialization:motor', amount: 6 }
            ],
            item_outputs: [{ item: 'modern_industrialization:large_motor', amount: 3 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/large_motor'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:stainless_steel_rod_magnetic', amount: 1 },
                { tag: 'c:rods/stainless_steel', amount: 2 },
                { item: 'modern_industrialization:aluminum_cable', amount: 2 },
                { item: 'modern_industrialization:annealed_copper_wire', amount: 4 }
            ],
            item_outputs: [{ item: 'modern_industrialization:advanced_motor', amount: 4 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/advanced_motor'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:processing_unit', amount: 1 },
                { tag: 'c:rods/titanium', amount: 2 },
                { item: 'modern_industrialization:advanced_motor', amount: 6 }
            ],
            item_outputs: [{ item: 'modern_industrialization:large_advanced_motor', amount: 3 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/large_advanced_motor'
        },
        {
            item_inputs: [
                { tag: 'modern_industrialization:fluid_pipes', amount: 6 },
                { item: 'modern_industrialization:tin_rotor', amount: 6 },
                { item: 'modern_industrialization:motor', amount: 2 }
            ],

            fluid_inputs: [{ fluid: 'modern_industrialization:soldering_alloy', amount: 100 }],
            item_outputs: [{ item: 'modern_industrialization:pump', amount: 3 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:electric_age/component/assembler/pump'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:electronic_circuit', amount: 2 },
                { item: 'modern_industrialization:aluminum_rotor', amount: 6 },
                { item: 'modern_industrialization:large_motor', amount: 2 },
                { item: 'modern_industrialization:pump', amount: 6 }
            ],
            item_outputs: [{ item: 'modern_industrialization:large_pump', amount: 3 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/large_pump'
        },
        {
            item_inputs: [
                { tag: 'modern_industrialization:fluid_pipes', amount: 6 },
                { item: 'modern_industrialization:stainless_steel_rotor', amount: 6 },
                { item: 'modern_industrialization:advanced_motor', amount: 2 }
            ],
            fluid_inputs: [{ fluid: 'modern_industrialization:soldering_alloy', amount: 200 }],
            item_outputs: [{ item: 'modern_industrialization:advanced_pump', amount: 3 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:electric_age/component/assembler/advanced_pump'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:processing_unit', amount: 2 },
                { item: 'modern_industrialization:titanium_rotor', amount: 6 },
                { item: 'modern_industrialization:large_advanced_motor', amount: 2 },
                { item: 'modern_industrialization:advanced_pump', amount: 6 }
            ],
            item_outputs: [{ item: 'modern_industrialization:large_advanced_pump', amount: 3 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/large_advanced_pump'
        },
        {
            item_inputs: [
                { tag: 'c:plates/emerald', amount: 1 },
                { item: 'modern_industrialization:silicon_wafer', amount: 2 },
                { item: 'modern_industrialization:platinum_fine_wire', amount: 2 }
            ],
            item_outputs: [{ item: 'modern_industrialization:memory_management_unit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/memory_management_unit'
        },
        {
            item_inputs: [
                { tag: 'c:plates/diamond', amount: 1 },
                { item: 'modern_industrialization:and_gate', amount: 2 },
                { item: 'modern_industrialization:or_gate', amount: 2 },
                { item: 'modern_industrialization:not_gate', amount: 2 }
            ],
            item_outputs: [{ item: 'modern_industrialization:arithmetic_logic_unit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/component/craft/arithmetic_logic_unit'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:processing_unit', amount: 4 },
                { item: 'modern_industrialization:cooling_cell', amount: 2 },
                { item: 'modern_industrialization:qubit', amount: 2 },
                { item: 'modern_industrialization:quantum_circuit_board', amount: 1 }
            ],
            item_outputs: [{ item: 'modern_industrialization:quantum_circuit', amount: 2 }],
            eu: 8,
            duration: 200,
            id: 'modern_industrialization:assembler_generated/electric_age/circuit/craft/quantum_circuit'
        },
        {
            item_inputs: [
                { item: 'modern_industrialization:arithmetic_logic_unit', amount: 2 },
                { tag: 'c:plates/carbon', amount: 2 },
                { tag: 'c:glass_panes', amount: 2 },
                { item: 'modern_industrialization:superconductor_wire', amount: 6 }
            ],
            fluid_inputs: [
                { fluid: 'modern_industrialization:cryofluid', amount: 250 },
                { fluid: 'modern_industrialization:tritium', amount: 50 }
            ],
            item_outputs: [{ item: 'modern_industrialization:qubit', amount: 2 }],
            eu: 20,
            duration: 400,
            id: 'modern_industrialization:electric_age/component/assembler/qubit'
        },
        {
            item_inputs: [
                { item: 'appflux:printed_energy_processor', amount: 1 },
                { item: 'ae2:printed_silicon', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'modern_industrialization:molten_redstone', amount: 90 }],
            item_outputs: [{ item: 'appflux:energy_processor', amount: 1 }],
            eu: 8,
            duration: 200,
            id: `${id_prefix}energy_processor`
        },
        {
            item_inputs: [
                { item: 'advanced_ae:printed_quantum_processor', amount: 1 },
                { item: 'ae2:printed_silicon', amount: 1 }
            ],
            fluid_inputs: [{ fluid: 'modern_industrialization:molten_redstone', amount: 90 }],
            item_outputs: [{ item: 'advanced_ae:quantum_processor', amount: 1 }],
            eu: 8,
            duration: 200,
            id: `${id_prefix}quantum_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:assembler';
        event.custom(recipe).id(recipe.id);
    });
});
