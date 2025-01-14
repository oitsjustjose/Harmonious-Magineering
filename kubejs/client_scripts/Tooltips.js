// priority: 1
const stages = JsonIO.read('kubejs/globals/stages.json');

/**
 * Gets the local (or remote) server player -- this is required to properly read
 *  data values that are stored on the server only, like Tags, NBT, etc..
 * @returns The server player which matches UUIDs with the player, or null if none is found
 */
const getServerPlayer = () => {
  const players = Utils.server.getPlayers().filter(x => x.getUuid() === Client.player.getUuid());
  return players.length ? players[0] : null;
};

/**
 * Adds a "You don't know this item" tooltip & obfuscates the tooltip for items you don't have the corresponding stage unlocked for
 * @param {Internal.ItemStack} stack
 * @param {Internal.List<any>} tooltips
 */
const modifyStackForStageProgress = (stack, tooltips) => {
  // Determine if the current stack is an exception in ANY config
  for (const tag of Object.keys(stages)) {
    let config = stages[tag];
    if (Ingredient.of(config.exceptions).test(stack.item.id)) return;
  }

  const player = getServerPlayer();
  if (!player) return;

  for (const tag of Object.keys(stages)) {
    // If the player already has this tag, we don't need to process for it
    if (player.getTags() && player.getTags().contains(tag)) continue;

    let config = stages[tag];
    if (config.mods.contains(stack.getMod())) {
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
};

ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (stack, _, tooltips) => {
    modifyStackForStageProgress(stack, tooltips);

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

  event.add('ae2:crank', Text.red(Text.translate('tooltip.kubejs.disabled')));

  event.add('waystones:sharestone', Text.gold(Text.translate('tooltip.kubejs.can_be_dyed')));
});
