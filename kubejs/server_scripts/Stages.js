ServerEvents.recipes(event => {
  [
    {
      mods: ['aether', 'deep_aether', 'aether_redux'],
      substitute: 'kubejs:unknown_holy_item',
      tag: 'aether',
    },
    {
      mods: ['bloodmagic'],
      substitute: 'kubejs:unknown_bloody_item',
      tag: 'bloodmagic',
    },
    {
      mods: ['embers'],
      substitute: 'kubejs:unknown_dwarven_item',
      tag: 'embers',
    },
    {
      mods: ['create', 'railways', 'create_power_loader', 'interiors', 'bellsandwhistles', 'create_enchantment_industry'],
      substitute: 'kubejs:unknown_kinetic_item',
      tag: 'create',
    },
    {
      mods: ['pneumaticcraft', 'compressedcreativity'],
      substitute: 'kubejs:unknown_pneumatic_item',
      tag: 'pneumaticcraft',
    },
    {
      mods: [
        'immersiveengineering',
        'mekanism',
        'mekanismgenerators',
        'mekaweapons',
        'xnet',
        'buildinggadgets2',
        'chunkloaders',
        'dimstorage',
        'mininggadgets',
      ],
      substitute: 'kubejs:unknown_electric_item',
      tag: 'mekanism',
    },
    {
      mods: ['enderio'],
      substitute: 'kubejs:unknown_ender_item',
      tag: 'enderio',
    },
    {
      mods: ['ae2'],
      substitute: 'kubejs:unknown_energistic_item',
      tag: 'ae2',
    },
  ].forEach(x => {
    x.mods.forEach(mod => {
      event.custom({
        type: 'itemgator:mod',
        mod: mod,
        substitute: {item: x.substitute},
        tag: x.tag,
      });
    });
  });
});
