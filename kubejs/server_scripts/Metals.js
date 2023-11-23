ServerEvents.recipes(event => {
  const NuggetsFromSmelting = () => {
    const Pairs = [
      {material: 'aluminum', nugget: 'immersiveengineering:nugget_aluminum'},
      {material: 'copper', nugget: 'create:copper_nugget'},
      {material: 'gold', nugget: 'minecraft:gold_nugget'},
      {material: 'iron', nugget: 'minecraft:iron_nugget'},
      {material: 'lead', nugget: 'eidolon:lead_nugget'},
      {material: 'nickel', nugget: 'immersiveengineering:nugget_nickel'},
      {material: 'osmium', nugget: 'mekanism:nugget_osmium'},
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

  NuggetsFromSmelting();
  PlateCompat();
});
