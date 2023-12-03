ItemEvents.tooltip(event => {
  event.addAdvanced('enderio:dark_steel_ingot', (stack, advanced, tooltips) => {
    if (event.isShift()) {
      tooltips.add(Text.gray(Text.translate('tooltip.kubejs.dark_steel_ingot')));
    } else {
      tooltips.add(Text.darkGray(Text.translate('tooltip.kubejs.shift')));
    }
  });

  event.addAdvanced('mininggadgets:upgrade_empty', (stack, advanced, tooltips) => {
    tooltips.removeIf(x => Text.string(x).getString().includes('tooltop.mininggadgets.empty'));
  });

  event.addAdvanced(Ingredient.all, (stack, advanced, tooltips) => {
    if (event.isShift()) {
      const ModName = Platform.getMods()[stack.getMod()].getName();
      tooltips.add(Text.blue(Text.translate('tooltip.kubejs.modid', ModName)));
    }
  });

  event.addAdvanced(
    [
      Item.of('prettypipes:blank_module'),
      Item.of('prettypipes:low_extraction_module'),
      Item.of('prettypipes:medium_extraction_module'),
      Item.of('prettypipes:high_extraction_module'),
      Item.of('prettypipes:low_crafting_module'),
      Item.of('prettypipes:medium_crafting_module'),
      Item.of('prettypipes:high_crafting_module'),
      Item.of('prettypipes:low_filter_module'),
      Item.of('prettypipes:medium_filter_module'),
      Item.of('prettypipes:high_filter_module'),
      Item.of('prettypipes:low_speed_module'),
      Item.of('prettypipes:medium_speed_module'),
      Item.of('prettypipes:high_speed_module'),
      Item.of('prettypipes:low_low_priority_module'),
      Item.of('prettypipes:medium_low_priority_module'),
      Item.of('prettypipes:high_low_priority_module'),
      Item.of('prettypipes:low_high_priority_module'),
      Item.of('prettypipes:medium_high_priority_module'),
      Item.of('prettypipes:high_high_priority_module'),
      Item.of('prettypipes:low_retrieval_module'),
      Item.of('prettypipes:medium_retrieval_module'),
      Item.of('prettypipes:high_retrieval_module'),
      Item.of('prettypipes:stack_size_module'),
      Item.of('prettypipes:redstone_module'),
    ],
    (stack, advanced, tooltips) => {
      const idx = 1;
      const tmp = tooltips.get(idx);
      tooltips.set(idx, Text.gold(Text.translate('tooltip.kubejs.pretty_pipes_module')));
      tooltips.add(tmp);
    }
  );

  event.add(
    [
      Item.of('modularrouters:activator_module'),
      Item.of('modularrouters:breaker_module'),
      Item.of('modularrouters:creative_module'),
      Item.of('modularrouters:detector_module'),
      Item.of('modularrouters:distributor_module'),
      Item.of('modularrouters:dropper_module'),
      Item.of('modularrouters:energy_distributor_module'),
      Item.of('modularrouters:energy_output_module'),
      Item.of('modularrouters:extruder_module_1'),
      Item.of('modularrouters:extruder_module_2'),
      Item.of('modularrouters:flinger_module'),
      Item.of('modularrouters:fluid_module_2'),
      Item.of('modularrouters:fluid_module'),
      Item.of('modularrouters:placer_module'),
      Item.of('modularrouters:player_module'),
      Item.of('modularrouters:puller_module_1'),
      Item.of('modularrouters:puller_module_2'),
      Item.of('modularrouters:sender_module_1'),
      Item.of('modularrouters:sender_module_2'),
      Item.of('modularrouters:sender_module_3'),
      Item.of('modularrouters:vacuum_module'),
      Item.of('modularrouters:void_module'),
    ],
    Text.gold(Text.translate('tooltip.kubejs.modular_routers_module'))
  );

  event.add(
    [
      'kubejs:unknown_holy_item',
      'kubejs:unknown_bloody_item',
      'kubejs:unknown_dwarven_item',
      'kubejs:unknown_kinetic_item',
      'kubejs:unknown_pneumatic_item',
      'kubejs:unknown_electric_item',
      'kubejs:unknown_ender_item',
      'kubejs:unknown_energistic_item',
    ],
    Text.gray(Text.translate('tooltip.kubejs.artifact'))
  );

  event.add('minecraft:enchanting_table', Text.red(Text.translate('tooltip.kubejs.enchanting_disabled')));
});
