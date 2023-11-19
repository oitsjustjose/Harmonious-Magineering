const RegionsUnexplored = {
  logs: [
    'regions_unexplored:stripped_baobab_log',
    'regions_unexplored:stripped_blackwood_log',
    'regions_unexplored:stripped_cherry_log',
    'regions_unexplored:stripped_cypress_log',
    'regions_unexplored:stripped_dead_log',
    'regions_unexplored:stripped_eucalyptus_log',
    'regions_unexplored:stripped_joshua_log',
    'regions_unexplored:stripped_maple_log',
    'regions_unexplored:stripped_mauve_log',
    'regions_unexplored:stripped_palm_log',
    'regions_unexplored:stripped_pine_log',
    'regions_unexplored:stripped_redwood_log',
    'regions_unexplored:stripped_willow_log',
  ],
  woods: [
    'regions_unexplored:stripped_baobab_wood',
    'regions_unexplored:stripped_blackwood_wood',
    'regions_unexplored:stripped_cherry_wood',
    'regions_unexplored:stripped_cypress_wood',
    'regions_unexplored:stripped_dead_wood',
    'regions_unexplored:stripped_eucalyptus_wood',
    'regions_unexplored:stripped_joshua_wood',
    'regions_unexplored:stripped_maple_wood',
    'regions_unexplored:stripped_mauve_wood',
    'regions_unexplored:stripped_palm_wood',
    'regions_unexplored:stripped_pine_wood',
    'regions_unexplored:stripped_redwood_wood',
    'regions_unexplored:stripped_willow_wood',
  ],
};

const Ores = [
  'eidolon:deep_lead_ore',
  'eidolon:deep_silver_ore',
  'eidolon:lead_ore',
  'eidolon:silver_ore',
  'immersiveengineering:deepslate_ore_lead',
  'immersiveengineering:deepslate_ore_silver',
  'immersiveengineering:ore_lead',
  'immersiveengineering:ore_silver',
  'mekanism:deepslate_lead_ore',
  'mekanism:lead_ore',
];

const Crops = [
  'minecraft:sweet_berry_bush',
  'minecraft:mangrove_propagule',
  'minecraft:bamboo',
  'farmersdelight:tomatoes',
];

ServerEvents.tags('block', event => {
  RegionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  RegionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  Ores.forEach(ore => event.removeAllTagsFrom(ore));

  Crops.forEach(crop => event.add('vtweaks:blacklisted_harvest_crops', crop));
});

ServerEvents.tags('item', event => {
  RegionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  RegionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  Ores.forEach(ore => event.removeAllTagsFrom(ore));
});

ServerEvents.tags('entity_type', event => {
  event.add('forge:creepers', '#creeperoverhaul:creepers');
});
