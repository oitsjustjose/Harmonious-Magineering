ServerEvents.recipes(event => {
  // Only Andesite Casing can be made by hand - everything else should be deployed
  event.remove({id: 'create:item_application/brass_casing_from_log'});
  event.remove({id: 'create:item_application/brass_casing_from_wood'});
  event.remove({id: 'create:item_application/copper_casing_from_log'});
  event.remove({id: 'create:item_application/copper_casing_from_wood'});
  event.remove({id: 'create:item_application/railway_casing'});

  event.recipes.create.deploying('create:copper_casing', [['#forge:stripped_logs', '#forge:stripped_wood'], '#forge:ingots/copper']);
  event.recipes.create.deploying('create:brass_casing', [['#forge:stripped_logs', '#forge:stripped_wood'], '#forge:ingots/brass']);
  event.recipes.create.deploying('create:railway_casing', ['create:brass_casing', '#forge:plates/obsidian']);

  event.remove({id: 'create:crafting/materials/andesite_alloy'});
  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'});
  event.custom({
    type: 'embers:stamping',
    input: {item: 'minecraft:andesite'},
    stamp: {item: 'embers:ingot_stamp'},
    fluid: {amount: 20, tag: 'forge:molten_iron'},
    output: {item: 'create:andesite_alloy', count: 1},
  });
});
