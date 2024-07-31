ServerEvents.tags('entity_type', (event) => {
    let additions = ['chococraft:chocobo', 'the_bumblezone:rootmin', 'minecraft:allay'];
    event.get('ars_nouveau:magic_find').add(additions);
});
