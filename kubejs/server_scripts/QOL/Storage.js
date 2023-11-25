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

  // Backpacked: backpacks are big expensive by default -_-
  event.remove({output: 'backpacked:backpack'});
  event.shaped('backpacked:backpack', ['LLL', 'SIS', 'LLL'], {
    L: 'minecraft:leather',
    S: 'minecraft:string',
    I: '#forge:ingots/iron',
  });

  // Bundles!
  event.shaped('minecraft:bundle', [' S ', 'L L', ' L '], {
    S: 'minecraft:string',
    L: 'minecraft:rabbit_hide',
  });
});
