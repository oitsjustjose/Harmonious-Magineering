const cacheRefreshFrequencySeconds = 10;
let cachedServerPlayer = null;
let lastCacheRefresh = 0;

ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (stack, advanced, tooltips) => {
    // If the mod isn't accessible to the user, add a tooltip to indicate that
    for (const tag of Object.keys(global.Stages)) {
      // Fetch the server player only when needed
      if (cachedServerPlayer === null || Date.now() - lastCacheRefresh > cacheRefreshFrequencySeconds * 1000) {
        lastCacheRefresh = Date.now();
        Utils.server.getPlayers().forEach(player => {
          if (player.getUuid() === Client.player.getUuid()) {
            cachedServerPlayer = player;
            return;
          }
        });
      }

      if (cachedServerPlayer === null) {
        console.error('SERVER PLAYER IS STILL NULL :(');
        return;
      }

      if (!cachedServerPlayer.getTags()) continue;
      if (cachedServerPlayer.getTags().contains(tag)) continue;

      let config = global.Stages[tag];
      // Check if the item comes from a mod the player can't access
      if (config.mods.includes(stack.getMod())) {
        // Check if the item is an exception for that stage - if it's an exception, we don't do anything
        if (config.exceptions !== null) {
          let exceptions = Ingredient.of(config.exceptions);
          if (exceptions.asIngredient().getItemIds().contains(stack.item.id)) {
            continue;
          }
        }

        // Not an exception - add text and be done with the loops [brother]
        tooltips.add(Text.darkRed(Text.translate('tooltip.kubejs.gated')).underlined());
        break;
      }
    }

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
