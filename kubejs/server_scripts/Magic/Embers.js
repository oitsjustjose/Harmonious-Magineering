ServerEvents.recipes(event => {
  // Gate the Tinker Hammer behind Hellforged Ingots from BloodMagic
  event.remove({output: 'embers:tinker_hammer'});
  event.shaped('embers:tinker_hammer', ['LDL', 'LSL', ' S '], {
    L: '#forge:ingots/dark_steel',
    D: '#forge:ingots/hellforged',
    S: '#forge:rods/wooden',
  });

  [
    Item.of('embers:silver_hoe'),
    Item.of('embers:silver_axe'),
    Item.of('embers:silver_pickaxe'),
    Item.of('embers:silver_shovel'),
    Item.of('embers:silver_sword'),
  ].forEach(tool => {
    event.remove({input: tool});
    event.remove({output: tool});
  });
});
