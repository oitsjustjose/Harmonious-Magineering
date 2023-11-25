ServerEvents.recipes(event => {
  // Remove the primitive alloy smelter
  event.remove({output: 'enderio:primitive_alloy_smelter'});

  // Re-work Void Chassis behind HDPE
  event.remove({output: 'enderio:void_chassis'});
  event.shaped('enderio:void_chassis', ['GHG', 'HCH', 'GHG'], {
    H: 'mekanism:hdpe_sheet',
    G: '#forge:dusts/grains_of_infinity',
    C: 'mekanism:steel_casing',
  });

  event.custom({
    type: 'enderio:alloy_smelting',
    energy: 6400,
    experience: 0.0,
    inputs: [
      {
        ingredient: {item: 'mekanism:hdpe_sheet'},
        count: 2,
      },
      {
        ingredient: {tag: 'forge:dusts/grains_of_infinity'},
        count: 2,
      },
      {
        ingredient: {item: 'mekanism:steel_casing'},
        count: 1,
      },
    ],
    result: {
      item: 'enderio:void_chassis',
      count: 2,
    },
  });
});
