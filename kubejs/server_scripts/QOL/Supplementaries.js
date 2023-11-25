LootJS.modifiers(event => {
  event.addLootTableModifier(/.*/).replaceLoot('farmersdelight:rope', 'supplementaries:rope', true);
});

ServerEvents.recipes(event => {
  event.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope');
  event.replaceOutput({}, 'farmersdelight:rope', 'supplementaries:rope');

  // Make Antique Ink actually obtainable
  event.shapeless('supplementaries:antique_ink', [Item.of('minecraft:potion', '{Potion: "minecraft:water"}').strongNBT(), 'minecraft:ink_sac']);
});
