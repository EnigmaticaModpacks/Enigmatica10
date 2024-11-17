// https://docs.almostreliable.com/lootjs/

LootJS.modifiers((event) => {
    notDrygmy(event, 'minecraft:ender_dragon').addLoot('minecraft:dragon_egg');

    onlyDrygmy(event, 'minecraft:ender_dragon').randomChance(0.25).addLoot('minecraft:dragon_head');
    onlyDrygmy(event, 'minecraft:ender_dragon').randomChance(0.25).addLoot('minecraft:dragon_egg');
    onlyDrygmy(event, 'minecraft:ender_dragon').randomChance(0.5).setCount([1, 8]).addLoot('minecraft:dragon_breath');
});
