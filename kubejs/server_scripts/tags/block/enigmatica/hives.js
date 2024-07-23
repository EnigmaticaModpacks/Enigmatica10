ServerEvents.tags('block', (event) => {
    let additions = ['minecraft:beehive', 'minecraft:bee_nest'];

    event.get('enigmatica:hives').add(additions);
});
