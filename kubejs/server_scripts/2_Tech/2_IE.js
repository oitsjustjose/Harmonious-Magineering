// Typing immersiveengineering over and over is annoying a.f.
const mod = id => `immersiveengineering:${id}`;

ServerEvents.recipes(event => {
  const Steel = () => {
    event.remove({output: mod('cokebrick')});
    event.remove({output: mod('blastbrick')});

    event.custom({
      type: 'create:compacting',
      heatRequirement: 'superheated',
      ingredients: [
        {item: 'minecraft:clay_ball'},
        {item: 'minecraft:clay_ball'},
        {item: 'minecraft:clay_ball'},
        {item: 'supplementaries:ash_brick'},
        {item: 'supplementaries:ash_brick'},
        {item: 'supplementaries:ash_brick'},
        {tag: 'forge:nuggets/steel'},
        {tag: 'forge:nuggets/steel'},
        {tag: 'forge:nuggets/steel'},
        {tag: 'forge:sandstone'},
      ],
      results: [{item: mod('cokebrick'), count: 3}],
    });

    event.custom({
      type: 'create:compacting',
      heatRequirement: 'superheated',
      ingredients: [
        {item: 'minecraft:nether_brick'},
        {item: 'minecraft:nether_brick'},
        {item: 'minecraft:nether_brick'},
        {item: 'embers:ember_crystal'},
        {item: 'embers:ember_crystal'},
        {item: 'embers:ember_crystal'},
        {tag: 'forge:nuggets/steel'},
        {tag: 'forge:nuggets/steel'},
        {tag: 'forge:nuggets/steel'},
        {item: 'minecraft:magma_block'},
      ],
      results: [{item: mod('blastbrick'), count: 3}],
    });

    event.custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [
        {tag: 'forge:nuggets/iron'},
        [{item: 'minecraft:charcoal'}, {tag: 'forge:dusts/ash'}],
      ],
      results: [{item: 'mekanism:nugget_steel', count: 1}],
    });
  };

  event.remove({id: mod('alloysmelter/brass')});
  event.remove({id: mod('alloysmelter/bronze')});

  Steel();
});
