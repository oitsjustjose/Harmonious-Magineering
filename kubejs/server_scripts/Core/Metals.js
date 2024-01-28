// priority: 100000

ServerEvents.recipes(event => {
  const dustSmelting = () => {
    [
      {dust: 'immersiveengineering:dust_aluminum', ingot: 'immersiveengineering:ingot_aluminum'},
      {dust: 'immersiveengineering:dust_nickel', ingot: 'immersiveengineering:ingot_nickel'},
      {dust: 'immersiveengineering:dust_silver', ingot: 'eidolon:silver_ingot'},
      {dust: 'mekanism:dust_copper', ingot: 'minecraft:copper_ingot'},
      {dust: 'mekanism:dust_gold', ingot: 'minecraft:gold_ingot'},
      {dust: 'mekanism:dust_iron', ingot: 'minecraft:iron_ingot'},
      {dust: 'mekanism:dust_lead', ingot: 'eidolon:lead_ingot'},
      {dust: 'mekanism:dust_tin', ingot: 'mekanism:ingot_tin'},
      {dust: 'mekanism:dust_uranium', ingot: 'mekanism:ingot_uranium'},
    ].forEach(pair => {
      const idBase = `${pair.ingot.replace(':', '_')}_from_${pair.dust.replace(':', '_')}`;

      event.remove({type: 'minecraft:blasting', input: pair.dust});
      event.remove({type: 'minecraft:blasting', output: pair.ingot});
      event.remove({type: 'minecraft:smelting', input: pair.dust});
      event.remove({type: 'minecraft:smelting', output: pair.ingot});

      event.smelting(pair.ingot, pair.dust).xp(0.33).id(`${idBase}_smelting`);
      event.blasting(pair.ingot, pair.dust).xp(0.33).id(`${idBase}_blasting`);
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

  const oreSmelting = () => {
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

  [dustSmelting, oreSmelting, metalSmithing, nukeOsmium, plateCompat, rods, silverAndLead].forEach(module => module());
});
