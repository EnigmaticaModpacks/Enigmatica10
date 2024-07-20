ServerEvents.tags('block', (event) => {
    let additions = {
        pickaxe: ['minecraft:reinforced_deepslate']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:mineable/${tag}`).add(additions[tag]);
    });
});
