ServerEvents.recipes(event => {
  const coldsweat = () => {
    event.remove({output: 'cold_sweat:hearth'});
    event.shaped('cold_sweat:hearth', ['  W', 'RBR', 'RRR'], {
      W: 'minecraft:cobblestone_wall',
      B: 'cold_sweat:boiler',
      R: 'twigs:rhyolite',
    });
  };

  const supplementaries = () => {
    event.remove({output: 'supplementaries:sack'});
  };

  event.shaped('kubejs:rf_core', [' CC', 'SWC', 'SS '], {
    C: '#forge:plates/copper',
    S: '#forge:plates/steel',
    W: 'pneumaticcraft:capacitor',
  });

  event.remove({mod: 'ftbquests'});

  [coldsweat, supplementaries].forEach(module => module());
});
