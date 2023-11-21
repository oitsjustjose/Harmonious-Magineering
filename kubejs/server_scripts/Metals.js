ServerEvents.recipes(event => {
  const NuggetsFromSmelting = () => {
    const Materials = [
      'aluminum',
      'copper',
      'gold',
      'iron',
      'lead',
      'nickel',
      'osmium',
      'silver',
      'tin',
      'uranium',
      'zinc',
    ];

    const Nuggets = {
      aluminum: 'immersiveengineering:nugget_aluminum',
      copper: 'create:copper_nugget',
      gold: 'minecraft:gold_nugget',
      iron: 'minecraft:iron_nugget',
      lead: 'eidolon:lead_nugget',
      nickel: 'immersiveengineering:nugget_nickel',
      osmium: 'mekanism:nugget_osmium',
      silver: 'eidolon:silver_nugget',
      tin: 'mekanism:nugget_tin',
      uranium: 'mekanism:nugget_uranium',
      zinc: 'create:zinc_nugget',
    };

    Materials.forEach(mat => {
      // ReplaceInput doesn't work -_-
      event.remove({
        type: 'minecraft:smelting',
        input: `#forge:raw_materials/${mat}`,
        output: `#forge:ingots/${mat}`,
      });
      event.remove({
        type: 'minecraft:blasting',
        input: `#forge:raw_materials/${mat}`,
        output: `#forge:ingots/${mat}`,
      });

      event.smelting(`3x ${Nuggets[mat]}`, `#forge:raw_materials/${mat}`);
      event.blasting(`4x ${Nuggets[mat]}`, `#forge:raw_materials/${mat}`);
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
    Create(
      Ingredient.of('#forge:ingots/electrum'),
      Ingredient.of('immersiveengineering:plate_electrum')
    );
    Create(
      Ingredient.of('#forge:ingots/constantan'),
      Ingredient.of('immersiveengineering:plate_constantan')
    );
    Create(
      Ingredient.of('#forge:ingots/uranium'),
      Ingredient.of('immersiveengineering:plate_uranium')
    );
    Create(
      Ingredient.of('#forge:ingots/nickel'),
      Ingredient.of('immersiveengineering:plate_nickel')
    );
    Create(
      Ingredient.of('#forge:ingots/silver'),
      Ingredient.of('immersiveengineering:plate_silver')
    );
    Create(Ingredient.of('#forge:ingots/lead'), Ingredient.of('immersiveengineering:plate_lead'));
    Create(
      Ingredient.of('#forge:ingots/aluminum'),
      Ingredient.of('immersiveengineering:plate_aluminum')
    );
  };

  NuggetsFromSmelting();
  PlateCompat();
});
