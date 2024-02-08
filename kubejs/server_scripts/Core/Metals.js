// priority: 100000

ServerEvents.recipes(event => {
  const createAutomation = () => {
    /* Remove all infinite metal recipes from Create */
    event.remove('create:splashing/gravel');
    event.recipes.create.splashing(Item.of('minecraft:flint').withChance(0.25), 'minecraft:gravel').id('create:splashing/gravel');

    event.remove('create:splashing/red_sand');
    event.recipes.create.splashing(Item.of('minecraft:dead_bush').withChance(0.05), 'minecraft:red_sand').id('create:splashing/red_sand');

    /* Soul sand shouldn't have "value" like this */
    event.remove('create:splashing/soul_sand');

    /* Remove the ability to process stones into crushed ore */
    ['asurine', 'crimsite', 'diorite', 'ochrum', 'tuff', 'veridium'].forEach(mat => {
      event.remove(`create:crushing/${mat}`);
      event.remove(`create:crushing/${mat}_recycling`);
    });
  };

  const dustSmelting = () => {
    Object.keys(global.Metals).forEach(mat => {
      // Zinc doesn't have a dust really. Skip it.
      if (mat == 'zinc') return;

      const entry = global.Metals[mat];
      const idBase = `${entry.ingot.replace(':', '_')}_from_${entry.dust.replace(':', '_')}`;

      event.remove({type: 'minecraft:blasting', input: entry.dust});
      event.remove({type: 'minecraft:blasting', output: entry.ingot});
      event.remove({type: 'minecraft:smelting', input: entry.dust});
      event.remove({type: 'minecraft:smelting', output: entry.ingot});

      event.smelting(entry.ingot, entry.dust).xp(0.33).id(`${idBase}_smelting`);
      event.blasting(entry.ingot, entry.dust).xp(0.33).id(`${idBase}_blasting`);
    });
  };

  const metalSmithing = () => {
    Object.keys(global.Metals).forEach(mat => {
      let metal = global.Metals[mat];
      const types = ['minecraft:crafting_shapeless', 'minecraft:crafting_shaped'];
      const tags = {
        ingot: `#forge:ingots/${mat}`,
        block: `#forge:storage_blocks/${mat}`,
        nugget: `#forge:nuggets/${mat}`,
      };

      types.forEach(type => {
        event.remove({type: type, input: tags.ingot, output: tags.nugget});
        event.remove({type: type, input: tags.block, output: tags.ingot});
        event.remove({type: type, input: tags.ingot, output: tags.block});
        event.remove({type: type, input: tags.nugget, output: tags.ingot});
        event.remove({type: type, input: metal.ingot, output: metal.nugget});
        event.remove({type: type, input: metal.block, output: metal.ingot});
        event.remove({type: type, input: metal.ingot, output: metal.block});
        event.remove({type: type, input: metal.nugget, output: metal.ingot});
      });

      event.shaped(metal.ingot, ['NNN', 'NNN', 'NNN'], {N: tags.nugget});
      event.shaped(metal.block, ['NNN', 'NNN', 'NNN'], {N: tags.ingot});
      event.shapeless(Item.of(metal.nugget, 9), [tags.ingot]);
      event.shapeless(Item.of(metal.ingot, 9), [tags.block]);
    });
  };

  const nukeOsmium = () => {
    [
      'mekanism:block_raw_osmium',
      'mekanism:nugget_osmium',
      'mekanism:raw_osmium',
      'mekanism:ingot_osmium',
      'mekanism:clump_osmium',
      'mekanism:dirty_dust_osmium',
      'mekanism:dust_osmium',
      'mekanism:crystal_osmium',
      'mekanism:shard_osmium',
      'mekanism:deepslate_osmium_ore',
      'mekanism:osmium_ore',
      'mekanism:block_osmium',
      'create:crushed_raw_osmium',
    ].forEach(osm => {
      event.remove({output: osm});
    });

    [
      'mekanism:metallurgic_infuser',
      'mekanism:processing/osmium/clump/from_ore',
      'mekanism:processing/osmium/clump/from_raw_block',
      'mekanism:processing/osmium/clump/from_raw_ore',
      'mekanism:processing/osmium/clump/from_shard',
      'mekanism:processing/osmium/crystal/from_slurry',
      'mekanism:processing/osmium/dirty_dust/from_clump',
      'mekanism:processing/osmium/dust/from_dirty_dust',
      'mekanism:processing/osmium/dust/from_ingot',
      'mekanism:processing/osmium/dust/from_ore',
      'mekanism:processing/osmium/dust/from_raw_block',
      'mekanism:processing/osmium/dust/from_raw_ore',
      'mekanism:processing/osmium/ingot/from_block',
      'mekanism:processing/osmium/ingot/from_dust_blasting',
      'mekanism:processing/osmium/ingot/from_dust_smelting',
      'mekanism:processing/osmium/ingot/from_nuggets',
      'mekanism:processing/osmium/ingot/from_ore_blasting',
      'mekanism:processing/osmium/ingot/from_ore_smelting',
      'mekanism:processing/osmium/ingot/from_raw_blasting',
      'mekanism:processing/osmium/ingot/from_raw_smelting',
      'mekanism:processing/osmium/nugget/from_ingot',
      'mekanism:processing/osmium/ore/deepslate_from_raw',
      'mekanism:processing/osmium/ore/from_raw',
      'mekanism:processing/osmium/raw_storage_blocks/from_raw',
      'mekanism:processing/osmium/raw/from_raw_block',
      'mekanism:processing/osmium/shard/from_crystal',
      'mekanism:processing/osmium/shard/from_ore',
      'mekanism:processing/osmium/shard/from_raw_block',
      'mekanism:processing/osmium/shard/from_raw_ore',
      'mekanism:processing/osmium/slurry/clean',
      'mekanism:processing/osmium/slurry/dirty/from_ore',
      'mekanism:processing/osmium/slurry/dirty/from_raw_block',
      'mekanism:processing/osmium/slurry/dirty/from_raw_ore',
      'mekanism:processing/osmium/storage_blocks/from_ingots',
    ].forEach(id => event.remove(id));
  };

  const oreSmelting = () => {
    event.remove('create:smelting/zinc_ingot_from_crushed');
    event.remove('create:blasting/zinc_ingot_from_crushed');

    Object.keys(global.Metals).forEach(mat => {
      let metal = global.Metals[mat];
      // Remove raw ore -> ingot blasting/smelting
      event.remove({type: 'minecraft:smelting', input: `#forge:raw_materials/${mat}`, output: `#forge:ingots/${mat}`});
      event.remove({type: 'minecraft:blasting', input: `#forge:raw_materials/${mat}`, output: `#forge:ingots/${mat}`});
      // Remove ore -> ingot blasting/smelting (just in case)
      event.remove({type: 'minecraft:smelting', input: `#forge:ores/${mat}`, output: `#forge:ingots/${mat}`});
      event.remove({type: 'minecraft:blasting', input: `#forge:ores/${mat}`, output: `#forge:ingots/${mat}`});

      // Raw ore smelting/blasting -> 3/4 nuggets
      event.smelting(Item.of(metal.nugget, 3), `#forge:raw_materials/${mat}`).xp(0.3);
      event.blasting(Item.of(metal.nugget, 4), `#forge:raw_materials/${mat}`).xp(0.4);
      // Whole ore smelting/blasting -> 1 ingot, always
      event.smelting(metal.ingot, `#forge:ores/${mat}`).xp(1.0);
      event.blasting(metal.ingot, `#forge:ores/${mat}`).xp(1.0);
      // Crushed Ore Smelting
      event.smelting(metal.ingot, metal.crushed).xp(0.3);
      event.blasting(metal.ingot, metal.crushed).xp(0.3);
    });
  };

  /* Some crushed metals don't have a "complement" item when washed. Let's fix that :) */
  const oreWashing = () => {
    /* Uranium devolves into Lead, so let's make it output some lead */
    event.remove({type: 'create:splashing', input: 'create:crushed_raw_uranium'});
    event.recipes.create.splashing(
      [Item.of('mekanism:nugget_uranium', 9), Item.of('eidolon:lead_nugget').withChance(0.1)],
      'create:crushed_raw_uranium'
    );

    /* Silver & Lead often form as Galena, so they can have a chance of providing each other */
    event.remove({type: 'create:splashing', input: 'create:crushed_raw_lead'});
    event.remove({type: 'create:splashing', input: 'create:crushed_raw_silver'});

    event.recipes.create.splashing([Item.of('eidolon:lead_nugget', 9), Item.of('eidolon:silver_nugget').withChance(0.05)], 'create:crushed_raw_lead');
    event.recipes.create.splashing(
      [Item.of('eidolon:silver_nugget', 9), Item.of('eidolon:lead_nugget').withChance(0.05)],
      'create:crushed_raw_silver'
    );

    /* Nickel often forms as Limonite, so it can have trace amounts of Iron */
    event.remove({type: 'create:splashing', input: 'create:crushed_raw_nickel'});
    event.recipes.create.splashing(
      [Item.of('immersiveengineering:nugget_nickel', 9), Item.of('minecraft:iron_nugget').withChance(0.1)],
      'create:crushed_raw_nickel'
    );

    /* Tin often forms in veins with Fluorite, so that works here */
    event.remove({type: 'create:splashing', input: 'create:crushed_raw_tin'});
    event.recipes.create.splashing([Item.of('mekanism:nugget_tin', 9), Item.of('mekanism:fluorite_gem').withChance(0.1)], 'create:crushed_raw_tin');

    /* Aluminum often forms with Clay, Salt & Silicon, so that works too :) */
    event.remove({type: 'create:splashing', input: 'create:crushed_raw_aluminum'});
    event.recipes.create.splashing(
      [Item.of('immersiveengineering:nugget_aluminum', 9), Item.of('mekanism:salt').withChance(0.1)],
      'create:crushed_raw_aluminum'
    );
  };

  const plateCompat = () => {
    // Remove recipes that let you plate/crush metals with the IE hammer
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:dusts'});
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'});

    /**
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} output
     */
    const create = (input, output) => {
      event.recipes.create.pressing(output, input);
    };

    /**
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} output
     */
    const immersiveEngineering = (input, output) => {
      event.custom({
        type: 'immersiveengineering:metal_press',
        energy: 2400,
        input: input.toJson(),
        mold: 'immersiveengineering:mold_plate',
        result: output.toJson(),
      });
    };

    /**
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} output
     */
    const both = (input, output) => {
      create(input, output);
      immersiveEngineering(input, output);
    };

    both(Ingredient.of('#forge:ingots/dawnstone'), Ingredient.of('embers:dawnstone_plate'));
    create(Ingredient.of('#forge:ingots/steel'), Ingredient.of('immersiveengineering:plate_steel'));
    create(Ingredient.of('#forge:ingots/electrum'), Ingredient.of('immersiveengineering:plate_electrum'));
    create(Ingredient.of('#forge:ingots/constantan'), Ingredient.of('immersiveengineering:plate_constantan'));
    create(Ingredient.of('#forge:ingots/uranium'), Ingredient.of('immersiveengineering:plate_uranium'));
    create(Ingredient.of('#forge:ingots/nickel'), Ingredient.of('immersiveengineering:plate_nickel'));
    create(Ingredient.of('#forge:ingots/silver'), Ingredient.of('immersiveengineering:plate_silver'));
    create(Ingredient.of('#forge:ingots/lead'), Ingredient.of('immersiveengineering:plate_lead'));
    create(Ingredient.of('#forge:ingots/aluminum'), Ingredient.of('immersiveengineering:plate_aluminum'));
  };

  const rods = () => {
    event.remove('immersiveengineering:crafting/stick_aluminum');
    event.remove('immersiveengineering:crafting/stick_iron');
    event.remove('immersiveengineering:crafting/stick_steel');
  };

  const silverAndLead = () => {
    // Replace all Silver & Lead inputs to prioritize Ember's -- this is because of my weird preferences -_-
    [
      {replace: ['immersiveengineering:ore_lead', 'mekanism:lead_ore', 'eidolon:lead_ore'], with: 'embers:lead_ore'},
      {
        replace: ['immersiveengineering:deepslate_ore_lead', 'mekanism:deepslate_lead_ore', 'eidolon:deep_lead_ore'],
        with: 'embers:deepslate_lead_ore',
      },
      {replace: ['immersiveengineering:ore_silver', 'eidolon:silver_ore'], with: 'embers:silver_ore'},
      {replace: ['immersiveengineering:deepslate_ore_silver', 'eidolon:deep_silver_ore'], with: 'embers:deepslate_silver_ore'},
    ].forEach(x => {
      x.replace.forEach(y => {
        event.replaceInput({}, y, x.with);
        event.replaceOutput({}, y, x.with);
      });
    });
  };

  [createAutomation, dustSmelting, metalSmithing, nukeOsmium, oreSmelting, oreWashing, plateCompat, rods, silverAndLead].forEach(module => module());
});
