ServerEvents.recipes(event => {
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

  // --BEGIN-- hacky fuckery
  // This chunk of code below is a result of replaceInput not working for tags right now
  //  In exchange, I go through every recipe, stringify its JSON recipe, check it for the tags we want,
  //  and set up a list of changes we'll need to make. This even seems to work great across other recipe types too!
  const Changes = [];
  // Define a list of ingredient remaps we want
  const Remaps = [
    {in: 'create:crushed_raw_osmium', out: 'mekanism:dust_steel'},
    {in: 'forge:dusts/osmium', out: 'forge:dusts/steel'},
    {in: 'forge:ingots/osmium', out: 'forge:ingots/steel'},
    {in: 'forge:nuggets/osmium', out: 'forge:nuggets/steel'},
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
    if (Remaps.filter(x => recipeString.includes(x.in)).length === 0) return;
    let finalRecipe = recipeString;
    Remaps.forEach(x => {
      finalRecipe = finalRecipe.replaceAll(x.in, x.out);
    });

    Changes.push({id: rec.getId(), str: finalRecipe});
  });

  // Remove the old recipe by its ID - this works 100% of the time
  //  Then we'll add in the new recipe as a "custom" recipe, which is just a stringified JSON
  Changes.forEach(change => {
    event.remove({id: change.id});
    event.custom(change.str);
  });

  console.info(`[oitsjustjose] Manually replaced ${Changes.length} recipes through Brute Force`);

  // Clean up any remaining recipes
  Remaps.forEach(change => {
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
