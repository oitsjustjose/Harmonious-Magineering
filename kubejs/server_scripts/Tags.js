const regionsUnexplored = {
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

const ores = [
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
  regionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  regionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  ores.forEach(ore => event.removeAllTagsFrom(ore));

  event.add('snowrealmagic:containables', [
    'aether:berry_bush_stem',
    'regions_unexplored:alpha_dandelion',
    'regions_unexplored:alpha_rose',
    'regions_unexplored:ashen_grass',
    'regions_unexplored:aster',
    'regions_unexplored:barley',
    'regions_unexplored:black_snowbelle',
    'regions_unexplored:bladed_grass',
    'regions_unexplored:bladed_tall_grass',
    'regions_unexplored:bleeding_heart',
    'regions_unexplored:blue_lupine',
    'regions_unexplored:blue_magnolia_flowers',
    'regions_unexplored:blue_snowbelle',
    'regions_unexplored:brimsprout',
    'regions_unexplored:brown_snowbelle',
    'regions_unexplored:clover',
    'regions_unexplored:cobalt_earlight',
    'regions_unexplored:cobalt_roots',
    'regions_unexplored:cyan_snowbelle',
    'regions_unexplored:daisy',
    'regions_unexplored:day_lily',
    'regions_unexplored:dead_steppe_shrub',
    'regions_unexplored:dorcel',
    'regions_unexplored:elephant_ear',
    'regions_unexplored:enchanted_birch_leaf_pile',
    'regions_unexplored:felicia_daisy',
    'regions_unexplored:fireweed',
    'regions_unexplored:frozen_grass',
    'regions_unexplored:glister_bulb',
    'regions_unexplored:glister_spire',
    'regions_unexplored:glistering_bloom',
    'regions_unexplored:glistering_fern',
    'regions_unexplored:glistering_sprout',
    'regions_unexplored:gray_snowbelle',
    'regions_unexplored:green_snowbelle',
    'regions_unexplored:hibiscus',
    'regions_unexplored:hyacinth_bloom',
    'regions_unexplored:hyacinth_flowers',
    'regions_unexplored:hyacinth_lamp',
    'regions_unexplored:hyssop',
    'regions_unexplored:light_blue_snowbelle',
    'regions_unexplored:light_gray_snowbelle',
    'regions_unexplored:lime_snowbelle',
    'regions_unexplored:magenta_snowbelle',
    'regions_unexplored:mallow',
    'regions_unexplored:maple_leaf_pile',
    'regions_unexplored:meadow_sage',
    'regions_unexplored:medium_grass',
    'regions_unexplored:mycotoxic_daisy',
    'regions_unexplored:mycotoxic_grass',
    'regions_unexplored:orange_coneflower',
    'regions_unexplored:orange_maple_leaf_pile',
    'regions_unexplored:orange_snowbelle',
    'regions_unexplored:pink_lupine',
    'regions_unexplored:pink_magnolia_flowers',
    'regions_unexplored:pink_snowbelle',
    'regions_unexplored:poppy_bush',
    'regions_unexplored:purple_coneflower',
    'regions_unexplored:purple_lupine',
    'regions_unexplored:purple_snowbelle',
    'regions_unexplored:red_lupine',
    'regions_unexplored:red_maple_leaf_pile',
    'regions_unexplored:red_snowbelle',
    'regions_unexplored:salmon_poppy_bush',
    'regions_unexplored:sandy_grass',
    'regions_unexplored:sandy_tall_grass',
    'regions_unexplored:silver_birch_leaf_pile',
    'regions_unexplored:small_desert_shrub',
    'regions_unexplored:steppe_grass',
    'regions_unexplored:steppe_shrub',
    'regions_unexplored:steppe_tall_grass',
    'regions_unexplored:stone_bud',
    'regions_unexplored:tall_cobalt_earlight',
    'regions_unexplored:tall_hyacinth_stock',
    'regions_unexplored:tassel',
    'regions_unexplored:tsubaki',
    'regions_unexplored:waratah',
    'regions_unexplored:white_magnolia_flowers',
    'regions_unexplored:white_snowbelle',
    'regions_unexplored:white_trillium',
    'regions_unexplored:wilting_trillium',
    'regions_unexplored:windswept_grass',
    'regions_unexplored:yellow_lupine',
    'regions_unexplored:yellow_snowbelle',
  ]);

  event.add('vtweaks:blacklisted_harvest_crops', [
    'minecraft:sweet_berry_bush',
    'minecraft:mangrove_propagule',
    'minecraft:bamboo',
    'farmersdelight:tomatoes',
    'ecologics:prickly_pear',
  ]);
});

ServerEvents.tags('item', event => {
  /* Used to define Handwashing with smaller tag sets to prevent Packet Overflow */
  const colors = () => {
    /**
     * Gets all colors of a given material
     * @param {String} modid
     * @param {String} postfix
     * @param {String} prefix
     * @returns Array<String>
     */
    const allColorsOf = (modid, postfix, prefix) => {
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
    const allButWhite = (modid, postfix, prefix) => {
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
    event.add('vtweaks:colored_wool', allButWhite('minecraft', 'wool'));
    event.add('vtweaks:colored_carpet', allButWhite('minecraft', 'carpet'));
    event.add('vtweaks:colored_banner', allButWhite('minecraft', 'banner'));
    event.add('vtweaks:colored_bed', allButWhite('minecraft', 'bed'));

    event.add('vtweaks:colored_stained_glass', allColorsOf('minecraft', 'stained_glass'));
    event.add('vtweaks:colored_candle', allColorsOf('minecraft', 'candle'));

    // AE2
    event.add('vtweaks:colored_covered_cable', allColorsOf('ae2', 'covered_cable'));
    event.add('vtweaks:colored_covered_dense_cable', allColorsOf('ae2', 'covered_dense_cable'));
    event.add('vtweaks:colored_glass_cable', allColorsOf('ae2', 'glass_cable'));
    event.add('vtweaks:colored_smart_cable', allColorsOf('ae2', 'smart_cable'));
    event.add('vtweaks:colored_smart_dense_cable', allColorsOf('ae2', 'smart_dense_cable'));

    // Comforts
    event.add('vtweaks:colored_hammock', allButWhite('comforts', null, 'hammock'));
    event.add('vtweaks:colored_sleeping_bag', allButWhite('comforts', null, 'sleeping_bag'));

    // Connected Glass
    event.add('vtweaks:colored_borderless_glass_pane', allColorsOf('connectedglass', 'pane', 'borderless_glass'));
    event.add('vtweaks:colored_borderless_glass', allColorsOf('connectedglass', null, 'borderless_glass'));
    event.add('vtweaks:colored_clear_glass_pane', allColorsOf('connectedglass', 'pane', 'clear_glass'));
    event.add('vtweaks:colored_clear_glass', allColorsOf('connectedglass', null, 'clear_glass'));
    event.add('vtweaks:colored_scratched_glass_pane', allColorsOf('connectedglass', 'pane', 'scratched_glass'));
    event.add('vtweaks:colored_scratched_glass', allColorsOf('connectedglass', null, 'scratched_glass'));
    event.add('vtweaks:colored_tinted_borderless_glass', allColorsOf('connectedglass', null, 'tinted_borderless_glass'));

    // Farmer's Delight
    event.add('vtweaks:colored_canvas_sign', allColorsOf('farmersdelight', 'canvas_sign'));
    event.add('vtweaks:colored_hanging_canvas_sign', allColorsOf('farmersdelight', 'hanging_canvas_sign'));

    // Handcrafted
    event.add('vtweaks:colored_cushion', allButWhite('handcrafted', 'cushion'));
    event.add('vtweaks:colored_sheet', allButWhite('handcrafted', 'sheet'));

    // IE
    event.add('vtweaks:colored_sheetmetal_colored', allButWhite('immersiveengineering', null, 'sheetmetal_colored'));
    event.add('vtweaks:colored_slab_sheetmetal_colored', allButWhite('immersiveengineering', null, 'slab_sheetmetal_colored'));

    // Supplementaries
    event.add('vtweaks:colored_candle_holder', allColorsOf('supplementaries', null, 'candle_holder'));
    event.add('vtweaks:colored_flag', allButWhite('supplementaries', null, 'flag'));
  };

  /* Used to define tags that are excluded in ItemGator Gates */
  const exclusions = () => {
    event.add('create:cosmetics', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
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
      'create:copper_sheet',
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
      'create:iron_sheet',
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
    ]);

    event.add('immersiveengineering:exception', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
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
      'immersiveengineering:plate_lead',
      'immersiveengineering:plate_silver',
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
    ]);

    event.add('mekanism:exception', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
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
    ]);

    event.add('ae2:exception', [
      '#forge:dusts',
      '#forge:gems',
      '#forge:ingots',
      '#forge:raw_materials',
      '#forge:storage_blocks',
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
    ]);
  };

  /* Osmium just isn't in our pack at all and should gets removed here */
  const osmium = () => {
    ['ingots', 'dusts', 'storage_blocks', 'raw_materials', 'ores', 'nuggets'].forEach(type => event.removeAll(`forge:${type}/osmium`));
    ['clumps', 'dirty_dusts', 'crystals', 'shards'].forEach(type => event.removeAll(`mekanism:${type}/osmium`));
    event.removeAll(`forge:storage_blocks/raw_osmium`);
  };

  regionsUnexplored.logs.forEach(log => event.add('forge:stripped_logs', log));
  regionsUnexplored.woods.forEach(wood => event.add('forge:stripped_wood', wood));
  ores.forEach(ore => event.removeAllTagsFrom(ore));

  /* Rope Intercompat */
  event.remove('forge:rope', 'farmersdelight:rope');
  event.remove('supplementaries:ropes', 'farmersdelight:rope');

  /* Tallow / Fat Intercompat */
  event.add('forge:tallow', 'delightful:animal_fat');
  /* Plastic Intercompat */
  event.add('pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet');
  /* Chiseled Bookshelf Compat */
  event.add('minecraft:bookshelf_books', ['ae2:guide', 'aether:book_of_lore', 'eidolon:codex', 'rftoolsbase:manual']);
  /* More Obsidian Variants */
  event.add('forge:obsidian', 'minecraft:crying_obsidian');
  event.add('forge:mud', ['regions_unexplored:silt_mud', 'regions_unexplored:peat_mud', 'minecraft:mud']);

  event.add('forge:ocean_blocks', [
    'minecraft:brain_coral_block',
    'minecraft:bubble_coral_block',
    'minecraft:dead_brain_coral_block',
    'minecraft:dead_bubble_coral_block',
    'minecraft:dead_fire_coral_block',
    'minecraft:dead_horn_coral_block',
    'minecraft:dead_tube_coral_block',
    'minecraft:fire_coral_block',
    'minecraft:gravel',
    'minecraft:horn_coral_block',
    'minecraft:sand',
    'minecraft:tube_coral_block',
  ]);

  event.add('forge:actual_underground_stones', [
    'create:asurine',
    'create:crimsite',
    'create:limestone',
    'create:scorchia',
    'create:scoria',
    'create:veridium',
    'minecraft:andesite',
    'minecraft:deepslate',
    'minecraft:dripstone_block',
    'minecraft:diorite',
    'minecraft:granite',
    'minecraft:tuff',
    'minecraft:calcite',
    'minecraft:calcite',
    'regions_unexplored:argillite',
    'regions_unexplored:chalk',
    'regions_unexplored:mossy_stone',
  ]);

  event.add('forge:podzol', [
    'regions_unexplored:silt_podzol',
    'minecraft:podzol',
    'regions_unexplored:peat_farmland',
    'regions_unexplored:peat_podzol',
    'regions_unexplored:peat_coarse_dirt',
    'regions_unexplored:peat_dirt',
    'regions_unexplored:peat_grass_block',
  ]);

  event.add('minecraft:mushroom_hyphae', [
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
  ]);

  [colors, exclusions, osmium].forEach(Module => Module());
});

ServerEvents.tags('entity_type', event => {
  // Creepers are easy enough thanks to the existing tag
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
  event.add('minecraft:water', 'minecraft:flowing_water');

  event.remove('forge:honey', 'productivebees:honey');
});

ServerEvents.tags('dimension_type', event => {
  event.add('vtweaks:peaceful_surface_blacklist_dims', 'bloodmagic:dungeon');
});
