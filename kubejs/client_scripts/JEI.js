JEIEvents.removeCategories(event => {
  event.remove('waystones:warp_plate');
});

JEIEvents.hideFluids(event => {
  event.hide('pneumaticcraft:biodiesel');
});

JEIEvents.addItems(event => {
  [
    'architects_palette:abyssaline',
    'architects_palette:abyssaline_brick_slab',
    'architects_palette:abyssaline_brick_vertical_slab',
    'architects_palette:abyssaline_bricks',
    'architects_palette:abyssaline_lamp',
    'architects_palette:abyssaline_pillar',
    'architects_palette:abyssaline_plating',
    'architects_palette:abyssaline_tile_slab',
    'architects_palette:abyssaline_tile_vertical_slab',
    'architects_palette:abyssaline_tiles',
    'architects_palette:acacia_board_slab',
    'architects_palette:acacia_board_stairs',
    'architects_palette:acacia_board_vertical_slab',
    'architects_palette:acacia_board_wall',
    'architects_palette:acacia_boards',
    'architects_palette:acacia_railing',
    'architects_palette:acacia_totem_wing',
    'architects_palette:algal_blend',
    'architects_palette:algal_brick',
    'architects_palette:algal_brick_slab',
    'architects_palette:algal_brick_stairs',
    'architects_palette:algal_brick_vertical_slab',
    'architects_palette:algal_brick_wall',
    'architects_palette:algal_bricks',
    'architects_palette:algal_cage_lantern',
    'architects_palette:algal_lamp',
    'architects_palette:ancient_plating',
    'architects_palette:ancient_plating_fence',
    'architects_palette:ancient_plating_slab',
    'architects_palette:ancient_plating_stairs',
    'architects_palette:ancient_plating_vertical_slab',
    'architects_palette:ancient_plating_wall',
    'architects_palette:andesite_nub',
    'architects_palette:basalt_tile_slab',
    'architects_palette:basalt_tile_stairs',
    'architects_palette:basalt_tile_vertical_slab',
    'architects_palette:basalt_tile_wall',
    'architects_palette:basalt_tiles',
    'architects_palette:birch_board_slab',
    'architects_palette:birch_board_stairs',
    'architects_palette:birch_board_vertical_slab',
    'architects_palette:birch_board_wall',
    'architects_palette:birch_boards',
    'architects_palette:birch_railing',
    'architects_palette:blackstone_nub',
    'architects_palette:blank_acacia_totem',
    'architects_palette:bone_nub',
    'architects_palette:bordered_moonshale',
    'architects_palette:bounce',
    'architects_palette:bread_block',
    'architects_palette:bread_nub',
    'architects_palette:bread_slab',
    'architects_palette:calcite_brick_slab',
    'architects_palette:calcite_brick_stairs',
    'architects_palette:calcite_brick_vertical_slab',
    'architects_palette:calcite_brick_wall',
    'architects_palette:calcite_bricks',
    'architects_palette:calcite_lamp',
    'architects_palette:calcite_pillar',
    'architects_palette:cerebral_block',
    'architects_palette:cerebral_pillar',
    'architects_palette:cerebral_plate',
    'architects_palette:cerebral_slab',
    'architects_palette:cerebral_stairs',
    'architects_palette:cerebral_tile_slab',
    'architects_palette:cerebral_tile_stairs',
    'architects_palette:cerebral_tile_vertical_slab',
    'architects_palette:cerebral_tile_wall',
    'architects_palette:cerebral_tiles',
    'architects_palette:cerebral_vertical_slab',
    'architects_palette:cerebral_wall',
    'architects_palette:charcoal_block',
    'architects_palette:chiseled_abyssaline_bricks',
    'architects_palette:chiseled_algal_bricks',
    'architects_palette:chiseled_basalt_tiles',
    'architects_palette:chiseled_calcite',
    'architects_palette:chiseled_coal_ore_bricks',
    'architects_palette:chiseled_diamond_ore_bricks',
    'architects_palette:chiseled_dripstone',
    'architects_palette:chiseled_emerald_ore_bricks',
    'architects_palette:chiseled_end_stone_bricks',
    'architects_palette:chiseled_entwine',
    'architects_palette:chiseled_gilded_sandstone',
    'architects_palette:chiseled_gold_ore_bricks',
    'architects_palette:chiseled_hadaline_bricks',
    'architects_palette:chiseled_iron_ore_bricks',
    'architects_palette:chiseled_lapis_ore_bricks',
    'architects_palette:chiseled_moonshale',
    'architects_palette:chiseled_olivestone',
    'architects_palette:chiseled_packed_ice',
    'architects_palette:chiseled_redstone_ore_bricks',
    'architects_palette:chiseled_sunmetal_block',
    'architects_palette:chiseled_tuff',
    'architects_palette:chiseled_wardstone',
    'architects_palette:choral_end_stone_bricks',
    'architects_palette:coal_ore_brick_slab',
    'architects_palette:coal_ore_brick_stairs',
    'architects_palette:coal_ore_brick_vertical_slab',
    'architects_palette:coal_ore_brick_wall',
    'architects_palette:coal_ore_bricks',
    'architects_palette:coarse_snow',
    'architects_palette:cod_log',
    'architects_palette:cod_scales',
    'architects_palette:copper_nub',
    'architects_palette:cracked_algal_bricks',
    'architects_palette:cracked_basalt_tiles',
    'architects_palette:cracked_coal_ore_bricks',
    'architects_palette:cracked_diamond_ore_bricks',
    'architects_palette:cracked_emerald_ore_bricks',
    'architects_palette:cracked_end_stone_bricks',
    'architects_palette:cracked_gold_ore_bricks',
    'architects_palette:cracked_iron_ore_bricks',
    'architects_palette:cracked_lapis_ore_bricks',
    'architects_palette:cracked_moonshale_bricks',
    'architects_palette:cracked_olivestone_bricks',
    'architects_palette:cracked_olivestone_tiles',
    'architects_palette:cracked_redstone_ore_bricks',
    'architects_palette:craterstone',
    'architects_palette:craterstone_slab',
    'architects_palette:craterstone_stairs',
    'architects_palette:craterstone_vertical_slab',
    'architects_palette:craterstone_wall',
    'architects_palette:crimson_board_slab',
    'architects_palette:crimson_board_stairs',
    'architects_palette:crimson_board_vertical_slab',
    'architects_palette:crimson_board_wall',
    'architects_palette:crimson_boards',
    'architects_palette:crimson_railing',
    'architects_palette:crustless_bread_block',
    'architects_palette:crystal_cluster',
    'architects_palette:cut_nether_brass',
    'architects_palette:cut_nether_brass_slab',
    'architects_palette:cut_nether_brass_stairs',
    'architects_palette:cut_nether_brass_vertical_slab',
    'architects_palette:cut_nether_brass_wall',
    'architects_palette:dark_oak_board_slab',
    'architects_palette:dark_oak_board_stairs',
    'architects_palette:dark_oak_board_vertical_slab',
    'architects_palette:dark_oak_board_wall',
    'architects_palette:dark_oak_boards',
    'architects_palette:dark_oak_railing',
    'architects_palette:dark_oracle_brick_slab',
    'architects_palette:dark_oracle_brick_stairs',
    'architects_palette:dark_oracle_brick_vertical_slab',
    'architects_palette:dark_oracle_brick_wall',
    'architects_palette:dark_oracle_bricks',
    'architects_palette:deepslate_nub',
    'architects_palette:diamond_nub',
    'architects_palette:diamond_ore_brick_slab',
    'architects_palette:diamond_ore_brick_stairs',
    'architects_palette:diamond_ore_brick_vertical_slab',
    'architects_palette:diamond_ore_brick_wall',
    'architects_palette:diamond_ore_bricks',
    'architects_palette:diorite_nub',
    'architects_palette:dripstone_brick_slab',
    'architects_palette:dripstone_brick_stairs',
    'architects_palette:dripstone_brick_vertical_slab',
    'architects_palette:dripstone_brick_wall',
    'architects_palette:dripstone_bricks',
    'architects_palette:dripstone_lamp',
    'architects_palette:dripstone_pillar',
    'architects_palette:ekanite_cluster',
    'architects_palette:ekanite_cluster_placed',
    'architects_palette:ekanite_rod',
    'architects_palette:emerald_nub',
    'architects_palette:emerald_ore_brick_slab',
    'architects_palette:emerald_ore_brick_stairs',
    'architects_palette:emerald_ore_brick_vertical_slab',
    'architects_palette:emerald_ore_brick_wall',
    'architects_palette:emerald_ore_bricks',
    'architects_palette:ender_pearl_block',
    'architects_palette:entrails',
    'architects_palette:entrails_slab',
    'architects_palette:entrails_stairs',
    'architects_palette:entrails_vertical_slab',
    'architects_palette:entwine_bars',
    'architects_palette:entwine_block',
    'architects_palette:entwine_pillar',
    'architects_palette:entwine_rod',
    'architects_palette:entwine_slab',
    'architects_palette:entwine_stairs',
    'architects_palette:entwine_vertical_slab',
    'architects_palette:esoterrack',
    'architects_palette:esoterrack_brick_slab',
    'architects_palette:esoterrack_brick_stairs',
    'architects_palette:esoterrack_brick_vertical_slab',
    'architects_palette:esoterrack_brick_wall',
    'architects_palette:esoterrack_bricks',
    'architects_palette:esoterrack_pillar',
    'architects_palette:esoterrack_slab',
    'architects_palette:esoterrack_stairs',
    'architects_palette:esoterrack_vertical_slab',
    'architects_palette:esoterrack_wall',
    'architects_palette:exposed_copper_nub',
    'architects_palette:flint_block',
    'architects_palette:flint_pillar',
    'architects_palette:flint_tile_slab',
    'architects_palette:flint_tile_stairs',
    'architects_palette:flint_tile_vertical_slab',
    'architects_palette:flint_tile_wall',
    'architects_palette:flint_tiles',
    'architects_palette:framed_oracle_block',
    'architects_palette:gilded_sandstone',
    'architects_palette:gilded_sandstone_pillar',
    'architects_palette:gilded_sandstone_slab',
    'architects_palette:gilded_sandstone_stairs',
    'architects_palette:gilded_sandstone_vertical_slab',
    'architects_palette:glowstone_cage_lantern',
    'architects_palette:gold_nub',
    'architects_palette:gold_ore_brick_slab',
    'architects_palette:gold_ore_brick_stairs',
    'architects_palette:gold_ore_brick_vertical_slab',
    'architects_palette:gold_ore_brick_wall',
    'architects_palette:gold_ore_bricks',
    'architects_palette:granite_nub',
    'architects_palette:green_flame',
    'architects_palette:grinning_acacia_totem',
    'architects_palette:grounded_monazite_cluster',
    'architects_palette:hadaline',
    'architects_palette:hadaline_brick_slab',
    'architects_palette:hadaline_brick_vertical_slab',
    'architects_palette:hadaline_bricks',
    'architects_palette:hadaline_lamp',
    'architects_palette:hadaline_pillar',
    'architects_palette:hadaline_plating',
    'architects_palette:hadaline_tile_slab',
    'architects_palette:hadaline_tile_vertical_slab',
    'architects_palette:hadaline_tiles',
    'architects_palette:hanging_monazite_cluster',
    'architects_palette:hanging_monazite_cluster_placed',
    'architects_palette:hazard_block',
    'architects_palette:hazard_sign',
    'architects_palette:hazard_slab',
    'architects_palette:hazard_vertical_slab',
    'architects_palette:hazard_wall',
    'architects_palette:heavy_calcite_bricks',
    'architects_palette:heavy_cracked_end_stone_bricks',
    'architects_palette:heavy_cracked_stone_bricks',
    'architects_palette:heavy_dripstone_bricks',
    'architects_palette:heavy_end_stone_bricks',
    'architects_palette:heavy_mossy_stone_bricks',
    'architects_palette:heavy_stone_bricks',
    'architects_palette:heavy_tuff_bricks',
    'architects_palette:heliodor_cluster',
    'architects_palette:heliodor_cluster_placed',
    'architects_palette:heliodor_rod',
    'architects_palette:illuminated_olivestone',
    'architects_palette:iron_nub',
    'architects_palette:iron_ore_brick_slab',
    'architects_palette:iron_ore_brick_stairs',
    'architects_palette:iron_ore_brick_vertical_slab',
    'architects_palette:iron_ore_brick_wall',
    'architects_palette:iron_ore_bricks',
    'architects_palette:jungle_board_slab',
    'architects_palette:jungle_board_stairs',
    'architects_palette:jungle_board_vertical_slab',
    'architects_palette:jungle_board_wall',
    'architects_palette:jungle_boards',
    'architects_palette:jungle_railing',
    'architects_palette:lapis_ore_brick_slab',
    'architects_palette:lapis_ore_brick_stairs',
    'architects_palette:lapis_ore_brick_vertical_slab',
    'architects_palette:lapis_ore_brick_wall',
    'architects_palette:lapis_ore_bricks',
    'architects_palette:lit_osseous_skull',
    'architects_palette:lit_withered_osseous_skull',
    'architects_palette:mangrove_board_slab',
    'architects_palette:mangrove_board_stairs',
    'architects_palette:mangrove_board_vertical_slab',
    'architects_palette:mangrove_board_wall',
    'architects_palette:mangrove_boards',
    'architects_palette:mangrove_railing',
    'architects_palette:molten_nether_bricks',
    'architects_palette:monazite_cluster',
    'architects_palette:monazite_cluster_placed',
    'architects_palette:monazite_rod',
    'architects_palette:moonshale',
    'architects_palette:moonshale_brick_slab',
    'architects_palette:moonshale_brick_stairs',
    'architects_palette:moonshale_brick_vertical_slab',
    'architects_palette:moonshale_brick_wall',
    'architects_palette:moonshale_bricks',
    'architects_palette:moonshale_flagstone',
    'architects_palette:moonshale_slab',
    'architects_palette:moonshale_stairs',
    'architects_palette:moonshale_vertical_slab',
    'architects_palette:moonshale_wall',
    'architects_palette:moonstone',
    'architects_palette:mushy_myonite_brick_slab',
    'architects_palette:mushy_myonite_brick_stairs',
    'architects_palette:mushy_myonite_brick_vertical_slab',
    'architects_palette:mushy_myonite_brick_wall',
    'architects_palette:mushy_myonite_bricks',
    'architects_palette:myonite',
    'architects_palette:myonite_brick_slab',
    'architects_palette:myonite_brick_stairs',
    'architects_palette:myonite_brick_vertical_slab',
    'architects_palette:myonite_brick_wall',
    'architects_palette:myonite_bricks',
    'architects_palette:myonite_slab',
    'architects_palette:myonite_stairs',
    'architects_palette:myonite_vertical_slab',
    'architects_palette:myonite_wall',
    'architects_palette:nebulite',
    'architects_palette:nebulite_slab',
    'architects_palette:nebulite_stairs',
    'architects_palette:nebulite_vertical_slab',
    'architects_palette:nebulite_wall',
    'architects_palette:nether_brass_blend',
    'architects_palette:nether_brass_block',
    'architects_palette:nether_brass_chain',
    'architects_palette:nether_brass_fire',
    'architects_palette:nether_brass_ingot',
    'architects_palette:nether_brass_lantern',
    'architects_palette:nether_brass_nub',
    'architects_palette:nether_brass_nugget',
    'architects_palette:nether_brass_pillar',
    'architects_palette:nether_brass_slab',
    'architects_palette:nether_brass_stairs',
    'architects_palette:nether_brass_torch',
    'architects_palette:nether_brass_vertical_slab',
    'architects_palette:nether_brass_wall',
    'architects_palette:nether_brass_wall_torch',
    'architects_palette:netherite_nub',
    'architects_palette:nub_of_ender',
    'architects_palette:oak_board_slab',
    'architects_palette:oak_board_stairs',
    'architects_palette:oak_board_vertical_slab',
    'architects_palette:oak_board_wall',
    'architects_palette:oak_boards',
    'architects_palette:oak_railing',
    'architects_palette:olivestone_brick_slab',
    'architects_palette:olivestone_brick_stairs',
    'architects_palette:olivestone_brick_vertical_slab',
    'architects_palette:olivestone_brick_wall',
    'architects_palette:olivestone_bricks',
    'architects_palette:olivestone_pillar',
    'architects_palette:olivestone_tile_slab',
    'architects_palette:olivestone_tile_stairs',
    'architects_palette:olivestone_tile_vertical_slab',
    'architects_palette:olivestone_tile_wall',
    'architects_palette:olivestone_tiles',
    'architects_palette:onyx',
    'architects_palette:onyx_brick_slab',
    'architects_palette:onyx_brick_stairs',
    'architects_palette:onyx_brick_vertical_slab',
    'architects_palette:onyx_brick_wall',
    'architects_palette:onyx_bricks',
    'architects_palette:onyx_pillar',
    'architects_palette:onyx_slab',
    'architects_palette:onyx_stairs',
    'architects_palette:onyx_vertical_slab',
    'architects_palette:onyx_wall',
    'architects_palette:oracle_block',
    'architects_palette:oracle_brick_slab',
    'architects_palette:oracle_brick_stairs',
    'architects_palette:oracle_brick_vertical_slab',
    'architects_palette:oracle_brick_wall',
    'architects_palette:oracle_bricks',
    'architects_palette:oracle_jelly',
    'architects_palette:oracle_lamp',
    'architects_palette:oracle_pillar',
    'architects_palette:oracle_slab',
    'architects_palette:oracle_stairs',
    'architects_palette:oracle_tile_slab',
    'architects_palette:oracle_tile_stairs',
    'architects_palette:oracle_tile_vertical_slab',
    'architects_palette:oracle_tile_wall',
    'architects_palette:oracle_tiles',
    'architects_palette:oracle_vertical_slab',
    'architects_palette:osseous_brick_slab',
    'architects_palette:osseous_brick_stairs',
    'architects_palette:osseous_brick_vertical_slab',
    'architects_palette:osseous_brick_wall',
    'architects_palette:osseous_bricks',
    'architects_palette:osseous_pillar',
    'architects_palette:osseous_skull',
    'architects_palette:overgrown_algal_brick_slab',
    'architects_palette:overgrown_algal_brick_stairs',
    'architects_palette:overgrown_algal_brick_vertical_slab',
    'architects_palette:overgrown_algal_brick_wall',
    'architects_palette:overgrown_algal_bricks',
    'architects_palette:oxidized_copper_nub',
    'architects_palette:packed_ice_pillar',
    'architects_palette:pipe',
    'architects_palette:placid_acacia_totem',
    'architects_palette:plating_block',
    'architects_palette:plating_nub',
    'architects_palette:plating_slab',
    'architects_palette:plating_stairs',
    'architects_palette:plating_vertical_slab',
    'architects_palette:plating_wall',
    'architects_palette:polished_glowstone',
    'architects_palette:polished_glowstone_nub',
    'architects_palette:polished_glowstone_slab',
    'architects_palette:polished_glowstone_vertical_slab',
    'architects_palette:polished_glowstone_wall',
    'architects_palette:polished_nebulite',
    'architects_palette:polished_nebulite_slab',
    'architects_palette:polished_nebulite_stairs',
    'architects_palette:polished_nebulite_vertical_slab',
    'architects_palette:polished_packed_ice',
    'architects_palette:polished_packed_ice_slab',
    'architects_palette:polished_packed_ice_stairs',
    'architects_palette:polished_packed_ice_vertical_slab',
    'architects_palette:polished_packed_ice_wall',
    'architects_palette:potted_twisted_sapling',
    'architects_palette:redstone_cage_lantern',
    'architects_palette:redstone_ore_brick_slab',
    'architects_palette:redstone_ore_brick_stairs',
    'architects_palette:redstone_ore_brick_vertical_slab',
    'architects_palette:redstone_ore_brick_wall',
    'architects_palette:redstone_ore_bricks',
    'architects_palette:rotten_flesh_block',
    'architects_palette:runic_glowstone',
    'architects_palette:salmon_log',
    'architects_palette:salmon_scales',
    'architects_palette:sandstone_nub',
    'architects_palette:scute_block',
    'architects_palette:sheet_metal_block',
    'architects_palette:sheet_metal_wall',
    'architects_palette:shocked_acacia_totem',
    'architects_palette:smooth_nether_brass',
    'architects_palette:smooth_nether_brass_slab',
    'architects_palette:smooth_nether_brass_stairs',
    'architects_palette:smooth_nether_brass_vertical_slab',
    'architects_palette:smooth_stone_nub',
    'architects_palette:spool',
    'architects_palette:spruce_board_slab',
    'architects_palette:spruce_board_stairs',
    'architects_palette:spruce_board_vertical_slab',
    'architects_palette:spruce_board_wall',
    'architects_palette:spruce_boards',
    'architects_palette:spruce_railing',
    'architects_palette:stone_nub',
    'architects_palette:stripped_twisted_log',
    'architects_palette:stripped_twisted_wood',
    'architects_palette:sunmetal_bars',
    'architects_palette:sunmetal_blend',
    'architects_palette:sunmetal_block',
    'architects_palette:sunmetal_brick',
    'architects_palette:sunmetal_nub',
    'architects_palette:sunmetal_pillar',
    'architects_palette:sunmetal_slab',
    'architects_palette:sunmetal_stairs',
    'architects_palette:sunmetal_vertical_slab',
    'architects_palette:sunstone',
    'architects_palette:tread_plate',
    'architects_palette:tread_plate_slab',
    'architects_palette:tread_plate_stairs',
    'architects_palette:tread_plate_vertical_slab',
    'architects_palette:tread_plate_wall',
    'architects_palette:tuff_brick_slab',
    'architects_palette:tuff_brick_stairs',
    'architects_palette:tuff_brick_vertical_slab',
    'architects_palette:tuff_brick_wall',
    'architects_palette:tuff_bricks',
    'architects_palette:tuff_lamp',
    'architects_palette:tuff_pillar',
    'architects_palette:twisted_board_slab',
    'architects_palette:twisted_board_stairs',
    'architects_palette:twisted_board_vertical_slab',
    'architects_palette:twisted_board_wall',
    'architects_palette:twisted_boards',
    'architects_palette:twisted_button',
    'architects_palette:twisted_door',
    'architects_palette:twisted_fence',
    'architects_palette:twisted_fence_gate',
    'architects_palette:twisted_leaves',
    'architects_palette:twisted_log',
    'architects_palette:twisted_planks',
    'architects_palette:twisted_pressure_plate',
    'architects_palette:twisted_railing',
    'architects_palette:twisted_sapling',
    'architects_palette:twisted_slab',
    'architects_palette:twisted_stairs',
    'architects_palette:twisted_trapdoor',
    'architects_palette:twisted_tree',
    'architects_palette:twisted_vertical_slab',
    'architects_palette:twisted_wood',
    'architects_palette:twisting_blackstone',
    'architects_palette:twisting_blackstone_bricks',
    'architects_palette:unobtanium',
    'architects_palette:unobtanium_block',
    'architects_palette:wardstone',
    'architects_palette:wardstone_blend',
    'architects_palette:wardstone_brick',
    'architects_palette:wardstone_brick_slab',
    'architects_palette:wardstone_brick_stairs',
    'architects_palette:wardstone_brick_vertical_slab',
    'architects_palette:wardstone_brick_wall',
    'architects_palette:wardstone_bricks',
    'architects_palette:wardstone_lamp',
    'architects_palette:wardstone_pillar',
    'architects_palette:wardstone_slab',
    'architects_palette:wardstone_stairs',
    'architects_palette:wardstone_vertical_slab',
    'architects_palette:wardstone_wall',
    'architects_palette:warped_board_slab',
    'architects_palette:warped_board_stairs',
    'architects_palette:warped_board_vertical_slab',
    'architects_palette:warped_board_wall',
    'architects_palette:warped_boards',
    'architects_palette:warped_railing',
    'architects_palette:warping',
    'architects_palette:warpstone',
    'architects_palette:warpstone_slab',
    'architects_palette:warpstone_stairs',
    'architects_palette:warpstone_vertical_slab',
    'architects_palette:warpstone_wall',
    'architects_palette:waxed_copper_nub',
    'architects_palette:waxed_exposed_copper_nub',
    'architects_palette:waxed_oxidized_copper_nub',
    'architects_palette:waxed_weathered_copper_nub',
    'architects_palette:weathered_copper_nub',
    'architects_palette:weeping_blackstone',
    'architects_palette:weeping_blackstone_bricks',
    'architects_palette:wither_lamp',
    'architects_palette:wither_skeleton_bones',
    'architects_palette:withered_bone',
    'architects_palette:withered_bone_block',
    'architects_palette:withered_osseous_brick_slab',
    'architects_palette:withered_osseous_brick_stairs',
    'architects_palette:withered_osseous_brick_vertical_slab',
    'architects_palette:withered_osseous_brick_wall',
    'architects_palette:withered_osseous_bricks',
    'architects_palette:withered_osseous_pillar',
    'architects_palette:withered_osseous_skull',
    'minecraft:bundle',
    'sophisticatedbackpacks:backpack',
  ].forEach(x => event.add(x));
});

JEIEvents.hideItems(event => {
  [
    '/embers:silver_axe/',
    '/embers:silver_hoe/',
    '/embers:silver_pickaxe/',
    '/embers:silver_shovel/',
    '/embers:silver_sword/',
    '/ftbquests:.*/',
    '/itemfilters:.*/',
    '/mekanism:creative_chemical_tank/',
    '/mekanism:creative_energy_cube/',
    '/mekanism:creative_energy_cube/',
    '/mekanism:creative_fluid_tank/',
    '/modularrouters:creative_module/',
    '/rftoolsbase:.*/',
    '/sophisticatedbackpacks:backpack/',
    'ae2:crank',
    'ae2:creative_energy_cell',
    'ae2:creative_fluid_cell',
    'ae2:creative_item_cell',
    'appmek:creative_chemical_cell',
    'bloodmagic:activationcrystalcreative',
    'bloodmagic:inversion_pillar_cap',
    'bloodmagic:saltpeter',
    'bloodmagic:spectral',
    'cagedmobs:arrow_upgrade',
    'cagedmobs:cooking_upgrade',
    'cagedmobs:creative_upgrade',
    'cagedmobs:crystallized_experience_block',
    'cagedmobs:crystallized_experience',
    'cagedmobs:dragon_scale',
    'cagedmobs:empty_spawn_egg',
    'cagedmobs:experience_orb',
    'cagedmobs:experience_upgrade',
    'cagedmobs:honey_drop',
    'cagedmobs:lightning_upgrade',
    'cagedmobs:looting_upgrade',
    'cagedmobs:milk_drop',
    'cagedmobs:nether_star_fragment',
    'cagedmobs:netherite_dna_sampler',
    'cagedmobs:speed_i_upgrade',
    'cagedmobs:speed_ii_upgrade',
    'cagedmobs:speed_iii_upgrade',
    'cagedmobs:sponge_fragment',
    'cagedmobs:star_infused_netherite_block',
    'cagedmobs:star_infused_netherite_ingot',
    'cagedmobs:star_infused_netherite_nugget',
    'cagedmobs:warden_receptor',
    'create:creative_blaze_cake',
    'create:creative_crate',
    'create:creative_fluid_tank',
    'create:creative_motor',
    'create:crushed_raw_osmium',
    'create:dough',
    'create:handheld_worldshaper',
    'decorative_blocks:blockstate_copy_item',
    'deep_aether:golden_swet_ball',
    'delightful:salmonberries',
    'dimstorage:dim_core',
    'dimstorage:dim_wall',
    'dimstorage:solid_dim_core',
    'eidolon:candle',
    'eidolon:deep_lead_ore',
    'eidolon:deep_silver_ore',
    'eidolon:lead_ore',
    'eidolon:silver_ore',
    'embers:creative_ember_source',
    'embers:ash',
    'farmersdelight:fried_egg',
    'immersiveengineering:capacitor_creative',
    'immersiveengineering:circuit_board',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:deepslate_ore_silver',
    'immersiveengineering:dust_wood',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_silver',
    'immersiveengineering:plate_duroplast',
    'kubejs:unknown_bloody_item',
    'kubejs:unknown_dwarven_item',
    'kubejs:unknown_electric_item',
    'kubejs:unknown_energistic_item',
    'kubejs:unknown_engineering_item',
    'kubejs:unknown_holy_item',
    'kubejs:unknown_kinetic_item',
    'kubejs:unknown_pneumatic_item',
    'mekanism:block_osmium',
    'mekanism:block_raw_osmium',
    'mekanism:cardboard_box',
    'mekanism:clump_osmium',
    'mekanism:creative_bin',
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
    'minecraft:enchanting_table',
    'modularrouters:breaker_module',
    'modularrouters:energy_distributor_module',
    'modularrouters:energy_output_module',
    'modularrouters:energy_upgrade',
    'modularrouters:extruder_module_1',
    'modularrouters:extruder_module_2',
    'pneumaticcraft:air_conditioning_upgrade',
    'pneumaticcraft:biodiesel_bucket',
    'pneumaticcraft:creative_compressed_iron_block',
    'pneumaticcraft:creative_compressor',
    'pneumaticcraft:creative_upgrade',
    'pneumaticcraft:thaumcraft_upgrade',
    'pneumaticcraft:wheat_flour',
    'quark:moss_paste',
    'quark:tiny_potato',
    'spawn:snail_eggs',
    'spawn:snail_shell',
    'spawn:snail_spawn_egg',
    'storagedrawers:creative_storage_upgrade',
    'storagedrawers:creative_vending_upgrade',
    'waystones:black_sharestone',
    'waystones:blue_sharestone',
    'waystones:brown_sharestone',
    'waystones:cyan_sharestone',
    'waystones:gray_sharestone',
    'waystones:green_sharestone',
    'waystones:light_blue_sharestone',
    'waystones:light_gray_sharestone',
    'waystones:lime_sharestone',
    'waystones:magenta_sharestone',
    'waystones:orange_sharestone',
    'waystones:pink_sharestone',
    'waystones:purple_sharestone',
    'waystones:red_sharestone',
    'waystones:return_scroll',
    'waystones:warp_dust',
    'waystones:warp_plate',
    'waystones:white_sharestone',
    'waystones:yellow_sharestone',
  ].forEach(x => event.hide(x));
});
