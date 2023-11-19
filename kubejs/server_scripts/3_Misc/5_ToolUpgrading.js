/**
 * Wood -> Stone
 * Leather -> Chain
 * Chain -> Iron
 * Stone -> :
 * - Iron
 * - Silver
 * - Lead
 * - Certus / Nether Quartz
 * Iron -> :
 * - Steel
 * - Dawnstone
 * - Gold
 * Steel -> Diamond
 * Dawnstone -> Diamond
 */

const Gearsets = [
  {
    type: 'wood',
    next: ['stone'],
    material: '#minecraft:planks',
    items: [
      'minecraft:wooden_sword',
      'minecraft:wooden_pickaxe',
      'minecraft:wooden_shovel',
      'minecraft:wooden_axe',
      'minecraft:wooden_hoe',
    ],
  },
  {
    type: 'leather',
    next: ['chain'],
    material: 'minecraft:leather',
    items: [
      'minecraft:leather_helmet',
      'minecraft:leather_chestplate',
      'minecraft:leather_leggings',
      'minecraft:leather_boots',
    ],
  },
  {
    type: 'stone',
    next: [], ///['iron'],
    material: '#minecraft:stone_tool_materials',
    items: [
      'minecraft:stone_sword',
      'minecraft:stone_pickaxe',
      'minecraft:stone_shovel',
      'minecraft:stone_axe',
      'minecraft:stone_hoe',
    ],
  },
  {
    type: 'chain',
    next: [],
    material: '#forge:ingots/iron',
    items: [
      'minecraft:chainmail_helmet',
      'minecraft:chainmail_chestplate',
      'minecraft:chainmail_leggings',
      'minecraft:chainmail_boots',
    ],
  },
];

ServerEvents.recipes(event => {
  const FindNextSet = type => {
    if (!type) return null;

    const Results = Gearsets.filter(x => x.type === type);
    if (Results.length) {
      return Results[0];
    }

    return null;
  };

  Gearsets.forEach(curr => {
    curr.next.forEach(id => {
      const next = FindNextSet(id);
      if (!next) return;

      if (curr.items.length != next.items.length) {
        console.log(`${curr.type} and ${next.type} don't have the same count of items!!`);
        return;
      }

      for (let i = 0; i < curr.items.length; i++) {
        event.smithing(next.items[i], next.material, curr.items[i], 'eidolon:enchanted_ash');
      }
    });
  });
  // event.smithing(
  //   'minecraft:stone_sword',
  //   '#minecraft:stone_tool_materials',
  //   'minecraft:wooden_sword',
  //   'eidolon:enchanted_ash'
  // );
});
