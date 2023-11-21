// Typing immersiveengineering over and over is annoying a.f.

ServerEvents.recipes(event => {
  const mod = id => `immersiveengineering:${id}`;

  const Steel = () => {
    event.remove({output: mod('cokebrick')});
    event.remove({output: mod('blastbrick')});

    event.recipes.create
      .compacting(Item.of(mod('cokebrick'), 3), [
        Item.of('minecraft:clay_ball', 4),
        Item.of('supplementaries:ash_brick', 4),
        Item.of(mod('component_steel'), 1),
      ])
      .superheated();

    event.recipes.create
      .compacting(Item.of(mod('blastbrick'), 3), [
        Item.of('minecraft:nether_brick', 4),
        Item.of('embers:ember_crystal', 4),
        Item.of(mod('component_steel'), 1),
      ])
      .superheated();

    event.recipes.create
      .mixing('mekanism:nugget_steel', ['#forge:nuggets/iron', '#forge:dusts/ash'])
      .superheated();
  };

  event.remove({id: mod('alloysmelter/brass')});
  event.remove({id: mod('alloysmelter/bronze')});
  event.replaceInput({output: mod('hammer')}, '#forge:ingots/iron', '#forge:ingots/steel');

  Steel();
});
