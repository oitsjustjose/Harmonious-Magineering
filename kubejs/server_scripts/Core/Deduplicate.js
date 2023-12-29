ServerEvents.recipes(event => {
  /* ~~Delightful:~~ Remove the easier pie recipe */
  event.remove({output: 'minecraft:pumpkin_pie'});
  event.shaped('minecraft:pumpkin_pie', ['SPE', ' C '], {
    P: 'minecraft:pumpkin',
    S: 'minecraft:sugar',
    C: 'farmersdelight:pie_crust',
    E: '#forge:eggs',
  });

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {item: 'farmersdelight:pie_crust'},
    loops: 1,
    results: [{item: 'minecraft:pumpkin_pie'}],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'farmersdelight:pie_crust'}, [{tag: 'forge:eggs'}]],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'farmersdelight:pie_crust'}, [{item: 'minecraft:sugar'}]],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'farmersdelight:pie_crust'}, [{item: 'minecraft:pumpkin'}]],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
      {
        type: 'create:pressing',
        ingredients: [{item: 'farmersdelight:pie_crust'}],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
    ],
    transitionalItem: {item: 'farmersdelight:pie_crust'},
  });

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {item: 'farmersdelight:pie_crust'},
    loops: 1,
    results: [{item: 'minecraft:pumpkin_pie'}],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{item: 'farmersdelight:pie_crust'}, [{tag: 'forge:eggs'}]],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
      {
        type: 'create:filling',
        ingredients: [{item: 'farmersdelight:pie_crust'}, {amount: 100, fluid: 'create:honey', nbt: {}}],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
      {
        type: 'create:deploying',
        ingredients: [{item: 'farmersdelight:pie_crust'}, [{item: 'minecraft:pumpkin'}]],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
      {
        type: 'create:pressing',
        ingredients: [{item: 'farmersdelight:pie_crust'}],
        results: [{item: 'farmersdelight:pie_crust'}],
      },
    ],
    transitionalItem: {item: 'farmersdelight:pie_crust'},
  });

  /* ~~Snails:~~ Unify Spawn & Naturalist's snail shell items */
  event.replaceInput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
  event.replaceOutput({}, 'spawn:snail_shell', 'naturalist:snail_shell');

  /* ~~Eggs:~~ Unify Farmer's Delight Naturalist's Cooked Egg items */
  event.remove({output: 'farmersdelight:fried_egg'});

  /* ~~Blank Modules:~~ Use Mining Gadgets & Mekanism */
  event.remove({output: 'prettypipes:blank_module'});
  event.replaceInput({}, 'prettypipes:blank_module', 'mininggadgets:upgrade_empty');
  event.remove({output: 'modularrouters:blank_upgrade'});
  event.replaceInput({}, 'modularrouters:blank_upgrade', 'mininggadgets:upgrade_empty');
  event.remove({output: 'modularrouters:augment_core'});
  event.replaceInput({}, 'modularrouters:augment_core', 'mininggadgets:upgrade_empty');
  event.remove({output: 'modularrouters:blank_module'});
  event.replaceInput({}, 'modularrouters:blank_module', 'mininggadgets:upgrade_empty');
  event.remove({output: 'modularrouters:extruder_module_2'});

  event.remove({id: 'modularrouters:guide_book'});
  event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"modularrouters:book"}'), ['minecraft:book', 'modularrouters:modular_router']);

  /* ~~eIngots:~~ Preemptive Cleanup :) */
  event.remove({id: 'create:blasting/ingot_osmium_compat_mekanism'});
  event.remove({id: 'create:smelting/ingot_osmium_compat_mekanism'});
  event.remove({id: 'immersiveengineering:crafting/storage_steel_to_ingot_steel'});
  event.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'});
  event.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_block'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_dust_blasting'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_dust_smelting'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_nuggets'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_ore_blasting'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_ore_smelting'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_raw_blasting'});
  event.remove({id: 'mekanism:processing/osmium/ingot/from_raw_smelting'});

  // --BEGIN-- hacky fuckery
  // This chunk of code below is a result of replaceInput not working for tags right now
  //  In exchange, I go through every recipe, stringify its JSON recipe, check it for the tags we want,
  //  and set up a list of changes we'll need to make. This even seems to work great across other recipe types too!
  const changes = [];
  // Define a list of ingredient remaps we want
  const remaps = [
    {in: 'create:crushed_raw_osmium', out: 'mekanism:dust_steel'},
    {in: 'forge:dusts/osmium', out: 'forge:dusts/steel'},
    {in: 'forge:ingots/osmium', out: 'forge:ingots/steel'},
    {in: 'forge:nuggets/osmium', out: 'forge:nuggets/steel'},
    {in: 'forge:ores/osmium', out: 'forge:dusts/steel'},
    {in: 'forge:raw_materials/osmium', out: 'forge:dusts/steel'},
    {in: 'forge:storage_blocks/osmium', out: 'forge:storage_blocks/steel'},
    {in: 'mekanism:block_osmium', out: 'mekanism:block_steel'},
    {in: 'mekanism:dust_osmium', out: 'mekanism:dust_steel'},
    {in: 'mekanism:ingot_osmium', out: 'mekanism:ingot_steel'},
    {in: 'mekanism:nugget_osmium', out: 'mekanism:nugget_steel'},
    {in: 'mekanism:nugget_osmium', out: 'mekanism:nugget_steel'},
    {in: 'modularrouters:augment_core', out: 'mininggadgets:upgrade_empty'},
    {in: 'modularrouters:blank_module', out: 'mininggadgets:upgrade_empty'},
    {in: 'modularrouters:blank_upgrade', out: 'mininggadgets:upgrade_empty'},
  ];

  // Fiddle through each recipe, checking to see if the recipe contains anything we want to modify.
  //  Then we'll accumulate a list of these changes in the Changes array to apply later to avoid
  //  changing the arrray we're actively iterating through.
  event.forEachRecipe({}, rec => {
    const recipeString = rec.json.toString();
    if (remaps.filter(x => recipeString.includes(x.in)).length === 0) return;
    let finalRecipe = recipeString;
    remaps.forEach(x => {
      finalRecipe = finalRecipe.replaceAll(x.in, x.out);
    });

    changes.push({id: rec.getId(), str: finalRecipe});
  });

  // Remove the old recipe by its ID - this works 100% of the time
  //  Then we'll add in the new recipe as a "custom" recipe, which is just a stringified JSON
  changes.forEach(change => {
    event.remove({id: change.id});
    event.custom(change.str).id(change.id);
  });

  console.info(`Manually replaced ${changes.length} recipes through Brute Force`);

  // Clean up any remaining recipes
  remaps.forEach(change => {
    const item = Item.exists(change.in) ? change.in : `#${change.in}`;
    Ingredient.of(item)
      .getStacks()
      .forEach(stack => {
        event.remove({input: stack});
        event.remove({output: stack});
      });
  });

  // --END-- hacky fuckery
});
