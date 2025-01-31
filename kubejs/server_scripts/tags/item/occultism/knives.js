ServerEvents.tags('item', (event) => {
    let additions = ['#minecraft:swords', '#minecraft:axes', '#c:tools/knives', '#c:tools/paxel'];
    event.get('occultism:tools/knife').add(additions);
});
