ServerEvents.tags('block', (event) => {
    let additions = [/candle/];

    event.get('minecraft:candles').add(additions);
});
