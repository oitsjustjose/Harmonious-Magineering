JEIEvents.removeCategories(event => {
  event.remove('waystones:warp_plate');
});

JEIEvents.addItems(event => {
  ['minecraft:bundle', 'sophisticatedbackpacks:backpack'].forEach(x => event.add(x));
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
    'create:crushed_raw_aluminum',
    'create:crushed_raw_copper',
    'create:crushed_raw_gold',
    'create:crushed_raw_iron',
    'create:crushed_raw_lead',
    'create:crushed_raw_nickel',
    'create:crushed_raw_osmium',
    'create:crushed_raw_silver',
    'create:crushed_raw_tin',
    'create:crushed_raw_uranium',
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
    'farmersdelight:fried_egg',
    'immersiveengineering:capacitor_creative',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:deepslate_ore_silver',
    'immersiveengineering:dust_wood',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_silver',
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
    'pneumaticcraft:creative_compressed_iron_block',
    'pneumaticcraft:creative_compressor',
    'pneumaticcraft:creative_upgrade',
    'pneumaticcraft:thaumcraft_upgrade',
    'pneumaticcraft:wheat_flour',
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
