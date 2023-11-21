ServerEvents.recipes(event => {
  // Replace minecraft:chest with tags
  event.replaceInput({}, 'minecraft:chest', '#forge:chests/wooden');
  event.replaceOutput({}, 'minecraft:chest', 'expandedstorage:wood_chest');

  // Remove the recipe for the vanilla chest, replace w/ a swap recipe
  event.remove({output: 'minecraft:chest'});
  event.shapeless('minecraft:chest', ['expandedstorage:wood_chest']);

  // Better recipe for the Full-block wooden chest
  event.remove({output: 'expandedstorage:old_wood_chest'});
  event.shaped('expandedstorage:old_wood_chest', ['PPP', 'PCP', 'PPP'], {
    P: '#minecraft:planks',
    C: 'expandedstorage:wood_chest',
  });

  // 4 chests from logs
  event.shaped('4x expandedstorage:wood_chest', ['LLL', 'L L', 'LLL'], {L: '#minecraft:logs'});

  // Powah: the only way to get Uraninite:
  event.custom({
    type: 'powah:energizing',
    ingredients: [{item: 'mekanism:raw_uranium'}],
    energy: 500,
    result: {
      item: 'powah:uraninite',
      count: 3,
    },
  });

  // Backpacked: backpacks are big expensive by default -_-
  event.remove({output: 'backpacked:backpack'});
  event.shaped('backpacked:backpack', ['LLL', 'SIS', 'LLL'], {
    L: 'minecraft:leather',
    S: 'minecraft:string',
    I: '#forge:ingots/iron',
  });

  // Chunkloaders: Use nicer ingots
  event.remove({output: 'chunkloaders:basic_chunk_loader'});
  event.shaped('chunkloaders:basic_chunk_loader', ['ABA', 'BCB', 'ABA'], {
    A: ['#forge:ingots/steel', '#forge:ingots/dark_steel'],
    B: '#forge:obsidian',
    C: '#forge:ender_pearls',
  });

  // Entangled: Harder Recipe
  event.remove({output: 'entangled:block'});
  event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
    A: 'endermanoverhaul:soul_pearl',
    B: '#forge:obsidian',
    C: 'dimstorage:dimensional_chest',
  });

  // EnderIO
  event.remove({output: 'enderio:primitive_alloy_smelter'});
  event.remove({output: 'enderio:void_chassis'});
  // Main Recipe
  event.shaped('enderio:void_chassis', ['GHG', 'HCH', 'GHG'], {
    H: 'mekanism:hdpe_sheet',
    G: '#forge:dusts/grains_of_infinity',
    C: 'mekanism:steel_casing',
  });
  // Alt (easier once you get into EnderIO)
  event.custom({
    type: 'enderio:alloy_smelting',
    energy: 6400,
    experience: 0.0,
    inputs: [
      {
        ingredient: {item: 'mekanism:hdpe_sheet'},
        count: 2,
      },
      {
        ingredient: {tag: 'forge:dusts/grains_of_infinity'},
        count: 2,
      },
      {
        ingredient: {item: 'mekanism:steel_casing'},
        count: 1,
      },
    ],
    result: {
      item: 'enderio:void_chassis',
      count: 2,
    },
  });
});
