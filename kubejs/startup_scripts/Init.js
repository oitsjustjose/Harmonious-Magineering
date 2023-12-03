ItemEvents.modification(event => {
  ['minecraft:wooden_sword', 'minecraft:wooden_pickaxe', 'minecraft:wooden_shovel', 'minecraft:wooden_axe', 'minecraft:wooden_hoe'].forEach(tool => {
    event.modify(tool, item => {
      item.maxDamage = 16;
    });
  });

  event.modify('minecraft:elytra', item => {
    item.maxDamage = 128;
  });
});

StartupEvents.registry('minecraft:item', event => {
  [
    'unknown_holy_item',
    'unknown_bloody_item',
    'unknown_dwarven_item',
    'unknown_kinetic_item',
    'unknown_pneumatic_item',
    'unknown_electric_item',
    'unknown_ender_item',
    'unknown_energistic_item',
  ].forEach(x => event.create(x));
});
