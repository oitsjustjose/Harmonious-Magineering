ServerEvents.recipes(event => {
  /**
   * @param {Internal.ItemStackKJS} output
   * @param {Internal.Ingredient} backpack
   * @param {Internal.Ingredient} input
   */
  const backpackSmithing = (output, backpack, input) => {
    event.custom({
      type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
      base: backpack.toJson(),
      addition: input.toJson(),
      template: {tag: 'forge:leather'},
      result: output.toJson(),
    });
  };

  // 4 chests from logs
  event.shaped('4x minecraft:chest', ['LLL', 'L L', 'LLL'], {L: '#minecraft:logs'});

  // Bundles!
  event.shaped('minecraft:bundle', [' S ', 'L L', ' L '], {
    S: 'minecraft:string',
    L: 'minecraft:rabbit_hide',
  });

  // Backpacks
  event.remove('sophisticatedbackpacks:iron_backpack');
  backpackSmithing(
    Item.of('sophisticatedbackpacks:iron_backpack'),
    Ingredient.of('sophisticatedbackpacks:backpack'),
    Ingredient.of('#forge:storage_blocks/iron')
  );

  event.remove('sophisticatedbackpacks:gold_backpack');
  backpackSmithing(
    Item.of('sophisticatedbackpacks:gold_backpack'),
    Ingredient.of('sophisticatedbackpacks:iron_backpack'),
    Ingredient.of('#forge:storage_blocks/gold')
  );

  event.remove('sophisticatedbackpacks:diamond_backpack');
  backpackSmithing(
    Item.of('sophisticatedbackpacks:diamond_backpack'),
    Ingredient.of('sophisticatedbackpacks:gold_backpack'),
    Ingredient.of('#forge:storage_blocks/diamond')
  );

  event.remove('sophisticatedbackpacks:battery_upgrade');
  event.shaped('sophisticatedbackpacks:battery_upgrade', ['GCG', 'TBT', 'GCG'], {
    G: '#forge:ingots/gold',
    C: 'pneumaticcraft:capacitor',
    T: 'pneumaticcraft:transistor',
    B: 'sophisticatedbackpacks:upgrade_base',
  });

  // Framed Storage Drawers
  event.remove('framedcompactdrawers:framed_compact_drawer');
  event.remove('framedcompactdrawers:framed_drawer_controller');
  event.remove('framedcompactdrawers:framed_full_four');
  event.remove('framedcompactdrawers:framed_full_one');
  event.remove('framedcompactdrawers:framed_full_two');
  event.remove('framedcompactdrawers:framed_half_four');
  event.remove('framedcompactdrawers:framed_half_one');
  event.remove('framedcompactdrawers:framed_half_two');
  event.remove('framedcompactdrawers:framed_slave');
  event.remove('framedcompactdrawers:framed_trim');

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

  // Storage drawer upgrades
  event.remove({output: 'storagedrawers:drawer_key'});
  event.smithing('storagedrawers:drawer_key', '#forge:plates/gold', 'supplementaries:key', 'storagedrawers:upgrade_template');

  event.remove({output: 'storagedrawers:quantify_key'});
  event.smithing('storagedrawers:quantify_key', '#forge:plates/gold', 'supplementaries:key', 'supplementaries:crystal_display');

  event.remove({output: 'storagedrawers:shroud_key'});
  event.smithing('storagedrawers:shroud_key', '#forge:plates/gold', 'supplementaries:key', 'minecraft:ender_eye');

  event.remove({output: 'storagedrawers:obsidian_storage_upgrade'});
  event.shaped('storagedrawers:obsidian_storage_upgrade', ['MMM', 'LCL', 'MMM'], {
    M: '#forge:ingots/pewter',
    L: '#minecraft:logs',
    C: 'storagedrawers:upgrade_template',
  });

  event.remove({output: 'storagedrawers:iron_storage_upgrade'});
  event.shaped('storagedrawers:iron_storage_upgrade', ['MMM', 'LCL', 'MMM'], {
    M: '#forge:ingots/veridium',
    L: '#minecraft:logs',
    C: 'storagedrawers:upgrade_template',
  });

  event.remove({output: 'storagedrawers:gold_storage_upgrade'});
  event.shaped('storagedrawers:gold_storage_upgrade', ['MMM', 'LCL', 'MMM'], {
    M: '#forge:ingots/dawnstone',
    L: '#minecraft:logs',
    C: 'storagedrawers:upgrade_template',
  });

  event.remove({output: 'storagedrawers:diamond_storage_upgrade'});
  event.shaped('storagedrawers:diamond_storage_upgrade', ['MMM', 'LCL', 'MMM'], {
    M: '#forge:ingots/steel',
    L: '#minecraft:logs',
    C: 'storagedrawers:upgrade_template',
  });

  event.remove({output: 'storagedrawers:emerald_storage_upgrade'});
  event.shaped('storagedrawers:emerald_storage_upgrade', ['MMM', 'LCL', 'MMM'], {
    M: '#forge:ingots/refined_obsidian',
    L: '#minecraft:logs',
    C: 'storagedrawers:upgrade_template',
  });

  event.remove({output: 'storagedrawers:one_stack_upgrade'});
  event.shaped('storagedrawers:one_stack_upgrade', ['MMM', 'LCL', 'MMM'], {
    M: 'minecraft:flint',
    L: '#minecraft:logs',
    C: 'storagedrawers:upgrade_template',
  });

  event.remove({output: 'storagedrawers:void_upgrade'});
  event.shapeless('storagedrawers:void_upgrade', ['trashcans:item_trash_can', 'storagedrawers:upgrade_template']);

  /* Make Netherite storage craftable */
  
  event.smithing('ironchests:netherite_chest_upgrade', 'minecraft:netherite_upgrade_smithing_template', 'ironchests:blank_chest_upgrade', 'minecraft:netherite_ingot')
  event.smithing('ironchests:netherite_chest', 'minecraft:netherite_upgrade_smithing_template', 'ironchests:diamond_chest', 'minecraft:netherite_ingot')
  event.smithing('ironchests:netherite_barrel', 'minecraft:netherite_upgrade_smithing_template', 'ironchests:diamond_barrel', 'minecraft:netherite_ingot')
});
