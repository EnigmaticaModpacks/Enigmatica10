ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/stonecutting/';

    const recipes = [];

    // Tag conversion
    let conversion_types = [];
    conversion_types = conversion_types.concat(chipped_types).concat(chisel_types);

    conversion_types.forEach((tag) => {
        let ingredient = Ingredient.of(tag);
        ingredient.stacks.forEach((block) => {
            let output = block.getId();
            recipes.push({
                output: output,
                input: ingredient,
                id: `${id_prefix}${output.replace(':', '_')}_from_${tag.substring(1).replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
