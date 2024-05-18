// priority: 10
// we want this script to run before Tooltips.js renames some items via obfuscation
JEIEvents.removeCategories(event => {
  ['create:automatic_shaped', 'create:automatic_shapeless', 'embers:alchemy', 'embers:dawnstone_anvil', 'waystones:warp_plate'].forEach(category =>
    event.remove(category)
  );
});

JEIEvents.hideFluids(event => {
  event.hide('pneumaticcraft:biodiesel');
  event.hide('pneumaticcraft:ethanol');
});

JEIEvents.information(event => {
  event.addItem('kubejs:oil_droplet', Text.translate('item.kubejs.oil_droplet.info'));
});

JEIEvents.addItems(event => {
  const candidates = [];
  Ingredient.all.getStacks().forEach(x => {
    if (x.getMod() !== 'architects_palette') return;
    candidates.push(x);
  });

  candidates.sort((a, b) => a.getDisplayName() > b.getDisplayName()).forEach(x => event.add(x));
  ['create:wheat_flour', 'minecraft:bundle', 'sophisticatedbackpacks:backpack'].forEach(x => event.add(x));
});

JEIEvents.hideItems(event => {
  const nuked = JsonIO.read('kubejs/globals/nuked.json').items;
  // These are items that are hidden but we don't necessarily want to nuke their recipes for
  const outliers = [
    '/ae2:facade/',
    '/sophisticatedbackpacks:backpack/',
    'bloodmagic:activationcrystalcreative',
    'bloodmagic:inversion_pillar_cap',
    'bloodmagic:saltpeter',
    'bloodmagic:spectral',
    'decorative_blocks:blockstate_copy_item',
    'deep_aether:golden_swet_ball',
    'eidolon:deep_lead_ore',
    'eidolon:deep_silver_ore',
    'eidolon:lead_ore',
    'eidolon:silver_ore',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:deepslate_ore_silver',
    'immersiveengineering:ore_lead',
    'immersiveengineering:ore_silver',
    'kubejs:unknown_bloody_item',
    'kubejs:unknown_dwarven_item',
    'kubejs:unknown_electric_item',
    'kubejs:unknown_energistic_item',
    'kubejs:unknown_engineering_item',
    'kubejs:unknown_holy_item',
    'kubejs:unknown_kinetic_item',
    'kubejs:unknown_pneumatic_item',
    'mekanism:deepslate_lead_ore',
    'mekanism:deepslate_osmium_ore',
    'mekanism:lead_ore',
    'mekanism:osmium_ore',
    'waystones:black_sharestone',
    'waystones:blue_sharestone',
    'waystones:brown_sharestone',
    'waystones:cyan_sharestone',
    'waystones:gray_sharestone',
    'waystones:green_sharestone',
    'waystones:light_blue_sharestone',
    'waystones:light_gray_sharestone',
    'waystones:lime_sharestone',
    'waystones:magenta_sharestone',
    'waystones:orange_sharestone',
    'waystones:pink_sharestone',
    'waystones:purple_sharestone',
    'waystones:red_sharestone',
    'waystones:return_scroll',
    'waystones:warp_dust',
    'waystones:warp_plate',
    'waystones:white_sharestone',
    'waystones:yellow_sharestone',
  ];

  nuked.forEach(x => event.hide(x));
  outliers.forEach(x => event.hide(x));
});

JEIEvents.hideCustom(event => {
  // Load in the Java classes so we can get the Ingredient Types
  const ChemicalType = Java.loadClass('mekanism.api.chemical.ChemicalType');
  const MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI');

  const SLURRY = MekanismJEI.getIngredientType(ChemicalType.SLURRY);
  const GAS = MekanismJEI.getIngredientType(ChemicalType.GAS);

  // Unfortunately, we can't hide *quickly* using 'modid:value' -- we have to find them
  // Go through every slurry in the ingredient list -- if it's in our remove list, remove it
  const slurriesToRemove = ['mekanism:dirty_osmium', 'mekanism:clean_osmium'];
  const Slurries = event.get(SLURRY);
  Slurries.allIngredients.forEach(x => {
    slurriesToRemove.forEach(toRm => {
      if (`${x}`.includes(toRm)) {
        Slurries.hide(x);
      }
    });
  });

  // Repeat the same as above but for gas
  const gassesToRemove = ['mekanism:osmium'];
  const Gasses = event.get(GAS);
  Gasses.allIngredients.forEach(x => {
    gassesToRemove.forEach(toRm => {
      if (`${x}`.includes(toRm)) {
        Gasses.hide(x);
      }
    });
  });
});
