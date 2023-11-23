ServerEvents.recipes(event => {
  event.remove({mod: 'dimstorage'});

  event.shaped('dimstorage:dimensional_chest', ['SSS', 'HCH', 'SSS'], {
    S: '#forge:ingots/steel',
    H: 'create_enchantment_industry:hyper_experience_bottle',
    C: 'minecraft:ender_chest',
  });

  event.shaped('dimstorage:dimensional_tank', ['SSS', 'HTH', 'SSS'], {
    S: '#forge:ingots/steel',
    H: 'create_enchantment_industry:hyper_experience_bottle',
    T: ['mekanism:basic_fluid_tank', 'create:fluid_tank', 'enderio:pressurized_fluid_tank'],
  });

  event.shaped('dimstorage:dimensional_tablet', ['SSS', 'HWH', 'SSS'], {
    S: '#forge:plates/steel',
    H: 'create_enchantment_industry:hyper_experience_bottle',
    W: 'rftoolsbase:information_screen',
  });
});
