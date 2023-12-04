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

ServerEvents.tags('block', event => {
  RegionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  RegionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  Ores.forEach(ore => event.removeAllTagsFrom(ore));

  ['minecraft:sweet_berry_bush', 'minecraft:mangrove_propagule', 'minecraft:bamboo', 'farmersdelight:tomatoes', 'ecologics:prickly_pear'].forEach(
    crop => event.add('vtweaks:blacklisted_harvest_crops', crop)
  );
});

ServerEvents.tags('item', event => {
  /**
   * Used to define Handwashing with smaller tag sets to prevent Packet Overflow
   */
  const Colors = () => {
    /**
     * Gets all colors of a given material
     * @param {String} modid
     * @param {String} postfix
     * @param {String} prefix
     * @returns Array<String>
     */
    const AllColorsOf = (modid, postfix, prefix) => {
      return [
        'pink',
        'magenta',
        'purple',
        'blue',
        'light_blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'red',
        'brown',
        'black',
        'gray',
        'light_gray',
        'white',
      ].map(color => `${modid}:${prefix || ''}${prefix ? '_' : ''}${color}${postfix ? '_' : ''}${postfix || ''}`);
    };

    /**
     * Gets all colors, but white, of a given material
     * @param {String} modid
     * @param {String} postfix
     * @param {String} prefix
     * @returns Array<String>
     */
    const AllButWhite = (modid, postfix, prefix) => {
      return [
        'pink',
        'magenta',
        'purple',
        'blue',
        'light_blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'red',
        'brown',
        'black',
        'gray',
        'light_gray',
      ].map(color => `${modid}:${prefix || ''}${prefix ? '_' : ''}${color}${postfix ? '_' : ''}${postfix || ''}`);
    };

    // Vanilla
    event.add('vtweaks:colored_wool', AllButWhite('minecraft', 'wool'));
    event.add('vtweaks:colored_carpet', AllButWhite('minecraft', 'carpet'));
    event.add('vtweaks:colored_banner', AllButWhite('minecraft', 'banner'));
    event.add('vtweaks:colored_bed', AllButWhite('minecraft', 'bed'));

    event.add('vtweaks:colored_stained_glass', AllColorsOf('minecraft', 'stained_glass'));
    event.add('vtweaks:colored_candle', AllColorsOf('minecraft', 'candle'));

    // AE2
    event.add('vtweaks:colored_covered_cable', AllColorsOf('ae2', 'covered_cable'));
    event.add('vtweaks:colored_covered_dense_cable', AllColorsOf('ae2', 'covered_dense_cable'));
    event.add('vtweaks:colored_glass_cable', AllColorsOf('ae2', 'glass_cable'));
    event.add('vtweaks:colored_smart_cable', AllColorsOf('ae2', 'smart_cable'));
    event.add('vtweaks:colored_smart_dense_cable', AllColorsOf('ae2', 'smart_dense_cable'));

    // Comforts
    event.add('vtweaks:colored_hammock', AllButWhite('comforts', null, 'hammock'));
    event.add('vtweaks:colored_sleeping_bag', AllButWhite('comforts', null, 'sleeping_bag'));

    // Connected Glass
    event.add('vtweaks:colored_borderless_glass_pane', AllColorsOf('connectedglass', 'pane', 'borderless_glass'));
    event.add('vtweaks:colored_borderless_glass', AllColorsOf('connectedglass', null, 'borderless_glass'));
    event.add('vtweaks:colored_clear_glass_pane', AllColorsOf('connectedglass', 'pane', 'clear_glass'));
    event.add('vtweaks:colored_clear_glass', AllColorsOf('connectedglass', null, 'clear_glass'));
    event.add('vtweaks:colored_scratched_glass_pane', AllColorsOf('connectedglass', 'pane', 'scratched_glass'));
    event.add('vtweaks:colored_scratched_glass', AllColorsOf('connectedglass', null, 'scratched_glass'));
    event.add('vtweaks:colored_tinted_borderless_glass', AllColorsOf('connectedglass', null, 'tinted_borderless_glass'));

    // EnderIO
    event.add('vtweaks:colored_clear_glass_a', AllColorsOf('enderio', null, 'clear_glass_a'));
    event.add('vtweaks:colored_clear_glass_d', AllColorsOf('enderio', null, 'clear_glass_d'));
    event.add('vtweaks:colored_clear_glass_da', AllColorsOf('enderio', null, 'clear_glass_da'));
    event.add('vtweaks:colored_clear_glass_dm', AllColorsOf('enderio', null, 'clear_glass_dm'));
    event.add('vtweaks:colored_clear_glass_dna', AllColorsOf('enderio', null, 'clear_glass_dna'));
    event.add('vtweaks:colored_clear_glass_dnm', AllColorsOf('enderio', null, 'clear_glass_dnm'));
    event.add('vtweaks:colored_clear_glass_dnp', AllColorsOf('enderio', null, 'clear_glass_dnp'));
    event.add('vtweaks:colored_clear_glass_dp', AllColorsOf('enderio', null, 'clear_glass_dp'));
    event.add('vtweaks:colored_clear_glass_e', AllColorsOf('enderio', null, 'clear_glass_e'));
    event.add('vtweaks:colored_clear_glass_ea', AllColorsOf('enderio', null, 'clear_glass_ea'));
    event.add('vtweaks:colored_clear_glass_em', AllColorsOf('enderio', null, 'clear_glass_em'));
    event.add('vtweaks:colored_clear_glass_ena', AllColorsOf('enderio', null, 'clear_glass_ena'));
    event.add('vtweaks:colored_clear_glass_enm', AllColorsOf('enderio', null, 'clear_glass_enm'));
    event.add('vtweaks:colored_clear_glass_enp', AllColorsOf('enderio', null, 'clear_glass_enp'));
    event.add('vtweaks:colored_clear_glass_ep', AllColorsOf('enderio', null, 'clear_glass_ep'));
    event.add('vtweaks:colored_clear_glass_m', AllColorsOf('enderio', null, 'clear_glass_m'));
    event.add('vtweaks:colored_clear_glass', AllColorsOf('enderio', null, 'clear_glass'));
    event.add('vtweaks:colored_clear_glass_na', AllColorsOf('enderio', null, 'clear_glass_na'));
    event.add('vtweaks:colored_clear_glass_nm', AllColorsOf('enderio', null, 'clear_glass_nm'));
    event.add('vtweaks:colored_clear_glass_np', AllColorsOf('enderio', null, 'clear_glass_np'));
    event.add('vtweaks:colored_clear_glass_p', AllColorsOf('enderio', null, 'clear_glass_p'));
    event.add('vtweaks:colored_fused_quartz_a', AllColorsOf('enderio', null, 'fused_quartz_a'));
    event.add('vtweaks:colored_fused_quartz_d', AllColorsOf('enderio', null, 'fused_quartz_d'));
    event.add('vtweaks:colored_fused_quartz_da', AllColorsOf('enderio', null, 'fused_quartz_da'));
    event.add('vtweaks:colored_fused_quartz_dm', AllColorsOf('enderio', null, 'fused_quartz_dm'));
    event.add('vtweaks:colored_fused_quartz_dna', AllColorsOf('enderio', null, 'fused_quartz_dna'));
    event.add('vtweaks:colored_fused_quartz_dnm', AllColorsOf('enderio', null, 'fused_quartz_dnm'));
    event.add('vtweaks:colored_fused_quartz_dnp', AllColorsOf('enderio', null, 'fused_quartz_dnp'));
    event.add('vtweaks:colored_fused_quartz_dp', AllColorsOf('enderio', null, 'fused_quartz_dp'));
    event.add('vtweaks:colored_fused_quartz_e', AllColorsOf('enderio', null, 'fused_quartz_e'));
    event.add('vtweaks:colored_fused_quartz_ea', AllColorsOf('enderio', null, 'fused_quartz_ea'));
    event.add('vtweaks:colored_fused_quartz_em', AllColorsOf('enderio', null, 'fused_quartz_em'));
    event.add('vtweaks:colored_fused_quartz_ena', AllColorsOf('enderio', null, 'fused_quartz_ena'));
    event.add('vtweaks:colored_fused_quartz_enm', AllColorsOf('enderio', null, 'fused_quartz_enm'));
    event.add('vtweaks:colored_fused_quartz_enp', AllColorsOf('enderio', null, 'fused_quartz_enp'));
    event.add('vtweaks:colored_fused_quartz_ep', AllColorsOf('enderio', null, 'fused_quartz_ep'));
    event.add('vtweaks:colored_fused_quartz_m', AllColorsOf('enderio', null, 'fused_quartz_m'));
    event.add('vtweaks:colored_fused_quartz', AllColorsOf('enderio', null, 'fused_quartz'));
    event.add('vtweaks:colored_fused_quartz_na', AllColorsOf('enderio', null, 'fused_quartz_na'));
    event.add('vtweaks:colored_fused_quartz_nm', AllColorsOf('enderio', null, 'fused_quartz_nm'));
    event.add('vtweaks:colored_fused_quartz_np', AllColorsOf('enderio', null, 'fused_quartz_np'));
    event.add('vtweaks:colored_fused_quartz_p', AllColorsOf('enderio', null, 'fused_quartz_p'));

    // Farmer's Delight
    event.add('vtweaks:colored_canvas_sign', AllColorsOf('farmersdelight', 'canvas_sign'));
    event.add('vtweaks:colored_hanging_canvas_sign', AllColorsOf('farmersdelight', 'hanging_canvas_sign'));

    // Handcrafted
    event.add('vtweaks:colored_cushion', AllButWhite('handcrafted', 'cushion'));
    event.add('vtweaks:colored_sheet', AllButWhite('handcrafted', 'sheet'));

    // IE
    event.add('vtweaks:colored_sheetmetal_colored', AllButWhite('immersiveengineering', null, 'sheetmetal_colored'));
    event.add('vtweaks:colored_slab_sheetmetal_colored', AllButWhite('immersiveengineering', null, 'slab_sheetmetal_colored'));

    // Interiors
    event.add('vtweaks:colored_chair', AllButWhite('interiors', 'chair'));
    event.add('vtweaks:colored_floor_chair', AllButWhite('interiors', 'floor_chair'));

    // Supplementaries
    event.add('vtweaks:colored_candle_holder', AllColorsOf('supplementaries', null, 'candle_holder'));
    event.add('vtweaks:colored_flag', AllButWhite('supplementaries', null, 'flag'));
  };

  /**
   * Used to define tags that are excluded in ItemGator Gates
   */
  const Exclusions = () => {
    [
      '#create:stone_types/andesite',
      '#create:stone_types/asurine',
      '#create:stone_types/calcite',
      '#create:stone_types/crimsite',
      '#create:stone_types/deepslate',
      '#create:stone_types/diorite',
      '#create:stone_types/dripstone',
      '#create:stone_types/granite',
      '#create:stone_types/limestone',
      '#create:stone_types/ochrum',
      '#create:stone_types/scorchia',
      '#create:stone_types/scoria',
      '#create:stone_types/tuff',
      '#create:stone_types/veridium',
      'create:acacia_window_pane',
      'create:acacia_window',
      'create:birch_window_pane',
      'create:birch_window',
      'create:copper_shingle_slab',
      'create:copper_shingle_stairs',
      'create:copper_shingles',
      'create:copper_tile_slab',
      'create:copper_tile_stairs',
      'create:copper_tiles',
      'create:crimson_window_pane',
      'create:crimson_window',
      'create:dark_oak_window_pane',
      'create:dark_oak_window',
      'create:exposed_copper_shingle_slab',
      'create:exposed_copper_shingle_stairs',
      'create:exposed_copper_shingles',
      'create:exposed_copper_tile_slab',
      'create:exposed_copper_tile_stairs',
      'create:framed_glass_door',
      'create:framed_glass_pane',
      'create:framed_glass_trapdoor',
      'create:framed_glass',
      'create:horizontal_framed_glass_pane',
      'create:horizontal_framed_glass',
      'create:jungle_window_pane',
      'create:jungle_window',
      'create:mangrove_window_pane',
      'create:mangrove_window',
      'create:oak_window_pane',
      'create:oak_window',
      'create:ornate_iron_window_pane',
      'create:ornate_iron_window',
      'create:oxidized_copper_shingle_slab',
      'create:oxidized_copper_shingle_stairs',
      'create:oxidized_copper_shingles',
      'create:oxidized_copper_tile_slab',
      'create:oxidized_copper_tile_stairs',
      'create:oxidized_copper_tiles',
      'create:spruce_window_pane',
      'create:spruce_window',
      'create:tiled_glass_pane',
      'create:tiled_glass',
      'create:vertical_framed_glass_pane',
      'create:vertical_framed_glass',
      'create:warped_window_pane',
      'create:warped_window',
      'create:waxed_copper_shingle_slab',
      'create:waxed_copper_shingle_stairs',
      'create:waxed_copper_shingles',
      'create:waxed_copper_tile_slab',
      'create:waxed_copper_tile_stairs',
      'create:waxed_copper_tiles',
      'create:waxed_exposed_copper_shingle_slab',
      'create:waxed_exposed_copper_shingle_stairs',
      'create:waxed_exposed_copper_shingles',
      'create:waxed_exposed_copper_tile_slab',
      'create:waxed_exposed_copper_tile_stairs',
      'create:waxed_exposed_copper_tiles',
      'create:waxed_oxidized_copper_shingle_slab',
      'create:waxed_oxidized_copper_shingle_stairs',
      'create:waxed_oxidized_copper_shingles',
      'create:waxed_oxidized_copper_tile_slab',
      'create:waxed_oxidized_copper_tile_stairs',
      'create:waxed_oxidized_copper_tiles',
      'create:waxed_weathered_copper_shingle_slab',
      'create:waxed_weathered_copper_shingle_stairs',
      'create:waxed_weathered_copper_shingles',
      'create:waxed_weathered_copper_tile_slab',
      'create:waxed_weathered_copper_tile_stairs',
      'create:waxed_weathered_copper_tiles',
      'create:weathered_copper_shingle_slab',
      'create:weathered_copper_shingle_stairs',
      'create:weathered_copper_shingles',
      'create:weathered_copper_tile_slab',
      'create:weathered_copper_tile_stairs',
      'create:weathered_copper_tiles',
    ].forEach(cosmetic => event.add('create:cosmetics', cosmetic));

    [
      'compressedcreativity:air_blower',
      'compressedcreativity:brass_coated_upgrade_matrix',
      'compressedcreativity:brass_gilded_lapis_lazuli',
      'compressedcreativity:compressed_air_engine',
      'compressedcreativity:compressed_iron_casing',
      'compressedcreativity:engine_rotor',
      'compressedcreativity:heater',
      'compressedcreativity:incomplete_mesh_splashing',
      'compressedcreativity:industrial_air_blower',
      'compressedcreativity:mechanical_visor_upgrade',
      'compressedcreativity:mesh_dense',
      'compressedcreativity:mesh_empty',
      'compressedcreativity:mesh_haunted',
      'compressedcreativity:mesh_splashing_frozen',
      'compressedcreativity:mesh_splashing',
      'compressedcreativity:mesh_woven',
      'compressedcreativity:rotational_compressor',
    ].forEach(cc => event.add('compressedcreativity:gated', cc));

    [
      'immersiveengineering:bannerpattern_bevels',
      'immersiveengineering:bannerpattern_hammer',
      'immersiveengineering:bannerpattern_ornate',
      'immersiveengineering:bannerpattern_treated_wood',
      'immersiveengineering:bannerpattern_windmill',
      'immersiveengineering:bannerpattern_wolf_l',
      'immersiveengineering:bannerpattern_wolf_r',
      'immersiveengineering:bannerpattern_wolf',
      'immersiveengineering:coal_coke',
      'immersiveengineering:coke',
      'immersiveengineering:concrete_brick_cracked',
      'immersiveengineering:concrete_brick',
      'immersiveengineering:concrete_chiseled',
      'immersiveengineering:concrete_pillar',
      'immersiveengineering:concrete_quarter',
      'immersiveengineering:concrete_sheet',
      'immersiveengineering:concrete_three_quarter',
      'immersiveengineering:concrete_tile',
      'immersiveengineering:concrete',
      'immersiveengineering:craftingtable',
      'immersiveengineering:crate',
      'immersiveengineering:deepslate_ore_aluminum',
      'immersiveengineering:deepslate_ore_nickel',
      'immersiveengineering:deepslate_ore_nickel',
      'immersiveengineering:dust_aluminum',
      'immersiveengineering:dust_nickel',
      'immersiveengineering:ersatz_leather',
      'immersiveengineering:hemp_fiber',
      'immersiveengineering:hempcrete_brick_cracked',
      'immersiveengineering:hempcrete_brick',
      'immersiveengineering:hempcrete_chiseled',
      'immersiveengineering:hempcrete_pillar',
      'immersiveengineering:hempcrete',
      'immersiveengineering:ingot_aluminum',
      'immersiveengineering:ingot_nickel',
      'immersiveengineering:nugget_aluminum',
      'immersiveengineering:nugget_nickel',
      'immersiveengineering:ore_aluminum',
      'immersiveengineering:ore_nickel',
      'immersiveengineering:ore_nickel',
      'immersiveengineering:raw_aluminum',
      'immersiveengineering:raw_block_aluminum',
      'immersiveengineering:raw_block_aluminum',
      'immersiveengineering:raw_block_nickel',
      'immersiveengineering:raw_nickel',
      'immersiveengineering:seed',
      'immersiveengineering:slab_concrete_brick',
      'immersiveengineering:slab_concrete_leaded',
      'immersiveengineering:slab_concrete_tile',
      'immersiveengineering:slab_concrete',
      'immersiveengineering:slab_hempcrete_brick',
      'immersiveengineering:slab_hempcrete',
      'immersiveengineering:stairs_concrete_brick',
      'immersiveengineering:stairs_concrete_leaded',
      'immersiveengineering:stairs_concrete_tile',
      'immersiveengineering:stairs_concrete',
      'immersiveengineering:stairs_hempcrete_brick',
      'immersiveengineering:stairs_hempcrete',
    ].forEach(exception => event.add('immersiveengineering:exception', exception));

    [
      'mekanism:block_fluorite',
      'mekanism:block_raw_tin',
      'mekanism:block_raw_uranium',
      'mekanism:block_steel',
      'mekanism:block_tin',
      'mekanism:block_uranium',
      'mekanism:deepslate_fluorite_ore',
      'mekanism:deepslate_tin_ore',
      'mekanism:deepslate_uranium_ore',
      'mekanism:dust_steel',
      'mekanism:fluorite_gem',
      'mekanism:fluorite_ore',
      'mekanism:ingot_steel',
      'mekanism:ingot_tin',
      'mekanism:ingot_uranium',
      'mekanism:nugget_steel',
      'mekanism:nugget_tin',
      'mekanism:nugget_uranium',
      'mekanism:raw_tin',
      'mekanism:raw_uranium',
      'mekanism:tin_ore',
      'mekanism:uranium_ore',
    ].forEach(exception => event.add('mekanism:exception', exception));

    [
      'ae2:certus_quartz_crystal',
      'ae2:chiseled_quartz_block',
      'ae2:cut_quartz_block',
      'ae2:meteorite_compass',
      'ae2:quartz_block',
      'ae2:quartz_bricks',
      'ae2:quartz_glass',
      'ae2:quartz_pillar',
      'ae2:quartz_vibrant_glass',
      'ae2:sky_stone_block',
      'ae2:sky_stone_brick',
      'ae2:sky_stone_chest',
      'ae2:sky_stone_small_brick',
      'ae2:smooth_quartz_block',
      'ae2:smooth_sky_stone_block',
      'ae2:smooth_sky_stone_chest',
      'ae2:tiny_tnt',
    ].forEach(exception => event.add('ae2:exception', exception));
  };

  /**
   * Hyphae aren't added but are used by BloodMagic, so let's add them
   */
  const Hyphae = () => {
    [
      'aether_redux:cloudcap_hyphae',
      'aether_redux:springshroom_hyphae',
      'aether_redux:stripped_cloudcap_hyphae',
      'enlightened_end:indigo_hyphae',
      'enlightened_end:stripped_indigo_hyphae',
      'minecraft:crimson_hyphae',
      'minecraft:stripped_crimson_hyphae',
      'minecraft:stripped_warped_hyphae',
      'minecraft:warped_hyphae',
      'regions_unexplored:blue_bioshroom_hyphae',
      'regions_unexplored:green_bioshroom_hyphae',
      'regions_unexplored:pink_bioshroom_hyphae',
      'regions_unexplored:stripped_blue_bioshroom_hyphae',
      'regions_unexplored:stripped_green_bioshroom_hyphae',
      'regions_unexplored:stripped_pink_bioshroom_hyphae',
      'regions_unexplored:stripped_yellow_bioshroom_hyphae',
      'regions_unexplored:yellow_bioshroom_hyphae',
    ].forEach(hyphae => event.add('minecraft:mushroom_hyphae', hyphae));
  };

  /**
   * Osmium just isn't in our pack at all and should gets removed here
   */
  const Osmium = () => {
    ['ingots', 'dusts', 'storage_blocks', 'raw_materials', 'ores', 'nuggets'].forEach(type => event.removeAll(`forge:${type}/osmium`));
    ['clumps', 'dirty_dusts', 'crystals', 'shards'].forEach(type => event.removeAll(`mekanism:${type}/osmium`));
    event.removeAll(`forge:storage_blocks/raw_osmium`);
  };

  RegionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  RegionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  Ores.forEach(ore => event.removeAllTagsFrom(ore));

  event.remove('forge:buckets/honey', 'productivebees:honey_bucket');

  event.remove('forge:rope', 'farmersdelight:rope');
  event.remove('supplementaries:ropes', 'farmersdelight:rope');

  event.add('forge:tallow', 'delightful:animal_fat');
  event.add('pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet');

  [Colors, Exclusions, Hyphae, Osmium].forEach(Module => Module());
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

ServerEvents.tags('fluid', event => {
  event.removeAll('minecraft:water');
  event.add('minecraft:water', 'minecraft:water');

  event.remove('forge:honey', 'productivebees:honey');
});
