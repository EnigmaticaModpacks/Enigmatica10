ServerEvents.tags('item', (event) => {
    let additions = ['occultism:candle_white', /candle/];

    event.get('minecraft:candles').add(additions);
});
