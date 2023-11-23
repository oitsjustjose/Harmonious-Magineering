/* Tool/Enchanting Overhaul -- Goals:
    - [x] Remove Mending - Anvil Repair is very cheap
      - [x] Remove from EnderIO Enchanter
      - [x] Remove from Loot
      - [x] Remove from Trading
    - [x] Remove Vanilla Enchanting - the Soul Enchanter is VERY cool and should be used!!
      - [x]  Should also repurpose the Enchanting Table for that recipe
    - [x] Remove EnderIO's Enchanter -- see above statement!
    - Tools never get destroyed
 */
LootJS.modifiers(event => {
  // Remove anything with Mending on it from *all* loot tables
  event.addLootTableModifier(/.*/).removeLoot(ItemFilter.hasEnchantment('minecraft:mending'));
});

MoreJSEvents.filterEnchantedBookTrade(event => {
  event.remove('minecraft:mending');
  event.remove('backpacked:repairman');
});

ServerEvents.recipes(event => {
  event.remove({type: 'enderio:enchanting'});
  event.remove({output: 'enderio:enchanter'});
  event.remove({output: 'minecraft:enchanting_table'});
  event.custom({
    type: 'eidolon:worktable',
    pattern: ['   ', ' e ', '   '],
    reagents: 'didi',
    key: {
      e: {item: 'minecraft:enchanting_table'},
      d: {tag: 'forge:ingots/arcane_gold'},
      i: {item: 'eidolon:gold_inlay'},
    },
    result: {item: 'eidolon:soul_enchanter'},
  });
});
