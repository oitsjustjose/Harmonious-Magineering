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

// ADDONS HAVE BEEN REMOVED but for now I've kept & commented out the attribute
const Gearsets = [
  {
    type: 'wood_leather',
    next: ['stone_chain'],
    // addon: 'eidolon:enchanted_ash',
    items: [
      {item: 'minecraft:wooden_sword', material: '#minecraft:planks'},
      {item: 'minecraft:wooden_pickaxe', material: '#minecraft:planks'},
      {item: 'minecraft:wooden_shovel', material: '#minecraft:planks'},
      {item: 'minecraft:wooden_axe', material: '#minecraft:planks'},
      {item: 'minecraft:wooden_hoe', material: '#minecraft:planks'},
      {item: 'minecraft:leather_helmet', material: 'minecraft:leather'},
      {item: 'minecraft:leather_chestplate', material: 'minecraft:leather'},
      {item: 'minecraft:leather_leggings', material: 'minecraft:leather'},
      {item: 'minecraft:leather_boots', material: 'minecraft:leather'},
    ],
  },
  {
    type: 'stone_chain',
    next: ['iron', 'silver', 'lead', 'certus', 'quartz'],
    // addon: 'minecraft:string',
    items: [
      {item: 'minecraft:stone_sword', material: '#minecraft:stone_tool_materials'},
      {item: 'minecraft:stone_pickaxe', material: '#minecraft:stone_tool_materials'},
      {item: 'minecraft:stone_shovel', material: '#minecraft:stone_tool_materials'},
      {item: 'minecraft:stone_axe', material: '#minecraft:stone_tool_materials'},
      {item: 'minecraft:stone_hoe', material: '#minecraft:stone_tool_materials'},
      {item: 'minecraft:chainmail_helmet', material: 'minecraft:chain'},
      {item: 'minecraft:chainmail_chestplate', material: 'minecraft:chain'},
      {item: 'minecraft:chainmail_leggings', material: 'minecraft:chain'},
      {item: 'minecraft:chainmail_boots', material: 'minecraft:chain'},
    ],
  },
  {
    type: 'iron',
    next: ['steel', 'dawnstone', 'gold'],
    // addon: 'eidolon:tattered_cloth',
    items: [
      {item: 'minecraft:iron_sword', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_pickaxe', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_shovel', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_axe', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_hoe', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_helmet', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_chestplate', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_leggings', material: '#forge:ingots/iron'},
      {item: 'minecraft:iron_boots', material: '#forge:ingots/iron'},
    ],
  },
  {
    type: 'silver',
    next: [],
    // addon: 'eidolon:pewter_inlay',
    items: [
      {item: 'eidolon:silver_sword', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_pickaxe', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_shovel', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_axe', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_hoe', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_helmet', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_chestplate', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_leggings', material: '#forge:ingots/silver'},
      {item: 'eidolon:silver_boots', material: '#forge:ingots/silver'},
    ],
  },
  {
    type: 'lead',
    next: [],
    // addon: 'eidolon:pewter_inlay',
    items: [
      {item: 'embers:lead_sword', material: '#forge:ingots/lead'},
      {item: 'embers:lead_pickaxe', material: '#forge:ingots/lead'},
      {item: 'embers:lead_shovel', material: '#forge:ingots/lead'},
      {item: 'embers:lead_axe', material: '#forge:ingots/lead'},
      {item: 'embers:lead_hoe', material: '#forge:ingots/lead'},
      undefined, // Embers doesn't add Lead Helmets
      undefined, // Embers doesn't add Lead Chestplates
      undefined, // Embers doesn't add Lead Leggings
      undefined, // Embers doesn't add Lead Boots
    ],
  },
  {
    type: 'certus',
    next: [],
    // addon: 'minecraft:flint',
    items: [
      {item: 'ae2:certus_quartz_sword', material: 'ae2:certus_quartz_crystal'},
      {item: 'ae2:certus_quartz_pickaxe', material: 'ae2:certus_quartz_crystal'},
      {item: 'ae2:certus_quartz_shovel', material: 'ae2:certus_quartz_crystal'},
      {item: 'ae2:certus_quartz_axe', material: 'ae2:certus_quartz_crystal'},
      {item: 'ae2:certus_quartz_hoe', material: 'ae2:certus_quartz_crystal'},
      undefined, // AE2 doesn't add Certus Helmets
      undefined, // AE2 doesn't add Certus Chestplates
      undefined, // AE2 doesn't add Certus Leggings
      undefined, // AE2 doesn't add Certus Boots
    ],
  },
  {
    type: 'quartz',
    next: [],
    // addon: 'minecraft:flint',
    items: [
      {item: 'ae2:nether_quartz_sword', material: 'minecraft:quartz'},
      {item: 'ae2:nether_quartz_pickaxe', material: 'minecraft:quartz'},
      {item: 'ae2:nether_quartz_shovel', material: 'minecraft:quartz'},
      {item: 'ae2:nether_quartz_axe', material: 'minecraft:quartz'},
      {item: 'ae2:nether_quartz_hoe', material: 'minecraft:quartz'},
      undefined, // AE2 doesn't add Quartz Helmets
      undefined, // AE2 doesn't add Quartz Chestplates
      undefined, // AE2 doesn't add Quartz Leggings
      undefined, // AE2 doesn't add Quartz Boots
    ],
  },
  {
    type: 'steel',
    next: ['diamond'],
    // addon: 'immersiveengineering:slag',
    items: [
      {item: 'immersiveengineering:sword_steel', material: '#forge:ingots/steel'},
      {item: 'immersiveengineering:pickaxe_steel', material: '#forge:ingots/steel'},
      {item: 'immersiveengineering:shovel_steel', material: '#forge:ingots/steel'},
      {item: 'immersiveengineering:axe_steel', material: '#forge:ingots/steel'},
      {item: 'immersiveengineering:hoe_steel', material: '#forge:ingots/steel'},
      {item: 'immersiveengineering:armor_steel_helmet', material: '#forge:plates/steel'},
      {item: 'immersiveengineering:armor_steel_chestplate', material: '#forge:plates/steel'},
      {item: 'immersiveengineering:armor_steel_leggings', material: '#forge:plates/steel'},
      {item: 'immersiveengineering:armor_steel_boots', material: '#forge:plates/steel'},
    ],
  },
  {
    type: 'dawnstone',
    next: ['diamond'],
    // addon: 'embers:isolated_materia',
    items: [
      {item: 'embers:dawnstone_sword', material: '#forge:ingots/dawnstone'},
      {item: 'embers:dawnstone_pickaxe', material: '#forge:ingots/dawnstone'},
      {item: 'embers:dawnstone_shovel', material: '#forge:ingots/dawnstone'},
      {item: 'embers:dawnstone_axe', material: '#forge:ingots/dawnstone'},
      {item: 'embers:dawnstone_hoe', material: '#forge:ingots/dawnstone'},
      undefined, // Embers doesn't add Dawnstone Helmets
      undefined, // Embers doesn't add Dawnstone Chestplates
      undefined, // Embers doesn't add Dawnstone Leggings
      undefined, // Embers doesn't add Dawnstone Boots
    ],
  },
  {
    type: 'gold',
    next: [],
    // addon: 'eidolon:enchanted_ash',
    items: [
      {item: 'minecraft:golden_sword', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_pickaxe', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_shovel', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_axe', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_hoe', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_helmet', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_chestplate', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_leggings', material: '#forge:ingots/gold'},
      {item: 'minecraft:golden_boots', material: '#forge:ingots/gold'},
    ],
  },
  {
    type: 'diamond',
    next: [],
    // addon: 'minecraft:diamond',
    items: [
      {item: 'minecraft:diamond_sword', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_pickaxe', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_shovel', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_axe', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_hoe', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_helmet', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_chestplate', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_leggings', material: 'minecraft:diamond'},
      {item: 'minecraft:diamond_boots', material: 'minecraft:diamond'},
    ],
  },
];

ServerEvents.recipes(event => {
  const FindNextSet = type => {
    const Results = Gearsets.filter(x => x.type === type);
    return Results.length ? Results[0] : null;
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
        // If there isn't an equivalent item for this type (i.e. Embers doesn't add Lead Armor), skip it.
        if (!curr.items[i] || !next.items[i]) return;

        event.smithing(
          next.items[i].item,
          next.items[i].material,
          curr.items[i],
          next.items[i].material
        );
      }
    });
  });
});
