ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*hammer/, 'evilcraft:vengeance_pickaxe'];

    event.get(`minecraft:pickaxes`).add(additions);
});
