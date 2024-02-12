ServerEvents.recipes(event => {
  Object.keys(global.Stages).forEach(tag => {
    let config = global.Stages[tag];

    config.mods.forEach(mod => {
      const recipe = {
        type: 'itemgator:mod',
        tag: tag,
        mod: mod,
        substitute: config.substitute.toJson(),
      };

      // Exceptions are an optional field
      if (config.exceptions !== null) {
        recipe.exceptions = config.exceptions.toJson();
      }

      event.custom(recipe);
    });
  });
});
