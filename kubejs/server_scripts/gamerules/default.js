ServerEvents.loaded((event) => {
    let gamerules = [
        { rule: 'doFireTick', value: 'false' },
        { rule: 'playersSleepingPercentage', value: '25' }
        // { rule: 'lavaSourceConversion', value: 'true' }
    ];
    gamerules.forEach((gamerule) => {
        if (!event.server.persistentData[gamerule.rule]) {
            event.server.runCommandSilent(`/gamerule ${gamerule.rule} ${gamerule.value}`);
            console.log(`Default Gamerule Applied: ${gamerule.rule} = ${gamerule.value}`);
            event.server.persistentData[gamerule.rule] = gamerule.value;
        }
    });
});
