ItemEvents.tooltip(event => {
  event.addAdvanced('enderio:dark_steel_ingot', (stack, advanced, tooltips) => {
    if (event.isShift()) {
      tooltips.add(Text.gray('Can be found in various chests while out exploring!'));
    } else {
      tooltips.add(Text.darkGray('[Press Shift]'));
    }
  });

  event.addAdvanced(Ingredient.all, (stack, advanced, tooltips) => {
    if (stack.getMod() === 'minecraft') return;
    if (event.isShift()) {
      let Modid = stack
        .getMod()
        .split('_')
        .map(x => x.substring(0, 1).toUpperCase() + x.substring(1))
        .join(' ');

      tooltips.add(Text.blue(`Added by ${Modid}`));
    }
  });
});
