ServerEvents.tags('item', (event) => {
    let additions = [/deeperdarker:.*_(log|wood|stem)/];

    event.get('minecraft:logs').add(additions);
});
