ServerEvents.recipes(event => {
  Object.keys(global.Stages).forEach(tag => {
    let config = global.Stages[tag];

    config.mods.forEach(mod => {
      const recipe = {
        type: 'itemgator:mod',
        tag: tag,
        mod: mod,
        substitute: Item.of(config.substitute).toJson(),
      };

      if (config.exceptions.length > 0) {
        recipe.exceptions = Ingredient.of(config.exceptions).toJson();
      }

      event.custom(recipe);
    });
  });
});
