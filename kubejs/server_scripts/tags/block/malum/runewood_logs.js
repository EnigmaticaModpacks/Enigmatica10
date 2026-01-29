ServerEvents.tags('block', (event) => {
    let additions = [/malum:.*runewood_log/];
    event.get('malum:runewood_logs').add(additions);
});
