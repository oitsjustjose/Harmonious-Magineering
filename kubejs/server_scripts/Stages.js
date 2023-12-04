ServerEvents.recipes(event => {
  /* ~~ AETHER + ADDONS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'aether',
    mod: 'aether',
    substitute: {item: 'kubejs:unknown_holy_item'},
    exceptions: [
      {item: 'aether:leather_gloves'},
      {item: 'aether:chainmail_gloves'},
      {item: 'aether:iron_gloves'},
      {item: 'aether:golden_gloves'},
      {item: 'aether:diamond_gloves'},
      {item: 'aether:netherite_gloves'},
    ],
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'aether',
    mod: 'aether_redux',
    substitute: {item: 'kubejs:unknown_holy_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'aether',
    mod: 'deep_aether',
    substitute: {item: 'kubejs:unknown_holy_item'},
  });

  /* ~~ BLOODMAGIC ~~ */

  event.custom({
    type: 'itemgator:mod',
    tag: 'bloodmagic',
    mod: 'bloodmagic',
    substitute: {item: 'kubejs:unknown_bloody_item'},
  });

  /* ~~ EMBERS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'embers',
    mod: 'embers',
    substitute: {item: 'kubejs:unknown_dwarven_item'},
    exceptions: [{tag: 'forge:ores/lead'}, {tag: 'forge:ores/silver'}, {tag: 'forge:ingots/archaic_brick'}],
  });

  /* ~~ CREATE + ADDONS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'create',
    mod: 'create',
    substitute: {item: 'kubejs:unknown_kinetic_item'},
    exceptions: [
      {item: 'create:crafting_blueprint'},
      {item: 'create:crushed_raw_zinc'},
      {item: 'create:deepslate_zinc_ore'},
      {item: 'create:dough'},
      {item: 'create:powered_latch'},
      {item: 'create:raw_zinc_block'},
      {item: 'create:raw_zinc_block'},
      {item: 'create:raw_zinc'},
      {item: 'create:wheat_flour'},
      {item: 'create:zinc_block'},
      {item: 'create:zinc_ingot'},
      {item: 'create:zinc_nugget'},
      {item: 'create:zinc_ore'},
      {tag: 'create:cosmetics'},
    ],
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'create',
    mod: 'railways',
    substitute: {item: 'kubejs:unknown_kinetic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'create',
    mod: 'create_power_loader',
    substitute: {item: 'kubejs:unknown_kinetic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'create',
    mod: 'create_enchantment_industry',
    substitute: {item: 'kubejs:unknown_kinetic_item'},
  });

  /* ~~ PnC + ADDONS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'pnc',
    mod: 'pneumaticcraft',
    substitute: {item: 'kubejs:unknown_pneumatic_item'},
    exceptions: [{item: 'pneumaticcraft:oil_bucket'}],
  });

  event.custom({
    type: 'itemgator:ingredient',
    tag: 'pnc',
    input: {tag: 'compressedcreativity:gated'},
    substitute: {item: 'kubejs:unknown_pneumatic_item'},
  });

  /* ~~ IE ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'ie',
    mod: 'immersiveengineering',
    substitute: {item: 'kubejs:unknown_electric_item'},
    exceptions: {tag: 'immersiveengineering:exception'},
  });

  /* ~~ GADGETS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'gadgets',
    mod: 'buildinggadgets2',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'gadgets',
    mod: 'mininggadgets',
    substitute: {item: 'kubejs:unknown_energistic_item'},
    exceptions: {item: 'mininggadgets:upgrade_empty'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'gadgets',
    mod: 'chunkloaders',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'gadgets',
    mod: 'dimstorage',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  /* ~~ MEKANISM + ADDONS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'mekanism',
    mod: 'mekanism',
    substitute: {item: 'kubejs:unknown_energistic_item'},
    exceptions: {item: 'mekanism:exception'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'mekanism',
    mod: 'mekanismgenerators',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'mekanism',
    mod: 'mekaweapons',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  /* ~~ RFTOOLS + Addons ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'rftools',
    mod: 'rftoolsbase',
    substitute: {item: 'kubejs:unknown_energistic_item'},
    exceptions: [
      {item: 'rftoolsbase:dimensionalshard'},
      {item: 'rftoolsbase:dimensionalshard_overworld'},
      {item: 'rftoolsbase:dimensionalshard_nether'},
      {item: 'rftoolsbase:dimensionalshard_end'},
    ],
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'rftools',
    mod: 'rftoolspower',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'rftools',
    mod: 'rftoolsstorage',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'rftools',
    mod: 'xnet',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  /* ~~ AE2 + ADDONS ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'ae2',
    mod: 'ae2',
    substitute: {item: 'kubejs:unknown_energistic_item'},
    exceptions: {tag: 'ae2:exception'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'ae2',
    mod: 'more_immersive_wires',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  event.custom({
    type: 'itemgator:mod',
    tag: 'ae2',
    mod: 'appmek',
    substitute: {item: 'kubejs:unknown_energistic_item'},
  });

  /* ~~ ENDERIO ~~ */
  event.custom({
    type: 'itemgator:mod',
    tag: 'enderio',
    mod: 'enderio',
    substitute: {item: 'kubejs:unknown_ender_item'},
    exceptions: [{item: 'enderio:dark_steel_ingot'}, {item: 'enderio:dark_steel_nugget'}, {item: 'enderio:dark_steel_block'}],
  });
});
