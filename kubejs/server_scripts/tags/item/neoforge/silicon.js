ServerEvents.tags('item', (event) => {
    let additions = [
        'ae2:silicon',
        'appliedenergistics2:silicon',
        'enderio:silicon',
        'modern_industrialization:silicon_ingot'
    ];

    event.get('c:silicon').add(additions);
});
