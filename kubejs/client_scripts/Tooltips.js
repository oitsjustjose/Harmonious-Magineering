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
    // tooltips.forEach(x => {
    //   console.log(Text.string(x).getContents().resolve(null, null, 0).get);
    // });
  });

  event.addAdvanced(Ingredient.all, (stack, advanced, tooltips) => {
    if (event.isShift()) {
      const ModName = Platform.getMods()[stack.getMod()].getName();
      tooltips.add(Text.blue(Text.translate('tooltip.kubejs.modid', ModName)));
    }
  });

  event.add('minecraft:enchanting_table', Text.red(Text.translate('tooltip.kubejs.enchanting_disabled')));
});
