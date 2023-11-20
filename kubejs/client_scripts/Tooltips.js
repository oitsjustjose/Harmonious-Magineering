ItemEvents.tooltip(event => {
  event.addAdvanced('enderio:dark_steel_ingot', (stack, advanced, tooltips) => {
    if (event.isShift()) {
      tooltips.add(Text.gray('Can be found in various chests while out exploring!'));
    } else {
      tooltips.add(Text.darkGray('[Press Shift]'));
    }
  });
});
