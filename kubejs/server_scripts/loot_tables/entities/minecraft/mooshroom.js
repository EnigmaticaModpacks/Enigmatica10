// https://docs.almostreliable.com/lootjs/

LootJS.modifiers((event) => {
    onlyDrygmy(event, 'minecraft:mooshroom')
        .matchEntity((entity) => {
            return entity.type === 'red';
        })
        .setCount([1, 4])
        .addLoot('minecraft:red_mushroom');

    onlyDrygmy(event, 'minecraft:mooshroom')
        .matchEntity((entity) => {
            return entity.type === 'brown';
        })
        .setCount([1, 4])
        .addLoot('minecraft:brown_mushroom');
});
