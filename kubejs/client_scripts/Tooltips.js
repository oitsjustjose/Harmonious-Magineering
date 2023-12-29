ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (stack, advanced, tooltips) => {
    if (event.isShift()) {
      let modName = Platform.getMods()[stack.getMod()].getName();
      tooltips.add(Text.blue(Text.translate('tooltip.kubejs.modid', modName)));
    }
  });

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

  event.add('waystones:sharestone', Text.gold(Text.translate('tooltip.kubejs.can_be_dyed')));
});
