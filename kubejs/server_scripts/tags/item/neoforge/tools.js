ServerEvents.tags('item', (event) => {
    let additions = [/vanillaplustools:.*(hammer|shovel)/, 'irons_spellbooks:boreal_blade'];
    event.get('c:tools').add(additions);

    additions = [/vanillaplustools:.*hammer/];
    event.get('c:tools/mining_tool').add(additions);

    additions = ['irons_spellbooks:boreal_blade'];
    event.get('c:tools/melee_weapon').add(additions);
});
