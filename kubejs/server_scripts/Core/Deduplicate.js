// priority: -1

ServerEvents.recipes(event => {
  const fluids = () => {
    /* ~~Biodiesel:~~ Remove PnC's Biodiesel */
    event.remove('pneumaticcraft:fluid_mixer/biodiesel');
    event
      .custom({
        type: 'pneumaticcraft:fluid_mixer',
        fluid_output: {amount: 50, fluid: 'immersiveengineering:biodiesel'},
        input1: {type: 'pneumaticcraft:fluid', amount: 25, tag: 'forge:plantoil'},
        input2: {type: 'pneumaticcraft:fluid', amount: 25, tag: 'forge:ethanol'},
        item_output: {item: 'pneumaticcraft:glycerol'},
        pressure: 2.0,
        time: 300,
      })
      .id('pneumaticcraft:fluid_mixer/biodiesel');

    /* ~~Ethanol:~~ Remove PnC's Ethanol */
    event.remove('pneumaticcraft:thermo_plant/ethanol_from_apple');
    event
      .custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture'},
        fluid_output: {amount: 50, fluid: 'immersiveengineering:ethanol'},
        item_input: {item: 'minecraft:apple'},
        speed: 0.25,
        temperature: {max_temp: 333, min_temp: 303},
      })
      .id('pneumaticcraft:thermo_plant/ethanol_from_apple');

    event.remove('pneumaticcraft:thermo_plant/ethanol_from_melon');
    event
      .custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture'},
        fluid_output: {amount: 10, fluid: 'immersiveengineering:ethanol'},
        item_input: {item: 'minecraft:melon_slice'},
        speed: 0.4,
        temperature: {max_temp: 333, min_temp: 303},
      })
      .id('pneumaticcraft:thermo_plant/ethanol_from_melon');

    event.remove('pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato');
    event
      .custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture'},
        fluid_output: {amount: 50, fluid: 'immersiveengineering:ethanol'},
        item_input: {item: 'minecraft:poisonous_potato'},
        speed: 0.25,
        temperature: {max_temp: 333, min_temp: 303},
      })
      .id('pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato');

    event.remove('pneumaticcraft:thermo_plant/ethanol_from_potato');
    event
      .custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture'},
        fluid_output: {amount: 25, fluid: 'immersiveengineering:ethanol'},
        item_input: {tag: 'forge:crops/potato'},
        speed: 0.25,
        temperature: {max_temp: 333, min_temp: 303},
      })
      .id('pneumaticcraft:thermo_plant/ethanol_from_potato');

    event.remove('pneumaticcraft:thermo_plant/ethanol_from_sugar');
    event
      .custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture'},
        fluid_output: {amount: 50, fluid: 'immersiveengineering:ethanol'},
        item_input: {item: 'minecraft:sugar'},
        speed: 0.5,
        temperature: {max_temp: 333, min_temp: 303},
      })
      .id('pneumaticcraft:thermo_plant/ethanol_from_sugar');

    event.remove('pneumaticcraft:thermo_plant/ethanol_from_sweet_berries');
    event
      .custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: true,
        fluid_input: {type: 'pneumaticcraft:fluid', amount: 100, tag: 'pneumaticcraft:yeast_culture'},
        fluid_output: {amount: 20, fluid: 'immersiveengineering:ethanol'},
        item_input: {item: 'minecraft:sweet_berries'},
        speed: 0.4,
        temperature: {max_temp: 333, min_temp: 303},
      })
      .id('pneumaticcraft:thermo_plant/ethanol_from_sweet_berries');
  };

  const foods = () => {
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

    /* ~~Cakes:~~ Dedup the 4 different recipes */
    event.remove('aether:moa_egg_cake');
    event.remove('aether:skyroot_milk_bucket_cake');
    event.remove('aether:skyroot_milk_bucket_moa_egg_cake');
    event.remove('create:crafting/curiosities/cake');
    event.remove('deep_aether:cake');
    event.remove('deep_aether:skyroot_milk_bucket_cake');
    event.remove('farmersdelight:cake_from_milk_bottle');
    event.remove('minecraft:cake');
    event.remove('naturalist:cake');
    event.shaped('minecraft:cake', ['MMM', 'SES', 'WWW'], {
      M: '#forge:milk',
      S: ['minecraft:sugar', 'minecraft:honey_bottle'],
      E: '#forge:eggs',
      W: 'create:wheat_flour',
    });

    /* ~~Flour:~~ Unify PNC and Create's Wheat Flours */
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', 'create:wheat_flour');
    event.replaceInput({}, '#forge:dusts/flour', 'create:wheat_flour');
    event.remove('pneumaticcraft:pressure_chamber/wheat_flour');
    event.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [{tag: 'forge:crops/wheat'}],
      pressure: 1.5,
      results: [{count: 3, item: 'create:wheat_flour'}],
    });

    /* ~~Dough~~ */
    event.replaceInput({}, 'create:dough', 'farmersdelight:wheat_dough');
    event.replaceOutput({output: 'create:dough'}, 'create:dough', 'farmersdelight:wheat_dough');

    /* ~~Eggs:~~ Unify Farmer's Delight Naturalist's Cooked Egg items */
    event.remove({output: 'farmersdelight:fried_egg'});
    event.replaceInput({}, '#aether_redux:eggs_for_blueberry_pie', '#forge:eggs');

    /* ~~Salmonerries:~~ Unify Regions Unexplored & Delightful's Recipes */
    event.replaceInput({}, 'regions_unexplored:salmonberry', '#forge:fruits/salmonberries');
    event.replaceInput({}, 'delightful:salmonberries', '#forge:fruits/salmonberries');
    event.replaceOutput({}, 'delightful:salmonberries', 'regions_unexplored:salmonberry');
    event.custom({
      type: 'immersiveengineering:cloche',
      input: {item: 'regions_unexplored:salmonberry'},
      soil: {item: 'minecraft:dirt'},
      render: {type: 'crop', block: 'regions_unexplored:salmonberry_bush'},
      time: 800,
      results: [{item: 'regions_unexplored:salmonberry', count: 3}],
    });
  };

  const misc = () => {
    /* Embers ash */
    event.replaceInput({}, 'embers:ash', 'supplementaries:ash');
    event.replaceOutput({}, 'embers:ash', 'supplementaries:ash');
    event.remove('embers:stamping/ash');
    event
      .custom({
        type: 'embers:stamping',
        input: {item: 'embers:alchemical_waste'},
        output: {count: 8, item: 'supplementaries:ash'},
        stamp: {item: 'embers:flat_stamp'},
      })
      .id('embers:stamping/ash');

    event.remove('embers:alchemy/soul_sand');
    event
      .custom({
        type: 'embers:alchemy',
        aspects: [{tag: 'embers:aspectus/copper'}, {tag: 'embers:aspectus/iron'}],
        inputs: [{item: 'minecraft:sand'}, {item: 'minecraft:sand'}, {item: 'minecraft:sand'}, {item: 'minecraft:sand'}],
        tablet: {item: 'supplementaries:ash'},
        output: {item: 'minecraft:soul_sand', count: 4},
      })
      .id('embers:alchemy/soul_sand');

    /* MR Guidebook dedup */
    event.remove('modularrouters:guide_book');
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"modularrouters:book"}'), ['minecraft:book', 'modularrouters:modular_router']);

    /* ~~Candles~~ */
    event.remove({output: 'eidolon:candle'});
    event.remove('delightful:candle_from_animal_fat');
    event.shaped('minecraft:candle', ['S', 'T'], {S: 'minecraft:string', T: '#forge:tallow'});
    event.replaceInput({mod: 'eidolon'}, 'eidolon:candle', 'minecraft:candle');

    /* ~~Leads~~ */
    event.remove('aether:swet_lead');
    event.remove('embers:lead_adhesive');
    event.remove('minecraft:lead');
    event.shaped(Item.of('minecraft:lead', 2), ['SS ', 'SB ', '  S'], {
      S: 'minecraft:string',
      B: ['#forge:slimeballs', '#aether:swet_balls'],
    });

    /* ~~Sawdust:~~ Unify Mek & IE's sawdusts */
    event.replaceInput({}, 'immersiveengineering:dust_wood', '#forge:sawdust');
    event.replaceOutput({}, 'immersiveengineering:dust_wood', '#forge:sawdusts');
    event.replaceOutput({}, '#forge:dusts/wood', '#forge:sawdusts');

    /* ~~Snails:~~ Unify Spawn & Naturalist's snail shell items */
    event.replaceInput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
    event.replaceOutput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
  };

  [fluids, foods, misc].forEach(module => module());

  /* ~~Preemptive Cleanup the right way~~ */
  [
    'create:blasting/ingot_osmium_compat_mekanism',
    'create:smelting/ingot_osmium_compat_mekanism',
    'immersiveengineering:crafting/storage_steel_to_ingot_steel',
    'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting',
    'immersiveengineering:smelting/ingot_steel_from_dust',
    'mekanism:gas_conversion/osmium_from_block',
    'mekanism:gas_conversion/osmium_from_block',
    'mekanism:processing/osmium/clump/from_ore',
    'mekanism:processing/osmium/clump/from_raw_ore',
    'mekanism:processing/osmium/dust/from_ore',
    'mekanism:processing/osmium/dust/from_raw_ore',
    'mekanism:processing/osmium/ingot/from_block',
    'mekanism:processing/osmium/ingot/from_dust_blasting',
    'mekanism:processing/osmium/ingot/from_dust_smelting',
    'mekanism:processing/osmium/ingot/from_nuggets',
    'mekanism:processing/osmium/ingot/from_ore_blasting',
    'mekanism:processing/osmium/ingot/from_ore_smelting',
    'mekanism:processing/osmium/ingot/from_raw_blasting',
    'mekanism:processing/osmium/ingot/from_raw_smelting',
    'mekanism:processing/osmium/ore/deepslate_from_raw',
    'mekanism:processing/osmium/ore/from_raw',
    'mekanism:processing/osmium/raw_storage_blocks/from_raw',
    'mekanism:processing/osmium/raw/from_raw_block',
    'mekanism:processing/osmium/shard/from_ore',
    'mekanism:processing/osmium/shard/from_raw_ore',
    'mekanism:processing/osmium/slurry/dirty/from_ore',
    'mekanism:processing/osmium/slurry/dirty/from_raw_ore',
  ].forEach(id => event.remove(id));

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
    {in: 'mekanism:block_osmium', out: 'mekanism:block_steel'},
    {in: 'mekanism:dust_osmium', out: 'mekanism:dust_steel'},
    {in: 'mekanism:ingot_osmium', out: 'mekanism:ingot_steel'},
    {in: 'mekanism:nugget_osmium', out: 'mekanism:nugget_steel'},
    {in: 'mekanism:nugget_osmium', out: 'mekanism:nugget_steel'},
    /* Saltpeter / Nitrate Dust dedup */
    {in: 'bloodmagic:saltpeter', out: 'immersiveengineering:dust_saltpeter'},
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
    event.remove(change.id);
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
