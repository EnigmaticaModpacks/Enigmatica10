const $Gas = Java.loadClass('mekanism.api.chemical.Chemical');
const $GasBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder');

StartupEvents.registry('mekanism:chemical', (event) => {
    const metals = [
        { name: 'aluminum', clean: 0xa2a8ab, dirty: 0x777f83 },
        { name: 'iesnium', clean: 0x56a7b9, dirty: 0x3c8090 },
        { name: 'iridium', clean: 0xc0e4e4, dirty: 0x76c4c4 },
        { name: 'nickel', clean: 0xb0a075, dirty: 0x8c7c50 },
        { name: 'silver', clean: 0xc9d3dc, dirty: 0x899fb3 },
        { name: 'zinc', clean: 0xb7e6bf, dirty: 0x6acb7b },
        { name: 'platinum', clean: 0x6c9c9c, dirty: 0x507676 }
    ];
    metals.forEach((metal) => {
        event.createCustom(
            `emendatusenigmatica:dirty_${metal.name}_slurry`,
            () => new $Gas($GasBuilder.builder().tint(metal.dirty))
        );
        event.createCustom(
            `emendatusenigmatica:clean_${metal.name}_slurry`,
            () => new $Gas($GasBuilder.builder().tint(metal.clean))
        );
    });
});
