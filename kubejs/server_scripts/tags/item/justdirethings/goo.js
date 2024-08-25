ServerEvents.tags('item', (event) => {
    event.get('justdirethings:goo/tier4').add('justdirethings:gooblock_tier4');
    event.get('justdirethings:goo/tier3').add(/justdirethings:gooblock_tier[3-4]/);
    event.get('justdirethings:goo/tier2').add(/justdirethings:gooblock_tier[2-4]/);
    event.get('justdirethings:goo/tier1').add(/justdirethings:gooblock_tier[1-4]/);
});
