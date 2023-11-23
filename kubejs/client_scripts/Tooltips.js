ItemEvents.tooltip(event => {
  event.addAdvanced('enderio:dark_steel_ingot', (stack, advanced, tooltips) => {
    if (event.isShift()) {
      tooltips.add(Text.gray(Text.translate('tooltip.kubejs.dark_steel_ingot')));
    } else {
      tooltips.add(Text.darkGray(Text.translate('tooltip.kubejs.shift')));
    }
  });

  event.addAdvanced(Ingredient.all, (stack, advanced, tooltips) => {
    if (event.isShift()) {
      const ModName = Platform.getMods()[stack.getMod()].getName();
      tooltips.add(Text.blue(Text.translate('tooltip.kubejs.modid', ModName)));
    }
  });

  event.add('minecraft:enchanting_table', Text.red(Text.translate('tooltip.kubejs.enchanting_disabled')));
});
