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

const Crops = ['minecraft:sweet_berry_bush', 'minecraft:mangrove_propagule', 'minecraft:bamboo', 'farmersdelight:tomatoes', 'ecologics:prickly_pear'];

ServerEvents.tags('block', event => {
  RegionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  RegionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  Ores.forEach(ore => event.removeAllTagsFrom(ore));

  Crops.forEach(crop => event.add('vtweaks:blacklisted_harvest_crops', crop));
});

ServerEvents.tags('item', event => {
  const Osmium = () => {
    [/*'ingots', 'dusts', */ 'storage_blocks', 'raw_materials', 'ores', 'nuggets'].forEach(type => event.removeAll(`forge:${type}/osmium`));
    ['clumps', 'dirty_dusts', 'crystals', 'shards'].forEach(type => event.removeAll(`mekanism:${type}/osmium`));
    event.removeAll(`forge:storage_blocks/raw_osmium`);
  };

  RegionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  RegionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  Ores.forEach(ore => event.removeAllTagsFrom(ore));
  Osmium();
});

ServerEvents.tags('entity_type', event => {
  // Creepies are easy enough thanks to the existing tag
  event.add('forge:creepers', '#creeperoverhaul:creepers');

  // Endermen don't have a similar tag though :D
  event.add('forge:endermen', 'minecraft:enderman');
  event.add('forge:endermen', 'endermanoverhaul:badlands_enderman');
  event.add('forge:endermen', 'endermanoverhaul:cave_enderman');
  event.add('forge:endermen', 'endermanoverhaul:crimson_forest_enderman');
  event.add('forge:endermen', 'endermanoverhaul:dark_oak_enderman');
  event.add('forge:endermen', 'endermanoverhaul:desert_enderman');
  event.add('forge:endermen', 'endermanoverhaul:end_enderman');
  event.add('forge:endermen', 'endermanoverhaul:end_islands_enderman');
  event.add('forge:endermen', 'endermanoverhaul:flower_fields_enderman');
  event.add('forge:endermen', 'endermanoverhaul:ice_spikes_enderman');
  event.add('forge:endermen', 'endermanoverhaul:mushroom_fields_enderman');
  event.add('forge:endermen', 'endermanoverhaul:nether_wastes_enderman');
  event.add('forge:endermen', 'endermanoverhaul:ocean_enderman');
  event.add('forge:endermen', 'endermanoverhaul:savanna_enderman');
  event.add('forge:endermen', 'endermanoverhaul:snowy_enderman');
  event.add('forge:endermen', 'endermanoverhaul:soulsand_valley_enderman');
  event.add('forge:endermen', 'endermanoverhaul:swamp_enderman');
  event.add('forge:endermen', 'endermanoverhaul:warped_forest_enderman');
  event.add('forge:endermen', 'endermanoverhaul:windswept_hills_enderman');
});
