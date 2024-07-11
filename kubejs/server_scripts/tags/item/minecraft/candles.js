ServerEvents.tags('item', (event) => {
    let additions = [/candle/];
    event.get('minecraft:candles').add(additions);
});
