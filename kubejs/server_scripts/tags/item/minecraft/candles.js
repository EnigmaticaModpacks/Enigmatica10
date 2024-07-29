ServerEvents.tags('item', (event) => {
    let additions = [/candle/];
    let exclusions = [/candlenut/];
    event.get('minecraft:candles').add(additions).remove(exclusions);
});
