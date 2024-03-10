// priority: 1

ServerEvents.recipes(event => {
  /**
   * @param {String} input
   * @param {String} output
   */
  const wash = (input, output) => {
    try {
      event.custom({
        type: 'vtweaks:fluid_conversion',
        input: Ingredient.of(input).toJson(),
        output: Item.of(output).toJson(),
        fluid: 'minecraft:water',
      });

      event.recipes.create.splashing(Item.of(output), Ingredient.of(input));
    } catch (ex) {
      console.log(ex);
      console.log(`input: ${Ingredient.of(input).toJson()}, output: ${Item.of(output).toJson()}`);
    }
  };

  // Vanilla
  wash('#vtweaks:colored_wool', 'minecraft:white_wool');
  wash('#vtweaks:colored_carpet', 'minecraft:white_carpet');
  wash('#vtweaks:colored_banner', 'minecraft:white_banner');
  wash('#vtweaks:colored_bed', 'minecraft:white_bed');

  wash('#vtweaks:colored_stained_glass', 'minecraft:glass');
  wash('#vtweaks:colored_candle', 'minecraft:candle');

  // AE2
  wash('#vtweaks:colored_covered_cable', 'ae2:fluix_covered_cable');
  wash('#vtweaks:colored_covered_dense_cable', 'ae2:fluix_covered_dense_cable');
  wash('#vtweaks:colored_glass_cable', 'ae2:fluix_glass_cable');
  wash('#vtweaks:colored_smart_cable', 'ae2:fluix_smart_cable');
  wash('#vtweaks:colored_smart_dense_cable', 'ae2:fluix_smart_dense_cable');

  // Bloodmagic - wash the blood off of your orb to reset the owner
  wash('bloodmagic:apprenticebloodorb', 'bloodmagic:apprenticebloodorb');
  wash('bloodmagic:archmagebloodorb', 'bloodmagic:archmagebloodorb');
  wash('bloodmagic:magicianbloodorb', 'bloodmagic:magicianbloodorb');
  wash('bloodmagic:masterbloodorb', 'bloodmagic:masterbloodorb');
  wash('bloodmagic:weakbloodorb', 'bloodmagic:weakbloodorb');

  // Comforts
  wash('#vtweaks:colored_hammock', 'comforts:hammock_white');
  wash('#vtweaks:colored_sleeping_bag', 'comforts:sleeping_bag_white');

  // Connected Glass
  wash('#vtweaks:colored_borderless_glass_pane', 'connectedglass:borderless_glass_pane');
  wash('#vtweaks:colored_borderless_glass', 'connectedglass:borderless_glass');
  wash('#vtweaks:colored_clear_glass_pane', 'connectedglass:clear_glass_pane');
  wash('#vtweaks:colored_clear_glass', 'connectedglass:clear_glass');
  wash('#vtweaks:colored_scratched_glass_pane', 'connectedglass:scratched_glass_pane');
  wash('#vtweaks:colored_scratched_glass', 'connectedglass:scratched_glass');
  wash('#vtweaks:colored_tinted_borderless_glass', 'connectedglass:tinted_borderless_glass');

  // Farmer's Delight
  wash('#vtweaks:colored_canvas_sign', 'farmersdelight:canvas_sign');
  wash('#vtweaks:colored_hanging_canvas_sign', 'farmersdelight:hanging_canvas_sign');

  // Handcrafted
  wash('#vtweaks:colored_cushion', 'handcrafted:white_cushion');
  wash('#vtweaks:colored_sheet', 'handcrafted:white_sheet');

  // IE
  wash('#vtweaks:colored_sheetmetal_colored', 'immersiveengineering:sheetmetal_colored_white');
  wash('#vtweaks:colored_slab_sheetmetal_colored', 'immersiveengineering:slab_sheetmetal_colored_white');

  // Quark
  wash('#vtweaks:colored_framed_glass', 'quark:framed_glass');
  wash('#vtweaks:colored_framed_glass_pane', 'quark:framed_glass_pane');
  wash('#vtweaks:colored_shingles', 'quark:shingles');
  wash('#vtweaks:colored_shingle_slabs', 'quark:shingles_slab');
  wash('#vtweaks:colored_shingle_stairs', 'quark:shingles_stairs');

  // Supplementaries
  wash('#vtweaks:colored_candle_holder', 'supplementaries:candle_holder');
  wash('#vtweaks:colored_gold_candle_holder', 'suppsquared:gold_candle_holder');
  wash('#vtweaks:colored_flag', 'supplementaries:flag_white');
});
