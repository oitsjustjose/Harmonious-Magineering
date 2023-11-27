const Removals = [
  '/embers:silver_axe/',
  '/embers:silver_hoe/',
  '/embers:silver_pickaxe/',
  '/embers:silver_shovel/',
  '/embers:silver_sword/',
  '/enderio:broken_spawner/',
  '/enderio:filled_soul_vial/',
  '/itemfilters:.*/',
  '/mekanism:creative_chemical_tank/',
  '/mekanism:creative_fluid_tank/',
  'bloodmagic:inversion_pillar_cap',
  'bloodmagic:spectral',
  'create:crushed_raw_osmium',
  'decorative_blocks:blockstate_copy_item',
  'dimstorage:dim_core',
  'dimstorage:dim_wall',
  'dimstorage:solid_dim_core',
  'eidolon:candle',
  'eidolon:deep_lead_ore',
  'eidolon:deep_silver_ore',
  'eidolon:lead_ore',
  'eidolon:silver_ore',
  'enderio:enchanter',
  'enderio:primitive_alloy_smelter',
  'farmersdelight:fried_egg',
  'immersiveengineering:deepslate_ore_lead',
  'immersiveengineering:deepslate_ore_silver',
  'immersiveengineering:ore_lead',
  'immersiveengineering:ore_silver',
  'laserio:logic_chip_raw',
  'laserio:logic_chip',
  'mekanism:block_osmium',
  'mekanism:block_raw_osmium',
  'mekanism:cardboard_box',
  'mekanism:clump_osmium',
  'mekanism:crystal_osmium',
  'mekanism:deepslate_lead_ore',
  'mekanism:deepslate_osmium_ore',
  'mekanism:dirty_dust_osmium',
  'mekanism:dust_osmium',
  'mekanism:ingot_osmium',
  'mekanism:lead_ore',
  'mekanism:nugget_osmium',
  'mekanism:osmium_ore',
  'mekanism:raw_osmium',
  'mekanism:shard_osmium',
  'modularrouters:augment_core',
  'modularrouters:blank_module',
  'modularrouters:blank_upgrade',
  'modularrouters:breaker_module',
  'modularrouters:extruder_module_1',
  'modularrouters:extruder_module_2',
  'prettypipes:blank_module',
  'spawn:snail_eggs',
  'spawn:snail_shell',
  'spawn:snail_spawn_egg',
];

JEIEvents.addItems(event => {
  event.add('minecraft:bundle');
});

JEIEvents.hideItems(event => {
  Removals.forEach(x => event.hide(x));
});
