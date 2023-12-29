ServerEvents.recipes(event => {
  const items = {
    screen: Item.of('supplementaries:crystal_display'),
    plastic: '#pneumaticcraft:plastic_sheets',
    circuitish: [Item.of('mekanism:basic_control_circuit'), Item.of('pneumaticcraft:printed_circuit_board')],
    template: Item.of('minecraft:paper'),
  };

  const ae2 = () => {
    event.replaceInput({mod: 'ae2'}, '#forge:ingots/iron', '#forge:ingots/steel');
    // By the time you get to AE, you'll have power...
    event.remove({id: 'ae2:network/blocks/crank'});

    // Silicon redux
    event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'});
    event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'});
    event.recipes.create.compacting(Item.of('ae2:silicon', 2), [Item.of('mekanism:dust_quartz'), Item.of('mekanism:dust_coal')]).superheated();
    event.custom({
      type: 'mekanism:metallurgic_infusing',
      chemicalInput: {amount: 10, tag: 'mekanism:carbon'},
      itemInput: {ingredient: {item: 'minecraft:quartz'}},
      output: {item: 'ae2:silicon', count: 2},
    });

    // Dusts shouldn't be made in the inscriber..
    event.remove({id: 'ae2:inscriber/certus_quartz_dust'});
    event.remove({id: 'ae2:inscriber/ender_dust'});
    event.remove({id: 'ae2:inscriber/fluix_dust'});
    event.remove({id: 'ae2:inscriber/sky_stone_dust'});

    event.custom({type: 'mekanism:crushing', input: {ingredient: {tag: 'forge:ender_pearls'}}, output: {item: 'ae2:ender_dust'}});

    // Use Skystone Dust in more recipes - it's massively under-utilized :/
    event.replaceInput({output: 'ae2:cell_component_1k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_4k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_16k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_64k'}, '#forge:dusts', 'ae2:sky_dust');
    event.replaceInput({output: 'ae2:cell_component_256k'}, '#forge:dusts', 'ae2:sky_dust');

    // Use Copper Wiring in processor recipes
    event.remove({id: 'ae2:inscriber/logic_processor'});
    event.custom({
      type: 'ae2:inscriber',
      mode: 'press',
      ingredients: {
        bottom: {item: 'ae2:printed_silicon'},
        middle: {tag: 'forge:wires/copper'},
        top: {item: 'ae2:printed_logic_processor'},
      },
      result: {item: 'ae2:logic_processor'},
    });

    event.remove({id: 'ae2:inscriber/engineering_processor'});
    event.custom({
      type: 'ae2:inscriber',
      mode: 'press',
      ingredients: {
        bottom: {item: 'ae2:printed_silicon'},
        middle: {tag: 'forge:wires/copper'},
        top: {item: 'ae2:printed_engineering_processor'},
      },
      result: {item: 'ae2:engineering_processor'},
    });

    event.remove({id: 'ae2:inscriber/calculation_processor'});
    event.custom({
      type: 'ae2:inscriber',
      mode: 'press',
      ingredients: {
        bottom: {item: 'ae2:printed_silicon'},
        middle: {tag: 'forge:wires/copper'},
        top: {item: 'ae2:printed_calculation_processor'},
      },
      result: {item: 'ae2:calculation_processor'},
    });

    // Use mekanism circuits for the printed circuits
    event.remove({id: 'ae2:inscriber/calculation_processor_print'});
    event.remove({id: 'ae2:inscriber/engineering_processor_print'});
    event.remove({id: 'ae2:inscriber/logic_processor_print'});

    // Basic Control Circuit -> Logic Processor
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      ingredients: {
        middle: {tag: 'forge:circuits/basic'},
        top: {item: 'ae2:logic_processor_press'},
      },
      result: {item: 'ae2:printed_logic_processor'},
    });
    // Advanced Control Circuit -> Calculation Processor
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      ingredients: {
        middle: {tag: 'forge:circuits/advanced'},
        top: {item: 'ae2:calculation_processor_press'},
      },
      result: {item: 'ae2:printed_calculation_processor'},
    });
    // Elite Control Circuit -> Engineering Processor
    event.custom({
      type: 'ae2:inscriber',
      mode: 'inscribe',
      ingredients: {
        middle: {tag: 'forge:circuits/elite'},
        top: {item: 'ae2:engineering_processor_press'},
      },
      result: {item: 'ae2:printed_engineering_processor'},
    });
  };

  const buildingGadgets = () => {
    const bG = item => `buildinggadgets2:${item}`;
    event.remove({mod: 'buildinggadgets2'});

    event.shaped(bG('template_manager'), ['PPP', 'PTP', 'PEP'], {
      P: items.plastic,
      T: 'create:schematic_table',
      E: 'create:empty_schematic',
    });

    event.shaped(bG('gadget_building'), ['PSP', 'PBP', 'PCP'], {
      P: items.plastic,
      S: items.screen,
      B: 'create:extendo_grip',
      C: 'kubejs:rf_core',
    });

    event.shaped(bG('gadget_exchanging'), ['PPP', ' SP', ' CP'], {
      P: items.plastic,
      S: items.screen,
      C: 'kubejs:rf_core',
    });

    event.shaped(bG('gadget_copy_paste'), ['PSP', 'ECE', 'PGP'], {
      P: items.plastic,
      S: items.screen,
      C: 'kubejs:rf_core',
      E: 'create:empty_schematic',
      G: 'create:extendo_grip',
    });

    event.shaped(bG('gadget_cut_paste'), ['DSD', 'ECE', 'DGD'], {
      D: '#forge:ingots/steel',
      S: items.screen,
      C: 'kubejs:rf_core',
      E: 'minecraft:shears',
      G: 'create:extendo_grip',
    });

    event.shaped(bG('gadget_destruction'), ['DSD', 'DTD', 'DCD'], {
      D: '#forge:ingots/steel',
      S: items.screen,
      C: 'kubejs:rf_core',
      T: 'minecraft:tnt',
    });

    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}'), [
      'minecraft:book',
      'create:empty_schematic',
    ]);
  };

  const chunkloaders = () => {
    event.remove({output: 'chunkloaders:basic_chunk_loader'});
    event.shaped('chunkloaders:basic_chunk_loader', ['ABA', 'BCB', 'ABA'], {
      A: '#forge:ingots/steel',
      B: '#forge:obsidian',
      C: '#forge:ender_pearls',
    });
  };

  const create = () => {
    // Only Andesite Casing can be made by hand - everything else should be deployed
    event.remove({id: 'create:item_application/brass_casing_from_log'});
    event.remove({id: 'create:item_application/brass_casing_from_wood'});
    event.remove({id: 'create:item_application/copper_casing_from_log'});
    event.remove({id: 'create:item_application/copper_casing_from_wood'});
    event.remove({id: 'create:item_application/railway_casing'});

    event.recipes.create.deploying('create:copper_casing', [['#forge:stripped_logs', '#forge:stripped_wood'], '#forge:ingots/copper']);
    event.recipes.create.deploying('create:brass_casing', [['#forge:stripped_logs', '#forge:stripped_wood'], '#forge:ingots/brass']);
    event.recipes.create.deploying('create:railway_casing', ['create:brass_casing', '#forge:plates/obsidian']);

    event.remove({id: 'create:crafting/materials/andesite_alloy'});
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'});
    event.custom({
      type: 'embers:stamping',
      input: {item: 'minecraft:andesite'},
      stamp: {item: 'embers:ingot_stamp'},
      fluid: {amount: 90, tag: 'forge:molten_iron'},
      output: {item: 'create:andesite_alloy', count: 1},
    });

    // Make it easier to make Dawnstone once you get into Create :)
    event.recipes.create
      .mixing(Item.of('embers:dawnstone_ingot', 2), [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:ingots/gold')])
      .heated();
  };

  const dimStorage = () => {
    event.remove({mod: 'dimstorage'});

    event.shaped('dimstorage:dimensional_chest', ['SSS', 'HCH', 'SSS'], {
      S: '#forge:ingots/steel',
      H: 'mekanism:elite_control_circuit',
      C: 'minecraft:ender_chest',
    });

    event.shaped('dimstorage:dimensional_tank', ['SHS', 'STS', 'SHS'], {
      S: '#forge:ingots/steel',
      H: 'mekanism:elite_control_circuit',
      T: ['mekanism:basic_fluid_tank', 'create:fluid_tank'],
    });

    event.shaped('dimstorage:dimensional_tablet', ['SSS', 'HWH', 'SSS'], {
      S: '#forge:plates/steel',
      H: 'mekanism:elite_control_circuit',
      W: items.screen,
    });
  };

  const entangled = () => {
    event.remove({output: 'entangled:block'});
    event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
      A: 'endermanoverhaul:soul_pearl',
      B: '#forge:obsidian',
      C: 'dimstorage:dimensional_chest',
    });
  };

  const immersiveEngineering = () => {
    const mod = id => `immersiveengineering:${id}`;

    const steel = () => {
      event.remove({output: mod('cokebrick')});
      event.remove({output: mod('blastbrick')});

      event.recipes.create
        .compacting(Item.of(mod('cokebrick'), 3), [
          Item.of('minecraft:clay_ball', 4),
          Item.of('supplementaries:ash_brick', 4),
          Item.of(mod('component_steel'), 1),
        ])
        .superheated();

      event.recipes.create
        .compacting(Item.of(mod('blastbrick'), 3), [
          Item.of('minecraft:nether_brick', 4),
          Item.of('embers:ember_crystal', 4),
          Item.of(mod('component_steel'), 1),
        ])
        .superheated();

      event.recipes.create.mixing('mekanism:nugget_steel', ['#forge:nuggets/iron', '#forge:dusts/ash']).superheated();
    };

    event.remove({id: mod('alloysmelter/brass')});
    event.remove({id: mod('alloysmelter/bronze')});
    event.replaceInput({output: mod('hammer')}, '#forge:ingots/iron', '#forge:ingots/steel');
    event.replaceInput({output: mod('wirecutter')}, '#forge:ingots/iron', '#forge:ingots/steel');
    event.remove({input: mod('wirecutter'), output: '#forge:wires'});

    steel();
  };

  const laserIO = () => {
    const l = item => `laserio:${item}`;
    event.remove({mod: 'laserio'});

    /**
     * @param {Internal.ItemStackKJS} result
     * @param {Internal.Ingredient|Array<Internal.Ingredient>} left
     * @param {Internal.Ingredient|Array<Internal.Ingredient>} right
     * @param {Number} cost
     */
    const anvilOrDeploy = (result, left, right, cost) => {
      const useLeft = Array.isArray(left) ? left.map(x => x.toJson()) : left.toJson();
      const useRight = Array.isArray(right) ? right.map(x => x.toJson()) : right.toJson();
      event.recipes.create.deploying(result, [useLeft, useRight]);
      event.custom({
        type: 'vtweaks:anvil',
        left: useLeft,
        right: useRight,
        result: result.toJson(),
        cost: cost,
      });
    };

    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"laserio:laseriobook"}'), ['minecraft:book', l('laser_connector')]);

    event.shaped(l('overclocker_card'), [' P ', 'RCR', 'PSP'], {
      P: '#forge:plates/gold',
      R: 'minecraft:redstone',
      S: 'minecraft:sugar',
      C: items.circuitish,
    });

    event.shaped(l('overclocker_node'), [' P ', 'RCR', 'PSP'], {
      P: 'minecraft:diamond',
      R: 'minecraft:redstone',
      S: 'minecraft:sugar',
      C: items.circuitish,
    });

    event.shapeless(l('filter_basic'), [items.plastic, '#forge:chests/wooden']);
    anvilOrDeploy(Item.of(l('filter_count')), Ingredient.of(l('filter_basic')), items.circuitish, 4);
    anvilOrDeploy(Item.of(l('filter_tag')), Ingredient.of(l('filter_basic')), Ingredient.of('minecraft:name_tag'), 4);
    anvilOrDeploy(Item.of(l('filter_mod')), Ingredient.of(l('filter_basic')), Ingredient.of('#minecraft:anvil'), 4);
    anvilOrDeploy(Item.of(l('filter_nbt')), Ingredient.of(l('filter_basic')), Ingredient.of('#forge:gems/diamond'), 8);

    anvilOrDeploy(Item.of(l('card_item'), 16), Ingredient.of('pneumaticcraft:module_expansion_card'), Ingredient.of('#forge:chests/wooden'), 3);
    anvilOrDeploy(Item.of(l('card_fluid'), 16), Ingredient.of('pneumaticcraft:module_expansion_card'), Ingredient.of('minecraft:bucket'), 3);
    anvilOrDeploy(Item.of(l('card_energy'), 16), Ingredient.of('pneumaticcraft:module_expansion_card'), Ingredient.of('rftoolspower:power_core1'), 3);
    anvilOrDeploy(Item.of(l('card_redstone'), 16), Ingredient.of('pneumaticcraft:module_expansion_card'), Ingredient.of('minecraft:redstone'), 3);
    anvilOrDeploy(Item.of(l('laser_wrench')), Ingredient.of('rftoolsbase:smartwrench'), Ingredient.of(l('filter_basic')), 5);

    event.shaped(l('card_holder'), ['P P', 'PCP', 'PAP'], {
      P: items.plastic,
      C: Item.of('minecraft:bundle').strongNBT(),
      A: [l('card_item'), l('card_fluid'), l('card_energy'), l('card_redstone')],
    });

    event.shaped(l('card_cloner'), ['P P', 'PCP', 'PAP'], {
      P: items.plastic,
      C: 'create:empty_schematic',
      A: [l('card_item'), l('card_fluid'), l('card_energy'), l('card_redstone')],
    });

    event.shaped(l('laser_node'), [' P ', 'PRP', ' P '], {
      P: items.plastic,
      R: 'minecraft:redstone_block',
    });

    event.shaped(l('laser_connector'), [' R ', 'PNP', 'PPP'], {
      R: 'minecraft:redstone_torch',
      P: items.plastic,
      N: l('laser_node'),
    });

    anvilOrDeploy(Item.of(l('laser_connector_advanced')), Ingredient.of(l('laser_connector')), Ingredient.of('#forge:storage_blocks/gold'), 6);
  };

  const mekanism = () => {
    [Item.of('mekanism:cardboard_box')].forEach(x => event.remove({output: x}));
  };

  const miningGadgets = () => {
    const mG = item => `mininggadgets:${item}`;

    // Mining Gadgets
    event.remove({mod: 'mininggadgets'});
    event.shaped(mG('mininggadget_simple'), [' PP', 'LCB', ' PP'], {
      L: 'laserio:laser_connector',
      P: items.plastic,
      B: 'kubejs:rf_core',
      C: items.circuitish,
    });

    event.smithing(mG('mininggadget_fancy'), 'minecraft:netherite_upgrade_smithing_template', mG('mininggadget_simple'), '#forge:ingots/netherite');
    event.smithing(mG('mininggadget'), 'enlightened_end:adamantite_smithing_template', mG('mininggadget_fancy'), 'enlightened_end:adamantite_block');

    // Base Upgrade
    event.shaped(Item.of(mG('upgrade_empty'), 2), ['NIN', 'IPI', 'NIN'], {
      P: 'pneumaticcraft:plastic',
      N: '#forge:nuggets/aluminum',
      I: '#forge:ingots/aluminum',
    });

    // Modification Table
    event.smithing(mG('modificationtable'), 'immersiveengineering:circuit_table', items.plastic, items.screen);

    /*********************************************
     *              BEGIN ENCHANTS               *
     ********************************************/
    // Fortune Upgrades
    [1, 2, 3].forEach(tier => {
      const left = tier === 1 ? mG('upgrade_empty') : mG(`upgrade_fortune_${tier - 1}`);
      const upgradeBook = Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', tier === 1 ? 1 : tier - 1);
      const freshBook = Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', tier);

      event.smithing(mG(`upgrade_fortune_${tier}`), items.template, mG('upgrade_empty'), freshBook.weakNBT());
      if (tier > 1) {
        event.smithing(mG(`upgrade_fortune_${tier}`), items.template, left, upgradeBook.weakNBT());
      }
    });

    // Silk Touch Upgrade
    event.smithing(
      mG('upgrade_silk'),
      items.template,
      mG('upgrade_empty'),
      Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1).weakNBT()
    );

    // Efficiency Upgrade
    [1, 2, 3, 4, 5].forEach(tier => {
      const left = tier === 1 ? mG('upgrade_empty') : mG(`upgrade_efficiency_${tier - 1}`);
      const upgradeBook = Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', tier === 1 ? 1 : tier - 1);
      const freshBook = Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', tier);

      event.smithing(mG(`upgrade_efficiency_${tier}`), items.template, mG('upgrade_empty'), freshBook.weakNBT());
      if (tier > 1) {
        event.smithing(mG(`upgrade_efficiency_${tier}`), items.template, left, upgradeBook.weakNBT());
      }
    });

    /*********************************************
     *               END ENCHANTS                *
     ********************************************/

    // Void Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_empty')},
      right: {item: 'trashcans:item_trash_can'},
      result: {item: mG('upgrade_void_junk')},
      cost: 3,
    });

    // Magnet Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_empty')},
      right: {item: 'pneumaticcraft:magnet_upgrade'},
      result: {item: mG('upgrade_magnet')},
      cost: 8,
    });

    // 3x3 Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_empty')},
      right: {item: 'pneumaticcraft:drill_bit_compressed_iron'},
      result: {item: mG('upgrade_size_1')},
      cost: 9,
    });

    // 5x5 Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_size_1')},
      right: {item: 'pneumaticcraft:drill_bit_diamond'},
      result: {item: mG('upgrade_size_2')},
      cost: 18,
    });

    // 7x7 Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_size_2')},
      right: {item: 'pneumaticcraft:drill_bit_netherite'},
      result: {item: mG('upgrade_size_3')},
      cost: 27,
    });

    // Light Placer Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_empty')},
      right: {item: 'immersiveengineering:floodlight'},
      result: {item: mG('upgrade_light_placer')},
      cost: 4,
    });

    // Freezing Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: mG('upgrade_empty')},
      right: {item: 'endermanoverhaul:icy_pearl'},
      result: {item: mG('upgrade_freezing')},
      cost: 12,
    });

    // Range
    [1, 2, 3].forEach(tier => {
      const left = tier === 1 ? mG('upgrade_empty') : mG(`upgrade_range_${tier - 1}`);
      event.custom({
        type: 'vtweaks:anvil',
        left: {item: left},
        right: {item: 'create:extendo_grip'},
        result: {item: mG(`upgrade_range_${tier}`)},
        cost: Math.pow(2, tier + 1),
      });
    });

    // Battery
    [1, 2, 3].forEach(tier => {
      const left = tier === 1 ? mG('upgrade_empty') : mG(`upgrade_battery_${tier - 1}`);
      const right = Ingredient.of('kubejs:rf_core');
      event.custom({
        type: 'vtweaks:anvil',
        left: {item: left},
        right: right.toJson(),
        result: {item: mG(`upgrade_battery_${tier}`)},
        cost: 10 * tier,
      });
    });
  };

  const pnc = () => {
    event.remove({type: 'pneumaticcraft:explosion_crafting'});
    event.recipes.create.compacting('pneumaticcraft:ingot_iron_compressed', ['#forge:ingots/iron', 'ae2:tiny_tnt']).superheated();
    event.recipes.create.compacting('pneumaticcraft:compressed_iron_block', ['#forge:storage_blocks/iron', 'minecraft:tnt']).superheated();
  };

  const prettyPipes = () => {
    event.remove({output: 'prettypipes:pipe'});
    event.shaped(Item.of('prettypipes:pipe', 16), ['IGI'], {I: '#forge:ingots/compressed_iron', G: '#forge:glass/colorless'});

    event.remove({output: 'prettypipes:pressurizer'});
    event.smithing('prettypipes:pressurizer', 'pneumaticcraft:pressure_gauge', 'pneumaticcraft:pressure_chamber_valve', 'prettypipes:pipe');

    event.remove({output: 'prettypipes:item_terminal'});
    event.shaped('prettypipes:item_terminal', ['DSC', 'EHR', 'CSD'], {
      C: 'pneumaticcraft:compressed_iron_block',
      D: 'minecraft:diamond',
      E: 'prettypipes:high_extraction_module',
      H: '#forge:chests/wooden',
      R: 'prettypipes:high_retrieval_module',
      S: items.screen,
    });

    event.remove({output: 'prettypipes:crafting_terminal'});
    event.smithing('prettypipes:crafting_terminal', 'minecraft:crafting_table', 'prettypipes:item_terminal', 'minecraft:crafting_table');
  };

  const rfTools = () => {
    event.remove({mod: 'rftoolsbase'});
    event.remove({mod: 'xnet'});

    event.shaped(Item.of('xnet:netcable_routing', 8), ['CCC', 'CSC', 'CCC'], {
      C: 'mekanism:basic_logistical_transporter',
      S: 'immersiveengineering:sorter',
    });

    event.custom({
      type: 'vtweaks:fluid_conversion',
      input: Ingredient.of(['xnet:netcable_red', 'xnet:netcable_green', 'xnet:netcable_blue', 'xnet:netcable_yellow']).toJson(),
      output: Item.of('xnet:netcable_routing').toJson(),
      fluid: 'minecraft:water',
    });

    event.shapeless('xnet:connector_routing', ['xnet:netcable_routing', 'mekanism:basic_control_circuit']);
    event.shapeless('xnet:advanced_connector_routing', ['xnet:netcable_routing', 'mekanism:elite_control_circuit']);

    ['red', 'green', 'blue', 'yellow'].forEach(color => {
      // Base Cable
      event.shaped(Item.of(`xnet:netcable_${color}`, 8), ['CCC', 'CDC', 'CCC'], {
        C: '#xnet:cables',
        D: `#forge:dyes/${color}`,
      });
      event.shapeless(`xnet:netcable_${color}`, ['#xnet:cables', `#forge:dyes/${color}`]);

      // Connectors
      event.shapeless(`xnet:connector_${color}`, [`xnet:netcable_${color}`, 'mekanism:basic_control_circuit']);
      event.shapeless(`xnet:advanced_connector_${color}`, [`xnet:netcable_${color}`, 'mekanism:elite_control_circuit']);
    });

    event.shapeless('xnet:redstone_proxy', ['entangled:block', 'minecraft:redstone_torch']);
    event.shapeless('xnet:redstone_proxy_upd', ['entangled:block', 'minecraft:redstone_torch', 'minecraft:observer']);

    event.shaped(Item.of('xnet:facade', 16), ['PPP', 'PCP', 'PPP'], {
      P: 'minecraft:paper',
      C: '#xnet:cables',
    });

    event.shaped('xnet:controller', ['SSS', 'HPH', 'SSS'], {
      H: 'mekanism:hdpe_sheet',
      P: 'mekanism:ultimate_control_circuit',
      S: '#forge:ingots/steel',
    });

    event.shaped('xnet:router', ['SSS', 'RPR', 'SSS'], {
      R: 'xnet:netcable_routing',
      P: 'mekanism:basic_control_circuit',
      S: '#forge:ingots/steel',
    });

    event.smithing('xnet:wireless_router', 'mekanism:ultimate_control_circuit', 'xnet:router', 'mekanism:ultimate_control_circuit');
    event.shaped('xnet:antenna', ['RIR', 'RIR', ' I '], {R: '#forge:rods/steel', I: '#forge:ingots/steel'});
    event.shaped('xnet:antenna_base', [' R ', 'IBI'], {R: '#forge:rods/steel', B: '#forge:storage_blocks/steel', I: '#forge:ingots/steel'});
    event.shaped('xnet:antenna_dish', ['PPP', 'PPP', ' R '], {R: '#forge:rods/steel', P: '#forge:plates/steel'});
  };

  [
    ae2,
    buildingGadgets,
    chunkloaders,
    create,
    dimStorage,
    entangled,
    immersiveEngineering,
    laserIO,
    mekanism,
    miningGadgets,
    pnc,
    prettyPipes,
    rfTools,
  ].forEach(Module => Module());
});
