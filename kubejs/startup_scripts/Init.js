ItemEvents.modification(event => {
  [
    'minecraft:wooden_sword',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_shovel',
    'minecraft:wooden_axe',
    'minecraft:wooden_hoe',
  ].forEach(tool => {
    event.modify(tool, item => {
      item.maxDamage = 16;
    });
  });
});
