ServerEvents.recipes(event => {
  const coldsweat = () => {
    event.remove({output: 'cold_sweat:hearth'});
    event.shaped('cold_sweat:hearth', ['  W', 'RBR', 'RRR'], {
      W: 'minecraft:cobblestone_wall',
      B: 'cold_sweat:boiler',
      R: 'twigs:rhyolite',
    });
  };

  [coldsweat].forEach(module => module());
});
