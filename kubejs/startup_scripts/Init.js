Platform.setModName('kubejs', 'Harmonious Magineering');

let xaeroSettingChanged = false;

ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {
  const recipes = {
    'ae2:certus_quartz_axe': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:certus_quartz_cutting_knife': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:certus_quartz_hoe': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:certus_quartz_pickaxe': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:certus_quartz_shovel': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:certus_quartz_sword': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:certus_quartz_wrench': Ingredient.of('#forge:gems/certus_quartz'),
    'ae2:fluix_axe': Ingredient.of('#forge:gems/fluix'),
    'ae2:fluix_hoe': Ingredient.of('#forge:gems/fluix'),
    'ae2:fluix_pickaxe': Ingredient.of('#forge:gems/fluix'),
    'ae2:fluix_shovel': Ingredient.of('#forge:gems/fluix'),
    'ae2:fluix_sword': Ingredient.of('#forge:gems/fluix'),
    'ae2:nether_quartz_axe': Ingredient.of('#forge:gems/quartz'),
    'ae2:nether_quartz_cutting_knife': Ingredient.of('#forge:gems/quartz'),
    'ae2:nether_quartz_hoe': Ingredient.of('#forge:gems/quartz'),
    'ae2:nether_quartz_shovel': Ingredient.of('#forge:gems/quartz'),
    'ae2:nether_quartz_sword': Ingredient.of('#forge:gems/quartz'),
    'aether:chainmail_gloves': Ingredient.of('#forge:ingots/iron'),
    'aether:diamond_gloves': Ingredient.of('#forge:gems/diamond'),
    'aether:golden_gloves': Ingredient.of('#forge:ingots/gold'),
    'aether:iron_gloves': Ingredient.of('#forge:ingots/iron'),
    'aether:leather_gloves': Ingredient.of('#forge:leather'),
    'aether:netherite_gloves': Ingredient.of('#forge:ingots/netherite'),
    'aether:obsidian_boots': Ingredient.of('#forge:obsidian'),
    'aether:obsidian_chestplate': Ingredient.of('#forge:obsidian'),
    'aether:obsidian_gloves': Ingredient.of('#forge:obsidian'),
    'aether:obsidian_helmet': Ingredient.of('#forge:obsidian'),
    'aether:obsidian_leggings': Ingredient.of('#forge:obsidian'),
    'bloodmagic:soulaxe': Ingredient.of('#forge:ingots/iron'),
    'bloodmagic:soulpickaxe': Ingredient.of('#forge:ingots/iron'),
    'bloodmagic:soulscythe': Ingredient.of('#forge:ingots/iron'),
    'bloodmagic:soulshovel': Ingredient.of('#forge:ingots/iron'),
    'bloodmagic:soulsword': Ingredient.of('#forge:ingots/iron'),
    'create:potato_cannon': Ingredient.of('#forge:ingots/copper'),
    'eidolon:athame': Ingredient.of('#forge:ingots/pewter'),
    'eidolon:bonechill_wand': Ingredient.of('eidolon:wraith_heart'),
    'eidolon:bonelord_chestplate': Ingredient.of('eidolon:imbued_bones'),
    'eidolon:bonelord_greaves': Ingredient.of('eidolon:imbued_bones'),
    'eidolon:bonelord_helm': Ingredient.of('eidolon:imbued_bones'),
    'eidolon:cleaving_axe': Ingredient.of('#forge:ingots/pewter'),
    'eidolon:deathbringer_scythe': Ingredient.of('eidolon:shadow_gem'),
    'eidolon:reaper_scythe': Ingredient.of('#forge:ingots/pewter'),
    'eidolon:reversal_pick': Ingredient.of('eidolon:lesser_soul_gem'),
    'eidolon:sapping_sword': Ingredient.of('minecraft:ghast_tear'),
    'eidolon:silver_axe': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_boots': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_chestplate': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_helmet': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_hoe': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_leggings': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_pickaxe': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_shovel': Ingredient.of('#forge:ingots/silver'),
    'eidolon:silver_sword': Ingredient.of('#forge:ingots/silver'),
    'eidolon:soulfire_wand': Ingredient.of('eidolon:shadow_gem'),
    'eidolon:top_hat': Ingredient.of('minecraft:black_wool'),
    'eidolon:warlock_boots': Ingredient.of('eidolon:wicked_weave'),
    'eidolon:warlock_cloak': Ingredient.of('eidolon:wicked_weave'),
    'eidolon:warlock_hat': Ingredient.of('eidolon:wicked_weave'),
    'embers:ashen_boots': Ingredient.of('embers:ashen_fabric'),
    'embers:ashen_cloak': Ingredient.of('embers:ashen_fabric'),
    'embers:ashen_goggles': Ingredient.of('embers:ashen_fabric'),
    'embers:ashen_leggings': Ingredient.of('embers:ashen_fabric'),
    'embers:dawnstone_axe': Ingredient.of('#forge:ingots/dawnstone'),
    'embers:dawnstone_hoe': Ingredient.of('#forge:ingots/dawnstone'),
    'embers:dawnstone_pickaxe': Ingredient.of('#forge:ingots/dawnstone'),
    'embers:dawnstone_shovel': Ingredient.of('#forge:ingots/dawnstone'),
    'embers:dawnstone_sword': Ingredient.of('#forge:ingots/dawnstone'),
    'embers:lead_axe': Ingredient.of('#forge:ingots/lead'),
    'embers:lead_hoe': Ingredient.of('#forge:ingots/lead'),
    'embers:lead_pickaxe': Ingredient.of('#forge:ingots/lead'),
    'embers:lead_shovel': Ingredient.of('#forge:ingots/lead'),
    'embers:lead_sword': Ingredient.of('#forge:ingots/lead'),
    'embers:tyrfing': Ingredient.of('#embers:aspectus/lead'),
    'farmersdelight:diamond_knife': Ingredient.of('#forge:gems/diamond'),
    'farmersdelight:flint_knife': Ingredient.of('minecraft:flint'),
    'farmersdelight:iron_knife': Ingredient.of('#forge:ingots/iron'),
    'farmersdelight:netherite_knife': Ingredient.of('#forge:ingots/netherite'),
    'immersiveengineering:axe_steel': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:hammer': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:hoe_steel': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:pickaxe_steel': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:screwdriver': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:shield': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:shovel_steel': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:sword_steel': Ingredient.of('#forge:ingots/steel'),
    'immersiveengineering:wirecutter': Ingredient.of('#forge:ingots/steel'),
    'minecraft:bow': Ingredient.of('#forge:string'),
    'minecraft:brush': Ingredient.of('#forge:feathers'),
    'minecraft:carrot_on_a_stick': Ingredient.of('#forge:string'),
    'minecraft:crossbow': Ingredient.of('#forge:string'),
    'minecraft:fishing_rod': Ingredient.of('#forge:string'),
    'minecraft:flint_and_steel': Ingredient.of('#forge:ingots/iron'),
    'minecraft:shears': Ingredient.of('#forge:ingots/iron'),
    'minecraft:shield': Ingredient.of('#forge:ingots/iron'),
    'minecraft:trident': Ingredient.of('#forge:gems/prismarine'),
    'minecraft:warped_fungus_on_a_stick': Ingredient.of('#forge:string'),
    'nethersdelight:diamond_machete': Ingredient.of('#forge:gems/diamond'),
    'nethersdelight:golden_machete': Ingredient.of('#forge:ingots/gold'),
    'nethersdelight:iron_machete': Ingredient.of('#forge:ingots/iron'),
    'nethersdelight:netherite_machete': Ingredient.of('#forge:ingots/netherite'),
    'pneumaticcraft:pneumatic_boots': Ingredient.of('#forge:ingots/compressed_iron'),
    'pneumaticcraft:pneumatic_chestplate': Ingredient.of('#forge:ingots/compressed_iron'),
    'pneumaticcraft:pneumatic_helmet': Ingredient.of('#forge:ingots/compressed_iron'),
    'pneumaticcraft:pneumatic_leggings': Ingredient.of('#forge:ingots/compressed_iron'),
    'supplementaries:wrench': Ingredient.of('#forge:ingots/copper'),
  };

  try {
    let input = event.getLeft();
    if (input.isEmpty() || event.getRight().isEmpty()) return;
    if (input.getDamageValue() === 0) return;

    let key = input.getId();
    if (!Object.keys(recipes).includes(key)) return;
    if (!recipes[key].test(event.getRight())) return;

    let result = input.copy();
    result.setDamageValue(0);

    event.setCost(1);
    event.setOutput(result);
  } catch (ex) {
    event.setCost(0);
    event.setOutput(Item.getEmpty());
    console.log(ex);
    console.log(event);
  }
});

ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$ClientTickEvent', () => {
  if (xaeroSettingChanged) return;

  // Disable the Minimap Coords by default
  const XaeroMinimap = Java.loadClass('xaero.minimap.XaeroMinimap');
  const xaeroMinimap = XaeroMinimap.instance;

  xaeroMinimap.getInterfaces().getMinimapInterface().getInfoDisplayManager().get('coords').setState(false);
  xaeroSettingChanged = true;
});

ItemEvents.modification(event => {
  const baseMultiplier = 2;
  const exceptions = {
    /* cases where we want more than a *2 multiplier */
    'pneumaticcraft:pneumatic_chestplate': 4,
    'pneumaticcraft:pneumatic_leggings': 4,
    'pneumaticcraft:pneumatic_helmet': 4,
    'pneumaticcraft:pneumatic_boots': 4,
  };

  const boostBlacklist = [
    'aether:chainmail_gloves',
    'aether:cold_parachute',
    'aether:golden_gloves',
    'aether:golden_parachute',
    'aether:holystone_axe',
    'aether:holystone_hoe',
    'aether:holystone_pickaxe',
    'aether:holystone_shovel',
    'aether:holystone_sword',
    'aether:ice_pendant',
    'aether:leather_gloves',
    'bloodmagic:advancedcuttingfluid',
    'bloodmagic:airscribetool',
    'bloodmagic:alchemy_flask_lingering',
    'bloodmagic:alchemy_flask_throwable',
    'bloodmagic:alchemy_flask',
    'bloodmagic:arcaneashes',
    'bloodmagic:basiccuttingfluid',
    'bloodmagic:duskscribetool',
    'bloodmagic:earthscribetool',
    'bloodmagic:explosivepowder',
    'bloodmagic:firescribetool',
    'bloodmagic:furnacecell_primitive',
    'bloodmagic:hellforged_explosive_cell',
    'bloodmagic:hellforged_resonator',
    'bloodmagic:intermediatecuttingfluid',
    'bloodmagic:primitive_crystalline_resonator',
    'bloodmagic:primitive_explosive_cell',
    'bloodmagic:primitive_hydration_cell',
    'bloodmagic:resonator',
    'bloodmagic:sanguinereverter',
    'bloodmagic:waterscribetool',
    'create:copper_diving_boots',
    'create:copper_diving_helmet',
    'ecologics:crab_claw',
    'eidolon:reversal_pick',
    'farmersdelight:flint_knife',
    'farmersdelight:golden_knife',
    'farmersdelight:skillet',
    'minecraft:chainmail_boots',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_leggings',
    'minecraft:flint_and_steel',
    'minecraft:golden_axe',
    'minecraft:golden_boots',
    'minecraft:golden_chestplate',
    'minecraft:golden_helmet',
    'minecraft:golden_hoe',
    'minecraft:golden_leggings',
    'minecraft:golden_pickaxe',
    'minecraft:golden_shovel',
    'minecraft:golden_sword',
    'minecraft:leather_boots',
    'minecraft:leather_chestplate',
    'minecraft:leather_helmet',
    'minecraft:leather_leggings',
    'minecraft:stone_axe',
    'minecraft:stone_hoe',
    'minecraft:stone_pickaxe',
    'minecraft:stone_shovel',
    'minecraft:stone_sword',
    'nethersdelight:golden_machete',
    'pneumaticcraft:gun_ammo_ap',
    'pneumaticcraft:gun_ammo_explosive',
    'pneumaticcraft:gun_ammo_freezing',
    'pneumaticcraft:gun_ammo_incendiary',
    'pneumaticcraft:gun_ammo_weighted',
    'pneumaticcraft:gun_ammo',
    'pneumaticcraft:micromissiles',
    'supplementaries:bubble_blower',
    'supplementaries:rope_arrow',
    'waystones:warp_stone',
  ];

  event.modify(Ingredient.all, item => {
    let itemId = item.getId().toString();
    if (boostBlacklist.includes(itemId)) return;

    if (item.isDamageable(item.getDefaultInstance())) {
      const multiplier = Object.keys(exceptions).includes(itemId) ? exceptions[itemId] : baseMultiplier;
      console.info(`${itemId}: Durability ${item.maxDamage} -> ${item.maxDamage * multiplier}`);
      item.maxDamage *= multiplier;
    }
  });

  [('minecraft:wooden_sword', 'minecraft:wooden_pickaxe', 'minecraft:wooden_shovel', 'minecraft:wooden_axe', 'minecraft:wooden_hoe')].forEach(
    tool => {
      event.modify(tool, item => {
        item.maxDamage = 16;
      });
    }
  );
});

StartupEvents.registry('minecraft:item', event => {
  [
    'unknown_holy_item',
    'unknown_bloody_item',
    'unknown_dwarven_item',
    'unknown_kinetic_item',
    'unknown_pneumatic_item',
    'unknown_electric_item',
    'unknown_energistic_item',
    'unknown_engineering_item',
    'zinc_dust',
  ].forEach(x => event.create(x));
});
