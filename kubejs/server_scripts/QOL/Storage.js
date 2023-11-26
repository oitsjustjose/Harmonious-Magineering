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
});
