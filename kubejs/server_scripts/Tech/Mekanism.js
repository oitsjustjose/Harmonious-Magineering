ServerEvents.recipes(event => {
  [Item.of('mekanism:cardboard_box')].forEach(x => event.remove({output: x}));
});
