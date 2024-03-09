ServerEvents.recipes(event => {
  Object.keys(global.Stages).forEach(tag => {
    let config = global.Stages[tag];

    config.mods.forEach(mod => {
      event.custom({
        type: 'itemgator:mod',
        tag: tag,
        mod: mod,
        substitute: Item.of(config.substitute).toJson(),
        exceptions: Ingredient.of(config.exceptions).toJson(),
      });
    });
  });
});
