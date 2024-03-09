// These stages are copied DIRECTLY from Globals -- if you don't copy these,
//  you'll run into issues where the Ingredients defined as an exception
//  won't be consistent/correct.
const stages = JsonIO.read('kubejs/globals/stages.json');

const cacheRefreshFrequencySeconds = 5;
let cachedServerPlayerRef = null;
let lastCacheRefresh = 0;
let lastHovNameRefresh = 0;

/**
 * Adds a "You don't know this item" tooltip & obfuscates the tooltip for items you don't have the corresponding stage unlocked for
 * @param {Internal.ItemStack} stack
 * @param {Internal.List<any>} tooltips
 */
const modifyStackForStageProgress = (stack, tooltips) => {
  // Fetch the server player only when needed
  if (cachedServerPlayerRef === null || Date.now() - lastCacheRefresh > cacheRefreshFrequencySeconds * 1000) {
    lastCacheRefresh = Date.now();
    for (const player of Utils.server.getPlayers()) {
      if (player.getUuid() === Client.player.getUuid()) {
        cachedServerPlayerRef = player;
        break;
      }
    }
  }

  if (cachedServerPlayerRef !== null) {
    // Determine if the current stack is an exception in ANY config
    let isItemException = false;
    for (const tag of Object.keys(stages)) {
      let config = stages[tag];
      if (Ingredient.of(config.exceptions).test(stack.item.id)) {
        isItemException = true;
        break;
      }
    }

    if (!isItemException) {
      for (const tag of Object.keys(stages)) {
        let config = stages[tag];
        if (config.mods.contains(stack.getMod())) {
          if (!cachedServerPlayerRef.getTags() || !cachedServerPlayerRef.getTags().contains(tag)) {
            // We don't want to give the player any additional info on this item...
            for (let i = 1; i < tooltips.length; i++) {
              tooltips.remove(i);
            }
            // Add the tooltip explaining you have no idea what this is
            tooltips.add(Text.darkRed(Text.translate('tooltip.kubejs.gated')).underlined());
            // RETURN here so that we don't add the mod to the tooltip like below:
            return;
          }
        }
      }
    }
  }
};

ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (stack, _, tooltips) => {
    if (Utils.server !== null && !Utils.server.isDedicated()) {
      modifyStackForStageProgress(stack, tooltips);
    }

    if (event.isShift()) {
      /* Aether loot hint */
      if (stack.rarity.name() === 'aether.loot') {
        tooltips.add(Text.translate('tooltip.kubejs.aether_loot_hint'));
      }

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
    Text.gray(Text.translate('tooltip.kubejs.gated'))
  );

  event.add('waystones:sharestone', Text.gold(Text.translate('tooltip.kubejs.can_be_dyed')));
});
