ServerEvents.tags('item', (event) => {
    let additions = {
        gysahl_green: [
            'chococraft:gysahl_green',
            'chococraft:loverly_gysahl_green',
            'chococraft:gold_gysahl',
            'chococraft:red_gysahl',
            'chococraft:pink_gysahl'
        ]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:crops/${tag}`).add(additions[tag]);
        event.get('c:crops').add(additions[tag]);
    });
});
