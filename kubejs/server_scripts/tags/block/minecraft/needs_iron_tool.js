ServerEvents.tags('block', (event) => {
    let additions = ['minecraft:reinforced_deepslate'];
    event.get('minecraft:needs_iron_tool').add(additions);
});
