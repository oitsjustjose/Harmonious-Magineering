ServerEvents.recipes(event => {
  event.remove({mod: 'dimstorage'});

  event.shaped('dimstorage:dimensional_chest', ['SSS', 'ECE', 'SSS'], {
    S: '#forge:ingots/steel',
    E: 'powah:ender_core',
    C: 'minecraft:ender_chest',
  });

  event.shaped('dimstorage:dimensional_tank', ['SSS', 'ETE', 'SSS'], {
    S: '#forge:ingots/steel',
    E: 'powah:ender_core',
    T: ['mekanism:basic_fluid_tank', 'create:fluid_tank', 'enderio:pressurized_fluid_tank'],
  });

  event.shaped('dimstorage:dimensional_tablet', ['SSS', 'HWH', 'SSS'], {
    S: '#forge:plates/steel',
    H: 'create_enchantment_industry:hyper_experience_bottle',
    W: 'rftoolsbase:information_screen',
  });
});
