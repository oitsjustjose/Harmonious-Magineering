ServerEvents.recipes(event => {
  const Items = {
    screen: Item.of('rftoolsbase:information_screen'),
    powercore: Item.of('rftoolspower:power_core1'),
    powercore2: Item.of('rftoolspower:power_core2'),
    powercore3: Item.of('rftoolspower:power_core3'),
    plastic: '#pneumaticcraft:plastic_sheets',
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
  };

  const MiningGadgets = () => {
    const MG = item => `mininggadgets:${item}`;

    // Mining Gadgets
    event.remove({mod: 'mininggadgets'});
    event.shaped(MG('mininggadget_simple'), [' PP', 'LCB', ' PP'], {
      L: 'laserio:laser_connector',
      P: Items.plastic,
      B: Items.powercore,
      C: ['mekanism:advanced_control_circuit', 'pneumaticcraft:printed_circuit_board'],
    });

    event.smithing(
      MG('mininggadget_fancy'),
      'minecraft:netherite_upgrade_smithing_template',
      MG('mininggadget_simple'),
      'cagedmobs:star_infused_netherite_ingot'
    );
    event.smithing(MG('mininggadget'), 'enlightened_end:adamantite_smithing_template', MG('mininggadget_fancy'), 'enlightened_end:adamantite_block');

    // Base Upgrade
    event.shaped(MG('upgrade_empty'), ['PPP', 'PCP', 'PPP'], {
      P: Items.plastic,
      C: ['mekanism:advanced_control_circuit', 'pneumaticcraft:printed_circuit_board'],
    });

    // Modification Table
    event.smithing(MG('modificationtable'), 'immersiveengineering:circuit_table', Items.plastic, Items.screen);

    /*********************************************
     *              BEGIN ENCHANTS               *
     ********************************************/
    // Fortune Upgrades
    [1, 2, 3].forEach(tier => {
      const Left = tier === 1 ? MG('upgrade_empty') : MG(`upgrade_fortune_${tier - 1}`);
      event.custom({
        type: 'vtweaks:anvil',
        left: {item: Left},
        right: Item.of('minecraft:enchanted_book')
          .enchant('minecraft:fortune', tier === 1 ? 1 : tier - 1)
          .toJson(),
        result: {item: MG(`upgrade_fortune_${tier}`)},
        cost: 5 * tier,
        strict: true,
      });

      event.custom({
        type: 'vtweaks:anvil',
        left: {item: MG('upgrade_empty')},
        right: Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', tier).toJson(),
        result: {item: MG(`upgrade_fortune_${tier}`)},
        cost: 5 * tier,
        strict: true,
      });
    });

    // Silktouch Upgrade
    event.custom({
      type: 'vtweaks:anvil',
      left: {item: MG('upgrade_empty')},
      right: Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1).toJson(),
      result: {item: MG('upgrade_silk')},
      cost: 20,
      strict: true,
    });

    // Efficiency Upgrade
    [1, 2, 3, 4, 5].forEach(tier => {
      const Left = tier === 1 ? MG('upgrade_empty') : MG(`upgrade_efficiency_${tier - 1}`);
      event.custom({
        type: 'vtweaks:anvil',
        left: {item: Left},
        right: Item.of('minecraft:enchanted_book')
          .enchant('minecraft:efficiency', tier === 1 ? 1 : tier - 1)
          .toJson(),
        result: {item: MG(`upgrade_efficiency_${tier}`)},
        cost: 4 * tier,
        strict: true,
      });

      event.custom({
        type: 'vtweaks:anvil',
        left: {item: MG('upgrade_empty')},
        right: Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', tier).toJson(),
        result: {item: MG(`upgrade_efficiency_${tier}`)},
        cost: 4 * tier,
        strict: true,
      });
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

  const LaserIO = () => {};

  BuildingGadgets();
  MiningGadgets();
  LaserIO();
});
