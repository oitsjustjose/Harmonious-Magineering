// These stages are copied DIRECTLY from Globals -- if you don't copy these,
//  you'll run into issues where the Ingredients defined as an exception
//  won't be consistent/correct.
const stages = {
  aether: {
    mods: ['aether', 'aether_redux', 'deep_aether'],
    substitute: Item.of('kubejs:unknown_holy_item'),
    exceptions: Ingredient.of([
      'aether:leather_gloves',
      'aether:chainmail_gloves',
      'aether:iron_gloves',
      'aether:golden_gloves',
      'aether:diamond_gloves',
      'aether:netherite_gloves',
    ]),
  },
  bloodmagic: {
    mods: ['bloodmagic'],
    substitute: Item.of('kubejs:unknown_bloody_item'),
    exceptions: null,
  },
  embers: {
    mods: ['embers'],
    substitute: Item.of('kubejs:unknown_dwarven_item'),
    exceptions: Ingredient.of(['#forge:ores/lead', '#forge:ores/silver', '#forge:ingots/archaic_brick', 'embers:tinker_hammer']),
  },
  create: {
    mods: ['create', 'railways', 'create_power_loader', 'prettypipes'],
    substitute: Item.of('kubejs:unknown_kinetic_item'),
    exceptions: Ingredient.of('#create:exception'),
  },
  pnc: {
    mods: ['pneumaticcraft'],
    substitute: Item.of('kubejs:unknown_pneumatic_item'),
    exceptions: Ingredient.of('#pneumaticcraft:exception'),
  },
  ie: {
    mods: ['immersiveengineering', 'buildinggadgets2'],
    substitute: Item.of('kubejs:unknown_engineering_item'),
    exceptions: Ingredient.of('#immersiveengineering:exception'),
  },
  mekanism: {
    mods: ['mekanism', 'mekanismgenerators', 'mekaweapons', 'dimstorage', 'rftoolsbase', 'xnet'],
    substitute: Item.of('kubejs:unknown_electric_item'),
    exceptions: Ingredient.of('#mekanism:exception'),
  },
  ae2: {
    mods: ['ae2', 'appmek', 'more_immersive_wires', 'specialised_cells', 'ae2wtlib', 'aeinfinitybooster', 'merequester', 'entangled'],
    substitute: Item.of('kubejs:unknown_energistic_item'),
    exceptions: Ingredient.of('#ae2:exception'),
  },
};

const cacheRefreshFrequencySeconds = 5;
let cachedServerPlayerRef = null;
let lastCacheRefresh = 0;

ItemEvents.tooltip(event => {
  event.addAdvanced(Ingredient.all, (stack, _, tooltips) => {
    // Fetch the server player only when needed
    if (cachedServerPlayerRef === null || Date.now() - lastCacheRefresh > cacheRefreshFrequencySeconds * 1000) {
      lastCacheRefresh = Date.now();
      Utils.server.getPlayers().forEach(player => {
        if (player.getUuid() === Client.player.getUuid()) {
          cachedServerPlayerRef = player;
          return;
        }
      });
    }

    if (cachedServerPlayerRef === null) {
      console.error('SERVER PLAYER IS STILL NULL :(');
      return;
    }

    // Determine if the current stack is an exception in ANY config
    let isItemException = false;
    for (const tag of Object.keys(stages)) {
      let config = stages[tag];
      if (config.exceptions !== null) {
        if (config.exceptions.test(stack.item.id)) {
          isItemException = true;
          break;
        }
      }
    }

    if (!isItemException) {
      for (const tag of Object.keys(stages)) {
        let config = stages[tag];
        if (config.mods.includes(stack.getMod())) {
          if (!cachedServerPlayerRef.getTags() || !cachedServerPlayerRef.getTags().contains(tag)) {
            // Just setting the name on the client-side. Doesn't actually rename the item permanently
            stack.setHoverName(Text.white(stack.id).obfuscated());
            // We don't want to give the player any additional info on this item...
            for (let i = 1; i < tooltips.length; i++) {
              tooltips.remove(i);
            }
            // Add the tooltip explaining you have no idea what this is
            tooltips.add(Text.darkRed(Text.translate('tooltip.kubejs.gated')).underlined());
            // RETURN here so that we don't add the mod to the tooltip like below:
            return;
          } else {
            stack.resetHoverName();
          }
        }
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
    Text.gray(Text.translate('tooltip.kubejs.gated'))
  );

  event.add('waystones:sharestone', Text.gold(Text.translate('tooltip.kubejs.can_be_dyed')));
});
