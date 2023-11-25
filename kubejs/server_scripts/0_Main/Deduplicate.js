/**
 * @param {Internal.RecipesEventJS} event
 */
const Mekanism = event => {
  [Item.of('mekanism:cardboard_box')].forEach(x => event.remove({output: x}));
};

/**
 * @param {Internal.RecipesEventJS} event
 */
const Rope = event => {
  event.replaceInput({}, 'farmersdelight:rope', 'supplementaries:rope');
  event.replaceOutput({}, 'farmersdelight:rope', 'supplementaries:rope');
};

/**
 * @param {Internal.RecipesEventJS} event
 */
const Snails = event => {
  event.replaceInput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
  event.replaceOutput({}, 'spawn:snail_shell', 'naturalist:snail_shell');
};

/**
 * @param {Internal.RecipesEventJS} event
 */
const SilverAndLead = event => {
  // Lead -> Embers Lead
  ['immersiveengineering:ore_lead', 'mekanism:lead_ore', 'eidolon:lead_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:lead_ore');
    event.replaceOutput({}, ore, 'embers:lead_ore');
  });
  // Deepslate Lead -> Embers Deepslate Lead
  ['immersiveengineering:deepslate_ore_lead', 'mekanism:deepslate_lead_ore', 'eidolon:deep_lead_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:deepslate_lead_ore');
    event.replaceOutput({}, ore, 'embers:deepslate_lead_ore');
  });
  // Silver -> Embers Silver
  ['immersiveengineering:ore_silver', 'eidolon:silver_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:silver_ore');
    event.replaceOutput({}, ore, 'embers:silver_ore');
  });
  // Deepslate Silver -> Embers Deepslate Silver
  ['immersiveengineering:deepslate_ore_silver', 'eidolon:deep_silver_ore'].forEach(ore => {
    event.replaceInput({}, ore, 'embers:deepslate_silver_ore');
    event.replaceOutput({}, ore, 'embers:deepslate_silver_ore');
  });
};

ServerEvents.recipes(event => {
  [Mekanism, Rope, Snails, SilverAndLead].forEach(Module => Module(event));
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

ServerEvents.tags('fluid', event => {
  event.removeAll('minecraft:water');
  event.add('minecraft:water', 'minecraft:water');

  event.remove('forge:honey', 'productivebees:honey');
});

ServerEvents.tags('item', event => {
  event.remove('forge:buckets/honey', 'productivebees:honey_bucket');
  event.remove('forge:rope', 'farmersdelight:rope');
  event.remove('supplementaries:ropes', 'farmersdelight:rope');
});
