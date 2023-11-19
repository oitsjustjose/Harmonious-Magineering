ServerEvents.recipes(event => {
  // Osmium is so stupid man.
  event.replaceInput({}, '#forge:ingots/osmium', '#forge:ingots/steel');
  event.replaceInput({}, 'mekanism:ingot_osmium', '#forge:ingots/steel');
});
