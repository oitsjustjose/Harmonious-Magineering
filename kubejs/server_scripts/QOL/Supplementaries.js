// priority: 1

LootJS.modifiers(event => {
  event.addLootTableModifier(/.*/).replaceLoot('supplementaries:rope', 'farmersdelight:rope', true);
});

ServerEvents.recipes(event => {
  event.replaceInput({}, 'supplementaries:rope', 'farmersdelight:rope');
  event.replaceOutput({}, 'supplementaries:rope', 'farmersdelight:rope');

  // Make Antique Ink actually obtainable
  event.shapeless('supplementaries:antique_ink', [Item.of('minecraft:potion', '{Potion: "minecraft:water"}').strongNBT(), 'minecraft:ink_sac']);
});
