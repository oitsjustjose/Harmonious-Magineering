ServerEvents.recipes(event => {
  const Items = {
    screen: Item.of('rftoolsbase:information_screen'),
    powercore: Item.of('rftoolspower:power_core1'),
    powercore2: Item.of('rftoolspower:power_core2'),
    powercore3: Item.of('rftoolspower:power_core3'),
    plastic: '#pneumaticcraft:plastic_sheets',
    circuitish: [Item.of('mekanism:basic_control_circuit'), Item.of('pneumaticcraft:printed_circuit_board')],
    template: Item.of('minecraft:paper'),
  };

  const AE2 = () => {
    event.remove({id: 'ae2:blasting/silicon_from_certus_quartz_dust'});
    event.remove({id: 'ae2:smelting/silicon_from_certus_quartz_dust'});
  };

  const BuildingGadgets = () => {
    const BG = item => `buildinggadgets2:${item}`;
    event.remove({mod: 'buildinggadgets2'});

    event.shaped(BG('template_manager'), ['PPP', 'PTP', 'PEP'], {
      P: Items.plastic,
      T: 'create:schematic_table',
      E: 'create:empty_schematic',
    });

    event.shaped(BG('gadget_building'), ['PSP', 'PBP', 'PCP'], {
      P: Items.plastic,
      S: Items.screen,
      B: 'create:extendo_grip',
      C: Items.powercore,
    });

    event.shaped(BG('gadget_exchanging'), ['PPP', ' SP', ' CP'], {
      P: Items.plastic,
      S: Items.screen,
      C: Items.powercore,
    });

    event.shaped(BG('gadget_copy_paste'), ['PSP', 'ECE', 'PGP'], {
      P: Items.plastic,
      S: Items.screen,
      C: Items.powercore2,
      E: 'create:empty_schematic',
      G: 'create:extendo_grip',
    });

    event.shaped(BG('gadget_cut_paste'), ['DSD', 'ECE', 'DGD'], {
      D: '#forge:ingots/dark_steel',
      S: Items.screen,
      C: Items.powercore3,
      E: 'minecraft:shears',
      G: 'create:extendo_grip',
    });

    event.shaped(BG('gadget_destruction'), ['DSD', 'DTD', 'DCD'], {
      D: '#forge:ingots/dark_steel',
      S: Items.screen,
      C: Items.powercore3,
      T: 'minecraft:tnt',
    });

    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}'), [
      'minecraft:book',
      'create:empty_schematic',
    ]);
  };

  const Chunkloaders = () => {
    event.remove({output: 'chunkloaders:basic_chunk_loader'});
    event.shaped('chunkloaders:basic_chunk_loader', ['ABA', 'BCB', 'ABA'], {
      A: ['#forge:ingots/steel', '#forge:ingots/dark_steel'],
      B: '#forge:obsidian',
      C: '#forge:ender_pearls',
    });
  };

  const Create = () => {
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
      fluid: {amount: 20, tag: 'forge:molten_iron'},
      output: {item: 'create:andesite_alloy', count: 1},
    });
  };

  const DimStorage = () => {
    event.remove({mod: 'dimstorage'});

    event.shaped('dimstorage:dimensional_chest', ['SSS', 'HCH', 'SSS'], {
      S: '#forge:ingots/steel',
      H: 'create_enchantment_industry:hyper_experience_bottle',
      C: 'minecraft:ender_chest',
    });

    event.shaped('dimstorage:dimensional_tank', ['SSS', 'HTH', 'SSS'], {
      S: '#forge:ingots/steel',
      H: 'create_enchantment_industry:hyper_experience_bottle',
      T: ['mekanism:basic_fluid_tank', 'create:fluid_tank', 'enderio:pressurized_fluid_tank'],
    });

    event.shaped('dimstorage:dimensional_tablet', ['SSS', 'HWH', 'SSS'], {
      S: '#forge:plates/steel',
      H: 'create_enchantment_industry:hyper_experience_bottle',
      W: 'rftoolsbase:information_screen',
    });
  };

  const EnderIo = () => {
    // Remove the primitive alloy smelter
    event.remove({output: 'enderio:primitive_alloy_smelter'});

    // Re-work Void Chassis behind HDPE
    event.remove({output: 'enderio:void_chassis'});
    event.shaped('enderio:void_chassis', ['GHG', 'HCH', 'GHG'], {
      H: 'mekanism:hdpe_sheet',
      G: '#forge:dusts/grains_of_infinity',
      C: 'mekanism:steel_casing',
    });

    event.custom({
      type: 'enderio:alloy_smelting',
      energy: 6400,
      experience: 0.0,
      inputs: [
        {
          ingredient: {item: 'mekanism:hdpe_sheet'},
          count: 2,
        },
        {
          ingredient: {tag: 'forge:dusts/grains_of_infinity'},
          count: 2,
        },
        {
          ingredient: {item: 'mekanism:steel_casing'},
          count: 1,
        },
      ],
      result: {
        item: 'enderio:void_chassis',
        count: 2,
      },
    });
  };

  const Entangled = () => {
    event.remove({output: 'entangled:block'});
    event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
      A: 'endermanoverhaul:soul_pearl',
      B: '#forge:obsidian',
      C: 'dimstorage:dimensional_chest',
    });
  };

  const ImmersiveEngineering = () => {
    const mod = id => `immersiveengineering:${id}`;

    const Steel = () => {
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

    Steel();
  };

  const LaserIO = () => {
    const L = item => `laserio:${item}`;
    event.remove({mod: 'laserio'});

    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"laserio:laseriobook"}'), ['minecraft:book', L('laser_connector')]);

    event.shaped(L('overclocker_card'), [' P ', 'RCR', 'PSP'], {
      P: '#forge:plates/gold',
      R: 'minecraft:redstone',
      S: 'minecraft:sugar',
      C: Items.circuitish,
    });

    event.shaped(L('overclocker_node'), [' P ', 'RCR', 'PSP'], {
      P: 'minecraft:diamond',
      R: 'minecraft:redstone',
      S: 'minecraft:sugar',
      C: Items.circuitish,
    });

    event.shapeless(L('filter_basic'), [Items.plastic, 'minecraft:paper']);
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: L('filter_basic')},
      right: Items.circuitish.map(x => x.toJson()),
      result: {item: L('filter_count')},
      cost: 1,
    });

    event.custom({
      type: 'vtweaks:anvil',
      left: {item: L('filter_basic')},
      right: {item: 'minecraft:name_tag'},
      result: {item: L('filter_tag')},
      cost: 4,
    });

    event.custom({
      type: 'vtweaks:anvil',
      left: {item: L('filter_basic')},
      right: {tag: 'minecraft:anvil'},
      result: {item: L('filter_mod')},
      cost: 4,
    });
  };

  const Mekanism = () => {
    [Item.of('mekanism:cardboard_box')].forEach(x => event.remove({output: x}));
  };

  const MiningGadgets = () => {
    const MG = item => `mininggadgets:${item}`;

    // Mining Gadgets
    event.remove({mod: 'mininggadgets'});
    event.shaped(MG('mininggadget_simple'), [' PP', 'LCB', ' PP'], {
      L: 'laserio:laser_connector',
      P: Items.plastic,
      B: Items.powercore,
      C: Items.circuitish,
    });

    event.smithing(
      MG('mininggadget_fancy'),
      'minecraft:netherite_upgrade_smithing_template',
      MG('mininggadget_simple'),
      'cagedmobs:star_infused_netherite_ingot'
    );
    event.smithing(MG('mininggadget'), 'enlightened_end:adamantite_smithing_template', MG('mininggadget_fancy'), 'enlightened_end:adamantite_block');

    // Base Upgrade
    event.shaped(Item.of(MG('upgrade_empty'), 2), ['NIN', 'IPI', 'NIN'], {
      P: 'pneumaticcraft:plastic',
      N: '#forge:nuggets/aluminum',
      I: '#forge:ingots/aluminum',
    });

    // Modification Table
    event.smithing(MG('modificationtable'), 'immersiveengineering:circuit_table', Items.plastic, Items.screen);

    /*********************************************
     *              BEGIN ENCHANTS               *
     ********************************************/
    // Fortune Upgrades
    [1, 2, 3].forEach(tier => {
      const Left = tier === 1 ? MG('upgrade_empty') : MG(`upgrade_fortune_${tier - 1}`);
      const UpgradeBook = Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', tier === 1 ? 1 : tier - 1);
      const FreshBook = Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', tier);

      event.smithing(MG(`upgrade_fortune_${tier}`), Items.template, MG('upgrade_empty'), FreshBook.weakNBT());
      if (tier > 1) {
        event.smithing(MG(`upgrade_fortune_${tier}`), Items.template, Left, UpgradeBook.weakNBT());
      }
    });

    // Silk Touch Upgrade
    event.smithing(
      MG('upgrade_silk'),
      Items.template,
      MG('upgrade_empty'),
      Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1).weakNBT()
    );

    // Efficiency Upgrade
    [1, 2, 3, 4, 5].forEach(tier => {
      const Left = tier === 1 ? MG('upgrade_empty') : MG(`upgrade_efficiency_${tier - 1}`);
      const UpgradeBook = Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', tier === 1 ? 1 : tier - 1);
      const FreshBook = Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', tier);

      event.smithing(MG(`upgrade_efficiency_${tier}`), Items.template, MG('upgrade_empty'), FreshBook.weakNBT());
      if (tier > 1) {
        event.smithing(MG(`upgrade_efficiency_${tier}`), Items.template, Left, UpgradeBook.weakNBT());
      }
    });

    /*********************************************
     *               END ENCHANTS                *
     ********************************************/

    // Void Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_empty')},
      right: {item: 'trashcans:item_trash_can'},
      result: {item: MG('upgrade_void_junk')},
      cost: 3,
    });

    // Magnet Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_empty')},
      right: {item: 'pneumaticcraft:magnet_upgrade'},
      result: {item: MG('upgrade_magnet')},
      cost: 8,
    });

    // 3x3 Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_empty')},
      right: {item: 'pneumaticcraft:drill_bit_compressed_iron'},
      result: {item: MG('upgrade_size_1')},
      cost: 9,
    });

    // 5x5 Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_size_1')},
      right: {item: 'pneumaticcraft:drill_bit_diamond'},
      result: {item: MG('upgrade_size_2')},
      cost: 18,
    });

    // 7x7 Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_size_2')},
      right: {item: 'pneumaticcraft:drill_bit_netherite'},
      result: {item: MG('upgrade_size_3')},
      cost: 27,
    });

    // Light Placer Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_empty')},
      right: {item: 'immersiveengineering:floodlight'},
      result: {item: MG('upgrade_light_placer')},
      cost: 4,
    });

    // Freezing Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_empty')},
      right: {item: 'endermanoverhaul:icy_pearl'},
      result: {item: MG('upgrade_freezing')},
      cost: 12,
    });

    // Range
    [1, 2, 3].forEach(tier => {
      const Left = tier === 1 ? MG('upgrade_empty') : MG(`upgrade_range_${tier - 1}`);
      event.custom({
        type: 'vtweaks:anvil',
        left: {item: Left},
        right: {item: 'create:extendo_grip'},
        result: {item: MG(`upgrade_range_${tier}`)},
        cost: Math.pow(2, tier + 1),
      });
    });

    // Battery
    [1, 2, 3].forEach(tier => {
      const Left = tier === 1 ? MG('upgrade_empty') : MG(`upgrade_battery_${tier - 1}`);
      const Right = Items[`powercore${tier === 1 ? '' : tier}`];
      event.custom({
        type: 'vtweaks:anvil',
        left: {item: Left},
        right: Right.toJson(),
        result: {item: MG(`upgrade_battery_${tier}`)},
        cost: 10 * tier,
      });
    });
  };

  const RFTools = () => {
    event.remove({output: 'rftoolsbase:dimensionalshard'});
  };

  [
    AE2,
    BuildingGadgets,
    Chunkloaders,
    Create,
    DimStorage,
    EnderIo,
    Entangled,
    ImmersiveEngineering,
    LaserIO,
    Mekanism,
    MiningGadgets,
    RFTools,
  ].forEach(Module => Module());
});
