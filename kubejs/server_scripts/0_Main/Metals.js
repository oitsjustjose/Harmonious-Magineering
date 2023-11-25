ServerEvents.recipes(event => {
  const NuggetsFromSmelting = () => {
    const Pairs = [
      {material: 'aluminum', nugget: 'immersiveengineering:nugget_aluminum'},
      {material: 'copper', nugget: 'create:copper_nugget'},
      {material: 'gold', nugget: 'minecraft:gold_nugget'},
      {material: 'iron', nugget: 'minecraft:iron_nugget'},
      {material: 'lead', nugget: 'eidolon:lead_nugget'},
      {material: 'nickel', nugget: 'immersiveengineering:nugget_nickel'},
      // {material: 'osmium', nugget: 'mekanism:nugget_osmium'},
      {material: 'silver', nugget: 'eidolon:silver_nugget'},
      {material: 'tin', nugget: 'mekanism:nugget_tin'},
      {material: 'uranium', nugget: 'mekanism:nugget_uranium'},
      {material: 'zinc', nugget: 'create:zinc_nugget'},
    ];

    Pairs.forEach(pair => {
      event.remove({
        type: 'minecraft:smelting',
        input: `#forge:raw_materials/${pair.material}`,
        output: `#forge:ingots/${pair.material}`,
      });

      event.remove({
        type: 'minecraft:blasting',
        input: `#forge:raw_materials/${pair.material}`,
        output: `#forge:ingots/${pair.material}`,
      });

      event.smelting(Item.of(pair.nugget, 3), `#forge:raw_materials/${pair.material}`).xp(0.3);
      event.blasting(Item.of(pair.nugget, 4), `#forge:raw_materials/${pair.material}`).xp(0.4);
    });
  };

  const PlateCompat = () => {
    // Remove recipes that let you plate/crush metals with the IE hammer
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:dusts'});
    event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'});

    /**
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} output
     */
    const Create = (input, output) => {
      event.recipes.create.pressing(output, input);
    };

    /**
     * @param {Internal.Ingredient} input
     * @param {Internal.Ingredient} output
     */
    const IE = (input, output) => {
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
    const Both = (input, output) => {
      Create(input, output);
      IE(input, output);
    };

    Both(Ingredient.of('#forge:ingots/dawnstone'), Ingredient.of('embers:dawnstone_plate'));
    Create(Ingredient.of('#forge:ingots/steel'), Ingredient.of('immersiveengineering:plate_steel'));
    Create(Ingredient.of('#forge:ingots/electrum'), Ingredient.of('immersiveengineering:plate_electrum'));
    Create(Ingredient.of('#forge:ingots/constantan'), Ingredient.of('immersiveengineering:plate_constantan'));
    Create(Ingredient.of('#forge:ingots/uranium'), Ingredient.of('immersiveengineering:plate_uranium'));
    Create(Ingredient.of('#forge:ingots/nickel'), Ingredient.of('immersiveengineering:plate_nickel'));
    Create(Ingredient.of('#forge:ingots/silver'), Ingredient.of('immersiveengineering:plate_silver'));
    Create(Ingredient.of('#forge:ingots/lead'), Ingredient.of('immersiveengineering:plate_lead'));
    Create(Ingredient.of('#forge:ingots/aluminum'), Ingredient.of('immersiveengineering:plate_aluminum'));
  };

  const NukeOsmium = () => {
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
    ].forEach(id => event.remove({id: id}));

    // event.remove({id: 'mekanism:processing/refined_obsidian/ingot/from_dust'});
    // event.remove({id: 'mekanism:processing/refined_glowstone/ingot/from_dust'});

    // event.custom({
    //   type: 'mekanism:compressing',
    //   chemicalInput: {amount: 1, gas: 'mekanism:oxygen'},
    //   itemInput: {ingredient: {tag: 'forge:dusts/glowstone'}},
    //   output: {item: 'mekanism:ingot_refined_glowstone'},
    // });

    // event.custom({
    //   type: 'mekanism:compressing',
    //   chemicalInput: {amount: 1, gas: 'mekanism:oxygen'},
    //   itemInput: {ingredient: {tag: 'forge:dusts/refined_obsidian'}},
    //   output: {item: 'mekanism:ingot_refined_obsidian'},
    // });
  };

  NukeOsmium();
  NuggetsFromSmelting();
  PlateCompat();
});
