ServerEvents.recipes(event => {
  /**
   *
   * @param {Internal.ItemStackKJS} output
   * @param {Internal.Ingredient} backpack
   * @param {Internal.Ingredient} input
   */
  const BackpackSmithing = (output, backpack, input) => {
    event.custom({
      type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
      base: backpack.toJson(),
      addition: input.toJson(),
      template: {tag: 'forge:leather'},
      result: output.toJson(),
    });
  };

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

  // Bundles!
  event.shaped('minecraft:bundle', [' S ', 'L L', ' L '], {
    S: 'minecraft:string',
    L: 'minecraft:rabbit_hide',
  });

  // Backpacks
  event.remove({id: 'sophisticatedbackpacks:iron_backpack'});
  BackpackSmithing(
    Item.of('sophisticatedbackpacks:iron_backpack'),
    Ingredient.of('sophisticatedbackpacks:backpack'),
    Ingredient.of('#forge:storage_blocks/iron')
  );

  event.remove({id: 'sophisticatedbackpacks:gold_backpack'});
  BackpackSmithing(
    Item.of('sophisticatedbackpacks:gold_backpack'),
    Ingredient.of('sophisticatedbackpacks:iron_backpack'),
    Ingredient.of('#forge:storage_blocks/gold')
  );

  event.remove({id: 'sophisticatedbackpacks:diamond_backpack'});
  BackpackSmithing(
    Item.of('sophisticatedbackpacks:diamond_backpack'),
    Ingredient.of('sophisticatedbackpacks:gold_backpack'),
    Ingredient.of('#forge:storage_blocks/diamond')
  );

  // Framed Storage Drawers
  event.remove({mod: 'framedcompactdrawers'});

  event.shaped('framedcompactdrawers:framed_full_one', ['FFF', ' C ', 'FFF'], {
    F: 'framedblocks:framed_cube',
    C: '#forge:chests/wooden',
  });
  event.shaped(Item.of('framedcompactdrawers:framed_full_two', 2), ['FFF', 'CFC', 'FFF'], {
    F: 'framedblocks:framed_cube',
    C: '#forge:chests/wooden',
  });
  event.shaped(Item.of('framedcompactdrawers:framed_full_four', 4), ['CFC', 'FFF', 'CFC'], {
    F: 'framedblocks:framed_cube',
    C: '#forge:chests/wooden',
  });
  event.shaped('framedcompactdrawers:framed_half_one', ['FFF', ' C ', 'FFF'], {
    F: 'framedblocks:framed_slab',
    C: '#forge:chests/wooden',
  });
  event.shaped(Item.of('framedcompactdrawers:framed_half_two', 2), ['FFF', 'CFC', 'FFF'], {
    F: 'framedblocks:framed_slab',
    C: '#forge:chests/wooden',
  });
  event.shaped(Item.of('framedcompactdrawers:framed_half_four', 4), ['CFC', 'FFF', 'CFC'], {
    F: 'framedblocks:framed_slab',
    C: '#forge:chests/wooden',
  });
  event.shaped('framedcompactdrawers:framed_trim', ['FSF', 'SFS', 'FSF'], {
    S: 'minecraft:stick',
    F: 'framedblocks:framed_cube',
  });
  event.shaped('framedcompactdrawers:framed_slave', ['FFF', 'CDC', 'FGF'], {
    F: 'framedblocks:framed_cube',
    D: '#storagedrawers:drawers',
    C: 'minecraft:comparator',
    G: '#forge:ingots/gold',
  });
  event.shaped('framedcompactdrawers:framed_drawer_controller', ['FFF', 'CDC', 'FGF'], {
    F: 'framedblocks:framed_cube',
    D: '#storagedrawers:drawers',
    C: 'minecraft:comparator',
    G: 'minecraft:diamond',
  });
  event.shaped('framedcompactdrawers:framed_compact_drawer', ['FFF', 'PDP', 'FGF'], {
    F: 'framedblocks:framed_cube',
    D: '#storagedrawers:drawers',
    P: 'minecraft:piston',
    G: '#forge:ingots/iron',
  });
});
