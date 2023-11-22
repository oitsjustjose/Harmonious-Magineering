ServerEvents.recipes(event => {
  /* Gearset Order: Sword, Pick, Shovel, Axe, Hoe */
  const BaseTools = [
    {
      type: 'wood',
      next: ['stone'],
      items: [
        {item: 'minecraft:wooden_sword', material: '#minecraft:planks'},
        {item: 'minecraft:wooden_pickaxe', material: '#minecraft:planks'},
        {item: 'minecraft:wooden_shovel', material: '#minecraft:planks'},
        {item: 'minecraft:wooden_axe', material: '#minecraft:planks'},
        {item: 'minecraft:wooden_hoe', material: '#minecraft:planks'},
      ],
    },
    {
      type: 'stone',
      next: ['iron', 'silver', 'lead', 'certus', 'quartz'],
      items: [
        {item: 'minecraft:stone_sword', material: '#minecraft:stone_tool_materials'},
        {item: 'minecraft:stone_pickaxe', material: '#minecraft:stone_tool_materials'},
        {item: 'minecraft:stone_shovel', material: '#minecraft:stone_tool_materials'},
        {item: 'minecraft:stone_axe', material: '#minecraft:stone_tool_materials'},
        {item: 'minecraft:stone_hoe', material: '#minecraft:stone_tool_materials'},
      ],
    },
    {
      type: 'iron',
      next: ['steel', 'dawnstone', 'gold'],
      items: [
        {item: 'minecraft:iron_sword', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_pickaxe', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_shovel', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_axe', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_hoe', material: '#forge:ingots/iron'},
      ],
    },
    {
      type: 'silver',
      next: [],
      items: [
        {item: 'eidolon:silver_sword', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_pickaxe', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_shovel', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_axe', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_hoe', material: '#forge:ingots/silver'},
      ],
    },
    {
      type: 'lead',
      next: [],
      items: [
        {item: 'embers:lead_sword', material: '#forge:ingots/lead'},
        {item: 'embers:lead_pickaxe', material: '#forge:ingots/lead'},
        {item: 'embers:lead_shovel', material: '#forge:ingots/lead'},
        {item: 'embers:lead_axe', material: '#forge:ingots/lead'},
        {item: 'embers:lead_hoe', material: '#forge:ingots/lead'},
      ],
    },
    {
      type: 'certus',
      next: [],
      items: [
        {item: 'ae2:certus_quartz_sword', material: 'ae2:certus_quartz_crystal'},
        {item: 'ae2:certus_quartz_pickaxe', material: 'ae2:certus_quartz_crystal'},
        {item: 'ae2:certus_quartz_shovel', material: 'ae2:certus_quartz_crystal'},
        {item: 'ae2:certus_quartz_axe', material: 'ae2:certus_quartz_crystal'},
        {item: 'ae2:certus_quartz_hoe', material: 'ae2:certus_quartz_crystal'},
      ],
    },
    {
      type: 'quartz',
      next: [],
      items: [
        {item: 'ae2:nether_quartz_sword', material: 'minecraft:quartz'},
        {item: 'ae2:nether_quartz_pickaxe', material: 'minecraft:quartz'},
        {item: 'ae2:nether_quartz_shovel', material: 'minecraft:quartz'},
        {item: 'ae2:nether_quartz_axe', material: 'minecraft:quartz'},
        {item: 'ae2:nether_quartz_hoe', material: 'minecraft:quartz'},
      ],
    },
    {
      type: 'steel',
      next: ['diamond'],
      items: [
        {item: 'immersiveengineering:sword_steel', material: '#forge:ingots/steel'},
        {item: 'immersiveengineering:pickaxe_steel', material: '#forge:ingots/steel'},
        {item: 'immersiveengineering:shovel_steel', material: '#forge:ingots/steel'},
        {item: 'immersiveengineering:axe_steel', material: '#forge:ingots/steel'},
        {item: 'immersiveengineering:hoe_steel', material: '#forge:ingots/steel'},
      ],
    },
    {
      type: 'dawnstone',
      next: ['diamond'],
      items: [
        {item: 'embers:dawnstone_sword', material: '#forge:ingots/dawnstone'},
        {item: 'embers:dawnstone_pickaxe', material: '#forge:ingots/dawnstone'},
        {item: 'embers:dawnstone_shovel', material: '#forge:ingots/dawnstone'},
        {item: 'embers:dawnstone_axe', material: '#forge:ingots/dawnstone'},
        {item: 'embers:dawnstone_hoe', material: '#forge:ingots/dawnstone'},
      ],
    },
    {
      type: 'gold',
      next: [],
      items: [
        {item: 'minecraft:golden_sword', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_pickaxe', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_shovel', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_axe', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_hoe', material: '#forge:ingots/gold'},
      ],
    },
    {
      type: 'diamond',
      next: [],
      items: [
        {item: 'minecraft:diamond_sword', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_pickaxe', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_shovel', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_axe', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_hoe', material: 'minecraft:diamond'},
      ],
    },
  ];

  /* Gearset Order: Helmet, Chestplate, Leggings, Boots */
  const Armor = [
    {
      type: 'leather',
      next: ['chain'],
      items: [
        {item: 'minecraft:leather_helmet', material: 'minecraft:leather'},
        {item: 'minecraft:leather_chestplate', material: 'minecraft:leather'},
        {item: 'minecraft:leather_leggings', material: 'minecraft:leather'},
        {item: 'minecraft:leather_boots', material: 'minecraft:leather'},
      ],
    },
    {
      type: 'chain',
      next: ['iron', 'silver'],
      items: [
        {item: 'minecraft:chainmail_helmet', material: 'minecraft:chain'},
        {item: 'minecraft:chainmail_chestplate', material: 'minecraft:chain'},
        {item: 'minecraft:chainmail_leggings', material: 'minecraft:chain'},
        {item: 'minecraft:chainmail_boots', material: 'minecraft:chain'},
      ],
    },
    {
      type: 'iron',
      next: ['steel', 'gold'],
      items: [
        {item: 'minecraft:iron_helmet', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_chestplate', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_leggings', material: '#forge:ingots/iron'},
        {item: 'minecraft:iron_boots', material: '#forge:ingots/iron'},
      ],
    },
    {
      type: 'silver',
      next: [],
      items: [
        {item: 'eidolon:silver_helmet', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_chestplate', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_leggings', material: '#forge:ingots/silver'},
        {item: 'eidolon:silver_boots', material: '#forge:ingots/silver'},
      ],
    },
    {
      type: 'steel',
      next: ['diamond'],
      items: [
        {item: 'immersiveengineering:armor_steel_helmet', material: '#forge:plates/steel'},
        {item: 'immersiveengineering:armor_steel_chestplate', material: '#forge:plates/steel'},
        {item: 'immersiveengineering:armor_steel_leggings', material: '#forge:plates/steel'},
        {item: 'immersiveengineering:armor_steel_boots', material: '#forge:plates/steel'},
      ],
    },

    {
      type: 'gold',
      next: [],
      items: [
        {item: 'minecraft:golden_helmet', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_chestplate', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_leggings', material: '#forge:ingots/gold'},
        {item: 'minecraft:golden_boots', material: '#forge:ingots/gold'},
      ],
    },
    {
      type: 'diamond',
      next: [],
      items: [
        {item: 'minecraft:diamond_helmet', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_chestplate', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_leggings', material: 'minecraft:diamond'},
        {item: 'minecraft:diamond_boots', material: 'minecraft:diamond'},
      ],
    },
  ];

  const Gloves = [
    {
      type: 'leather',
      next: ['chain'],
      items: [{item: 'aether:leather_gloves', material: 'minecraft:leather'}],
    },
    {
      type: 'chain',
      next: ['iron'],
      items: [{item: 'aether:chainmail_gloves', material: 'minecraft:chain'}],
    },
    {
      type: 'iron',
      next: ['gold', 'diamond'],
      items: [{item: 'aether:iron_gloves', material: '#forge:ingots/iron'}],
    },
    {
      type: 'gold',
      next: [],
      items: [{item: 'aether:golden_gloves', material: '#forge:ingots/gold'}],
    },
    {
      type: 'diamond',
      next: [],
      items: [{item: 'aether:diamond_gloves', material: 'minecraft:diamond'}],
    },
  ];

  const Knives = [
    {
      type: 'flint',
      next: ['iron'],
      items: [{item: 'farmersdelight:flint_knife', material: 'minecraft:flint'}],
    },
    {
      type: 'iron',
      next: ['steel', 'silver', 'gold'],
      items: [{item: 'farmersdelight:iron_knife', material: '#forge:ingots/iron'}],
    },
    {
      type: 'steel',
      next: ['diamond'],
      items: [{item: 'delightful:steel_knife', material: '#forge:ingots/steel'}],
    },
    {
      type: 'silver',
      next: [],
      items: [{item: 'delightful:silver_knife', material: '#forge:ingots/silver'}],
    },
    {
      type: 'gold',
      next: [],
      items: [{item: 'farmersdelight:golden_knife', material: '#forge:ingots/gold'}],
    },
    {
      type: 'diamond',
      next: [],
      items: [{item: 'farmersdelight:diamond_knife', material: 'minecraft:diamond'}],
    },
  ];

  const Machetes = [
    {
      type: 'iron',
      next: ['gold', 'diamond'],
      items: [{item: 'nethersdelight:iron_machete', material: '#forge:ingots/iron'}],
    },
    {
      type: 'gold',
      next: [],
      items: [{item: 'nethersdelight:golden_machete', material: '#forge:ingots/gold'}],
    },
    {
      type: 'diamond',
      next: [],
      items: [{item: 'nethersdelight:diamond_machete', material: 'minecraft:diamond'}],
    },
  ];

  const ProcessSet = set => {
    const FindNextSet = type => {
      const Results = set.filter(x => x.type === type);
      return Results.length ? Results[0] : null;
    };

    set.forEach(curr => {
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
          event.smithing(next.items[i].item, next.items[i].material, curr.items[i].item, next.items[i].material);
        }
      });
    });
  };

  [BaseTools, Armor, Gloves, Knives, Machetes].forEach(ProcessSet);
});
