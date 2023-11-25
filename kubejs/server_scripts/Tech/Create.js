ServerEvents.recipes(event => {
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
